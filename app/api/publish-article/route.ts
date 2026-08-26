import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { githubFileExists, githubCommitFile } from "../../../lib/github";

function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Convierte cualquier texto en una cadena segura para YAML: la envuelve
// entre comillas dobles y escapa las comillas/barras que pueda contener,
// para que un ":" o un "\"" dentro del texto no rompa el archivo.
function yamlString(value: string): string {
  const escaped = value
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\r?\n/g, " ")
    .trim();
  return `"${escaped}"`;
}

export async function POST(request: Request) {
  const user = await currentUser();
  const email = user?.emailAddresses?.[0]?.emailAddress;

  if (!user || email !== process.env.ADMIN_EMAIL) {
    return NextResponse.json({ error: "No autorizado" }, { status: 403 });
  }

  try {
    const formData = await request.formData();
    const titleEs = (formData.get("title_es") as string) || "";
    const titleEn = (formData.get("title_en") as string) || "";
    const dekEs = (formData.get("dek_es") as string) || "";
    const dekEn = (formData.get("dek_en") as string) || "";
    const bodyEs = (formData.get("body_es") as string) || "";
    const bodyEn = (formData.get("body_en") as string) || "";
    const date =
      (formData.get("date") as string) ||
      new Date().toISOString().slice(0, 10);
    const image = formData.get("image") as File | null;

    if (!titleEs.trim() || !bodyEs.trim()) {
      return NextResponse.json(
        { error: "Falta el título o el texto en español" },
        { status: 400 }
      );
    }

    let slug = slugify(titleEs) || `articulo-${Date.now()}`;
    let attempt = slug;
    let suffix = 2;
    while (await githubFileExists(`content/articles/${attempt}.md`)) {
      attempt = `${slug}-${suffix}`;
      suffix++;
    }
    slug = attempt;

    let coverPath = "";
    if (image && image.size > 0) {
      if (image.size > 4 * 1024 * 1024) {
        return NextResponse.json(
          { error: "La imagen pesa más de 4MB, prueba con una más ligera" },
          { status: 400 }
        );
      }
      const ext = image.name.split(".").pop()?.toLowerCase() || "jpg";
      const bytes = await image.arrayBuffer();
      const base64Image = Buffer.from(bytes).toString("base64");
      coverPath = `/articles/${slug}.${ext}`;
      await githubCommitFile(
        `public${coverPath}`,
        base64Image,
        `Añadir imagen de portada para ${slug}`
      );
    }

    const frontmatter = [
      "---",
      `title_es: ${yamlString(titleEs)}`,
      `title_en: ${yamlString(titleEn)}`,
      `dek_es: ${yamlString(dekEs)}`,
      `dek_en: ${yamlString(dekEn)}`,
      `date: "${date}"`,
      `cover: ${yamlString(coverPath)}`,
      "---",
      "",
    ].join("\n");

    const fileContent = `${frontmatter}${bodyEs.trim()}\n\n---EN---\n\n${bodyEn.trim()}\n`;
    const base64Md = Buffer.from(fileContent, "utf8").toString("base64");

    await githubCommitFile(
      `content/articles/${slug}.md`,
      base64Md,
      `Publicar artículo: ${titleEs}`
    );

    return NextResponse.json({ ok: true, slug });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Algo falló al publicar. Inténtalo de nuevo." },
      { status: 500 }
    );
  }
}
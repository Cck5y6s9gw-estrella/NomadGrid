import { cityGuides, type CityGuide } from "@/data/cityGuides";
import { cityGuidesEn } from "@/data/cityGuidesEn";
import type { Lang } from "@/lib/i18n";

function guideFor(slug: string, lang: Lang): CityGuide | undefined {
  return (lang === "en" ? cityGuidesEn[slug] : undefined) ?? cityGuides[slug];
}

function clean(s: string): string {
  return s.replace(/\*\*/g, "").replace(/\s+/g, " ").trim();
}

/** Primeras frases del apartado de visado y fiscalidad (hasta ~max caracteres). */
export function visaSnippet(slug: string, lang: Lang, max = 340): string | null {
  const content = guideFor(slug, lang)?.visaFiscal?.content;
  if (!content) return null;
  const para = clean(content.split("\n\n")[0] ?? "");
  if (!para) return null;
  const sentences = para.split(/(?<=[.!?])\s+/);
  let out = "";
  for (const s of sentences) {
    if (out && (out + " " + s).length > max) break;
    out += (out ? " " : "") + s;
  }
  return out.trim() || null;
}

/** Nombres de los barrios recomendados (los marcados en negrita en la guía). */
export function neighborhoods(slug: string, lang: Lang, n = 3): string[] {
  const content = guideFor(slug, lang)?.barrios?.content;
  if (!content) return [];
  const names = [...content.matchAll(/\*\*([^*]+)\*\*/g)].map((m) => m[1].replace(/[:.]+$/, "").trim());
  return names.filter((x) => x.length > 1 && x.length < 40).slice(0, n);
}

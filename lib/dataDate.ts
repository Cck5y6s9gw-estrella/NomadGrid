import { execSync } from "child_process";

/**
 * Fecha real del último commit que tocó los datos de ciudades (git, en build).
 * Si git no está disponible, devuelve undefined y el sitemap omite lastmod.
 */
export function dataLastModified(): Date | undefined {
  try {
    const iso = execSync("git log -1 --format=%cI -- data/cities.ts data/cityGuides.ts", {
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
    const d = new Date(iso);
    return iso && !Number.isNaN(d.getTime()) ? d : undefined;
  } catch {
    return undefined;
  }
}

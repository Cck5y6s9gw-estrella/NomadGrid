export const SITE_URL = "https://www.roavio.es";
export const SITE_NAME = "Roavio";

export function absUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export type Crumb = { name: string; path: string };

export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absUrl(c.path),
    })),
  };
}

/** Canonical + hreflang. `path` es la ruta en español ("/" para la home). */
export function alts(path: string, locale: "es" | "en") {
  const suffix = path === "/" ? "" : path;
  const es = `${SITE_URL}${suffix}`;
  const en = `${SITE_URL}/en${suffix}`;
  return {
    canonical: locale === "en" ? en : es,
    languages: { es, en, "x-default": es },
  };
}

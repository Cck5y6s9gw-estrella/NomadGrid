// Rutas que tienen versión en inglés bajo /en
const EXACT = ["/", "/cities", "/rankings", "/articulos", "/compare", "/mapa", "/match", "/calculadora"];
const ONE_LEVEL = ["/cities/", "/rankings/", "/articulos/", "/compare/"];

export function isEnPath(pathname: string): boolean {
  return pathname === "/en" || pathname.startsWith("/en/");
}

export function stripEn(pathname: string): string {
  if (pathname === "/en") return "/";
  return pathname.startsWith("/en/") ? pathname.slice(3) : pathname;
}

/** Devuelve la ruta /en equivalente, o null si esa página no existe en inglés. */
export function enPath(pathname: string): string | null {
  const p = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  if (isEnPath(p)) return p;
  if (EXACT.includes(p)) return p === "/" ? "/en" : `/en${p}`;
  if (ONE_LEVEL.some((pre) => p.startsWith(pre) && p.indexOf("/", pre.length) === -1 && p.length > pre.length)) {
    return `/en${p}`;
  }
  return null;
}

/** Aplica el prefijo /en a un href interno cuando existe la versión inglesa. */
export function localizeHref(href: string): string {
  if (!href.startsWith("/")) return href;
  const m = href.match(/^([^?#]*)(.*)$/);
  const path = m ? m[1] : href;
  const rest = m ? m[2] : "";
  const target = enPath(path);
  return target ? target + rest : href;
}

import { cities } from "@/data/cities";
import { tCity } from "@/lib/dictionary";
import { hasPair, pairSlug } from "@/lib/pairs";

type Lang = "es" | "en";

// Palabras comunes que coinciden con nombres de ciudad y darían falsos enlaces.
const SKIP = new Set(["Nice", "Split", "Reading", "Bath", "Mobile", "Orange", "Normal", "Sale"]);
const MAX_LINKS = 14;

type Index = { re: RegExp; slugBy: Map<string, string> };
const cache: Partial<Record<Lang, Index>> = {};

function esc(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function build(lang: Lang): Index {
  const slugBy = new Map<string, string>();
  const dup = new Set<string>();
  for (const c of cities) {
    const name = tCity(c.name, lang);
    if (SKIP.has(name) || name.length < 4) continue;
    if (slugBy.has(name) && slugBy.get(name) !== c.slug) dup.add(name);
    slugBy.set(name, c.slug);
  }
  for (const d of dup) slugBy.delete(d);
  const names = [...slugBy.keys()].sort((a, b) => b.length - a.length).map(esc);
  const re = new RegExp(`(?<![\\p{L}\\p{N}])(${names.join("|")})(?![\\p{L}\\p{N}])`, "gu");
  return { re, slugBy };
}

/** Enlaza la primera mención de cada ciudad a su ficha y añade comparaciones relacionadas. */
export function autolinkCities(html: string, lang: Lang): string {
  const idx = (cache[lang] ??= build(lang));
  const pre = lang === "en" ? "/en" : "";
  const parts = html.split(/(<[^>]+>)/);
  const seen = new Set<string>();
  const order: string[] = [];
  let skipDepth = 0;
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (part.startsWith("<")) {
      if (/^<(a|h[1-6]|code|pre)[\s>]/i.test(part)) skipDepth++;
      else if (/^<\/(a|h[1-6]|code|pre)>/i.test(part)) skipDepth = Math.max(0, skipDepth - 1);
      continue;
    }
    if (skipDepth > 0 || seen.size >= MAX_LINKS) continue;
    parts[i] = part.replace(idx.re, (m) => {
      const slug = idx.slugBy.get(m);
      if (!slug || seen.has(slug) || seen.size >= MAX_LINKS) return m;
      seen.add(slug);
      order.push(slug);
      return `<a href="${pre}/cities/${slug}">${m}</a>`;
    });
  }
  let out = parts.join("");

  const pairs: string[] = [];
  for (let i = 0; i < order.length && pairs.length < 3; i++) {
    for (let j = i + 1; j < order.length && pairs.length < 3; j++) {
      if (hasPair(order[i], order[j])) pairs.push(pairSlug(order[i], order[j]));
    }
  }
  if (pairs.length > 0) {
    const label = lang === "en" ? "Related comparisons" : "Comparaciones relacionadas";
    const nameOf = (slug: string) => {
      const c = cities.find((x) => x.slug === slug)!;
      return tCity(c.name, lang);
    };
    const items = pairs
      .map((p) => {
        const [a, b] = p.split("-vs-");
        return `<li><a href="${pre}/compare/${p}">${nameOf(a)} vs ${nameOf(b)}</a></li>`;
      })
      .join("");
    out += `<h2>${label}</h2><ul>${items}</ul>`;
  }
  return out;
}

import { cities, type City } from "@/data/cities";

export function similarCities(city: City, n: number): City[] {
  return cities
    .filter((c) => c.slug !== city.slug)
    .map((c) => ({
      c,
      score:
        Math.abs(c.costPerMonth - city.costPerMonth) / Math.max(city.costPerMonth, 1) +
        Math.abs(c.safetyScore - city.safetyScore) / 10 +
        Math.abs(c.qualityOfLife - city.qualityOfLife) / 10 +
        (c.country === city.country ? -0.35 : 0) +
        (c.continent === city.continent ? -0.1 : 0) +
        (c.hasBeach === city.hasBeach ? -0.05 : 0),
    }))
    .sort((a, b) => a.score - b.score)
    .slice(0, n)
    .map((x) => x.c);
}

export function pairSlug(a: string, b: string): string {
  const [x, y] = a < b ? [a, b] : [b, a];
  return `${x}-vs-${y}`;
}

let cache: Set<string> | null = null;
export function allPairs(): Set<string> {
  if (cache) return cache;
  const set = new Set<string>();
  for (const c of cities) for (const o of similarCities(c, 3)) set.add(pairSlug(c.slug, o.slug));
  cache = set;
  return set;
}

export function hasPair(a: string, b: string): boolean {
  return allPairs().has(pairSlug(a, b));
}

export function parsePair(pair: string): [City, City] | null {
  if (!allPairs().has(pair)) return null;
  const [a, b] = pair.split("-vs-");
  const ca = cities.find((c) => c.slug === a);
  const cb = cities.find((c) => c.slug === b);
  return ca && cb ? [ca, cb] : null;
}

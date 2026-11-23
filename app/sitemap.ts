import type { MetadataRoute } from "next";
import { cities } from "@/data/cities";
import { getAllArticles } from "@/lib/articles";
import { rankings } from "@/lib/rankings";
import { allPairs } from "@/lib/pairs";

const BASE_URL = "https://www.roavio.es";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/cities`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/compare`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/rankings`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/match`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/calculadora`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/mapa`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/articulos`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/feedback`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const cityRoutes: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/cities/${city.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const articleRoutes: MetadataRoute.Sitemap = getAllArticles().map((article) => ({
    url: `${BASE_URL}/articulos/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const rankingRoutes: MetadataRoute.Sitemap = rankings.map((r) => ({
    url: `${BASE_URL}/rankings/${r.slug}`,
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  const pairRoutes: MetadataRoute.Sitemap = [...allPairs()].map((pair) => ({
    url: `${BASE_URL}/compare/${pair}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const both = (path: string) => ({
    languages: { es: `${BASE_URL}${path === "/" ? "" : path}`, en: `${BASE_URL}/en${path === "/" ? "" : path}` },
  });
  const withEn = (items: MetadataRoute.Sitemap, paths: string[]): MetadataRoute.Sitemap =>
    items.flatMap((item, i) => {
      const path = paths[i];
      if (!path) return [item];
      const alternates = both(path);
      return [
        { ...item, alternates },
        { ...item, url: `${BASE_URL}/en${path === "/" ? "" : path}`, alternates },
      ];
    });

  const staticPaths = ["/", "/cities", "/compare", "/rankings", "/match", "/calculadora", "/mapa", "/articulos", ""];
  const all = [
    ...withEn(staticRoutes, staticPaths),
    ...withEn(cityRoutes, cities.map((c) => `/cities/${c.slug}`)),
    ...withEn(articleRoutes, getAllArticles().map((a) => `/articulos/${a.slug}`)),
    ...withEn(rankingRoutes, rankings.map((r) => `/rankings/${r.slug}`)),
    ...pairRoutes,
  ];
  return all;
}

import type { MetadataRoute } from "next";
import { cities } from "@/data/cities";
import { getAllArticles } from "@/lib/articles";

const BASE_URL = "https://roavio.es";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/cities`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/compare`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/match`, changeFrequency: "monthly", priority: 0.7 },
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

  return [...staticRoutes, ...cityRoutes, ...articleRoutes];
}

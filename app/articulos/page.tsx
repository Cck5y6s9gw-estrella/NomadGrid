import type { Metadata } from "next";
import { alts } from "../../lib/seo";
import { getAllArticles } from "../../lib/articles";
import ArticlesList from "../../components/ArticlesList";

export const metadata: Metadata = {
  alternates: alts("/articulos", "es"),
  title: "Artículos | Roavio",
  description:
    "Guías y artículos sobre nomadismo digital, ciudades, visados e impuestos.",
};

export default function ArticulosPage() {
  const articles = getAllArticles();
  return <ArticlesList articles={articles} />;
}
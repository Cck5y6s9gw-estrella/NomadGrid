import type { Metadata } from "next";
import { getAllArticles } from "../../lib/articles";
import ArticlesList from "../../components/ArticlesList";

export const metadata: Metadata = {
  title: "Artículos | Roavio",
  description:
    "Guías y artículos sobre nomadismo digital, ciudades, visados e impuestos.",
};

export default function ArticulosPage() {
  const articles = getAllArticles();
  return <ArticlesList articles={articles} />;
}
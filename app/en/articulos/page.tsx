import type { Metadata } from "next";
import { getAllArticles } from "../../../lib/articles";
import ArticlesList from "../../../components/ArticlesList";
import { alts } from "../../../lib/seo";

export const metadata: Metadata = {
  alternates: alts("/articulos", "en"),
  title: "Articles | Roavio",
  description: "Guides and articles on digital nomadism, cities, visas and taxes.",
};

export default function ArticlesEn() {
  return <ArticlesList articles={getAllArticles()} />;
}

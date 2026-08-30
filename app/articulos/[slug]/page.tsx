import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllArticles } from "../../../lib/articles";
import ArticleView from "../../../components/ArticleView";

export async function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title.es} | Roavio`,
    description: article.dek.es,
    openGraph: {
      title: article.title.es,
      description: article.dek.es,
      url: `https://roavio.es/articulos/${article.slug}`,
      images: [{ url: article.cover, width: 1600, height: 900 }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title.es,
      description: article.dek.es,
      images: [article.cover],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  return <ArticleView article={article} />;
}
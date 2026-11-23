import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllArticles } from "../../../lib/articles";
import ArticleView from "../../../components/ArticleView";
import JsonLd from "../../../components/JsonLd";
import { breadcrumbLd, absUrl, alts } from "../../../lib/seo";

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
    alternates: alts(`/articulos/${article.slug}`, "es"),
    openGraph: {
      title: article.title.es,
      description: article.dek.es,
      url: `https://www.roavio.es/articulos/${article.slug}`,
      type: "article",
      publishedTime: article.date,
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
  const url = absUrl(`/articulos/${article.slug}`);
  const ld = [
    breadcrumbLd([
      { name: "Roavio", path: "/" },
      { name: "Artículos", path: "/articulos" },
      { name: article.title.es, path: `/articulos/${article.slug}` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title.es,
      description: article.dek.es,
      image: article.cover,
      datePublished: article.date,
      dateModified: article.date,
      inLanguage: "es",
      mainEntityOfPage: url,
      author: { "@type": "Organization", name: "Roavio", url: absUrl("/") },
      publisher: {
        "@type": "Organization",
        name: "Roavio",
        logo: { "@type": "ImageObject", url: absUrl("/logo-icon.png") },
      },
    },
  ];
  return (
    <>
      <JsonLd data={ld} />
      <ArticleView article={article} />
    </>
  );
}
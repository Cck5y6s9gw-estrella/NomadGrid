import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllArticles } from "../../../../lib/articles";
import ArticleView from "../../../../components/ArticleView";
import JsonLd from "../../../../components/JsonLd";
import { breadcrumbLd, absUrl, alts } from "../../../../lib/seo";

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  const url = absUrl(`/en/articulos/${article.slug}`);
  return {
    title: `${article.title.en} | Roavio`,
    description: article.dek.en,
    alternates: alts(`/articulos/${article.slug}`, "en"),
    openGraph: { title: article.title.en, description: article.dek.en, url, type: "article", publishedTime: article.date, images: [{ url: article.cover, width: 1600, height: 900 }] },
    twitter: { card: "summary_large_image", title: article.title.en, description: article.dek.en, images: [article.cover] },
  };
}

export default async function ArticleEn({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  const url = absUrl(`/en/articulos/${article.slug}`);
  const ld = [
    breadcrumbLd([
      { name: "Roavio", path: "/en" },
      { name: "Articles", path: "/en/articulos" },
      { name: article.title.en, path: `/en/articulos/${article.slug}` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title.en,
      description: article.dek.en,
      image: article.cover,
      datePublished: article.date,
      dateModified: article.date,
      inLanguage: "en",
      mainEntityOfPage: url,
      author: { "@type": "Organization", name: "Roavio", url: absUrl("/en") },
      publisher: { "@type": "Organization", name: "Roavio", logo: { "@type": "ImageObject", url: absUrl("/logo-icon.png") } },
    },
  ];
  return (
    <>
      <JsonLd data={ld} />
      <ArticleView article={article} />
    </>
  );
}

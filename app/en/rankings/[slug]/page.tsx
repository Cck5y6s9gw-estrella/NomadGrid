import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { rankings, getRankingBySlug, getSortedCities } from "@/lib/rankings";
import RankingView from "@/components/RankingView";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, absUrl, alts } from "@/lib/seo";

export async function generateStaticParams() {
  return rankings.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const config = getRankingBySlug(slug);
  if (!config) return {};
  return {
    title: `${config.titleEn} | Roavio`,
    description: config.descriptionEn,
    alternates: alts(`/rankings/${config.slug}`, "en"),
    openGraph: { title: config.titleEn, description: config.descriptionEn, url: absUrl(`/en/rankings/${config.slug}`) },
  };
}

export default async function RankingDetailEn({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const config = getRankingBySlug(slug);
  if (!config) notFound();
  const sortedCities = getSortedCities(config);
  const ld = [
    breadcrumbLd([
      { name: "Roavio", path: "/en" },
      { name: "Rankings", path: "/en/rankings" },
      { name: config.titleEn, path: `/en/rankings/${config.slug}` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: config.titleEn,
      description: config.descriptionEn,
      numberOfItems: sortedCities.length,
      itemListElement: sortedCities.slice(0, 20).map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `${c.name}, ${c.country}`,
        url: absUrl(`/en/cities/${c.slug}`),
      })),
    },
  ];
  return (
    <>
      <JsonLd data={ld} />
      <RankingView config={config} sortedCities={sortedCities} />
    </>
  );
}

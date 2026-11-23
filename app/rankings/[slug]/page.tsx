import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { rankings, getRankingBySlug, getSortedCities } from "@/lib/rankings";
import RankingView from "@/components/RankingView";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, absUrl } from "@/lib/seo";

export async function generateStaticParams() {
  return rankings.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const config = getRankingBySlug(slug);
  if (!config) return {};
  return {
    title: `${config.titleEs} | Roavio`,
    description: config.descriptionEs,
    alternates: { canonical: `https://www.roavio.es/rankings/${config.slug}` },
    openGraph: {
      title: config.titleEs,
      description: config.descriptionEs,
      url: `https://www.roavio.es/rankings/${config.slug}`,
    },
  };
}

export default async function RankingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const config = getRankingBySlug(slug);
  if (!config) notFound();

  const sortedCities = getSortedCities(config);

  const ld = [
    breadcrumbLd([
      { name: "Roavio", path: "/" },
      { name: "Rankings", path: "/rankings" },
      { name: config.titleEs, path: `/rankings/${config.slug}` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: config.titleEs,
      description: config.descriptionEs,
      numberOfItems: sortedCities.length,
      itemListElement: sortedCities.slice(0, 20).map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `${c.name}, ${c.country}`,
        url: absUrl(`/cities/${c.slug}`),
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

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { rankings, getRankingBySlug, getSortedCities } from "@/lib/rankings";
import RankingView from "@/components/RankingView";

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

  return <RankingView config={config} sortedCities={sortedCities} />;
}

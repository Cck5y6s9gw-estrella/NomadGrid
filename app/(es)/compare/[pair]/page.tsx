import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PairPage, { pairTexts } from "@/components/PairPage";
import { allPairs } from "@/lib/pairs";
import { alts } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return [...allPairs()].map((pair) => ({ pair }));
}

export async function generateMetadata({ params }: { params: Promise<{ pair: string }> }): Promise<Metadata> {
  const { pair } = await params;
  const t = pairTexts(pair, "es");
  if (!t) return {};
  const url = `https://www.roavio.es/compare/${pair}`;
  return {
    title: t.title,
    description: t.description,
    alternates: alts(`/compare/${pair}`, "es"),
    openGraph: { title: t.title, description: t.description, url, images: [{ url: t.a.imageUrl }] },
    twitter: { card: "summary_large_image", title: t.title, description: t.description, images: [t.a.imageUrl] },
  };
}

export default async function ComparePairPage({ params }: { params: Promise<{ pair: string }> }) {
  const { pair } = await params;
  if (!allPairs().has(pair)) notFound();
  return <PairPage pair={pair} lang="es" />;
}

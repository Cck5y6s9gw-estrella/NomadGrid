import { cities } from "@/data/cities";
import { cityGuides } from "@/data/cityGuides";
import { notFound } from "next/navigation";
import CityDetailClient from "@/components/CityDetailClient";

export async function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) notFound();

  const guide = cityGuides[city.slug];

  return <CityDetailClient city={city} guide={guide} />;
}

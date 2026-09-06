import type { Metadata } from "next";
import { cities } from "@/data/cities";
import { cityGuides } from "@/data/cityGuides";
import { notFound } from "next/navigation";
import CityDetailClient from "@/components/CityDetailClient";

export async function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) return {};

  const title = `${city.name}, ${city.country} para nómadas digitales | Roavio`;
  const description = `${city.name}: coste de vida desde ${city.costPerMonth}€/mes, internet de ${city.internetSpeed} Mbps, seguridad ${city.safetyScore}/10 y calidad de vida ${city.qualityOfLife}/10. Datos reales con fuente original.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://roavio.es/cities/${city.slug}`,
      images: [{ url: city.imageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [city.imageUrl],
    },
  };
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) notFound();

  const guide = cityGuides[city.slug];

  return <CityDetailClient city={city} guide={guide} />;
}

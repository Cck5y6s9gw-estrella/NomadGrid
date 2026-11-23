import type { Metadata } from "next";
import { cities } from "@/data/cities";
import { cityGuides } from "@/data/cityGuides";
import { notFound } from "next/navigation";
import CityDetailClient from "@/components/CityDetailClient";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, absUrl, alts } from "@/lib/seo";
import { cityFaq } from "@/lib/cityFaq";
import { tCity, tCountry } from "@/lib/dictionary";

export async function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) return {};
  const name = tCity(city.name, "en");
  const title = `${name}, ${tCountry(city.country, "en")} for digital nomads | Roavio`;
  const description = `${name}: cost of living from ${city.costPerMonth}€/month, ${city.internetSpeed} Mbps internet, safety ${city.safetyScore}/10 and quality of life ${city.qualityOfLife}/10. Real data with original sources.`;
  const url = absUrl(`/en/cities/${city.slug}`);
  return {
    title,
    description,
    alternates: alts(`/cities/${city.slug}`, "en"),
    openGraph: { title, description, url, images: [{ url: city.imageUrl }] },
    twitter: { card: "summary_large_image", title, description, images: [city.imageUrl] },
  };
}

export default async function CityPageEn({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) notFound();
  const name = tCity(city.name, "en");
  const guide = cityGuides[city.slug];
  const ld = [
    breadcrumbLd([
      { name: "Roavio", path: "/en" },
      { name: "Cities", path: "/en/cities" },
      { name, path: `/en/cities/${city.slug}` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Place",
      name,
      description: city.description.en,
      image: city.imageUrl,
      url: absUrl(`/en/cities/${city.slug}`),
      geo: { "@type": "GeoCoordinates", latitude: city.coords.lat, longitude: city.coords.lng },
      containedInPlace: { "@type": "Country", name: tCountry(city.country, "en") },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: cityFaq(city, "en").map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
  return (
    <>
      <JsonLd data={ld} />
      <CityDetailClient city={city} guide={guide} />
    </>
  );
}

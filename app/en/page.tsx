import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";
import { alts } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Roavio · Rankings · Cities · Freedom",
  description: "Compare cost of living, internet, safety and quality of life in the best cities in the world to work remotely.",
  alternates: alts("/", "en"),
  openGraph: { title: "Roavio — Find your next digital nomad city", description: "Compare cost of living, internet, safety and quality of life in the best cities in the world to work remotely.", url: "https://www.roavio.es/en", siteName: "Roavio", locale: "en_US", type: "website", images: [{ url: "/og-image.png", width: 1200, height: 630 }] },
};

export default function HomeEn() {
  return <HomeClient />;
}

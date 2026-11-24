import type { Metadata } from "next";
import { cities } from "@/data/cities";
import { alts } from "@/lib/seo";

export const metadata: Metadata = {
  title: 'All cities for digital nomads | Roavio',
  description: `Browse and filter ${cities.length} cities around the world for remote work: cost of living, internet, safety and quality of life, with original sources.`,
  alternates: alts('/cities', "en"),
};

export { default } from "@/app/(es)/cities/page";

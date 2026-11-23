import type { Metadata } from "next";
import { alts } from "@/lib/seo";

export const metadata: Metadata = {
  title: 'Map | Roavio',
  description: "Explore coworkings, hotels and cafés for digital nomads on an interactive map, city by city.",
  alternates: alts('/mapa', "en"),
};

export { default } from "@/app/mapa/page";

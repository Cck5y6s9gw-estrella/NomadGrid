import type { Metadata } from "next";
import { alts } from "@/lib/seo";

export const metadata: Metadata = {
  title: 'Compare cities for digital nomads | Roavio',
  description: "Compare several cities at once on cost of living, internet, safety and quality of life to pick your next digital nomad destination.",
  alternates: alts('/compare', "en"),
};

export { default } from "@/app/(es)/compare/page";

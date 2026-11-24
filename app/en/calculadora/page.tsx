import type { Metadata } from "next";
import { alts } from "@/lib/seo";

export const metadata: Metadata = {
  title: 'Digital nomad city calculator | Roavio',
  description: "Work out your monthly budget as a digital nomad and see which cities fit it, based on real cost-of-living data.",
  alternates: alts('/calculadora', "en"),
};

export { default } from "@/app/(es)/calculadora/page";

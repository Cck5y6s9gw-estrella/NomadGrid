import type { Metadata } from "next";
import MethodologyPage from "@/components/MethodologyPage";
import { alts } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Methodology and data sources | Roavio",
  description: "How we calculate cost of living, internet, safety and quality of life for each city, and where Roavio's data comes from.",
  alternates: alts("/metodologia", "en"),
};

export default function Page() {
  return <MethodologyPage lang="en" />;
}

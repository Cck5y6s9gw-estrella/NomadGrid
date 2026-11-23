import type { Metadata } from "next";
import { cities } from "@/data/cities";
import RankingsIndexView from "@/components/RankingsIndexView";
import { alts } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: alts("/rankings", "en"),
  title: "Digital nomad city rankings | Roavio",
  description: `Compare Roavio's ${cities.length} cities by cost of living, safety, quality of life and internet, ranked from best to worst on each metric.`,
};

export default function RankingsIndexEn() {
  return <RankingsIndexView />;
}

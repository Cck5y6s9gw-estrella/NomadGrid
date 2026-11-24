import type { Metadata } from "next";
import { alts } from "@/lib/seo";

export const metadata: Metadata = {
  title: 'Which digital nomad city fits you? Take the quiz | Roavio',
  description: "Answer 7 quick questions about budget, priorities, continent, climate and lifestyle and find out which digital nomad cities fit you best.",
  alternates: alts('/match', "en"),
};

export { default } from "@/app/(es)/match/page";

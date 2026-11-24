import type { Metadata } from "next";
import { alts } from "@/lib/seo";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  alternates: alts("/", "es"),
};

export default function Home() {
  return <HomeClient />;
}

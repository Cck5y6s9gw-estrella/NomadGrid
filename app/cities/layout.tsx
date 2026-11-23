import type { Metadata } from "next";
import { alts } from "@/lib/seo";
import { cities } from "@/data/cities";

export const metadata: Metadata = {
  alternates: alts("/cities", "es"),
  title: "Todas las ciudades para nómadas digitales | Roavio",
  description: `Explora y filtra ${cities.length} ciudades del mundo para trabajar en remoto: coste de vida, internet, seguridad y calidad de vida, con su fuente original.`,
};

export default function CitiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

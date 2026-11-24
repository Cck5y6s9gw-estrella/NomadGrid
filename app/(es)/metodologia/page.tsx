import type { Metadata } from "next";
import MethodologyPage from "@/components/MethodologyPage";
import { alts } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Metodología y fuentes de los datos | Roavio",
  description: "Cómo calculamos el coste de vida, internet, seguridad y calidad de vida de cada ciudad, y de qué fuentes salen los datos de Roavio.",
  alternates: alts("/metodologia", "es"),
};

export default function Page() {
  return <MethodologyPage lang="es" />;
}

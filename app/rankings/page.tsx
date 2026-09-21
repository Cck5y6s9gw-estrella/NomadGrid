import type { Metadata } from "next";
import RankingsIndexView from "@/components/RankingsIndexView";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.roavio.es/rankings" },
  title: "Rankings de ciudades para nómadas digitales | Roavio",
  description:
    "Compara las 135 ciudades de Roavio por coste de vida, seguridad, calidad de vida e internet, ordenadas de mejor a peor en cada indicador.",
};

export default function RankingsIndexPage() {
  return <RankingsIndexView />;
}

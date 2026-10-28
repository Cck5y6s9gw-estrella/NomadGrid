import type { Metadata } from "next";
import { cities } from "@/data/cities";
import RankingsIndexView from "@/components/RankingsIndexView";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.roavio.es/rankings" },
  title: "Rankings de ciudades para nómadas digitales | Roavio",
  description:
    `Compara las ${cities.length} ciudades de Roavio por coste de vida, seguridad, calidad de vida e internet, ordenadas de mejor a peor en cada indicador.`,
};

export default function RankingsIndexPage() {
  return <RankingsIndexView />;
}

import type { Metadata } from "next";
import { alts } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: alts("/match", "es"),
  title: "¿Cuál es tu ciudad nómada ideal? Haz el test | Roavio",
  description: "Responde 7 preguntas rápidas sobre presupuesto, prioridades, continente, clima y estilo de vida, y descubre qué ciudades para nómadas digitales encajan mejor contigo.",
};

export default function MatchLayout({ children }: { children: React.ReactNode }) {
  return children;
}

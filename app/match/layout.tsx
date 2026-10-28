import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.roavio.es/match" },
  title: "¿Cuál es tu ciudad nómada ideal? Haz el test | Roavio",
  description: "Responde 7 preguntas rápidas sobre presupuesto, prioridades, continente, clima y estilo de vida, y descubre qué ciudades para nómadas digitales encajan mejor contigo.",
};

export default function MatchLayout({ children }: { children: React.ReactNode }) {
  return children;
}

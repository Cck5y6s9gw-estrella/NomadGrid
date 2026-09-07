import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "¿Cuál es tu ciudad nómada ideal? Haz el test | Roavio",
  description: "Responde 4 preguntas sobre presupuesto, prioridades, continente y clima, y descubre qué ciudades para nómadas digitales encajan mejor contigo.",
};

export default function MatchLayout({ children }: { children: React.ReactNode }) {
  return children;
}

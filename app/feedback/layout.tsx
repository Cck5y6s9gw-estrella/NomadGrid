import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sugerir una ciudad o corrección | Roavio",
  description: "¿Falta una ciudad, un coworking, o un dato no cuadra? Envíanos tu sugerencia para mejorar el comparador de Roavio.",
};

export default function FeedbackLayout({ children }: { children: React.ReactNode }) {
  return children;
}

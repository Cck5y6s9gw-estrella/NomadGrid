import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comparar ciudades para nómadas digitales | Roavio",
  description: "Compara varias ciudades a la vez en coste de vida, internet, seguridad y calidad de vida para elegir tu próximo destino como nómada digital.",
};

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return children;
}

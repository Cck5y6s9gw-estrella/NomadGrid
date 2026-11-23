import type { Metadata } from "next";
import { alts } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: alts("/calculadora", "es"),
  title: "Calculadora de ciudades para nómadas digitales | Roavio",
  description:
    "Dinos cuánto ganas o gastas al mes y cuánto pagarías de alquiler: te mostramos las 5 ciudades nómadas donde tu dinero rinde más, cuánto te sobra cada mes y cuántos meses aguantas con tus ahorros.",
};

export default function PresupuestoLayout({ children }: { children: React.ReactNode }) {
  return children;
}

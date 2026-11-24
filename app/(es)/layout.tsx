import type { Metadata } from "next";
import RootShell from "@/components/RootShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.roavio.es"),
  title: "Roavio · Rankings · Ciudades · Libertad",
  description: "Compara coste de vida, internet, seguridad y calidad de vida en las mejores ciudades del mundo para trabajar en remoto.",
  openGraph: {
    title: "Roavio — Encuentra tu próxima ciudad nómada",
    description: "Compara coste de vida, internet, seguridad y clima en las mejores ciudades del mundo para trabajar en remoto.",
    url: "https://www.roavio.es",
    siteName: "Roavio",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roavio — Encuentra tu próxima ciudad nómada",
    description: "Compara coste de vida, internet, seguridad y clima en las mejores ciudades del mundo para trabajar en remoto.",
    images: ["/og-image.png"],
  },
};

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="es">{children}</RootShell>;
}

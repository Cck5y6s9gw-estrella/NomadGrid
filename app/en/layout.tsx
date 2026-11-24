import type { Metadata } from "next";
import RootShell from "@/components/RootShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.roavio.es"),
  title: "Roavio · Rankings · Cities · Freedom",
  description: "Compare cost of living, internet, safety and quality of life in the best cities in the world to work remotely.",
  openGraph: {
    title: "Roavio — Find your next digital nomad city",
    description: "Compare cost of living, internet, safety and quality of life in the best cities in the world to work remotely.",
    siteName: "Roavio",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roavio — Find your next digital nomad city",
    description: "Compare cost of living, internet, safety and quality of life in the best cities in the world to work remotely.",
    images: ["/og-image.png"],
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}

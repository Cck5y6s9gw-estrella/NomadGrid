import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favoritos | Roavio",
  robots: { index: false, follow: true },
};

export default function FavoritosLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import MapLoader from "@/components/MapLoader";

export const metadata: Metadata = {
  title: "Mapa | Roavio",
  description: "Explora coworkings, hoteles y cafés para nómadas digitales en un mapa interactivo, ciudad a ciudad.",
};

export default function MapaPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-14">
        <MapLoader />
      </div>
    </main>
  );
}

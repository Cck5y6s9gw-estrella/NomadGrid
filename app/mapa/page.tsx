import type { Metadata } from "next";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import MapLoader from "@/components/MapLoader";

export const metadata: Metadata = {
  title: "Mapa | Roavio",
  description: "Explora coworkings, hoteles y cafés para nómadas digitales en un mapa interactivo, ciudad a ciudad.",
};

export default async function MapaPage() {
  // El mapa todavía está en construcción (faltan coworkings por añadir en
  // muchas ciudades) — de momento solo accesible para el admin, no público.
  const user = await currentUser();
  const email = user?.emailAddresses?.[0]?.emailAddress;

  if (!user || email !== process.env.ADMIN_EMAIL) {
    redirect("/");
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-14">
        <MapLoader />
      </div>
    </main>
  );
}

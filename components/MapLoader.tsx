"use client";

import dynamic from "next/dynamic";

const MapClient = dynamic(() => import("@/components/MapClient"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[calc(100vh-56px)] flex items-center justify-center bg-background text-muted text-sm">
      Cargando mapa…
    </div>
  ),
});

export default function MapLoader() {
  return <MapClient />;
}

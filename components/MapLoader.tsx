"use client";

import dynamic from "next/dynamic";
import { Show, SignUpButton } from "@clerk/nextjs";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/dictionary";

const MapClient = dynamic(() => import("@/components/MapClient"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[calc(100vh-56px)] flex items-center justify-center bg-background text-muted text-sm">
      Cargando mapa…
    </div>
  ),
});

export default function MapLoader() {
  const { lang } = useLanguage();
  const d = t(lang);

  return (
    <Show
      when="signed-in"
      fallback={
        <div className="w-full h-[calc(100vh-56px)] flex flex-col items-center justify-center gap-4 bg-background text-center px-6">
          <h1 className="text-xl font-semibold text-foreground">{d.mapSignedOutTitle}</h1>
          <p className="text-sm text-muted max-w-sm">{d.mapSignedOutSubtitle}</p>
          <SignUpButton mode="modal">
            <button className="bg-accent text-white px-6 py-2.5 rounded-full font-medium text-sm hover:opacity-90 transition-opacity">
              {d.mapSignUpCta}
            </button>
          </SignUpButton>
        </div>
      }
    >
      <MapClient />
    </Show>
  );
}

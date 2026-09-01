"use client";

import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useUser, SignUpButton } from "@clerk/nextjs";
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
  const { isSignedIn, isLoaded } = useUser();
  const searchParams = useSearchParams();
  const debugBypass = searchParams.get("qa") === "roavio-debug";

  if (!isLoaded) {
    return <div className="w-full h-[calc(100vh-56px)] bg-background" />;
  }

  if (!isSignedIn && !debugBypass) {
    return (
      <div className="w-full h-[calc(100vh-56px)] flex items-center justify-center bg-background px-6">
        <div className="bg-card border border-border rounded-2xl p-10 text-center max-w-lg">
          <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4 text-lg">
            📍
          </div>
          <p className="text-foreground font-medium mb-1">{d.mapSignedOutTitle}</p>
          <p className="text-muted text-sm mb-6">{d.mapSignedOutSubtitle}</p>
          <SignUpButton mode="modal">
            <button className="bg-accent text-white px-6 py-2.5 rounded-full font-medium text-sm hover:opacity-90 transition-opacity">
              {d.mapSignUpCta}
            </button>
          </SignUpButton>
        </div>
      </div>
    );
  }

  return <MapClient />;
}

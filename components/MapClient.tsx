"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { Map as MaplibreMap, Marker, Popup, NavigationControl } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { cities, type City } from "@/data/cities";
import { pois } from "@/data/coworkings";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/dictionary";

const CATEGORY_COLORS: Record<string, string> = {
  coworking: "#22c55e",
  hotel: "#3b82f6",
  cafe: "#ea580c",
};

const STYLE_URL = "https://tiles.openfreemap.org/styles/dark";

export default function MapClient() {
  const { lang } = useLanguage();
  const d = t(lang);
  const [query, setQuery] = useState("");

  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MaplibreMap | null>(null);
  const markersRef = useRef<Marker[]>([]);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = new MaplibreMap({
      container: containerRef.current,
      style: STYLE_URL,
      center: [10, 20],
      zoom: 1.4,
      attributionControl: { compact: true },
    });
    map.addControl(new NavigationControl({ showCompass: false }), "bottom-right");
    mapRef.current = map;

    map.on("load", () => {
      pois.forEach((poi) => {
        const el = document.createElement("div");
        el.style.width = "16px";
        el.style.height = "16px";
        el.style.borderRadius = "50%";
        el.style.background = CATEGORY_COLORS[poi.category];
        el.style.border = "2px solid rgba(11,15,26,0.9)";
        el.style.boxShadow = "0 0 0 2px rgba(255,255,255,0.15)";
        el.style.cursor = "pointer";

        const neighborhood = lang === "es" ? poi.neighborhood.es : poi.neighborhood.en;
        const price = poi.priceInfo ? (lang === "es" ? poi.priceInfo.es : poi.priceInfo.en) : "";
        const popupHtml = `
          <div style="font-family: inherit; min-width: 160px;">
            <div style="font-weight: 600; font-size: 13px; color:#0b0f1a;">${poi.name}</div>
            <div style="font-size: 11px; color:#666; margin-bottom:4px;">${neighborhood}</div>
            ${price ? `<div style="font-size: 11px; color:#333;">${price}</div>` : ""}
          </div>
        `;

        const marker = new Marker({ element: el })
          .setLngLat([poi.lng, poi.lat])
          .setPopup(new Popup({ offset: 14 }).setHTML(popupHtml))
          .addTo(map);
        markersRef.current.push(marker);
      });
    });

    return () => {
      markersRef.current.forEach((m) => m.remove());
      markersRef.current = [];
      map.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.trim().toLowerCase();
    return cities.filter((c) => c.name.toLowerCase().includes(q)).slice(0, 8);
  }, [query]);

  function flyToCity(city: City) {
    mapRef.current?.flyTo({
      center: [city.coords.lng, city.coords.lat],
      zoom: 12,
      duration: 1400,
    });
  }

  return (
    <div className="relative w-full h-[calc(100vh-56px)]">
      <div ref={containerRef} className="w-full h-full bg-background" />

      {/* Search panel — right side, only for navigating the map, not a data layer */}
      <div className="absolute top-4 right-4 z-[1000] w-72 max-w-[calc(100%-2rem)]">
        <div className="bg-card/95 backdrop-blur border border-border rounded-2xl p-3 shadow-xl">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={d.mapSearchPlaceholder}
            className="w-full bg-background border border-border rounded-xl px-3.5 py-2.5 text-sm text-foreground placeholder-muted focus:outline-none focus:border-accent/60 transition-colors"
          />
          {filtered.length > 0 && (
            <div className="mt-2 max-h-80 overflow-y-auto space-y-1">
              {filtered.map((city) => (
                <button
                  key={city.slug}
                  onClick={() => {
                    flyToCity(city);
                    setQuery("");
                  }}
                  className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-background/70 transition-colors text-left"
                >
                  <img
                    src={city.imageUrl}
                    alt={city.name}
                    className="w-11 h-11 rounded-lg object-cover flex-shrink-0"
                  />
                  <span className="text-sm font-medium text-foreground">{city.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Legend — bottom left */}
      <div className="absolute bottom-4 left-4 z-[1000]">
        <div className="bg-card/95 backdrop-blur border border-border rounded-2xl px-4 py-3 shadow-xl space-y-1.5 text-xs">
          <div className="flex items-center gap-2 text-foreground">
            <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: CATEGORY_COLORS.coworking }} />
            {d.mapLegendCoworking}
          </div>
          <div className="flex items-center gap-2 text-muted">
            <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: CATEGORY_COLORS.hotel }} />
            {d.mapLegendHotel}
          </div>
          <div className="flex items-center gap-2 text-muted">
            <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: CATEGORY_COLORS.cafe }} />
            {d.mapLegendCafe}
          </div>
        </div>
      </div>
    </div>
  );
}

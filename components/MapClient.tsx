"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { Map as MaplibreMap, Marker, Popup, NavigationControl, config as maplibreConfig } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { cities, type City } from "@/data/cities";
import { pois } from "@/data/coworkings";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/dictionary";

const CATEGORY_COLORS: Record<string, string> = {
  coworking: "#ea580c",
  hotel: "#38bdf8",
  cafe: "#f59e0b",
};

const CATEGORY_ICONS: Record<string, string> = {
  coworking: "💼",
  hotel: "🏨",
  cafe: "☕",
};

const STYLE_URL = "https://tiles.openfreemap.org/styles/dark";
const CITY_ZOOM = 13.2;

// Repinta la paleta oscura genérica del basemap con los colores de marca de Roavio
// (fondo #0b0f1a, tarjetas #121723, acento naranja #ea580c) para que el mapa se
// sienta parte de la app y no un widget de terceros aparte.
function applyBrandTheme(map: MaplibreMap) {
  const setColor = (layerId: string, prop: string, color: string) => {
    try {
      (map.setPaintProperty as (id: string, prop: string, value: unknown) => void)(layerId, prop, color);
    } catch {
      // La capa puede no existir en todas las versiones del estilo; se ignora.
    }
  };

  setColor("background", "background-color", "#0b0f1a");
  setColor("water", "fill-color", "#0e2233");
  setColor("waterway", "line-color", "#0e2233");
  setColor("landcover_ice_shelf", "fill-color", "#0b0f1a");
  setColor("landcover_glacier", "fill-color", "#0b0f1a");
  setColor("landuse_residential", "fill-color", "#141a29");
  setColor("landcover_wood", "fill-color", "#152318");
  setColor("landuse_park", "fill-color", "#182a1c");
  setColor("building", "fill-color", "#161b2c");

  setColor("aeroway-taxiway", "line-color", "#2a2333");
  setColor("aeroway-area", "fill-color", "#0b0f1a");
  setColor("aeroway-runway", "line-color", "#0b0f1a");
  setColor("road_area_pier", "fill-color", "#0b0f1a");
  setColor("road_pier", "line-color", "#0b0f1a");

  setColor("highway_path", "line-color", "#2a2333");
  setColor("highway_minor", "line-color", "#241f33");
  setColor("highway_major_casing", "line-color", "rgba(234,88,12,0.18)");
  setColor("highway_major_inner", "line-color", "#3a2f4a");
  setColor("highway_major_subtle", "line-color", "#ea580c");
  setColor("highway_motorway_casing", "line-color", "rgba(234,88,12,0.35)");
  setColor("highway_motorway_subtle", "line-color", "#ea580c");

  setColor("railway_transit", "line-color", "#3a2f4a");
  setColor("railway_minor", "line-color", "#3a2f4a");
  setColor("railway", "line-color", "#3a2f4a");

  setColor("boundary_state", "line-color", "rgba(234,88,12,0.25)");
  setColor("boundary_country_z0-4", "line-color", "rgba(234,88,12,0.45)");
  setColor("boundary_country_z5-", "line-color", "rgba(234,88,12,0.45)");

  [
    "place_other",
    "place_suburb",
    "place_village",
    "place_town",
    "place_city",
    "place_city_large",
    "place_state",
    "place_country_other",
    "place_country_minor",
    "place_country_major",
  ].forEach((id) => {
    setColor(id, "text-color", "#f5f5f4");
    setColor(id, "text-halo-color", "#0b0f1a");
  });
}

export default function MapClient() {
  const { lang } = useLanguage();
  const d = t(lang);
  const [query, setQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MaplibreMap | null>(null);
  const markersRef = useRef<Marker[]>([]);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    maplibreConfig.WORKER_URL = "/maplibre-gl-worker.js";

    const map = new MaplibreMap({
      container: containerRef.current,
      style: STYLE_URL,
      center: [10, 20],
      zoom: 1.4,
      attributionControl: { compact: true },
    });
    map.addControl(new NavigationControl({ showCompass: false }), "bottom-right");
    mapRef.current = map;

    map.on("style.load", () => applyBrandTheme(map));

    map.on("load", () => {
      pois.forEach((poi, index) => {
        const el = document.createElement("div");
        el.className = "roavio-poi-marker";
        el.style.setProperty("--poi-color", CATEGORY_COLORS[poi.category]);
        el.style.setProperty("--poi-delay", `${(index % 8) * 60}ms`);
        el.innerHTML = `<span class="roavio-poi-marker__pulse"></span><span class="roavio-poi-marker__dot">${CATEGORY_ICONS[poi.category]}</span>`;

        const neighborhood = lang === "es" ? poi.neighborhood.es : poi.neighborhood.en;
        const price = poi.priceInfo ? (lang === "es" ? poi.priceInfo.es : poi.priceInfo.en) : "";
        const popupHtml = `
          <div style="font-family: inherit; min-width: 170px;">
            <div style="font-weight: 700; font-size: 13px; color:#0b0f1a;">${poi.name}</div>
            <div style="font-size: 11px; color:#78716c; margin-bottom:4px;">${neighborhood}</div>
            ${price ? `<div style="font-size: 11px; color:#44403c;">${price}</div>` : ""}
          </div>
        `;

        const marker = new Marker({ element: el })
          .setLngLat([poi.lng, poi.lat])
          .setPopup(new Popup({ offset: 18 }).setHTML(popupHtml))
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

  function selectCity(city: City) {
    setSelectedCity(city);
    setQuery("");
  }

  function expandToCity() {
    if (!selectedCity) return;
    mapRef.current?.flyTo({
      center: [selectedCity.coords.lng, selectedCity.coords.lat],
      zoom: CITY_ZOOM,
      duration: 1600,
      curve: 1.4,
    });
  }

  return (
    <div className="relative w-full h-[calc(100vh-56px)] overflow-hidden">
      <div ref={containerRef} className="w-full h-full bg-background" />

      {/* Resplandor de marca — pura atmósfera, no interactivo */}
      <div
        className="pointer-events-none absolute inset-0 z-[900]"
        style={{
          background:
            "radial-gradient(760px 480px at 85% -10%, rgba(234,88,12,0.16) 0%, rgba(234,88,12,0) 62%), radial-gradient(620px 420px at -5% 110%, rgba(234,88,12,0.10) 0%, rgba(234,88,12,0) 60%)",
        }}
      />

      {/* Panel de búsqueda — lado derecho, solo para navegar el mapa */}
      <div className="absolute top-4 right-4 z-[1000] w-80 max-w-[calc(100%-2rem)]">
        <div className="bg-card/95 backdrop-blur border border-border rounded-2xl p-3 shadow-xl shadow-black/30">
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-accent text-sm">✦</span>
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (e.target.value) setSelectedCity(null);
              }}
              placeholder={d.mapSearchPlaceholder}
              className="w-full bg-background border border-border rounded-xl pl-9 pr-3.5 py-2.5 text-sm text-foreground placeholder-muted focus:outline-none focus:border-accent/60 transition-colors"
            />
          </div>

          {filtered.length > 0 && (
            <div className="mt-2 max-h-80 overflow-y-auto space-y-1">
              {filtered.map((city) => (
                <button
                  key={city.slug}
                  onClick={() => selectCity(city)}
                  className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-accent/10 transition-colors text-left"
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

          {selectedCity && (
            <div className="mt-3 pt-3 border-t border-border">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={selectedCity.imageUrl}
                  alt={selectedCity.name}
                  className="w-12 h-12 rounded-xl object-cover flex-shrink-0 ring-2 ring-accent/40"
                />
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-foreground truncate">{selectedCity.name}</div>
                  <button
                    onClick={() => setSelectedCity(null)}
                    className="text-xs text-muted hover:text-accent transition-colors"
                  >
                    {d.mapChangeCity}
                  </button>
                </div>
              </div>
              <button
                onClick={expandToCity}
                className="w-full flex items-center justify-center gap-2 bg-accent text-white px-4 py-3 rounded-xl font-semibold text-sm shadow-lg shadow-accent/30 hover:opacity-90 hover:shadow-accent/50 active:scale-[0.98] transition-all"
              >
                <span className="text-base">🔍✨</span>
                {d.mapExpandCta}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Leyenda — abajo a la izquierda */}
      <div className="absolute bottom-4 left-4 z-[1000]">
        <div className="bg-card/95 backdrop-blur border border-border rounded-2xl px-4 py-3 shadow-xl shadow-black/30 space-y-2 text-xs">
          <div className="flex items-center gap-2 text-foreground font-medium">
            <span
              className="w-4 h-4 rounded-full inline-flex items-center justify-center text-[9px]"
              style={{ background: CATEGORY_COLORS.coworking, boxShadow: `0 0 10px ${CATEGORY_COLORS.coworking}80` }}
            >
              💼
            </span>
            {d.mapLegendCoworking}
          </div>
          <div className="flex items-center gap-2 text-muted">
            <span
              className="w-4 h-4 rounded-full inline-flex items-center justify-center text-[9px] opacity-70"
              style={{ background: CATEGORY_COLORS.hotel }}
            >
              🏨
            </span>
            {d.mapLegendHotel}
          </div>
          <div className="flex items-center gap-2 text-muted">
            <span
              className="w-4 h-4 rounded-full inline-flex items-center justify-center text-[9px] opacity-70"
              style={{ background: CATEGORY_COLORS.cafe }}
            >
              ☕
            </span>
            {d.mapLegendCafe}
          </div>
        </div>
      </div>
    </div>
  );
}

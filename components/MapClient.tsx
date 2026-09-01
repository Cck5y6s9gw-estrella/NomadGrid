"use client";

import { useState, useMemo, useRef } from "react";
import Link from "next/link";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { cities, type City } from "@/data/cities";
import { pois } from "@/data/coworkings";
import { useLanguage } from "@/lib/i18n";
import { t, tCountry } from "@/lib/dictionary";

const CATEGORY_COLORS: Record<string, string> = {
  coworking: "#22c55e",
  hotel: "#3b82f6",
  cafe: "#ea580c",
};

function FlyToCity({ target }: { target: City | null }) {
  const map = useMap();
  const lastSlug = useRef<string | null>(null);

  if (target && target.slug !== lastSlug.current) {
    lastSlug.current = target.slug;
    map.flyTo([target.coords.lat, target.coords.lng], 12, { duration: 1.4 });
  }

  return null;
}

function ZoomWatcher({ onZoom }: { onZoom: (z: number) => void }) {
  useMapEvents({
    zoomend: (e) => onZoom(e.target.getZoom()),
  });
  return null;
}

export default function MapClient() {
  const { lang } = useLanguage();
  const d = t(lang);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<City | null>(null);
  const [zoom, setZoom] = useState(2);

  const filtered = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.trim().toLowerCase();
    return cities.filter((c) => c.name.toLowerCase().includes(q)).slice(0, 8);
  }, [query]);

  const showPois = zoom >= 9;

  return (
    <div className="relative w-full h-[calc(100vh-56px)]">
      <MapContainer
        center={[20, 10]}
        zoom={2}
        minZoom={2}
        worldCopyJump
        zoomControl={false}
        className="w-full h-full bg-background"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-tiles-dark"
        />
        <FlyToCity target={selected} />
        <ZoomWatcher onZoom={setZoom} />

        {cities.map((city) => (
          <CircleMarker
            key={city.slug}
            center={[city.coords.lat, city.coords.lng]}
            radius={5}
            pathOptions={{
              color: "#ea580c",
              fillColor: "#ea580c",
              fillOpacity: 0.9,
              weight: 1.5,
            }}
            eventHandlers={{ click: () => setSelected(city) }}
          >
            <Popup>
              <div className="text-sm">
                <div className="font-semibold">{city.name}</div>
                <div className="text-xs text-neutral-500 mb-1">{tCountry(city.country, lang)}</div>
                <Link href={`/cities/${city.slug}`} className="text-orange-600 text-xs font-medium">
                  {d.mapViewCity} →
                </Link>
              </div>
            </Popup>
          </CircleMarker>
        ))}

        {showPois &&
          pois.map((poi) => (
            <CircleMarker
              key={poi.id}
              center={[poi.lat, poi.lng]}
              radius={7}
              pathOptions={{
                color: CATEGORY_COLORS[poi.category],
                fillColor: CATEGORY_COLORS[poi.category],
                fillOpacity: 0.95,
                weight: 1.5,
              }}
            >
              <Popup>
                <div className="text-sm">
                  <div className="font-semibold">{poi.name}</div>
                  <div className="text-xs text-neutral-500 mb-1">
                    {lang === "es" ? poi.neighborhood.es : poi.neighborhood.en}
                  </div>
                  {poi.priceInfo && (
                    <div className="text-xs text-neutral-700">
                      {lang === "es" ? poi.priceInfo.es : poi.priceInfo.en}
                    </div>
                  )}
                </div>
              </Popup>
            </CircleMarker>
          ))}
      </MapContainer>

      {/* Search panel — right side */}
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
                    setSelected(city);
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
            <span className="w-2.5 h-2.5 rounded-full bg-accent inline-block" />
            {d.mapLegendCity}
          </div>
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

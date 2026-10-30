"use client";

import { useEffect, useRef } from "react";
import { Map as MaplibreMap, Marker, NavigationControl, ScaleControl, config as maplibreConfig } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { City } from "@/data/cities";
import { cityAreas } from "@/data/cityAreas";
import { useLanguage } from "@/lib/i18n";
import { tCity } from "@/lib/dictionary";
import { THEME_CHANGE_EVENT, type Theme } from "@/components/ThemeProvider";

const STYLE_DARK = "https://tiles.openfreemap.org/styles/dark";
const STYLE_LIGHT = "https://tiles.openfreemap.org/styles/positron";
const COLORS = ["#ea580c", "#38bdf8", "#a3e635", "#f472b6"];
const H = 340;

function formatKm(n: number, lang: "es" | "en") {
  const v = n >= 100 ? Math.round(n) : Math.round(n * 10) / 10;
  return v.toLocaleString(lang === "es" ? "es-ES" : "en-US");
}

// Un mapa por ciudad, todos a la misma escala (metros por píxel), con su círculo de superficie.
function OneMap({ city, color, zoom }: { city: City; color: string; zoom: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    maplibreConfig.WORKER_URL = "/maplibre-gl-worker.js";
    const initial: Theme = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    const map = new MaplibreMap({
      container: ref.current,
      style: initial === "light" ? STYLE_LIGHT : STYLE_DARK,
      center: [city.coords.lng, city.coords.lat],
      zoom,
      renderWorldCopies: false,
      scrollZoom: false,
      attributionControl: { compact: true },
    });
    map.addControl(new NavigationControl({ showCompass: false }), "top-right");
    map.addControl(new ScaleControl({ maxWidth: 110, unit: "metric" }), "bottom-left");
    const pin = document.createElement("div");
    pin.style.cssText = `width:16px;height:16px;border-radius:50%;background:${color};border:3px solid #fff;box-shadow:0 0 0 4px ${color}55,0 2px 8px rgba(0,0,0,.5)`;
    const marker = new Marker({ element: pin }).setLngLat([city.coords.lng, city.coords.lat]).addTo(map);
    const onTheme = (e: Event) => map.setStyle((e as CustomEvent<Theme>).detail === "light" ? STYLE_LIGHT : STYLE_DARK);
    window.addEventListener(THEME_CHANGE_EVENT, onTheme);
    return () => {
      window.removeEventListener(THEME_CHANGE_EVENT, onTheme);
      marker.remove();
      map.remove();
    };
  }, [city.slug, zoom, color]); // eslint-disable-line react-hooks/exhaustive-deps

  return <div ref={ref} style={{ height: H }} className="w-full" />;
}

export default function CityMapsRow({ cities }: { cities: City[] }) {
  const { lang } = useLanguage();
  const es = lang === "es";
  const rMax = Math.max(...cities.map((c) => Math.sqrt((cityAreas[c.slug]?.area ?? 100) / Math.PI)));
  const mpp = (rMax * 1000) / (0.5 * H); // metros por píxel objetivo, igual en todos
  const zoomFor = (lat: number) =>
    Math.min(12, Math.max(2, Math.log2((156543.03 * Math.cos((lat * Math.PI) / 180)) / mpp)));

  return (
    <div>
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${cities.length > 2 ? 240 : 300}px, 1fr))` }}
      >
        {cities.map((c, i) => {
          const area = cityAreas[c.slug]?.area;
          return (
            <div key={c.slug} className="rounded-[24px] overflow-hidden border border-line bg-card">
              <OneMap city={c} color={COLORS[i % COLORS.length]} zoom={zoomFor(c.coords.lat)} />
              <div className="flex items-center gap-2 px-4 py-3 text-sm">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: COLORS[i % COLORS.length] }} />
                <span className="font-medium truncate">{tCity(c.name, lang)}</span>
                <span className="ml-auto font-mono text-xs text-muted whitespace-nowrap">
                  {area ? `${formatKm(area, lang)} km²` : es ? "sin dato" : "no data"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-3 text-xs text-muted">
        {es ? "Todos los mapas están a la misma escala (mira la regla de cada uno): así ves de verdad cuál ciudad es más grande." : "All maps share the same scale (check each map's ruler), so you can see which city is really bigger."}
      </p>
    </div>
  );
}

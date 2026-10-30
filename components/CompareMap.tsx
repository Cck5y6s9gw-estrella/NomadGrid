"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Map as MaplibreMap, Marker, NavigationControl, LngLatBounds, config as maplibreConfig, type GeoJSONSource } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { City } from "@/data/cities";
import { cityAreas } from "@/data/cityAreas";
import { useLanguage } from "@/lib/i18n";
import { tCity } from "@/lib/dictionary";
import { THEME_CHANGE_EVENT, type Theme } from "@/components/ThemeProvider";

const STYLE_DARK = "https://tiles.openfreemap.org/styles/dark";
const STYLE_LIGHT = "https://tiles.openfreemap.org/styles/positron";
const COLORS = ["#ea580c", "#38bdf8", "#a3e635", "#f472b6"];
const SRC = "compare-circles";

// Polígono que aproxima un círculo geodésico de radio rKm centrado en (lng, lat).
function circlePolygon(lng: number, lat: number, rKm: number, steps = 96): [number, number][] {
  const d = rKm / 6371;
  const phi = (lat * Math.PI) / 180;
  const lam = (lng * Math.PI) / 180;
  const pts: [number, number][] = [];
  for (let i = 0; i <= steps; i++) {
    const th = (2 * Math.PI * i) / steps;
    const phi2 = Math.asin(Math.sin(phi) * Math.cos(d) + Math.cos(phi) * Math.sin(d) * Math.cos(th));
    const lam2 =
      lam + Math.atan2(Math.sin(th) * Math.sin(d) * Math.cos(phi), Math.cos(d) - Math.sin(phi) * Math.sin(phi2));
    pts.push([(lam2 * 180) / Math.PI, (phi2 * 180) / Math.PI]);
  }
  return pts;
}

function formatKm(n: number, lang: "es" | "en") {
  const v = n >= 100 ? Math.round(n) : Math.round(n * 10) / 10;
  return v.toLocaleString(lang === "es" ? "es-ES" : "en-US");
}

export default function CompareMap({ cities }: { cities: City[] }) {
  const { lang } = useLanguage();
  const es = lang === "es";
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MaplibreMap | null>(null);
  const markersRef = useRef<Marker[]>([]);
  const themeRef = useRef<Theme>("dark");
  const dataRef = useRef<GeoJSON.FeatureCollection>({ type: "FeatureCollection", features: [] });
  const [overlay, setOverlay] = useState(true);
  const [ready, setReady] = useState(false);

  // Ciudades con superficie conocida, con su color fijo por posición en la comparación.
  const items = useMemo(
    () =>
      cities.map((c, i) => ({ city: c, color: COLORS[i % COLORS.length], info: cityAreas[c.slug] ?? null })),
    [cities]
  );
  const measured = items.filter((it) => it.info);
  const sorted = [...measured].sort((a, b) => b.info!.area - a.info!.area);
  const biggest = sorted[0];
  const smallest = sorted[sorted.length - 1];

  // Inicializa el mapa una sola vez.
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    maplibreConfig.WORKER_URL = "/maplibre-gl-worker.js";
    const initial: Theme = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    themeRef.current = initial;
    const map = new MaplibreMap({
      container: containerRef.current,
      style: initial === "light" ? STYLE_LIGHT : STYLE_DARK,
      center: [10, 30],
      zoom: 1.5,
      renderWorldCopies: false,
      attributionControl: { compact: true },
    });
    map.addControl(new NavigationControl({ showCompass: false }), "bottom-right");
    mapRef.current = map;
    const ro = new ResizeObserver(() => map.resize());
    ro.observe(containerRef.current);

    const addLayers = () => {
      if (!map.getSource(SRC)) map.addSource(SRC, { type: "geojson", data: dataRef.current });
      if (!map.getLayer(SRC + "-fill"))
        map.addLayer({ id: SRC + "-fill", type: "fill", source: SRC, paint: { "fill-color": ["get", "color"], "fill-opacity": 0.22 } });
      if (!map.getLayer(SRC + "-line"))
        map.addLayer({ id: SRC + "-line", type: "line", source: SRC, paint: { "line-color": ["get", "color"], "line-width": 2.2 } });
    };
    map.on("style.load", () => {
      addLayers();
      setReady(true);
    });
    const onTheme = (e: Event) => {
      const next = (e as CustomEvent<Theme>).detail;
      themeRef.current = next;
      map.setStyle(next === "light" ? STYLE_LIGHT : STYLE_DARK);
    };
    window.addEventListener(THEME_CHANGE_EVENT, onTheme);
    return () => {
      window.removeEventListener(THEME_CHANGE_EVENT, onTheme);
      ro.disconnect();
      markersRef.current.forEach((m) => m.remove());
      markersRef.current = [];
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Redibuja círculos y etiquetas cuando cambian las ciudades o el modo.
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !ready) return;
    const origin = measured[0]?.city.coords;
    const features: GeoJSON.Feature[] = [];
    const bounds = new LngLatBounds();
    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    measured.forEach((it) => {
      const r = Math.sqrt(it.info!.area / Math.PI);
      const c = overlay && origin ? origin : it.city.coords;
      const ring = circlePolygon(c.lng, c.lat, r);
      ring.forEach((p) => bounds.extend(p));
      features.push({
        type: "Feature",
        properties: { color: it.color },
        geometry: { type: "Polygon", coordinates: [ring] },
      });

      const el = document.createElement("div");
      el.style.cssText = `display:flex;align-items:center;gap:6px;padding:3px 9px;border-radius:999px;font:600 12px Geist,system-ui,sans-serif;white-space:nowrap;background:${it.color};color:#0b0f1a;box-shadow:0 2px 10px rgba(0,0,0,.35);pointer-events:none`;
      el.textContent = `${tCity(it.city.name, lang)} · ${formatKm(it.info!.area, lang)} km²`;
      markersRef.current.push(new Marker({ element: el, anchor: "bottom" }).setLngLat(ring[0]).addTo(map));
    });

    dataRef.current = { type: "FeatureCollection", features };
    (map.getSource(SRC) as GeoJSONSource | undefined)?.setData(dataRef.current);
    if (!bounds.isEmpty()) map.fitBounds(bounds, { padding: 70, maxZoom: 11, duration: 700 });
  }, [measured.map((m) => m.city.slug).join(","), overlay, ready, lang]); // eslint-disable-line react-hooks/exhaustive-deps

  const missing = items.filter((it) => !it.info);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center border border-line rounded-full p-0.5 text-xs font-medium">
          <button
            onClick={() => setOverlay(true)}
            className={`px-3.5 py-1.5 rounded-full transition-colors ${overlay ? "bg-accent text-white" : "text-muted hover:text-foreground"}`}
          >
            {es ? "Superponer en el mismo punto" : "Overlay on the same spot"}
          </button>
          <button
            onClick={() => setOverlay(false)}
            className={`px-3.5 py-1.5 rounded-full transition-colors ${!overlay ? "bg-accent text-white" : "text-muted hover:text-foreground"}`}
          >
            {es ? "Ubicación real" : "Real location"}
          </button>
        </div>
        {biggest && smallest && biggest !== smallest && (
          <p className="text-sm text-muted">
            <span className="text-foreground font-medium">{tCity(biggest.city.name, lang)}</span>{" "}
            {es ? "es" : "is"}{" "}
            <span className="font-mono text-accent">{(biggest.info!.area / smallest.info!.area).toFixed(1).replace(".", es ? "," : ".")}×</span>{" "}
            {es ? "más grande que" : "larger than"}{" "}
            <span className="text-foreground font-medium">{tCity(smallest.city.name, lang)}</span>
          </p>
        )}
      </div>

      <div className="relative rounded-[24px] overflow-hidden border border-line">
        <div ref={containerRef} className="w-full h-[380px] sm:h-[480px]" />
      </div>

      <div className="mt-4 flex flex-wrap gap-2.5">
        {items.map((it) => (
          <div key={it.city.slug} className="flex items-center gap-2 border border-line bg-card rounded-full pl-3 pr-4 py-1.5 text-sm">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: it.color }} />
            <span className="font-medium">{tCity(it.city.name, lang)}</span>
            <span className="font-mono text-muted text-xs">
              {it.info ? `${formatKm(it.info.area, lang)} km²` : es ? "sin dato" : "no data"}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-muted">
        {es
          ? "Superficie del término municipal según Wikidata; en algunas ciudades incluye zonas rurales o agua, así que no siempre coincide con el área urbana. Los círculos son una aproximación al tamaño, no el contorno real."
          : "Area of the municipality according to Wikidata; in some cities it includes rural land or water, so it does not always match the urban area. Circles approximate size and are not the real outline."}
        {missing.length > 0 ? (es ? " Algunas ciudades no tienen superficie disponible." : " Some cities have no area data.") : ""}
      </p>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { Map as MaplibreMap, LngLatBounds, Marker, NavigationControl, ScaleControl, config as maplibreConfig } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { City } from "@/data/cities";
import { cityAreas } from "@/data/cityAreas";
import { useLanguage } from "@/lib/i18n";
import { tCity } from "@/lib/dictionary";
import { THEME_CHANGE_EVENT, type Theme } from "@/components/ThemeProvider";

const STYLE_DARK = "https://tiles.openfreemap.org/styles/dark";
const STYLE_LIGHT = "https://tiles.openfreemap.org/styles/positron";
const COLORS = ["#ea580c", "#38bdf8", "#a3e635", "#f472b6"];
const H = 360;

function formatKm(n: number, lang: "es" | "en") {
  const v = n >= 100 ? Math.round(n) : Math.round(n * 10) / 10;
  return v.toLocaleString(lang === "es" ? "es-ES" : "en-US");
}

type Geo = { type: "Polygon" | "MultiPolygon"; coordinates: any };

function allPoints(g: Geo): [number, number][] {
  const polys = g.type === "Polygon" ? [g.coordinates] : g.coordinates;
  return polys.flatMap((p: number[][][]) => p[0]) as [number, number][];
}

function boundsOf(g: Geo) {
  const b = new LngLatBounds();
  allPoints(g).forEach((p) => b.extend(p));
  return b;
}

// Extensión (km) del contorno en ancho y alto.
function extentKm(g: Geo) {
  const b = boundsOf(g);
  const lat = (b.getNorth() + b.getSouth()) / 2;
  const w = (b.getEast() - b.getWest()) * 111.32 * Math.cos((lat * Math.PI) / 180);
  const h = (b.getNorth() - b.getSouth()) * 110.57;
  return Math.max(w, h);
}

// Un mapa por ciudad con su contorno administrativo real, todos a la misma escala.
function OneMap({ city, color, geo, mpp }: { city: City; color: string; geo: Geo | null; mpp: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    maplibreConfig.WORKER_URL = "/maplibre-gl-worker.js";
    const initial: Theme = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    const b = geo ? boundsOf(geo) : null;
    const center: [number, number] = b ? [b.getCenter().lng, b.getCenter().lat] : [city.coords.lng, city.coords.lat];
    const zoom = Math.min(13, Math.max(2, Math.log2((156543.03 * Math.cos((center[1] * Math.PI) / 180)) / mpp)));
    const map = new MaplibreMap({
      container: ref.current,
      style: initial === "light" ? STYLE_LIGHT : STYLE_DARK,
      center,
      zoom,
      renderWorldCopies: false,
      scrollZoom: false,
      pixelRatio: Math.max(2, typeof window !== "undefined" ? window.devicePixelRatio : 2),
      attributionControl: { compact: true },
    });
    map.addControl(new NavigationControl({ showCompass: false }), "top-right");
    map.addControl(new ScaleControl({ maxWidth: 110, unit: "metric" }), "bottom-left");

    const data: GeoJSON.FeatureCollection = {
      type: "FeatureCollection",
      features: geo ? [{ type: "Feature", properties: {}, geometry: geo as GeoJSON.Geometry }] : [],
    };
    const add = () => {
      if (!geo) return;
      if (!map.getSource("b")) map.addSource("b", { type: "geojson", data });
      if (!map.getLayer("b-fill")) map.addLayer({ id: "b-fill", type: "fill", source: "b", paint: { "fill-color": color, "fill-opacity": 0.16 } });
      if (!map.getLayer("b-line")) map.addLayer({ id: "b-line", type: "line", source: "b", layout: { "line-join": "round" }, paint: { "line-color": color, "line-width": 2.4 } });
    };
    map.on("style.load", add);
    let marker: Marker | null = null;
    if (!geo) {
      const pin = document.createElement("div");
      pin.style.cssText = `width:16px;height:16px;border-radius:50%;background:${color};border:3px solid #fff;box-shadow:0 0 0 4px ${color}55,0 2px 8px rgba(0,0,0,.5)`;
      marker = new Marker({ element: pin }).setLngLat([city.coords.lng, city.coords.lat]).addTo(map);
    }
    const onTheme = (e: Event) => map.setStyle((e as CustomEvent<Theme>).detail === "light" ? STYLE_LIGHT : STYLE_DARK);
    window.addEventListener(THEME_CHANGE_EVENT, onTheme);
    return () => {
      window.removeEventListener(THEME_CHANGE_EVENT, onTheme);
      marker?.remove();
      map.remove();
    };
  }, [city.slug, geo, mpp, color]); // eslint-disable-line react-hooks/exhaustive-deps

  return <div ref={ref} style={{ height: H }} className="w-full" />;
}

export default function CityMapsRow({ cities }: { cities: City[] }) {
  const { lang } = useLanguage();
  const es = lang === "es";
  const [geos, setGeos] = useState<Record<string, Geo | null> | null>(null);
  const key = cities.map((c) => c.slug).join(",");

  useEffect(() => {
    let alive = true;
    setGeos(null);
    Promise.all(
      cities.map((c) =>
        fetch(`/boundaries/${c.slug}.json`)
          .then((r) => (r.ok ? (r.json() as Promise<Geo>) : null))
          .catch(() => null)
          .then((g) => [c.slug, g] as const)
      )
    ).then((rows) => alive && setGeos(Object.fromEntries(rows)));
    return () => {
      alive = false;
    };
  }, [key]); // eslint-disable-line react-hooks/exhaustive-deps

  const exts = geos ? cities.map((c) => (geos[c.slug] ? extentKm(geos[c.slug]!) : 0)) : [];
  const maxExt = Math.max(0, ...exts) || 2 * Math.sqrt((Math.max(...cities.map((c) => cityAreas[c.slug]?.area ?? 100))) / Math.PI);
  const mpp = (maxExt * 1000) / (0.8 * 300); // el contorno más grande ocupa ~80 % del lado útil del mapa
  const anyMissing = geos ? cities.some((c) => !geos[c.slug]) : false;

  return (
    <div>
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${cities.length > 2 ? 240 : 300}px, 1fr))` }}
      >
        {cities.map((c, i) => {
          const area = cityAreas[c.slug]?.area;
          const color = COLORS[i % COLORS.length];
          return (
            <div key={c.slug} className="rounded-[24px] overflow-hidden border border-line bg-card">
              {geos ? (
                <OneMap city={c} color={color} geo={geos[c.slug] ?? null} mpp={mpp} />
              ) : (
                <div style={{ height: H }} className="w-full animate-pulse bg-foreground/5" />
              )}
              <div className="flex items-center gap-2 px-4 py-3 text-sm">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: color }} />
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
        {es
          ? "Todos los mapas están a la misma escala (mira la regla de cada uno) y el color marca el límite administrativo de cada ciudad."
          : "All maps share the same scale (check each map's ruler) and the colored line marks each city's administrative boundary."}
        {anyMissing ? (es ? " En alguna ciudad solo se muestra su ubicación porque no hay contorno disponible." : " Some cities only show their location because no boundary is available.") : ""}
      </p>
    </div>
  );
}

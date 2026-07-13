"use client";

import { useState } from "react";
import Link from "next/link";
import { cities, City } from "@/data/cities";

const metrics = [
  { key: "costPerMonth", label: "Coste/mes", format: (c: City) => `${c.currency} ${c.costPerMonth.toLocaleString()}`, best: "min" },
  { key: "internetSpeed", label: "Internet", format: (c: City) => `${c.internetSpeed} Mbps`, best: "max" },
  { key: "safetyScore", label: "Seguridad", format: (c: City) => `${c.safetyScore} / 10`, best: "max" },
  { key: "qualityOfLife", label: "Calidad de vida", format: (c: City) => `${c.qualityOfLife} / 10`, best: "max" },
  { key: "climateType", label: "Clima", format: (c: City) => c.climateType, best: "none" },
  { key: "hasBeach", label: "Playa", format: (c: City) => (c.hasBeach ? "Sí" : "No"), best: "none" },
  { key: "bestTimeToVisit", label: "Mejor época", format: (c: City) => c.bestTimeToVisit, best: "none" },
  { key: "continent", label: "Continente", format: (c: City) => c.continent, best: "none" },
];

export default function ComparePage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const filtered = cities.filter(
    (c) =>
      (c.name.toLowerCase().includes(search.toLowerCase()) || c.country.toLowerCase().includes(search.toLowerCase())) &&
      !selected.includes(c.slug)
  );

  const selectedCities = selected.map((s) => cities.find((c) => c.slug === s)!);

  const addCity = (slug: string) => {
    if (selected.length < 3) setSelected([...selected, slug]);
  };

  const removeCity = (slug: string) => {
    setSelected(selected.filter((s) => s !== slug));
  };

  const getBest = (metric: typeof metrics[0], cities: City[]) => {
    if (metric.best === "none" || cities.length < 2) return null;
    const values = cities.map((c) => c[metric.key as keyof City] as number);
    return metric.best === "max" ? Math.max(...values) : Math.min(...values);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="text-white font-semibold text-lg tracking-tight">NomadGrid</Link>
          <div className="flex items-center gap-6">
            <Link href="/cities" className="text-sm text-white/60 hover:text-white transition-colors">Explorar</Link>
            <Link href="/compare" className="text-sm text-white hover:text-white transition-colors">Comparar</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold mb-1">Comparar ciudades</h1>
          <p className="text-white/40 text-sm">Selecciona hasta 3 ciudades para comparar</p>
        </div>

        {/* City selector */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 mb-4">
            {selectedCities.map((city) => (
              <div key={city.slug} className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2">
                <span className="text-sm font-medium">{city.name}</span>
                <button onClick={() => removeCity(city.slug)} className="text-white/40 hover:text-white text-lg leading-none">×</button>
              </div>
            ))}
            {selected.length < 3 && (
              <div className="text-sm text-white/30 flex items-center px-2">
                {selected.length === 0 ? "Selecciona ciudades abajo" : `+ ${3 - selected.length} más`}
              </div>
            )}
          </div>

          {selected.length < 3 && (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <input
                type="text"
                placeholder="Buscar ciudad..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent text-sm text-white placeholder-white/30 focus:outline-none mb-3"
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 max-h-48 overflow-y-auto">
                {filtered.map((city) => (
                  <button
                    key={city.slug}
                    onClick={() => addCity(city.slug)}
                    className="text-left px-3 py-2 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <div className="text-sm font-medium">{city.name}</div>
                    <div className="text-xs text-white/40">{city.country}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Comparison table */}
        {selectedCities.length >= 2 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 pr-8 text-sm text-white/40 font-normal w-40">Métrica</th>
                  {selectedCities.map((city) => (
                    <th key={city.slug} className="text-left py-4 px-4 min-w-40">
                      <div className="font-semibold text-white">{city.name}</div>
                      <div className="text-xs text-white/40 font-normal">{city.country}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {metrics.map((metric) => {
                  const best = getBest(metric, selectedCities);
                  return (
                    <tr key={metric.key} className="border-b border-white/5 hover:bg-white/2">
                      <td className="py-4 pr-8 text-sm text-white/40">{metric.label}</td>
                      {selectedCities.map((city) => {
                        const raw = city[metric.key as keyof City] as number;
                        const isBest = best !== null && raw === best;
                        return (
                          <td key={city.slug} className="py-4 px-4">
                            <span className={`text-sm font-medium ${isBest ? "text-green-400" : "text-white"}`}>
                              {metric.format(city)}
                            </span>
                            {isBest && <span className="ml-2 text-xs text-green-400/60">mejor</span>}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-20 text-white/20">
            <p className="text-lg">Selecciona al menos 2 ciudades para comparar</p>
          </div>
        )}
      </div>

      <footer className="border-t border-white/10 py-8 px-6 text-center text-xs text-white/20">
        NomadGrid · Datos orientativos basados en Numbeo y Nomad List · Actualizado 2025
      </footer>
    </main>
  );
}
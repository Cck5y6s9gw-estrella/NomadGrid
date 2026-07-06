"use client";

import { useState } from "react";
import Link from "next/link";
import { cities, City } from "@/data/cities";

const continents = ["Todos", "Europa", "Asia", "América", "Oriente Medio"];
const climates = ["Todos", "Mediterráneo", "Tropical", "Continental", "Subtropical", "Templado", "Desértico"];

export default function CitiesPage() {
  const [search, setSearch] = useState("");
  const [continent, setContinent] = useState("Todos");
  const [beachOnly, setBeachOnly] = useState(false);
  const [sortBy, setSortBy] = useState("name");
  const [maxBudget, setMaxBudget] = useState(5000);

  const filtered = cities
    .filter((c) => {
      const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.country.toLowerCase().includes(search.toLowerCase());
      const matchContinent = continent === "Todos" || c.continent === continent;
      const matchBeach = !beachOnly || c.hasBeach;
      const matchBudget = c.costPerMonth <= maxBudget;
      return matchSearch && matchContinent && matchBeach && matchBudget;
    })
    .sort((a, b) => {
      if (sortBy === "cost") return a.costPerMonth - b.costPerMonth;
      if (sortBy === "quality") return b.qualityOfLife - a.qualityOfLife;
      if (sortBy === "safety") return b.safetyScore - a.safetyScore;
      if (sortBy === "internet") return b.internetSpeed - a.internetSpeed;
      return a.name.localeCompare(b.name);
    });

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="text-white font-semibold text-lg tracking-tight">NomadGrid</Link>
          <div className="flex items-center gap-6">
            <Link href="/cities" className="text-sm text-white hover:text-white transition-colors">Explorar</Link>
            <Link href="/compare" className="text-sm text-white/60 hover:text-white transition-colors">Comparar</Link>
            <Link href="/cities" className="text-sm bg-white text-black px-4 py-1.5 rounded-full font-medium hover:bg-white/90 transition-colors">Ver ciudades</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold mb-1">Explorar ciudades</h1>
          <p className="text-white/40 text-sm">{filtered.length} ciudades encontradas</p>
        </div>

        {/* Search + Sort */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            placeholder="Buscar ciudad o país..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30"
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white/30"
          >
            <option value="name">Ordenar: A–Z</option>
            <option value="cost">Ordenar: Más barato</option>
            <option value="quality">Ordenar: Calidad de vida</option>
            <option value="safety">Ordenar: Seguridad</option>
            <option value="internet">Ordenar: Internet</option>
          </select>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {continents.map((c) => (
            <button
              key={c}
              onClick={() => setContinent(c)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${continent === c ? "bg-white text-black border-white" : "border-white/20 text-white/60 hover:border-white/40"}`}
            >
              {c}
            </button>
          ))}
          <button
            onClick={() => setBeachOnly(!beachOnly)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${beachOnly ? "bg-white text-black border-white" : "border-white/20 text-white/60 hover:border-white/40"}`}
          >
            🏖 Solo playa
          </button>
          <div className="flex items-center gap-2 ml-2">
            <span className="text-xs text-white/40">Presupuesto máx:</span>
            <input
              type="range"
              min={500}
              max={5000}
              step={100}
              value={maxBudget}
              onChange={(e) => setMaxBudget(Number(e.target.value))}
              className="w-24 accent-white"
            />
            <span className="text-xs text-white/60 w-16">${maxBudget.toLocaleString()}</span>
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-white/30">
            <p className="text-lg">No se encontraron ciudades</p>
            <p className="text-sm mt-2">Prueba a cambiar los filtros</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((city) => (
              <CityCard key={city.slug} city={city} />
            ))}
          </div>
        )}
      </div>

      <footer className="border-t border-white/10 py-8 px-6 text-center text-xs text-white/20">
        NomadGrid · Datos orientativos basados en Numbeo y Nomad List · Actualizado 2025
      </footer>
    </main>
  );
}

function CityCard({ city }: { city: City }) {
  return (
    <Link href={`/cities/${city.slug}`} className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300">
      <img
        src={city.imageUrl}
        alt={city.name}
        className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-end justify-between mb-2">
          <div>
            <h3 className="text-sm font-semibold leading-tight">{city.name}</h3>
            <p className="text-xs text-white/50">{city.country}</p>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium">{city.currency} {city.costPerMonth.toLocaleString()}</div>
            <div className="text-xs text-white/40">al mes</div>
          </div>
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {city.hasBeach && <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full">🏖</span>}
          <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full">⭐ {city.qualityOfLife}</span>
          <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full">🔒 {city.safetyScore}</span>
          <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full">🛜 {city.internetSpeed}M</span>
        </div>
      </div>
    </Link>
  );
}
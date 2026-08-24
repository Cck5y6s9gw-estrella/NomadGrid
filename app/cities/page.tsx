"use client";

import { useState } from "react";
import Link from "next/link";
import { Show, SignInButton, UserButton } from "@clerk/nextjs";
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
    <main className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-foreground font-semibold text-lg tracking-tight">
            <img src="/logo-icon.png" alt="Roavio" className="h-6 w-auto" />
            Roavio
          </Link>
          <div className="flex items-center gap-3 sm:gap-6">
            <Link href="/cities" className="text-sm text-foreground hover:text-accent transition-colors">Explorar</Link>
            <Link href="/compare" className="text-sm text-muted hover:text-accent transition-colors">Comparar</Link>
            <Link href="/cities" className="hidden sm:inline-block text-sm bg-accent text-white px-4 py-1.5 rounded-full font-medium hover:opacity-90 transition-opacity">Ver ciudades</Link>
            <Show
              when="signed-in"
              fallback={
                <SignInButton mode="modal">
                  <button className="text-sm text-muted hover:text-accent transition-colors">
                    Registro/Inicio de sesión
                  </button>
                </SignInButton>
              }
            >
              <UserButton />
            </Show>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold mb-1">Explorar ciudades</h1>
          <p className="text-muted text-sm">{filtered.length} ciudades encontradas</p>
        </div>

        {/* Search + Sort */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            placeholder="Buscar ciudad o país..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-card border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder-muted focus:outline-none focus:border-accent"
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-card border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-accent"
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
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${continent === c ? "bg-accent text-white border-accent" : "border-border text-muted hover:border-accent"}`}
            >
              {c}
            </button>
          ))}
          <button
            onClick={() => setBeachOnly(!beachOnly)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${beachOnly ? "bg-accent text-white border-accent" : "border-border text-muted hover:border-accent"}`}
          >
            🏖 Solo playa
          </button>
          <div className="flex items-center gap-2 ml-2">
            <span className="text-xs text-muted">Presupuesto máx:</span>
            <input
              type="range"
              min={500}
              max={5000}
              step={100}
              value={maxBudget}
              onChange={(e) => setMaxBudget(Number(e.target.value))}
              className="w-24 accent-accent"
            />
            <span className="text-xs text-muted w-16">€{maxBudget.toLocaleString("es-ES")}</span>
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted">
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

      <footer className="border-t border-border py-8 px-6 text-center text-xs text-muted">
               Roavio · Datos de coste, internet, seguridad y calidad de vida basados en Numbeo y Speedtest Global Index (Ookla) · Actualizado 2026
        <span className="mx-2">·</span>
        <Link href="/feedback" className="hover:text-accent transition-colors">Feedback</Link>
      </footer>
    </main>
  );
}

function CityCard({ city }: { city: City }) {
  return (
    <Link href={`/cities/${city.slug}`} className="group relative overflow-hidden rounded-2xl border border-border hover:border-accent transition-all duration-300">
      <img
        src={city.imageUrl}
        alt={city.name}
        className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-end justify-between mb-2">
          <div>
            <h3 className="text-sm font-semibold leading-tight text-foreground">{city.name}</h3>
            <p className="text-xs text-muted">{city.country}</p>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-foreground">{city.currency} {city.costPerMonth.toLocaleString("es-ES")}</div>
            <div className="text-xs text-muted">al mes</div>
          </div>
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {city.hasBeach && <span className="text-xs bg-card border border-border px-2 py-0.5 rounded-full">🏖</span>}
          <span className="text-xs bg-card border border-border px-2 py-0.5 rounded-full">⭐ {city.qualityOfLife}</span>
          <span className="text-xs bg-card border border-border px-2 py-0.5 rounded-full">🔒 {city.safetyScore}</span>
          <span className="text-xs bg-card border border-border px-2 py-0.5 rounded-full">🛜 {city.internetSpeed}M</span>
        </div>
      </div>
    </Link>
  );
}
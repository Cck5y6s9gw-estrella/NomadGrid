"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FavoriteButton from "@/components/FavoriteButton";
import { cities, City } from "@/data/cities";
import { useLanguage } from "@/lib/i18n";
import { t, formatMoney, tCountry, tContinent } from "@/lib/dictionary";

const continentValues = ["Todos", "Europa", "Asia", "América", "Norteamérica", "Oriente Medio"];

export default function CitiesPage() {
  const { lang } = useLanguage();
  const d = t(lang);
  const [search, setSearch] = useState("");
  const [continent, setContinent] = useState("Todos");
  const [beachOnly, setBeachOnly] = useState(false);
  const [sortBy, setSortBy] = useState("name");
  const [maxBudget, setMaxBudget] = useState(5000);

  const filtered = cities
    .filter((c) => {
      const matchSearch =
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.country.toLowerCase().includes(search.toLowerCase()) ||
        tCountry(c.country, lang).toLowerCase().includes(search.toLowerCase());
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
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold mb-1">{d.exploreTitle}</h1>
          <p className="text-muted text-sm">{d.citiesFound(filtered.length)}</p>
        </div>

        {/* Search + Sort */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            placeholder={d.searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-card border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder-muted focus:outline-none focus:border-accent"
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-card border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-accent"
          >
            <option value="name">{d.sortName}</option>
            <option value="cost">{d.sortCost}</option>
            <option value="quality">{d.sortQuality}</option>
            <option value="safety">{d.sortSafety}</option>
            <option value="internet">{d.sortInternet}</option>
          </select>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {continentValues.map((c) => (
            <button
              key={c}
              onClick={() => setContinent(c)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${continent === c ? "bg-accent text-white border-accent" : "border-border text-muted hover:border-accent"}`}
            >
              {c === "Todos" ? d.filterAll : tContinent(c, lang)}
            </button>
          ))}
          <button
            onClick={() => setBeachOnly(!beachOnly)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${beachOnly ? "bg-accent text-white border-accent" : "border-border text-muted hover:border-accent"}`}
          >
            🏖 {d.filterBeachOnly}
          </button>
          <div className="flex items-center gap-2 ml-2">
            <span className="text-xs text-muted">{d.maxBudget}</span>
            <input
              type="range"
              min={500}
              max={5000}
              step={100}
              value={maxBudget}
              onChange={(e) => setMaxBudget(Number(e.target.value))}
              className="w-24 accent-accent"
            />
            <span className="text-xs text-muted w-16">€{formatMoney(maxBudget, lang)}</span>
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted">
            <p className="text-lg">{d.noCitiesFound}</p>
            <p className="text-sm mt-2">{d.tryOtherFilters}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((city) => (
              <CityCard key={city.slug} city={city} lang={lang} monthly={d.monthly} />
            ))}
          </div>
        )}
      </div>

      <footer className="border-t border-border py-8 px-6 text-center text-xs text-muted">
        {d.footerText}
        <span className="mx-2">·</span>
        <Link href="/feedback" className="hover:text-accent transition-colors">{d.footerFeedback}</Link>
      </footer>
    </main>
  );
}

function CityCard({ city, lang, monthly }: { city: City; lang: "es" | "en"; monthly: string }) {
  return (
    <Link href={`/cities/${city.slug}`} className="group relative overflow-hidden rounded-2xl border border-border hover:border-accent transition-all duration-300">
      <img
        src={city.imageUrl}
        alt={city.name}
        className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
      <FavoriteButton citySlug={city.slug} className="absolute top-3 right-3" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-end justify-between mb-2">
          <div>
            <h3 className="text-sm font-semibold leading-tight text-foreground">{city.name}</h3>
            <p className="text-xs text-muted">{tCountry(city.country, lang)}</p>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-foreground">{city.currency} {formatMoney(city.costPerMonth, lang)}</div>
            <div className="text-xs text-muted">{monthly}</div>
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

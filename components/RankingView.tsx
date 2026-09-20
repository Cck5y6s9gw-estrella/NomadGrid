"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import FavoriteButton from "./FavoriteButton";
import { useLanguage } from "@/lib/i18n";
import { t, tCountry } from "@/lib/dictionary";
import type { City } from "@/data/cities";
import type { RankingConfig } from "@/lib/rankings";
import { formatRankingValue } from "@/lib/rankings";
import { IconCoin, IconShield, IconStar, IconWifi, IconTrophy, IconSearch, IconArrowUpDown } from "./Icon";

const icons = {
  coin: IconCoin,
  shield: IconShield,
  star: IconStar,
  wifi: IconWifi,
};

export default function RankingView({
  config,
  sortedCities,
}: {
  config: RankingConfig;
  sortedCities: City[];
}) {
  const { lang } = useLanguage();
  const d = t(lang);
  const [query, setQuery] = useState("");
  const [reversed, setReversed] = useState(false);

  const Icon = icons[config.icon];
  const title = lang === "es" ? config.titleEs : config.titleEn;
  const description = lang === "es" ? config.descriptionEs : config.descriptionEn;
  const cardTitle = lang === "es" ? config.cardTitleEs : config.cardTitleEn;

  const effectiveDirection = reversed
    ? config.direction === "desc"
      ? "asc"
      : "desc"
    : config.direction;

  const orderedCities = useMemo(
    () => (reversed ? [...sortedCities].reverse() : sortedCities),
    [sortedCities, reversed]
  );

  const rankBySlug = useMemo(() => {
    const map = new Map<string, number>();
    orderedCities.forEach((city, i) => map.set(city.slug, i + 1));
    return map;
  }, [orderedCities]);

  const filteredCities = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return orderedCities;
    return orderedCities.filter(
      (city) =>
        city.name.toLowerCase().includes(q) ||
        city.country.toLowerCase().includes(q) ||
        tCountry(city.country, lang).toLowerCase().includes(q)
    );
  }, [orderedCities, query, lang]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        <div className="mb-4 text-xs">
          <Link href="/rankings" className="text-muted hover:text-accent transition-colors">
            Rankings
          </Link>
          <span className="text-muted mx-1.5">/</span>
          <span className="text-foreground">{cardTitle}</span>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 shrink-0">
            <Icon className="w-5 h-5 text-accent" />
          </span>
          <h1 className="text-2xl sm:text-3xl font-semibold leading-tight">{title}</h1>
        </div>
        <p className="text-muted text-sm mb-6 max-w-2xl">{description}</p>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <IconSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              type="text"
              placeholder={d.searchCityOrCountry}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-card border border-border rounded-xl pl-10 pr-4 py-2.5 text-sm text-foreground placeholder-muted focus:outline-none focus:border-accent"
            />
          </div>
          <button
            type="button"
            onClick={() => setReversed((r) => !r)}
            className="flex items-center justify-center gap-2 bg-card border border-border rounded-xl px-4 py-2.5 text-sm text-foreground hover:border-accent transition-colors shrink-0"
          >
            <IconArrowUpDown className="w-4 h-4 text-accent" />
            {effectiveDirection === "desc" ? d.sortDescLabel : d.sortAscLabel}
          </button>
        </div>

        {filteredCities.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card px-5 py-10 text-center">
            <p className="text-sm text-muted">{d.noCitiesFound}</p>
          </div>
        ) : (
          <div className="rounded-2xl border border-border bg-card overflow-hidden divide-y divide-border">
            {filteredCities.map((city) => {
              const rank = rankBySlug.get(city.slug)!;
              return (
                <Link
                  key={city.slug}
                  href={`/cities/${city.slug}`}
                  className="group flex items-center gap-4 px-4 sm:px-5 py-3 hover:bg-background/60 active:bg-background/80 active:scale-[0.99] transition-all duration-150 cursor-pointer"
                >
                  <span
                    className={`w-7 text-right text-sm font-medium shrink-0 ${
                      rank === 1 ? "text-accent" : "text-muted"
                    }`}
                  >
                    {rank === 1 ? <IconTrophy className="w-4 h-4 inline -mt-0.5" /> : rank}
                  </span>
                  <img
                    src={city.imageUrl}
                    alt={city.name}
                    className="w-10 h-10 rounded-lg object-cover shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-foreground group-hover:text-accent transition-colors truncate">
                      {city.name}
                    </div>
                    <div className="text-xs text-muted truncate">{tCountry(city.country, lang)}</div>
                  </div>
                  <div className="text-sm font-medium text-foreground shrink-0">
                    {formatRankingValue(config, city)}
                  </div>
                  <FavoriteButton citySlug={city.slug} className="shrink-0" />
                </Link>
              );
            })}
          </div>
        )}
      </div>

      <footer className="border-t border-border py-8 px-6 text-center text-xs text-muted">
        Roavio · Coste e internet: Numbeo y Speedtest Global Index (Ookla) · Seguridad y calidad de vida: media ponderada de Numbeo, Global Peace Index e Índice de Desarrollo Humano (ONU) · Actualizado 2026
      </footer>
    </main>
  );
}

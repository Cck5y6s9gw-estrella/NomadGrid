"use client";

import Link from "next/link";
import Navbar from "./Navbar";
import FavoriteButton from "./FavoriteButton";
import { useLanguage } from "@/lib/i18n";
import { tCountry } from "@/lib/dictionary";
import type { City } from "@/data/cities";
import type { RankingConfig } from "@/lib/rankings";
import { formatRankingValue } from "@/lib/rankings";
import { IconCoin, IconShield, IconStar, IconWifi, IconTrophy } from "./Icon";

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
  const Icon = icons[config.icon];
  const title = lang === "es" ? config.titleEs : config.titleEn;
  const description = lang === "es" ? config.descriptionEs : config.descriptionEn;
  const cardTitle = lang === "es" ? config.cardTitleEs : config.cardTitleEn;

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
        <p className="text-muted text-sm mb-8 max-w-2xl">{description}</p>

        <div className="rounded-2xl border border-border bg-card overflow-hidden divide-y divide-border">
          {sortedCities.map((city, i) => (
            <Link
              key={city.slug}
              href={`/cities/${city.slug}`}
              className="group flex items-center gap-4 px-4 sm:px-5 py-3 hover:bg-background/60 transition-colors"
            >
              <span
                className={`w-7 text-right text-sm font-medium shrink-0 ${
                  i < 3 ? "text-accent" : "text-muted"
                }`}
              >
                {i < 3 ? <IconTrophy className="w-4 h-4 inline -mt-0.5" /> : i + 1}
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
          ))}
        </div>
      </div>

      <footer className="border-t border-border py-8 px-6 text-center text-xs text-muted">
        Roavio · Datos de coste, internet, seguridad y calidad de vida basados en Numbeo y Speedtest Global Index (Ookla) · Actualizado 2026
      </footer>
    </main>
  );
}

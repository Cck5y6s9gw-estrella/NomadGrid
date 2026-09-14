"use client";

import Link from "next/link";
import Navbar from "./Navbar";
import { useLanguage } from "@/lib/i18n";
import { tCountry } from "@/lib/dictionary";
import { rankings, getSortedCities, formatRankingValue } from "@/lib/rankings";
import { IconCoin, IconShield, IconStar, IconWifi, IconTrophy } from "./Icon";
import { cities } from "@/data/cities";

const icons = {
  coin: IconCoin,
  shield: IconShield,
  star: IconStar,
  wifi: IconWifi,
};

const cardAccents = {
  coin: "from-accent/25 via-accent/5 to-transparent",
  shield: "from-sky-500/25 via-sky-500/5 to-transparent",
  star: "from-amber-400/25 via-amber-400/5 to-transparent",
  wifi: "from-emerald-400/25 via-emerald-400/5 to-transparent",
};

export default function RankingsIndexView() {
  const { lang } = useLanguage();
  const isEs = lang === "es";

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Navbar />

      <section className="pt-32 pb-4 px-6 text-center max-w-3xl mx-auto">
        <div className="inline-block text-xs font-medium tracking-widest text-muted uppercase mb-5 border border-border px-3 py-1 rounded-full">
          {isEs
            ? `${cities.length} ciudades · ${rankings.length} rankings`
            : `${cities.length} cities · ${rankings.length} rankings`}
        </div>
        <h1 className="font-serif text-4xl md:text-5xl tracking-tight leading-tight mb-4">
          {isEs ? "¿Quién gana en cada " : "Who wins on every "}
          <span className="text-accent">{isEs ? "indicador" : "indicator"}</span>
          {isEs ? "?" : "?"}
        </h1>
        <p className="text-muted text-sm md:text-base mb-12 max-w-xl mx-auto leading-relaxed">
          {isEs
            ? "Todas las ciudades de Roavio, ordenadas de mejor a peor. Datos basados en Numbeo y el Speedtest Global Index (Ookla)."
            : "Every Roavio city, ranked from best to worst. Data based on Numbeo and the Speedtest Global Index (Ookla)."}
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {rankings.map((r, idx) => {
            const Icon = icons[r.icon];
            const top3 = getSortedCities(r).slice(0, 3);
            return (
              <Link
                key={r.slug}
                href={`/rankings/${r.slug}`}
                style={{ animationDelay: `${idx * 70}ms` }}
                className="animate-pop-in group relative overflow-hidden rounded-3xl border border-white/10 bg-card shadow-lg shadow-black/30 hover:border-accent/70 hover:shadow-accent/10 hover:-translate-y-0.5 active:scale-[0.97] active:translate-y-0 active:shadow-none transition-all duration-200 ease-out cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cardAccents[r.icon]} pointer-events-none`} />
                <div className="relative p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-background/60 border border-white/10 shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </span>
                    <h2 className="font-serif text-xl text-foreground group-hover:text-accent transition-colors">
                      {isEs ? r.cardTitleEs : r.cardTitleEn}
                    </h2>
                  </div>

                  <div className="space-y-2.5 mb-4">
                    {top3.map((city, i) => (
                      <div key={city.slug} className="flex items-center gap-3">
                        <span className={`w-5 text-sm font-medium shrink-0 ${i === 0 ? "text-accent" : "text-muted"}`}>
                          {i === 0 ? <IconTrophy className="w-4 h-4" /> : i + 1}
                        </span>
                        <img src={city.imageUrl} alt={city.name} className="w-7 h-7 rounded-full object-cover shrink-0 border border-white/10" />
                        <span className="text-sm text-foreground truncate flex-1">{city.name}</span>
                        <span className="text-xs text-muted shrink-0">{tCountry(city.country, lang)}</span>
                        <span className="text-sm font-medium text-foreground shrink-0">{formatRankingValue(r, city)}</span>
                      </div>
                    ))}
                  </div>

                  <span className="text-xs font-medium text-accent inline-flex items-center gap-1">
                    {isEs ? "Ver ranking completo" : "See full ranking"}
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <footer className="border-t border-border py-8 px-6 text-center text-xs text-muted">
        Roavio · Datos de coste, internet, seguridad y calidad de vida basados en Numbeo y Speedtest Global Index (Ookla) · Actualizado 2026
      </footer>
    </main>
  );
}

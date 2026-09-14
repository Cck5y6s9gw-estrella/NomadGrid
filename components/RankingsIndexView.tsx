"use client";

import Link from "next/link";
import Navbar from "./Navbar";
import { useLanguage } from "@/lib/i18n";
import { rankings } from "@/lib/rankings";
import { IconCoin, IconShield, IconStar, IconWifi } from "./Icon";

const icons = {
  coin: IconCoin,
  shield: IconShield,
  star: IconStar,
  wifi: IconWifi,
};

export default function RankingsIndexView() {
  const { lang } = useLanguage();
  const isEs = lang === "es";

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        <div className="mb-10">
          <h1 className="text-3xl font-semibold mb-2">Rankings</h1>
          <p className="text-muted text-sm max-w-2xl">
            {isEs
              ? "Las 105 ciudades de Roavio, ordenadas de mejor a peor en cada indicador. Datos basados en Numbeo y el Speedtest Global Index (Ookla)."
              : "All 105 Roavio cities, ranked from best to worst on each indicator. Data based on Numbeo and the Speedtest Global Index (Ookla)."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {rankings.map((r) => {
            const Icon = icons[r.icon];
            return (
              <Link
                key={r.slug}
                href={`/rankings/${r.slug}`}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:border-accent/60 transition-colors"
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 border border-accent/30 shrink-0">
                  <Icon className="w-5 h-5 text-accent" />
                </span>
                <div className="min-w-0">
                  <h2 className="text-base font-medium text-foreground group-hover:text-accent transition-colors">
                    {isEs ? r.cardTitleEs : r.cardTitleEn}
                  </h2>
                  <p className="text-xs text-muted mt-0.5">
                    {r.direction === "asc"
                      ? isEs
                        ? "De más barata a más cara"
                        : "From cheapest to most expensive"
                      : isEs
                      ? "De mejor a peor puntuación"
                      : "From best to worst score"}
                  </p>
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

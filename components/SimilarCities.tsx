"use client";

import Link from "next/link";
import { cities, type City } from "@/data/cities";
import { useLanguage } from "@/lib/i18n";
import { tCity, tCountry, formatMoney } from "@/lib/dictionary";

function similar(city: City, n: number): City[] {
  return cities
    .filter((c) => c.slug !== city.slug)
    .map((c) => ({
      c,
      score:
        Math.abs(c.costPerMonth - city.costPerMonth) / Math.max(city.costPerMonth, 1) +
        Math.abs(c.safetyScore - city.safetyScore) / 10 +
        Math.abs(c.qualityOfLife - city.qualityOfLife) / 10 +
        (c.country === city.country ? -0.35 : 0) +
        (c.continent === city.continent ? -0.1 : 0) +
        (c.hasBeach === city.hasBeach ? -0.05 : 0),
    }))
    .sort((a, b) => a.score - b.score)
    .slice(0, n)
    .map((x) => x.c);
}

export default function SimilarCities({ city }: { city: City }) {
  const { lang } = useLanguage();
  const list = similar(city, 6);
  const name = tCity(city.name, lang);
  return (
    <section aria-labelledby="similar-cities">
      <h2 id="similar-cities" className="text-3xl mb-4">
        {lang === "en" ? `Cities similar to ${name}` : `Ciudades parecidas a ${name}`}
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {list.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/cities/${c.slug}`}
              className="block bg-card border border-white/10 rounded-2xl p-4 hover:border-accent/70 transition-colors"
            >
              <span className="block text-foreground font-medium">{tCity(c.name, lang)}</span>
              <span className="block text-xs text-muted mt-0.5">
                {tCountry(c.country, lang)} · {c.currency} {formatMoney(c.costPerMonth, lang)}
                {lang === "en" ? "/mo" : "/mes"}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

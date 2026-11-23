"use client";

import Link from "@/components/LocaleLink";
import type { City } from "@/data/cities";
import { similarCities, hasPair, pairSlug } from "@/lib/pairs";
import { useLanguage } from "@/lib/i18n";
import { tCity, tCountry, formatMoney } from "@/lib/dictionary";

export default function SimilarCities({ city }: { city: City }) {
  const { lang } = useLanguage();
  const list = similarCities(city, 6);
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
      <p className="mt-4 text-sm text-muted">
        {lang === "en" ? "Compare: " : "Comparar: "}
        {list.filter((c) => hasPair(city.slug, c.slug)).slice(0, 3).map((c, i) => (
          <span key={c.slug}>
            {i > 0 && " · "}
            <Link href={`/compare/${pairSlug(city.slug, c.slug)}`} className="text-accent hover:underline">
              {tCity(city.name, lang)} vs {tCity(c.name, lang)}
            </Link>
          </span>
        ))}
      </p>
    </section>
  );
}

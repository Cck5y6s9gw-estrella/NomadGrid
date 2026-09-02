"use client";

import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import { cities } from "@/data/cities";
import { useLanguage } from "@/lib/i18n";
import { t, formatMoney, tCountry } from "@/lib/dictionary";

export default function Home() {
  const { lang } = useLanguage();
  const { isSignedIn } = useUser();
  const d = t(lang);
  const featured = cities.slice(0, 6);

  const cheapest = cities.reduce((min, c) => (c.costPerMonth < min.costPerMonth ? c : min), cities[0]);
  const fastestInternet = Math.max(...cities.map((c) => c.internetSpeed));
  const safest = Math.max(...cities.map((c) => c.safetyScore));
  const continentCount = new Set(cities.map((c) => c.continent)).size;

  const stats = [
    { label: d.statCities, value: String(cities.length) },
    { label: d.statContinents, value: String(continentCount) },
    { label: d.statIndicators, value: "4" },
    { label: d.statCheapest, value: `${cheapest.currency} ${cheapest.costPerMonth}${d.perMonth}` },
    { label: d.statFastestInternet, value: `${fastestInternet} Mbps` },
    { label: d.statSafest, value: `${safest.toFixed(1)}/10` },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 text-center max-w-4xl mx-auto">
        <div className="inline-block text-xs font-medium tracking-widest text-muted uppercase mb-6 border border-border px-3 py-1 rounded-full">
          {d.heroBadge(cities.length)}
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
          {d.heroTitle1}<br />
          <span className="text-accent">{d.heroTitle2}</span>
        </h1>
        <p className="text-lg text-muted mb-10 max-w-xl mx-auto leading-relaxed">
          {d.heroSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/cities" className="bg-accent text-white px-8 py-3 rounded-full font-medium text-sm hover:opacity-90 transition-opacity">
            {d.exploreCities}
          </Link>
          <Link href="/compare" className="border border-border text-foreground px-8 py-3 rounded-full font-medium text-sm hover:border-accent transition-colors">
            {d.compareCities}
          </Link>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-border py-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 md:grid-cols-6 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-xl font-semibold text-foreground">{s.value}</div>
              <div className="text-xs text-muted mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured cities */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-semibold">{d.featuredCities}</h2>
          <Link href="/cities" className="text-sm text-muted hover:text-accent transition-colors">
            {d.seeAll}
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((city) => (
            <Link key={city.slug} href={`/cities/${city.slug}`} className="group relative overflow-hidden rounded-2xl border border-border hover:border-accent transition-all duration-300">
              <img
                src={city.imageUrl}
                alt={city.name}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{city.name}</h3>
                    <p className="text-sm text-muted">{tCountry(city.country, lang)}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-foreground">{city.currency} {formatMoney(city.costPerMonth, lang)}</div>
                    <div className="text-xs text-muted">{d.monthly}</div>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  {city.hasBeach && (
                    <span className="text-xs bg-card border border-border px-2 py-0.5 rounded-full">🏖 {d.beach}</span>
                  )}
                  <span className="text-xs bg-card border border-border px-2 py-0.5 rounded-full">⭐ {city.qualityOfLife}</span>
                  <span className="text-xs bg-card border border-border px-2 py-0.5 rounded-full">🛜 {city.internetSpeed} Mbps</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Favorites promo — solo tiene sentido para quien no tiene cuenta
          todavia; si ya ha iniciado sesion, se oculta. */}
      {!isSignedIn && (
        <section className="border-t border-border py-16 px-6">
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <div className="text-4xl shrink-0">❤️</div>
            <div className="flex-1 text-center sm:text-left">
              <div className="inline-block text-[10px] font-semibold tracking-widest text-accent uppercase mb-2 border border-accent/40 px-2 py-0.5 rounded-full">
                {d.homeFavoritesBadge}
              </div>
              <h2 className="text-xl font-semibold mb-1.5">{d.homeFavoritesTitle}</h2>
              <p className="text-muted text-sm">{d.homeFavoritesSubtitle}</p>
            </div>
            <Link
              href="/favoritos"
              className="shrink-0 bg-accent text-white px-6 py-2.5 rounded-full font-medium text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              {d.homeFavoritesCta}
            </Link>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-border py-20 text-center px-6">
        <h2 className="text-3xl font-semibold mb-4">{d.ctaTitle}</h2>
        <p className="text-muted mb-8">{d.ctaSubtitle}</p>
        <Link href="/cities" className="bg-accent text-white px-8 py-3 rounded-full font-medium text-sm hover:opacity-90 transition-opacity">
          {d.ctaButton(cities.length)}
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 text-center text-xs text-muted">
        {d.footerText}
        <span className="mx-2">·</span>
        <Link href="/feedback" className="hover:text-accent transition-colors">{d.footerFeedback}</Link>
      </footer>
    </main>
  );
}

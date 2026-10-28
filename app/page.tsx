"use client";

import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import { cities } from "@/data/cities";
import { useLanguage } from "@/lib/i18n";
import { t, formatMoney, tCity } from "@/lib/dictionary";
import { IconHeart } from "@/components/Icon";
import CityCard from "@/components/CityCard";

export default function Home() {
  const { lang } = useLanguage();
  const { isSignedIn } = useUser();
  const d = t(lang);
  const bySlug = (slug: string) => cities.find((c) => c.slug === slug);
  const featured = ["breslavia", "tampa", "hyderabad", "lille"]
    .map(bySlug)
    .filter((c): c is (typeof cities)[number] => Boolean(c));
  const collage = ["breslavia", "hyderabad", "lille"]
    .map(bySlug)
    .filter((c): c is (typeof cities)[number] => Boolean(c));
  const collagePos: React.CSSProperties[] = [
    { width: "56%", height: "62%", left: 0, top: 0 },
    { width: "46%", height: "50%", right: 0, top: "12%" },
    { width: "50%", height: "42%", left: "14%", bottom: 0 },
  ];

  const cheapest = cities.reduce((min, c) => (c.costPerMonth < min.costPerMonth ? c : min), cities[0]);
  const fastestInternet = Math.max(...cities.map((c) => c.internetSpeed));
  const safest = Math.max(...cities.map((c) => c.safetyScore));
  const continentCount = new Set(cities.map((c) => c.continent)).size;

  const stats = [
    { label: d.statCities, value: String(cities.length) },
    { label: d.statContinents, value: String(continentCount) },
    { label: d.statIndicators, value: "7" },
    { label: d.statCheapest, value: `${cheapest.costPerMonth} ${cheapest.currency === "EUR" ? "€" : cheapest.currency}${d.perMonth}` },
    { label: d.statFastestInternet, value: `${fastestInternet} Mbps` },
    { label: d.statSafest, value: `${safest.toFixed(1)}/10` },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 sm:pt-36 pb-14 grid lg:grid-cols-[1.15fr_.85fr] gap-10 lg:gap-12 items-center">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 font-mono text-[11.5px] tracking-[0.14em] uppercase text-muted border border-line rounded-full px-3 py-1.5 mb-6">
            <i className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_0_3px_rgba(74,222,128,0.18)]" />
            {d.heroBadge(cities.length)}
          </div>
          <h1 className="font-display font-normal text-[clamp(46px,7.4vw,88px)] leading-[0.98] tracking-tight mb-5 text-balance">
            {lang === "es" ? "Elige dónde vivir con " : "Choose where to live with "}
            <em className="text-accent italic">{lang === "es" ? "datos" : "data"}</em>
            {lang === "es" ? ", no con intuición." : ", not gut feeling."}
          </h1>
          <p className="text-[17px] text-foreground/75 mb-7 max-w-[34em] leading-relaxed">{d.heroSubtitle}</p>
          <div className="flex flex-wrap gap-2">
            <Link href="/cities" className="bg-accent text-white px-4 py-2 rounded-full font-medium text-[12.5px] hover:opacity-90 transition-opacity">
              {d.exploreCities}
            </Link>
            <Link href="/compare" className="border border-line text-foreground px-4 py-2 rounded-full font-medium text-[12.5px] hover:bg-foreground/10 transition-colors">
              {d.compareCities}
            </Link>
          </div>
        </div>

        <div className="relative h-[320px] lg:h-[420px]" aria-hidden="true">
          {collage.map((c, i) => (
            <div
              key={c.slug}
              style={{ animationDelay: `${i * 140}ms`, ...collagePos[i] }}
              className="animate-pop-in absolute rounded-[22px] overflow-hidden border border-line shadow-2xl shadow-black/40"
            >
              <img src={c.imageUrl} alt="" className="w-full h-full object-cover" />
              <div className="absolute left-2.5 bottom-2.5 flex items-center gap-2 bg-glass backdrop-blur-md border border-line rounded-full px-2.5 py-1 text-xs text-foreground">
                <span>{tCity(c.name, lang)}</span>
                <span className="font-mono text-accent">{formatMoney(c.costPerMonth, lang)} €</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats ledger */}
      <section className="border-y border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-3 md:grid-cols-6">
          {stats.map((s, i) => (
            <div key={s.label} className={`py-4 px-3 md:px-4 border-line ${i % 3 !== 0 ? "border-l" : ""} ${i > 0 ? "md:border-l" : ""} ${i >= 3 ? "border-t md:border-t-0" : ""} ${i === 0 ? "pl-0" : ""}`}>
              <div className="font-mono font-medium text-lg sm:text-[22px] tracking-tight text-foreground">{s.value}</div>
              <div className="text-xs text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured cities */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16">
        <div className="flex items-end justify-between flex-wrap gap-3 mb-7">
          <h2 className="font-display text-[clamp(32px,4vw,46px)] leading-none">{d.featuredCities}</h2>
          <Link href="/cities" className="text-[13.5px] text-muted hover:text-accent transition-colors">
            {d.seeAll}
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((city, i) => (
            <CityCard key={city.slug} city={city} index={i} />
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-16">
        <h2 className="font-display text-[clamp(32px,4vw,46px)] leading-none mb-7">
          {lang === "es" ? "Decide más rápido" : "Decide faster"}
        </h2>
        <div className="grid lg:grid-cols-[1.2fr_1fr_1fr] gap-4">
          <Link href="/match" className="group flex flex-col justify-between gap-7 min-h-[220px] p-6 rounded-3xl border border-line bg-card hover:border-accent hover:-translate-y-0.5 transition-all">
            <div>
              <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted mb-3">MoveMatch</div>
              <h3 className="font-display text-[32px] leading-[1.02] mb-2">{lang === "es" ? "¿Cuál es tu ciudad ideal?" : "What's your ideal city?"}</h3>
              <p className="text-sm text-foreground/75 max-w-[30em]">{d.matchHomeCta}</p>
            </div>
            <div className="flex justify-between text-[13.5px] text-accent"><span>{lang === "es" ? "Hacer el test" : "Take the test"}</span><span>→</span></div>
          </Link>
          <Link href="/calculadora" className="group flex flex-col justify-between gap-7 min-h-[220px] p-6 rounded-3xl border border-line bg-card hover:border-accent hover:-translate-y-0.5 transition-all">
            <div>
              <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted mb-3">{lang === "es" ? "Calculadora de ciudades" : "City calculator"}</div>
              <h3 className="font-display text-[32px] leading-[1.02] mb-2">{lang === "es" ? "¿Dónde rinde más tu dinero?" : "Where does your money go furthest?"}</h3>
              <p className="text-sm text-foreground/75">{lang === "es" ? "Presupuesto, alquiler y ahorros: tu top 5 de ciudades." : "Budget, rent and savings: your top 5 cities."}</p>
            </div>
            <div className="flex justify-between text-[13.5px] text-accent"><span>{lang === "es" ? "Calcular" : "Calculate"}</span><span>→</span></div>
          </Link>
          <Link href="/compare" className="group flex flex-col justify-between gap-7 min-h-[220px] p-6 rounded-3xl border border-line bg-card hover:border-accent hover:-translate-y-0.5 transition-all">
            <div>
              <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted mb-3">{lang === "es" ? "Comparador" : "Comparison"}</div>
              <h3 className="font-display text-[32px] leading-[1.02] mb-2">{lang === "es" ? "Cara a cara" : "Head to head"}</h3>
              <p className="text-sm text-foreground/75">{lang === "es" ? "Ciudades, todos los indicadores, una decisión." : "Cities, every indicator, one decision."}</p>
            </div>
            <div className="flex justify-between text-[13.5px] text-accent"><span>{d.compareCities}</span><span>→</span></div>
          </Link>
        </div>
      </section>

      {/* Favorites promo — solo tiene sentido para quien no tiene cuenta
          todavia; si ya ha iniciado sesion, se oculta. */}
      {!isSignedIn && (
        <section className="border-t border-border py-16 px-6">
          <div className="max-w-4xl mx-auto bg-card border border-line rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <IconHeart className="w-9 h-9 shrink-0 text-accent" />
            <div className="flex-1 text-center sm:text-left">
              <div className="inline-block text-[10px] font-semibold tracking-widest text-accent uppercase mb-2 border border-accent/40 px-2 py-0.5 rounded-full">
                {d.homeFavoritesBadge}
              </div>
              <h2 className="text-2xl mb-1.5">{d.homeFavoritesTitle}</h2>
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
        <h2 className="font-display text-5xl mb-4">{d.ctaTitle}</h2>
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

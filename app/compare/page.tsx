"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { cities, City } from "@/data/cities";
import { useLanguage, type Lang } from "@/lib/i18n";
import { t, formatMoney, tCountry, tContinent, tClimate } from "@/lib/dictionary";
import { trackEvent } from "@/lib/gtag";

function buildMetrics(lang: Lang) {
  const d = t(lang);
  return [
    { key: "costPerMonth", label: d.metricCost, format: (c: City) => `${c.currency} ${formatMoney(c.costPerMonth, lang)}`, best: "min" },
    { key: "internetSpeed", label: d.metricInternet, format: (c: City) => `${c.internetSpeed} Mbps`, best: "max" },
    { key: "safetyScore", label: d.metricSafety, format: (c: City) => `${c.safetyScore} / 10`, best: "max" },
    { key: "qualityOfLife", label: d.metricQuality, format: (c: City) => `${c.qualityOfLife} / 10`, best: "max" },
    { key: "climateType", label: d.metricClimate, format: (c: City) => tClimate(c.climateType, lang), best: "none" },
    { key: "hasBeach", label: d.metricBeach, format: (c: City) => (c.hasBeach ? d.yes : d.no), best: "none" },
    { key: "continent", label: d.metricContinent, format: (c: City) => tContinent(c.continent, lang), best: "none" },
  ] as const;
}

export default function ComparePage() {
  const { lang } = useLanguage();
  const d = t(lang);
  const metrics = buildMetrics(lang);
  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const filtered = cities.filter(
    (c) =>
      (c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.country.toLowerCase().includes(search.toLowerCase()) ||
        tCountry(c.country, lang).toLowerCase().includes(search.toLowerCase())) &&
      !selected.includes(c.slug)
  );

  const selectedCities = selected.map((s) => cities.find((c) => c.slug === s)!);

  const addCity = (slug: string) => {
    if (selected.length < 3) {
      const next = [...selected, slug];
      setSelected(next);
      if (next.length === 2) {
        trackEvent("comparison_started", { cities: next.join(",") });
      }
    }
  };

  const removeCity = (slug: string) => {
    setSelected(selected.filter((s) => s !== slug));
  };

  const getBest = (metric: ReturnType<typeof buildMetrics>[number], cities: City[]) => {
    if (metric.best === "none" || cities.length < 2) return null;
    const values = cities.map((c) => c[metric.key as keyof City] as number);
    return metric.best === "max" ? Math.max(...values) : Math.min(...values);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">
        <div className="mb-10">
          <div className="text-xs font-medium tracking-widest text-accent uppercase mb-3">{d.compareBadge}</div>
          <h1 className="text-3xl font-semibold mb-2 tracking-tight">
            {d.compareTitle1} <span className="text-accent">{d.compareTitle2}</span>
          </h1>
          <p className="text-muted text-sm">{d.compareSubtitle}</p>
        </div>

        {/* City selector */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {selectedCities.map((city) => (
              <div key={city.slug} className="flex items-center gap-2.5 bg-accent/5 border border-accent/30 rounded-full pl-4 pr-2 py-2">
                <span className="text-sm font-medium text-foreground">{city.name}</span>
                <button
                  onClick={() => removeCity(city.slug)}
                  className="w-5 h-5 flex items-center justify-center rounded-full text-muted hover:text-accent hover:bg-accent/10 transition-colors text-sm leading-none"
                >
                  ×
                </button>
              </div>
            ))}
            {selected.length === 0 && (
              <div className="flex items-center gap-2 text-sm text-muted px-1 py-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {d.noCitySelected}
              </div>
            )}
          </div>

          {selected.length < 3 && (
            <div className="bg-card border border-border focus-within:border-accent/60 rounded-2xl p-1.5 transition-colors">
              <input
                type="text"
                placeholder={d.searchCityOrCountry}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent text-sm text-foreground placeholder-muted focus:outline-none px-3.5 py-2.5 border-b border-border"
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 max-h-72 overflow-y-auto p-1.5">
                {filtered.map((city) => (
                  <button
                    key={city.slug}
                    onClick={() => addCity(city.slug)}
                    className="group relative overflow-hidden rounded-xl border border-transparent hover:border-accent/50 transition-colors touch-manipulation"
                  >
                    <img
                      src={city.imageUrl}
                      alt={city.name}
                      className="w-full h-20 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-2 text-left">
                      <div className="text-xs font-medium text-foreground leading-tight">{city.name}</div>
                      <div className="text-[10px] text-muted leading-tight">{tCountry(city.country, lang)}</div>
                    </div>
                  </button>
                ))}
                {filtered.length === 0 && (
                  <div className="col-span-full text-sm text-muted text-center py-6">{d.noCitiesFoundShort}</div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Comparison */}
        {selectedCities.length >= 2 ? (
          <>
            {/* Desktop / tablet: side-by-side grid */}
            <div className="hidden sm:block bg-card border border-border rounded-2xl overflow-hidden">
              {/* City header row */}
              <div
                className="grid border-b border-border"
                style={{ gridTemplateColumns: `10rem repeat(${selectedCities.length}, 1fr)` }}
              >
                <div className="py-5 px-5 flex items-center">
                  <img src="/logo-icon.png" alt="Roavio" className="h-6 w-auto opacity-30" />
                </div>
                {selectedCities.map((city) => (
                  <div key={city.slug} className="border-l border-border">
                    <div className="relative h-28 overflow-hidden">
                      <img src={city.imageUrl} alt={city.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                    </div>
                    <div className="py-4 px-5">
                      <div className="font-semibold text-foreground">{city.name}</div>
                      <div className="text-xs text-muted mt-0.5">{tCountry(city.country, lang)}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Metric rows */}
              {metrics.map((metric, i) => {
                const best = getBest(metric, selectedCities);
                return (
                  <div
                    key={metric.key}
                    className={`grid ${i !== metrics.length - 1 ? "border-b border-border/60" : ""}`}
                    style={{ gridTemplateColumns: `10rem repeat(${selectedCities.length}, 1fr)` }}
                  >
                    <div className="py-4 px-5 text-sm text-muted flex items-center">{metric.label}</div>
                    {selectedCities.map((city) => {
                      const raw = city[metric.key as keyof City] as number;
                      const isBest = best !== null && raw === best;
                      return (
                        <div
                          key={city.slug}
                          className="py-4 px-5 border-l border-border/60 flex items-center gap-2"
                        >
                          <span className={`text-sm font-medium ${isBest ? "text-accent" : "text-foreground"}`}>
                            {metric.format(city)}
                          </span>
                          {isBest && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>

            {/* Mobile: stacked cards, one per city */}
            <div className="sm:hidden space-y-6">
              {selectedCities.map((city) => (
                <div key={city.slug} className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="relative h-36 overflow-hidden">
                    <img src={city.imageUrl} alt={city.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="font-semibold text-foreground text-lg">{city.name}</div>
                      <div className="text-xs text-muted">{tCountry(city.country, lang)}</div>
                    </div>
                  </div>
                  <div>
                    {metrics.map((metric, i) => {
                      const best = getBest(metric, selectedCities);
                      const raw = city[metric.key as keyof City] as number;
                      const isBest = best !== null && raw === best;
                      return (
                        <div
                          key={metric.key}
                          className={`flex items-center justify-between px-5 py-3.5 ${i !== metrics.length - 1 ? "border-b border-border/60" : ""}`}
                        >
                          <span className="text-sm text-muted">{metric.label}</span>
                          <span className={`text-sm font-medium flex items-center gap-2 ${isBest ? "text-accent" : "text-foreground"}`}>
                            {metric.format(city)}
                            {isBest && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-24 border border-dashed border-accent/30 rounded-2xl">
            <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4 text-lg">
              ⚖
            </div>
            <p className="text-muted">{d.selectTwoToCompare}</p>
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

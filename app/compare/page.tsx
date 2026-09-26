"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import { cities, City } from "@/data/cities";
import { useLanguage, type Lang } from "@/lib/i18n";
import { t, formatMoney, tCountry, tContinent, tClimate } from "@/lib/dictionary";
import { trackEvent } from "@/lib/gtag";
import { IconScale, IconHeart } from "@/components/Icon";
import { findVsArticle, vsArticles } from "@/lib/vsArticles";

const MAX_CITIES = 4;
const STORAGE_KEY = "roavio_last_compare";
const SOURCE_KEYS = ["costPerMonth", "internetSpeed", "safetyScore", "qualityOfLife"] as const;

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
    { key: "bestTimeToVisit", label: d.metricBestTime, format: (c: City) => c.bestTimeToVisit, best: "none" },
  ] as const;
}

function slugsFromParam(param: string | null): string[] {
  if (!param) return [];
  return param
    .split(",")
    .map((s) => s.trim())
    .filter((s) => cities.some((c) => c.slug === s))
    .slice(0, MAX_CITIES);
}

function ComparePageInner() {
  const { lang } = useLanguage();
  const d = t(lang);
  const metrics = buildMetrics(lang);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isSignedIn, user } = useUser();
  const tableRef = useRef<HTMLDivElement>(null);

  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [budget, setBudget] = useState("");
  const [hydrated, setHydrated] = useState(false);
  const [sharing, setSharing] = useState(false);

  // On mount: prefer the URL's ?cities= param, fall back to the last saved comparison.
  useEffect(() => {
    const fromUrl = slugsFromParam(searchParams.get("cities"));
    if (fromUrl.length > 0) {
      setSelected(fromUrl);
    } else {
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved) as string[];
          setSelected(slugsFromParam(parsed.join(",")));
        }
      } catch {
        // ignore malformed/blocked storage
      }
    }
    setHydrated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the URL and localStorage in sync with the current selection.
  useEffect(() => {
    if (!hydrated) return;
    const query = selected.length > 0 ? `?cities=${selected.join(",")}` : "";
    router.replace(`/compare${query}`, { scroll: false });
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(selected));
    } catch {
      // ignore blocked storage (private mode, etc.)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, hydrated]);

  const favoriteSlugs = (user?.unsafeMetadata?.favorites as string[] | undefined) ?? [];

  const filtered = cities.filter(
    (c) =>
      (c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.country.toLowerCase().includes(search.toLowerCase()) ||
        tCountry(c.country, lang).toLowerCase().includes(search.toLowerCase())) &&
      !selected.includes(c.slug)
  );

  const selectedCities = selected.map((s) => cities.find((c) => c.slug === s)!).filter(Boolean);

  const addCity = (slug: string) => {
    if (selected.length < MAX_CITIES) {
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

  const loadFavorites = () => {
    if (favoriteSlugs.length === 0) return;
    const next = favoriteSlugs.slice(0, MAX_CITIES);
    setSelected(next);
    trackEvent("comparison_loaded_favorites", { cities: next.join(",") });
  };

  const getBest = (metric: ReturnType<typeof buildMetrics>[number], list: City[]) => {
    if (metric.best === "none" || list.length < 2) return null;
    const values = list.map((c) => c[metric.key as keyof City] as number);
    return metric.best === "max" ? Math.max(...values) : Math.min(...values);
  };

  const diffFromBest = (metric: ReturnType<typeof buildMetrics>[number], city: City, best: number | null) => {
    if (best === null || best === 0) return null;
    const raw = city[metric.key as keyof City] as number;
    if (raw === best) return null;
    const pct = Math.round(((raw - best) / best) * 100);
    if (pct === 0) return null;
    return pct;
  };

  const budgetValue = budget.trim() === "" ? null : Number(budget);
  const vsArticleSlug = findVsArticle(selected);

  const shareAsImage = async () => {
    if (!tableRef.current || sharing) return;
    setSharing(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(tableRef.current, {
        backgroundColor:
          getComputedStyle(document.documentElement).getPropertyValue("--background").trim() || "#0b0f1a",
        scale: 2,
        useCORS: true,
      });
      const link = document.createElement("a");
      link.download = `roavio-${selected.join("-vs-")}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
      trackEvent("comparison_shared_image", { cities: selected.join(",") });
    } catch {
      // best-effort: some browsers/extensions can block canvas export
    } finally {
      setSharing(false);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
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
          <div className="flex flex-wrap items-center gap-2 mb-4">
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
            {isSignedIn && favoriteSlugs.length > 0 && (
              <button
                onClick={loadFavorites}
                className="flex items-center gap-1.5 text-xs font-medium text-muted hover:text-accent border border-border hover:border-accent/50 rounded-full px-3 py-2 transition-colors"
              >
                <IconHeart className="w-3.5 h-3.5" />
                {d.compareLoadFavorites}
              </button>
            )}
          </div>

          {selected.length < MAX_CITIES && (
            <div className="bg-card border border-border focus-within:border-accent/60 rounded-2xl p-1.5 transition-colors">
              <input
                type="text"
                placeholder={d.searchCityOrCountry}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent text-sm text-foreground placeholder-muted focus:outline-none px-3.5 py-2.5 border-b border-border"
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 max-h-72 overflow-y-auto p-1.5">
                {filtered.map((city, i) => (
                  <button
                    key={city.slug}
                    onClick={() => addCity(city.slug)}
                    style={{ animationDelay: `${Math.min(i, 8) * 40}ms` }}
                    className="animate-pop-in group relative overflow-hidden rounded-xl border border-transparent hover:border-accent/50 transition-colors touch-manipulation"
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
            {vsArticleSlug && (
              <Link
                href={`/articulos/${vsArticleSlug}`}
                className="animate-fade-up mb-6 flex items-center gap-2 text-sm text-accent hover:underline"
              >
                📖 {d.compareReadArticle}
              </Link>
            )}

            <div className="animate-fade-up flex flex-wrap items-center gap-3 mb-6">
              <label className="flex items-center gap-2 bg-card border border-border rounded-full pl-4 pr-2 py-1.5">
                <span className="text-xs text-muted whitespace-nowrap">{d.compareBudgetLabel}</span>
                <input
                  type="number"
                  inputMode="numeric"
                  placeholder={d.compareBudgetPlaceholder}
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-20 bg-transparent text-sm text-foreground placeholder-muted focus:outline-none py-1"
                />
              </label>
              <button
                onClick={shareAsImage}
                disabled={sharing}
                className="text-xs font-medium text-muted hover:text-accent border border-border hover:border-accent/50 rounded-full px-4 py-2 transition-colors disabled:opacity-50"
              >
                {sharing ? d.compareShareImageGenerating : `📤 ${d.compareShareImage}`}
              </button>
            </div>

            <div ref={tableRef}>
              {/* Desktop / tablet: side-by-side grid */}
              <div className="hidden sm:block bg-card border border-white/10 rounded-3xl overflow-hidden shadow-lg shadow-black/20">
                {/* City header row */}
                <div
                  className="grid border-b border-border"
                  style={{ gridTemplateColumns: `10rem repeat(${selectedCities.length}, 1fr)` }}
                >
                  <div className="py-5 px-5 flex items-center justify-center">
                    <img src="/logo-icon.png" alt="Roavio" className="h-9 w-auto" />
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
                  const hasSource = (SOURCE_KEYS as readonly string[]).includes(metric.key);
                  return (
                    <div
                      key={metric.key}
                      className="grid border-b border-border/60"
                      style={{ gridTemplateColumns: `10rem repeat(${selectedCities.length}, 1fr)` }}
                    >
                      <div className="py-4 px-5 text-sm text-muted flex items-center">{metric.label}</div>
                      {selectedCities.map((city) => {
                        const raw = city[metric.key as keyof City] as number;
                        const isBest = best !== null && raw === best;
                        const diff = diffFromBest(metric, city, best);
                        const sourceUrl = hasSource
                          ? (city.sources as Record<string, string>)[metric.key === "costPerMonth" ? "costOfLiving" : metric.key === "internetSpeed" ? "internet" : metric.key === "safetyScore" ? "safety" : "qualityOfLife"]
                          : null;
                        return (
                          <div key={city.slug} className="py-4 px-5 border-l border-border/60 flex items-center gap-2">
                            <span className={`text-sm font-medium ${isBest ? "text-accent" : "text-foreground"}`}>
                              {metric.format(city)}
                            </span>
                            {isBest && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                            {diff !== null && (
                              <span className="text-[11px] text-muted">
                                {diff > 0 ? "+" : ""}
                                {diff}%
                              </span>
                            )}
                            {sourceUrl && (
                              <a
                                href={sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={d.compareSourceLabel}
                                className="text-[10px] text-muted/60 hover:text-accent transition-colors"
                              >
                                ↗
                              </a>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}

                {/* Budget row */}
                {budgetValue !== null && !Number.isNaN(budgetValue) && (
                  <div
                    className="grid border-b border-border/60"
                    style={{ gridTemplateColumns: `10rem repeat(${selectedCities.length}, 1fr)` }}
                  >
                    <div className="py-4 px-5 text-sm text-muted flex items-center">{d.compareBudgetLabel}</div>
                    {selectedCities.map((city) => {
                      const within = city.costPerMonth <= budgetValue;
                      return (
                        <div key={city.slug} className="py-4 px-5 border-l border-border/60 flex items-center">
                          <span className={`text-xs font-medium ${within ? "text-emerald-400" : "text-red-400"}`}>
                            {within ? `✓ ${d.compareWithinBudget}` : `✗ ${d.compareOverBudget}`}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Pros row */}
                <div
                  className="grid border-b border-border/60"
                  style={{ gridTemplateColumns: `10rem repeat(${selectedCities.length}, 1fr)` }}
                >
                  <div className="py-4 px-5 text-sm text-muted flex items-start pt-4">{d.compareProsLabel}</div>
                  {selectedCities.map((city) => (
                    <div key={city.slug} className="py-4 px-5 border-l border-border/60">
                      <ul className="space-y-1.5">
                        {city.pros.slice(0, 3).map((pro, idx) => (
                          <li key={idx} className="text-xs text-foreground/90 flex gap-1.5">
                            <span className="text-emerald-400">+</span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Cons row */}
                <div
                  className="grid"
                  style={{ gridTemplateColumns: `10rem repeat(${selectedCities.length}, 1fr)` }}
                >
                  <div className="py-4 px-5 text-sm text-muted flex items-start pt-4">{d.compareConsLabel}</div>
                  {selectedCities.map((city) => (
                    <div key={city.slug} className="py-4 px-5 border-l border-border/60">
                      <ul className="space-y-1.5">
                        {city.cons.slice(0, 3).map((con, idx) => (
                          <li key={idx} className="text-xs text-foreground/90 flex gap-1.5">
                            <span className="text-red-400">−</span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile: stacked cards, one per city */}
              <div className="sm:hidden space-y-6">
                {selectedCities.map((city, i) => (
                  <div
                    key={city.slug}
                    style={{ animationDelay: `${Math.min(i, 8) * 60}ms` }}
                    className="animate-pop-in bg-card border border-white/10 rounded-3xl overflow-hidden shadow-lg shadow-black/20"
                  >
                    <div className="relative h-36 overflow-hidden">
                      <img src={city.imageUrl} alt={city.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="font-semibold text-foreground text-lg">{city.name}</div>
                        <div className="text-xs text-muted">{tCountry(city.country, lang)}</div>
                      </div>
                    </div>
                    <div>
                      {metrics.map((metric, mi) => {
                        const best = getBest(metric, selectedCities);
                        const raw = city[metric.key as keyof City] as number;
                        const isBest = best !== null && raw === best;
                        const diff = diffFromBest(metric, city, best);
                        return (
                          <div
                            key={metric.key}
                            className={`flex items-center justify-between px-5 py-3.5 ${mi !== metrics.length - 1 ? "border-b border-border/60" : ""}`}
                          >
                            <span className="text-sm text-muted">{metric.label}</span>
                            <span className={`text-sm font-medium flex items-center gap-2 ${isBest ? "text-accent" : "text-foreground"}`}>
                              {metric.format(city)}
                              {diff !== null && (
                                <span className="text-[11px] text-muted">
                                  {diff > 0 ? "+" : ""}
                                  {diff}%
                                </span>
                              )}
                              {isBest && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                            </span>
                          </div>
                        );
                      })}
                      {budgetValue !== null && !Number.isNaN(budgetValue) && (
                        <div className="flex items-center justify-between px-5 py-3.5 border-b border-border/60">
                          <span className="text-sm text-muted">{d.compareBudgetLabel}</span>
                          <span className={`text-xs font-medium ${city.costPerMonth <= budgetValue ? "text-emerald-400" : "text-red-400"}`}>
                            {city.costPerMonth <= budgetValue ? `✓ ${d.compareWithinBudget}` : `✗ ${d.compareOverBudget}`}
                          </span>
                        </div>
                      )}
                      <div className="px-5 py-3.5 border-b border-border/60">
                        <div className="text-sm text-muted mb-2">{d.compareProsLabel}</div>
                        <ul className="space-y-1.5">
                          {city.pros.slice(0, 3).map((pro, idx) => (
                            <li key={idx} className="text-xs text-foreground/90 flex gap-1.5">
                              <span className="text-emerald-400">+</span>
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="px-5 py-3.5">
                        <div className="text-sm text-muted mb-2">{d.compareConsLabel}</div>
                        <ul className="space-y-1.5">
                          {city.cons.slice(0, 3).map((con, idx) => (
                            <li key={idx} className="text-xs text-foreground/90 flex gap-1.5">
                              <span className="text-red-400">−</span>
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-16 border border-dashed border-accent/30 rounded-2xl">
            <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
              <IconScale className="w-5 h-5 animate-pop-in" />
            </div>
            <p className="text-muted mb-8">{d.selectTwoToCompare}</p>

            <div className="max-w-lg mx-auto px-6">
              <div className="text-xs font-medium tracking-widest text-muted uppercase mb-3">
                {d.compareSuggestedTitle}
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {vsArticles.map((entry) => {
                  const cityA = cities.find((c) => c.slug === entry.slugs[0]);
                  const cityB = cities.find((c) => c.slug === entry.slugs[1]);
                  if (!cityA || !cityB) return null;
                  return (
                    <button
                      key={entry.article}
                      onClick={() => setSelected([cityA.slug, cityB.slug])}
                      className="text-xs font-medium text-foreground bg-card border border-border hover:border-accent/50 hover:text-accent rounded-full px-4 py-2 transition-colors"
                    >
                      {cityA.name} {d.compareVsLink} {cityB.name}
                    </button>
                  );
                })}
              </div>
            </div>
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

export default function ComparePage() {
  return (
    <Suspense fallback={null}>
      <ComparePageInner />
    </Suspense>
  );
}

"use client";

import Link from "next/link";
import Navbar from "./Navbar";
import CityGuideSection from "./CityGuideSection";
import { cities, type City } from "@/data/cities";
import { visaDisclaimer, visaDisclaimerEn, type CityGuide } from "@/data/cityGuides";
import { useLanguage } from "@/lib/i18n";
import { t, formatMoney, tCountry, tContinent, tClimate } from "@/lib/dictionary";
import { getCityInsights } from "@/lib/cityInsights";

export default function CityDetailClient({ city, guide }: { city: City; guide: CityGuide }) {
  const { lang } = useLanguage();
  const d = t(lang);

  const { strengths, considerations } = getCityInsights(city, cities, lang);

  const stats = [
    { label: d.statCostMonth, value: `${city.currency} ${formatMoney(city.costPerMonth, lang)}`, icon: "💰" },
    { label: d.statInternetLabel, value: `${city.internetSpeed} Mbps`, icon: "🛜" },
    { label: d.statSafetyLabel, value: `${city.safetyScore} / 10`, icon: "🔒" },
    { label: d.statClimateLabel, value: tClimate(city.climateType, lang), icon: "🌤" },
    { label: d.statQualityLabel, value: `${city.qualityOfLife} / 10`, icon: "⭐" },
    { label: d.statBeachLabel, value: city.hasBeach ? d.yes : d.no, icon: "🏖" },
  ];

  const sourceRows = [
    {
      label: d.metricCost,
      value: `${city.currency} ${formatMoney(city.costPerMonth, lang)}${d.perMonth}`,
      method: d.costOfLivingMethod,
      url: city.sources.costOfLiving,
    },
    {
      label: "Internet",
      value: `${city.internetSpeed} Mbps`,
      method: d.internetMethod,
      url: city.sources.internet,
    },
    {
      label: d.metricSafety,
      value: `${city.safetyScore} / 10`,
      method: d.safetyMethod,
      url: city.sources.safety,
    },
    {
      label: d.metricQuality,
      value: `${city.qualityOfLife} / 10`,
      method: d.qualityMethod,
      url: city.sources.qualityOfLife,
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero image */}
      <div className="relative h-80 pt-14">
        <img src={city.imageUrl} alt={city.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 pb-8">
          <p className="text-sm text-muted mb-1">{tCountry(city.country, lang)} · {tContinent(city.continent, lang)}</p>
          <h1 className="text-4xl font-bold text-foreground">{city.name}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="bg-card border border-border rounded-2xl p-4 text-center">
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="text-sm font-semibold text-foreground">{s.value}</div>
              <div className="text-xs text-muted mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section>
              <h2 className="text-lg font-semibold mb-3">{d.aboutCity(city.name)}</h2>
              <p className="text-muted leading-relaxed">{city.description[lang]}</p>
            </section>

            {/* Strengths & Considerations */}
            <section>
              <h2 className="text-lg font-semibold mb-4">{d.highlightedData}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-card border border-accent/20 rounded-2xl p-5">
                  <h3 className="text-sm font-semibold text-accent mb-3">{d.strengths}</h3>
                  {strengths.length > 0 ? (
                    <ul className="space-y-3">
                      {strengths.map((s) => (
                        <li key={s.label} className="text-sm text-muted">
                          <span className="text-foreground font-medium block">{s.label}</span>
                          {s.detail}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-muted">{d.noStrengths}</p>
                  )}
                </div>
                <div className="bg-card border border-border rounded-2xl p-5">
                  <h3 className="text-sm font-semibold text-muted mb-3">{d.considerations}</h3>
                  {considerations.length > 0 ? (
                    <ul className="space-y-3">
                      {considerations.map((c) => (
                        <li key={c.label} className="text-sm text-muted">
                          <span className="text-foreground font-medium block">{c.label}</span>
                          {c.detail}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-muted">{d.noConsiderations}</p>
                  )}
                </div>
              </div>
            </section>

            {/* Visa, sanidad y barrios (guía ampliada) */}
            {guide && (
              <>
                <div className="bg-card border border-border rounded-2xl p-4 text-xs text-muted leading-relaxed">
                  {lang === "en" ? visaDisclaimerEn : visaDisclaimer}
                </div>
                {lang === "en" && (
                  <div className="bg-accent/5 border border-accent/20 rounded-2xl p-4 text-xs text-muted leading-relaxed">
                    {d.guideNotTranslatedYet}
                  </div>
                )}
                <CityGuideSection title={d.visaFiscal} section={guide.visaFiscal} sourcesLabel={d.sources} />
                <CityGuideSection title={d.sanidad} section={guide.sanidad} sourcesLabel={d.sources} />
                <CityGuideSection title={d.barrios} section={guide.barrios} sourcesLabel={d.sources} />
              </>
            )}

            {/* Sources */}
            <section>
              <h2 className="text-lg font-semibold mb-1">{d.dataSources}</h2>
              <p className="text-sm text-muted mb-4">{d.dataSourcesSubtitle}</p>
              <div className="bg-card border border-border rounded-2xl divide-y divide-border">
                {sourceRows.map((row) => (
                  <div key={row.label} className="p-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="sm:max-w-md">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-foreground">{row.label}</span>
                        <span className="text-xs text-accent font-medium">{row.value}</span>
                      </div>
                      <p className="text-xs text-muted leading-relaxed">{row.method}</p>
                    </div>
                    <a href={row.url} target="_blank" rel="noopener noreferrer nofollow" className="shrink-0 text-xs font-medium text-accent hover:underline whitespace-nowrap">
                      {d.seeSource}
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            {/* Quick stats */}
            <div className="bg-card border border-border rounded-2xl p-5 space-y-3">
              <h3 className="text-sm font-semibold mb-3">{d.summary}</h3>
              {[
                { label: d.summaryContinent, value: tContinent(city.continent, lang) },
                { label: d.summaryCurrency, value: city.currency },
                { label: d.summaryCost, value: `${city.currency} ${formatMoney(city.costPerMonth, lang)}` },
                { label: d.summaryInternet, value: `${city.internetSpeed} Mbps` },
                { label: d.summarySafety, value: `${city.safetyScore} / 10` },
                { label: d.summaryQuality, value: `${city.qualityOfLife} / 10` },
              ].map((r) => (
                <div key={r.label} className="flex justify-between text-sm">
                  <span className="text-muted">{r.label}</span>
                  <span className="text-foreground font-medium">{r.value}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link href="/compare" className="block w-full text-center bg-accent text-white py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
              {d.compareWithOther}
            </Link>
            <Link href="/cities" className="block w-full text-center border border-border text-foreground py-3 rounded-full text-sm font-medium hover:border-accent transition-colors">
              {d.seeAllCities}
            </Link>
          </div>
        </div>
      </div>

      <footer className="border-t border-border py-8 px-6 text-center text-xs text-muted mt-12">
        {d.footerText}
        <span className="mx-2">·</span>
        <Link href="/feedback" className="hover:text-accent transition-colors">{d.footerFeedback}</Link>
      </footer>
    </main>
  );
}

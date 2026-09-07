"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { cities, City } from "@/data/cities";
import { useLanguage, type Lang } from "@/lib/i18n";
import { t, formatMoney, tCountry, tContinent, tClimate } from "@/lib/dictionary";
import { trackEvent } from "@/lib/gtag";

type Priority = "cost" | "internet" | "safety" | "quality" | "beach";
type ClimatePref = "warm" | "temperate" | "cold" | "any";

interface Answers {
  budget: number | null;
  priority: Priority | null;
  continent: string;
  climate: ClimatePref;
}

const CONTINENTS = ["Europa", "Asia", "América", "Norteamérica", "Oriente Medio", "África", "Oceanía"];

const TOTAL_STEPS = 4;

function climateBucket(climateType: string): "warm" | "temperate" | "cold" {
  const c = climateType.toLowerCase();
  if (c.includes("tropical") || c.includes("desértico") || c.includes("subtropical") || c.includes("sabana")) {
    return "warm";
  }
  if (c.includes("continental")) return "cold";
  return "temperate";
}

function computeMatches(pool: City[], answers: Answers) {
  let filtered = pool;

  if (answers.priority === "beach") {
    filtered = filtered.filter((c) => c.hasBeach);
  }
  if (answers.continent !== "any") {
    filtered = filtered.filter((c) => c.continent === answers.continent);
  }
  if (answers.budget !== null) {
    const withinBudget = filtered.filter((c) => c.costPerMonth <= answers.budget!);
    if (withinBudget.length >= 3) filtered = withinBudget;
  }
  if (filtered.length < 3) filtered = pool;

  const costs = filtered.map((c) => c.costPerMonth);
  const nets = filtered.map((c) => c.internetSpeed);
  const minCost = Math.min(...costs);
  const maxCost = Math.max(...costs);
  const minNet = Math.min(...nets);
  const maxNet = Math.max(...nets);

  const boosted = 0.4;
  const rest = (1 - boosted) / 3;
  const balanced = 0.25;

  const weights = {
    cost: answers.priority === "cost" ? boosted : answers.priority === "beach" ? balanced : rest,
    internet: answers.priority === "internet" ? boosted : answers.priority === "beach" ? balanced : rest,
    safety: answers.priority === "safety" ? boosted : answers.priority === "beach" ? balanced : rest,
    quality: answers.priority === "quality" ? boosted : answers.priority === "beach" ? balanced : rest,
  };

  const scored = filtered.map((c) => {
    const costNorm = maxCost === minCost ? 1 : 1 - (c.costPerMonth - minCost) / (maxCost - minCost);
    const netNorm = maxNet === minNet ? 1 : (c.internetSpeed - minNet) / (maxNet - minNet);
    const safetyNorm = c.safetyScore / 10;
    const qualityNorm = c.qualityOfLife / 10;
    let score = weights.cost * costNorm + weights.internet * netNorm + weights.safety * safetyNorm + weights.quality * qualityNorm;
    if (answers.climate !== "any" && climateBucket(c.climateType) === answers.climate) {
      score += 0.05;
    }
    return { city: c, score: Math.min(1, score) };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 5);
}

function OptionCard({ label, onClick, active }: { label: string; onClick: () => void; active?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-5 py-4 rounded-2xl border transition-colors ${
        active ? "border-accent bg-accent/10 text-accent" : "border-border bg-card text-foreground hover:border-accent/60"
      }`}
    >
      {label}
    </button>
  );
}

export default function MatchPage() {
  const { lang } = useLanguage();
  const d = t(lang);
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({ budget: null, priority: null, continent: "any", climate: "any" });
  const [copied, setCopied] = useState(false);

  function start() {
    setStarted(true);
    trackEvent("match_quiz_start");
  }

  function answerAndAdvance(patch: Partial<Answers>) {
    setAnswers((prev) => ({ ...prev, ...patch }));
    setStep((s) => s + 1);
  }

  function retake() {
    setAnswers({ budget: null, priority: null, continent: "any", climate: "any" });
    setStep(0);
    setStarted(true);
    setCopied(false);
  }

  const showResults = started && step >= TOTAL_STEPS;
  const results = showResults ? computeMatches(cities, answers) : [];

  function share() {
    const top = results[0]?.city;
    if (!top) return;
    const text = d.matchShareText(top.name);
    const url = `https://roavio.es/cities/${top.slug}`;
    const intent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    trackEvent("match_quiz_share", { city: top.slug });
    window.open(intent, "_blank", "noopener,noreferrer");
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText("https://roavio.es/match");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — ignore
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 pt-28 pb-24">
        {!started && (
          <div className="text-center">
            <span className="inline-block text-xs font-medium tracking-wide text-accent border border-accent/40 rounded-full px-3 py-1 mb-6">
              {d.matchNavBadge}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">{d.matchTitle}</h1>
            <p className="text-muted text-lg max-w-xl mx-auto mb-8">{d.matchSubtitle}</p>
            <button
              onClick={start}
              className="bg-accent text-white px-8 py-3 rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
            >
              {d.matchStart}
            </button>
          </div>
        )}

        {started && !showResults && (
          <div>
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs text-muted mb-2">
                <span>{d.matchStepLabel(step + 1, TOTAL_STEPS)}</span>
              </div>
              <div className="h-1.5 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent transition-all duration-300"
                  style={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }}
                />
              </div>
            </div>

            {step === 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">{d.matchQ1}</h2>
                <div className="flex flex-col gap-3">
                  <OptionCard label={d.matchQ1Opt1} onClick={() => answerAndAdvance({ budget: 500 })} />
                  <OptionCard label={d.matchQ1Opt2} onClick={() => answerAndAdvance({ budget: 900 })} />
                  <OptionCard label={d.matchQ1Opt3} onClick={() => answerAndAdvance({ budget: 1400 })} />
                  <OptionCard label={d.matchQ1Opt4} onClick={() => answerAndAdvance({ budget: null })} />
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">{d.matchQ2}</h2>
                <div className="flex flex-col gap-3">
                  <OptionCard label={d.matchQ2Opt1} onClick={() => answerAndAdvance({ priority: "cost" })} />
                  <OptionCard label={d.matchQ2Opt2} onClick={() => answerAndAdvance({ priority: "internet" })} />
                  <OptionCard label={d.matchQ2Opt3} onClick={() => answerAndAdvance({ priority: "safety" })} />
                  <OptionCard label={d.matchQ2Opt4} onClick={() => answerAndAdvance({ priority: "quality" })} />
                  <OptionCard label={d.matchQ2Opt5} onClick={() => answerAndAdvance({ priority: "beach" })} />
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">{d.matchQ3}</h2>
                <div className="flex flex-col gap-3">
                  <OptionCard label={d.matchAny} onClick={() => answerAndAdvance({ continent: "any" })} />
                  {CONTINENTS.map((c) => (
                    <OptionCard key={c} label={tContinent(c, lang)} onClick={() => answerAndAdvance({ continent: c })} />
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">{d.matchQ4}</h2>
                <div className="flex flex-col gap-3">
                  <OptionCard label={d.matchAny} onClick={() => answerAndAdvance({ climate: "any" })} />
                  <OptionCard label={d.matchClimateWarm} onClick={() => answerAndAdvance({ climate: "warm" })} />
                  <OptionCard label={d.matchClimateTemperate} onClick={() => answerAndAdvance({ climate: "temperate" })} />
                  <OptionCard label={d.matchClimateCold} onClick={() => answerAndAdvance({ climate: "cold" })} />
                </div>
              </div>
            )}

            {step > 0 && (
              <button
                onClick={() => setStep((s) => s - 1)}
                className="mt-8 text-sm text-muted hover:text-foreground transition-colors"
              >
                ← {d.matchBack}
              </button>
            )}
          </div>
        )}

        {showResults && (
          <div>
            <h1 className="text-3xl font-bold text-foreground tracking-tight mb-2">{d.matchResultsTitle}</h1>
            <p className="text-muted mb-8">{d.matchResultsSubtitle}</p>

            <div className="flex flex-col gap-4 mb-8">
              {results.map(({ city, score }, i) => (
                <div
                  key={city.slug}
                  className={`flex items-center gap-4 rounded-2xl border p-4 ${
                    i === 0 ? "border-accent bg-accent/5" : "border-border bg-card"
                  }`}
                >
                  <img src={city.imageUrl} alt={city.name} className="h-16 w-16 rounded-xl object-cover shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-foreground">{city.name}</span>
                      <span className="text-xs text-muted">{tCountry(city.country, lang)}</span>
                    </div>
                    <div className="text-xs text-accent font-medium mt-0.5">{d.matchScore(Math.round(score * 100))}</div>
                    <div className="text-xs text-muted mt-1">
                      {city.currency} {formatMoney(city.costPerMonth, lang)}/mo · {city.internetSpeed} Mbps · {tClimate(city.climateType, lang)}
                    </div>
                  </div>
                  <Link
                    href={`/cities/${city.slug}`}
                    className="hidden sm:inline-block text-xs font-medium text-accent border border-accent/50 rounded-full px-3 py-1.5 hover:bg-accent hover:text-white transition-colors whitespace-nowrap shrink-0"
                  >
                    {d.matchViewCity}
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={share}
                className="bg-accent text-white px-6 py-2.5 rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
              >
                {d.matchShare}
              </button>
              <button
                onClick={retake}
                className="border border-border text-foreground px-6 py-2.5 rounded-full font-medium text-sm hover:border-accent transition-colors"
              >
                {d.matchRetake}
              </button>
              <button
                onClick={copyLink}
                className="text-sm text-muted hover:text-foreground transition-colors px-3 py-2.5"
              >
                {copied ? d.matchShareCopied : "roavio.es/match"}
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { cities, City } from "@/data/cities";
import { useLanguage, type Lang } from "@/lib/i18n";
import { t, formatMoney, tCountry, tContinent, tClimate } from "@/lib/dictionary";
import { trackEvent } from "@/lib/gtag";
import {
  IconCoin,
  IconWifi,
  IconShield,
  IconStar,
  IconUmbrella,
  IconSun,
  IconCloud,
  IconSnowflake,
  IconCompass,
  IconTarget,
  IconTrophy,
  IconMapPin,
} from "@/components/Icon";

type Priority = "cost" | "internet" | "safety" | "quality" | "beach";
type ClimatePref = "warm" | "temperate" | "cold" | "any";
type IconType = typeof IconCoin;

interface Answers {
  budget: number | null;
  priority: Priority | null;
  continent: string;
  climate: ClimatePref;
}

const CONTINENTS = ["Europa", "Asia", "América", "Norteamérica", "África", "Oceanía"];

const TOTAL_STEPS = 4;

const PREVIEW_SLUGS = ["bangkok", "lisboa", "ciudad-de-mexico", "bali", "medellin", "dubai"];

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

function OptionCard({
  label,
  onClick,
  Icon,
  delay = 0,
}: {
  label: string;
  onClick: () => void;
  Icon?: IconType;
  delay?: number;
}) {
  return (
    <button
      onClick={onClick}
      style={{ animationDelay: `${delay}ms` }}
      className="match-pop-in group w-full flex items-center gap-3.5 text-left px-5 py-4 rounded-2xl border border-white/10 bg-card hover:border-accent hover:bg-accent/10 transition-all duration-200 hover:-translate-y-0.5"
    >
      {Icon && (
        <span className="shrink-0 w-9 h-9 rounded-full bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
          <Icon className="w-4 h-4" />
        </span>
      )}
      <span className="text-foreground font-medium">{label}</span>
    </button>
  );
}

function StepHeader({ Icon, title }: { Icon: IconType; title: string }) {
  return (
    <div className="match-pop-in flex flex-col items-center text-center mb-7">
      <span className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-4">
        <Icon className="w-7 h-7" />
      </span>
      <h2 className="font-serif text-2xl sm:text-3xl font-medium text-foreground">{title}</h2>
    </div>
  );
}

export default function MatchPage() {
  const { lang } = useLanguage();
  const d = t(lang);
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({ budget: null, priority: null, continent: "any", climate: "any" });
  const [copied, setCopied] = useState(false);

  const previewCities = PREVIEW_SLUGS.map((slug) => cities.find((c) => c.slug === slug)).filter(Boolean) as City[];

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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Glow decorativo */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full bg-accent/20 blur-[120px]" />

      <Navbar />
      <main className="relative max-w-3xl mx-auto px-6 pt-28 pb-24">
        {!started && (
          <div className="text-center match-fade-in">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-accent border border-accent/40 bg-accent/10 rounded-full px-3 py-1 mb-6">
              <IconCompass className="w-3.5 h-3.5" />
              {d.matchNavBadge}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-medium text-foreground tracking-tight mb-4">{d.matchTitle}</h1>
            <p className="text-muted text-lg max-w-xl mx-auto mb-8">{d.matchSubtitle}</p>

            <div className="flex justify-center -space-x-3 mb-9">
              {previewCities.map((city, i) => (
                <img
                  key={city.slug}
                  src={city.imageUrl}
                  alt={city.name}
                  style={{ zIndex: previewCities.length - i, animationDelay: `${i * 60}ms` }}
                  className="match-pop-in w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-background shadow-lg"
                />
              ))}
            </div>

            <button
              onClick={start}
              className="bg-accent text-white px-8 py-3.5 rounded-full font-medium text-sm hover:opacity-90 hover:scale-[1.03] transition-all duration-200 shadow-lg shadow-accent/20"
            >
              {d.matchStart}
            </button>
          </div>
        )}

        {started && !showResults && (
          <div>
            <div className="mb-8 flex items-center gap-2">
              {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                <div key={i} className="h-1.5 flex-1 rounded-full overflow-hidden bg-white/10">
                  <div
                    className="h-full bg-accent transition-all duration-500 rounded-full"
                    style={{ width: i < step ? "100%" : i === step ? "100%" : "0%" }}
                  />
                </div>
              ))}
            </div>
            <p className="text-xs text-muted text-center mb-8 -mt-4">{d.matchStepLabel(step + 1, TOTAL_STEPS)}</p>

            {step === 0 && (
              <div key="q1" className="match-fade-in">
                <StepHeader Icon={IconCoin} title={d.matchQ1} />
                <div className="flex flex-col gap-3">
                  <OptionCard label={d.matchQ1Opt1} onClick={() => answerAndAdvance({ budget: 500 })} delay={0} />
                  <OptionCard label={d.matchQ1Opt2} onClick={() => answerAndAdvance({ budget: 900 })} delay={60} />
                  <OptionCard label={d.matchQ1Opt3} onClick={() => answerAndAdvance({ budget: 1400 })} delay={120} />
                  <OptionCard label={d.matchQ1Opt4} onClick={() => answerAndAdvance({ budget: null })} delay={180} />
                </div>
              </div>
            )}

            {step === 1 && (
              <div key="q2" className="match-fade-in">
                <StepHeader Icon={IconTarget} title={d.matchQ2} />
                <div className="flex flex-col gap-3">
                  <OptionCard label={d.matchQ2Opt1} Icon={IconCoin} onClick={() => answerAndAdvance({ priority: "cost" })} delay={0} />
                  <OptionCard label={d.matchQ2Opt2} Icon={IconWifi} onClick={() => answerAndAdvance({ priority: "internet" })} delay={60} />
                  <OptionCard label={d.matchQ2Opt3} Icon={IconShield} onClick={() => answerAndAdvance({ priority: "safety" })} delay={120} />
                  <OptionCard label={d.matchQ2Opt4} Icon={IconStar} onClick={() => answerAndAdvance({ priority: "quality" })} delay={180} />
                  <OptionCard label={d.matchQ2Opt5} Icon={IconUmbrella} onClick={() => answerAndAdvance({ priority: "beach" })} delay={240} />
                </div>
              </div>
            )}

            {step === 2 && (
              <div key="q3" className="match-fade-in">
                <StepHeader Icon={IconMapPin} title={d.matchQ3} />
                <div className="flex flex-col gap-3">
                  <OptionCard label={d.matchAny} Icon={IconCompass} onClick={() => answerAndAdvance({ continent: "any" })} delay={0} />
                  {CONTINENTS.map((c, i) => (
                    <OptionCard key={c} label={tContinent(c, lang)} onClick={() => answerAndAdvance({ continent: c })} delay={(i + 1) * 50} />
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div key="q4" className="match-fade-in">
                <StepHeader Icon={IconSun} title={d.matchQ4} />
                <div className="flex flex-col gap-3">
                  <OptionCard label={d.matchAny} Icon={IconCompass} onClick={() => answerAndAdvance({ climate: "any" })} delay={0} />
                  <OptionCard label={d.matchClimateWarm} Icon={IconSun} onClick={() => answerAndAdvance({ climate: "warm" })} delay={60} />
                  <OptionCard label={d.matchClimateTemperate} Icon={IconCloud} onClick={() => answerAndAdvance({ climate: "temperate" })} delay={120} />
                  <OptionCard label={d.matchClimateCold} Icon={IconSnowflake} onClick={() => answerAndAdvance({ climate: "cold" })} delay={180} />
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
          <div className="match-fade-in">
            <div className="text-center mb-8">
              <span className="inline-flex w-14 h-14 rounded-2xl bg-accent/10 text-accent items-center justify-center mb-4">
                <IconTrophy className="w-7 h-7" />
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-medium text-foreground tracking-tight mb-2">{d.matchResultsTitle}</h1>
              <p className="text-muted">{d.matchResultsSubtitle}</p>
            </div>

            <div className="flex flex-col gap-4 mb-8">
              {results.map(({ city, score }, i) => {
                const pct = Math.round(score * 100);
                return (
                  <div
                    key={city.slug}
                    style={{ animationDelay: `${i * 90}ms` }}
                    className={`match-pop-in relative overflow-hidden rounded-3xl border p-4 flex items-center gap-4 ${
                      i === 0 ? "border-accent bg-accent/5 shadow-lg shadow-accent/10" : "border-white/10 bg-card"
                    }`}
                  >
                    {i === 0 && (
                      <span className="absolute top-3 right-3 flex items-center gap-1 text-[10px] font-semibold tracking-wide uppercase text-accent bg-accent/15 rounded-full px-2.5 py-1">
                        <IconTrophy className="w-3 h-3" />
                        #1
                      </span>
                    )}
                    <img src={city.imageUrl} alt={city.name} className="h-16 w-16 rounded-2xl object-cover shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-serif font-medium text-foreground">{city.name}</span>
                        <span className="text-xs text-muted">{tCountry(city.country, lang)}</span>
                      </div>
                      <div className="h-1.5 w-full max-w-[160px] rounded-full bg-white/10 overflow-hidden mt-1.5 mb-1">
                        <div className="h-full bg-accent rounded-full transition-all duration-700" style={{ width: `${pct}%` }} />
                      </div>
                      <div className="text-xs text-accent font-medium">{d.matchScore(pct)}</div>
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
                );
              })}
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={share}
                className="bg-accent text-white px-6 py-2.5 rounded-full font-medium text-sm hover:opacity-90 hover:scale-[1.03] transition-all duration-200 shadow-lg shadow-accent/20"
              >
                {d.matchShare}
              </button>
              <button
                onClick={retake}
                className="border border-white/10 text-foreground px-6 py-2.5 rounded-full font-medium text-sm hover:border-accent transition-colors"
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

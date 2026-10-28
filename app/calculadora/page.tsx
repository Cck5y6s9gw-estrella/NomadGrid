"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { cities, City } from "@/data/cities";
import { useLanguage, type Lang } from "@/lib/i18n";
import { tCity, tCountry, tContinent } from "@/lib/dictionary";
import { trackEvent } from "@/lib/gtag";
import { IconCoin, IconTrophy } from "@/components/Icon";

type Priority = "balanced" | "quality" | "safety" | "internet" | "beach";
type Style = "tight" | "normal" | "comfy";

const STYLE_FACTOR: Record<Style, number> = { tight: 0.85, normal: 1, comfy: 1.25 };
const CONTINENTS = ["Europa", "Asia", "América", "Norteamérica", "África", "Oceanía"];

interface Result {
  city: City;
  score: number;
  living: number;
  total: number;
  margin: number;
  runway: number | null;
  affordable: boolean;
}

function fmt(n: number, lang: Lang) {
  return Math.round(n).toLocaleString(lang === "es" ? "es-ES" : "en-US");
}

function compute(
  pool: City[],
  budget: number,
  rent: number,
  style: Style,
  savings: number,
  priority: Priority,
  continent: string,
): Result[] {
  let list = pool;
  if (priority === "beach") list = list.filter((c) => c.hasBeach);
  if (continent !== "any") list = list.filter((c) => c.continent === continent);

  const nets = list.map((c) => c.internetSpeed);
  const maxNet = Math.max(...nets, 1);
  const minNet = Math.min(...nets, 0);

  const w = { margin: 0.3, quality: 0.25, safety: 0.25, internet: 0.2 };
  if (priority === "quality") { w.quality = 0.4; w.margin = 0.25; w.safety = 0.2; w.internet = 0.15; }
  if (priority === "safety") { w.safety = 0.4; w.margin = 0.25; w.quality = 0.2; w.internet = 0.15; }
  if (priority === "internet") { w.internet = 0.4; w.margin = 0.25; w.quality = 0.2; w.safety = 0.15; }

  const living = Math.max(budget - rent, 1);
  const scored: Result[] = list.map((c) => {
    const livingCost = c.costPerMonth * STYLE_FACTOR[style];
    const total = livingCost + rent;
    const margin = budget - total;
    const marginNorm = Math.max(0, Math.min(1, margin / (living * 0.5)));
    const netNorm = maxNet === minNet ? 1 : (c.internetSpeed - minNet) / (maxNet - minNet);
    const base =
      w.margin * marginNorm + w.quality * (c.qualityOfLife / 10) + w.safety * (c.safetyScore / 10) + w.internet * netNorm;
    const affordable = margin >= 0;
    return {
      city: c,
      score: affordable ? Math.min(1, base) : 0,
      living: livingCost,
      total,
      margin,
      runway: savings > 0 ? savings / total : null,
      affordable,
    };
  });

  const ok = scored.filter((r) => r.affordable).sort((a, b) => b.score - a.score);
  if (ok.length >= 5) return ok.slice(0, 5);
  const close = scored.filter((r) => !r.affordable).sort((a, b) => b.margin - a.margin);
  return [...ok, ...close].slice(0, 5);
}

async function buildImage(results: Result[], budget: number, rent: number, lang: Lang): Promise<Blob | null> {
  const W = 1080;
  const H = 1350;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  const ORANGE = "#ea580c";
  ctx.fillStyle = "#0b0f1a";
  ctx.fillRect(0, 0, W, H);

  try {
    const logo = new Image();
    logo.src = "/logo-icon.png";
    await new Promise((res, rej) => { logo.onload = res; logo.onerror = rej; });
    const lh = 64;
    ctx.drawImage(logo, 70, 70, (logo.width / logo.height) * lh, lh);
  } catch { /* logo optional */ }
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 44px system-ui, sans-serif";
  ctx.fillText("Roavio", 160, 118);

  ctx.fillStyle = ORANGE;
  ctx.font = "bold 26px system-ui, sans-serif";
  ctx.fillText(lang === "es" ? "MI PRESUPUESTO NÓMADA" : "MY NOMAD BUDGET", 70, 215);
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 62px Georgia, serif";
  ctx.fillText(lang === "es" ? "Mis 5 ciudades ideales" : "My top 5 cities", 70, 285);
  ctx.fillStyle = "#9ca3af";
  ctx.font = "28px system-ui, sans-serif";
  const sub = lang === "es"
    ? `Con ${fmt(budget, lang)} €/mes y ${fmt(rent, lang)} € de alquiler`
    : `With €${fmt(budget, lang)}/month and €${fmt(rent, lang)} rent`;
  ctx.fillText(sub, 70, 335);

  results.forEach((r, i) => {
    const y = 390 + i * 168;
    ctx.fillStyle = i === 0 ? "rgba(234,88,12,0.14)" : "#131a2b";
    ctx.beginPath();
    ctx.roundRect(70, y, W - 140, 148, 28);
    ctx.fill();
    if (i === 0) { ctx.strokeStyle = ORANGE; ctx.lineWidth = 3; ctx.stroke(); }
    ctx.fillStyle = ORANGE;
    ctx.font = "bold 44px Georgia, serif";
    ctx.fillText(`#${i + 1}`, 105, y + 88);
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 40px Georgia, serif";
    ctx.fillText(tCity(r.city.name, lang), 205, y + 62);
    ctx.fillStyle = "#9ca3af";
    ctx.font = "24px system-ui, sans-serif";
    ctx.fillText(tCountry(r.city.country, lang), 205, y + 98);
    const note = r.affordable
      ? (lang === "es" ? `Te sobran ${fmt(r.margin, lang)} €/mes` : `€${fmt(r.margin, lang)}/month left over`)
      : (lang === "es" ? `Te faltan ${fmt(-r.margin, lang)} €/mes` : `€${fmt(-r.margin, lang)}/month short`);
    ctx.fillStyle = r.affordable ? "#34d399" : "#f87171";
    ctx.font = "bold 26px system-ui, sans-serif";
    ctx.fillText(note, 205, y + 132);
    if (r.affordable) {
      ctx.fillStyle = ORANGE;
      ctx.textAlign = "right";
      ctx.font = "bold 52px system-ui, sans-serif";
      ctx.fillText(`${Math.round(r.score * 100)}%`, W - 105, y + 92);
      ctx.fillStyle = "#9ca3af";
      ctx.font = "22px system-ui, sans-serif";
      ctx.fillText(lang === "es" ? "encaje" : "match", W - 105, y + 124);
      ctx.textAlign = "left";
    }
  });

  ctx.fillStyle = "#9ca3af";
  ctx.font = "26px system-ui, sans-serif";
  ctx.fillText(lang === "es" ? "Calcula la tuya en" : "Calculate yours at", 70, H - 78);
  ctx.fillStyle = ORANGE;
  ctx.font = "bold 34px system-ui, sans-serif";
  ctx.fillText("roavio.es/calculadora", 70, H - 36);

  return new Promise((res) => canvas.toBlob((b) => res(b), "image/png"));
}

function Slider({
  label, value, min, max, step, onChange, suffix,
}: { label: string; value: number; min: number; max: number; step: number; onChange: (v: number) => void; suffix: string }) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3 mb-2">
        <label className="text-sm font-medium text-foreground">{label}</label>
        <div className="flex items-center gap-1.5">
          <input
            type="number" min={min} max={max} step={step} value={value}
            onChange={(e) => onChange(Math.max(min, Math.min(max, Number(e.target.value) || 0)))}
            className="w-24 text-right rounded-lg border border-white/10 bg-card px-2 py-1 text-sm text-foreground"
          />
          <span className="text-sm text-muted">{suffix}</span>
        </div>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[#ea580c]"
      />
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm border transition-colors ${
        active ? "bg-accent text-white border-accent" : "border-white/10 bg-card text-foreground hover:border-accent"
      }`}
    >
      {children}
    </button>
  );
}

export default function PresupuestoPage() {
  const { lang } = useLanguage();
  const es = lang === "es";
  const [budget, setBudget] = useState(1800);
  const [rent, setRent] = useState(600);
  const [savings, setSavings] = useState(0);
  const [style, setStyle] = useState<Style>("normal");
  const [priority, setPriority] = useState<Priority>("balanced");
  const [continent, setContinent] = useState("any");
  const [busy, setBusy] = useState(false);

  const results = useMemo(
    () => compute(cities, budget, rent, style, savings, priority, continent),
    [budget, rent, savings, style, priority, continent],
  );
  const anyAffordable = results.some((r) => r.affordable);
  const affordableCount = useMemo(
    () => cities.filter((c) => c.costPerMonth * STYLE_FACTOR[style] + rent <= budget).length,
    [budget, rent, style],
  );

  function share() {
    const top = results[0]?.city;
    if (!top || !results[0].affordable) return;
    const text = es
      ? `Con ${fmt(budget, lang)} €/mes y ${fmt(rent, lang)} € de alquiler, mi mejor ciudad nómada es ${tCity(top.name, lang)}. Calcula la tuya:`
      : `With €${fmt(budget, lang)}/month and €${fmt(rent, lang)} rent, my best nomad city is ${tCity(top.name, lang)}. Calculate yours:`;
    const intent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent("https://www.roavio.es/calculadora")}`;
    trackEvent("budget_share", { city: top.slug });
    window.open(intent, "_blank", "noopener,noreferrer");
  }

  async function download() {
    setBusy(true);
    try {
      const blob = await buildImage(results, budget, rent, lang);
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "roavio-mi-presupuesto.png";
      a.click();
      URL.revokeObjectURL(url);
      trackEvent("budget_download", { city: results[0]?.city.slug ?? "" });
    } finally {
      setBusy(false);
    }
  }

  const styleLabels: Record<Style, string> = {
    tight: es ? "Ajustado" : "Tight",
    normal: es ? "Normal" : "Normal",
    comfy: es ? "Cómodo" : "Comfortable",
  };
  const prioLabels: Record<Priority, string> = {
    balanced: es ? "Equilibrado" : "Balanced",
    quality: es ? "Calidad de vida" : "Quality of life",
    safety: es ? "Seguridad" : "Safety",
    internet: "Internet",
    beach: es ? "Con playa" : "Beach",
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />
      <main className="relative max-w-3xl mx-auto px-6 pt-28 pb-24">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-accent border border-accent/40 bg-accent/10 rounded-full px-3 py-1 mb-6">
            <IconCoin className="w-3.5 h-3.5" />
            {es ? "Calculadora de ciudades" : "City calculator"}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-foreground tracking-tight mb-4">
            {es ? "¿Dónde rinde más tu dinero?" : "Where does your money go furthest?"}
          </h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            {es
              ? "Cuéntanos tu presupuesto y cuánto pagarías de alquiler. Te decimos qué ciudades puedes permitirte, cuánto te sobra al mes y cuánto aguantas con tus ahorros."
              : "Tell us your budget and how much rent you'd pay. We'll show which cities you can afford, how much is left each month, and how long your savings last."}
          </p>
        </div>

        <section className="rounded-3xl border border-white/10 bg-card p-6 flex flex-col gap-6 mb-10">
          <Slider label={es ? "Presupuesto total al mes" : "Total monthly budget"} value={budget} min={500} max={6000} step={50} onChange={setBudget} suffix="€" />
          <Slider label={es ? "Alquiler que pagarías" : "Rent you'd pay"} value={rent} min={0} max={3000} step={25} onChange={setRent} suffix="€" />
          <Slider label={es ? "Ahorros (opcional)" : "Savings (optional)"} value={savings} min={0} max={50000} step={500} onChange={setSavings} suffix="€" />

          <div>
            <div className="text-sm font-medium text-foreground mb-2">{es ? "Estilo de vida" : "Lifestyle"}</div>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(STYLE_FACTOR) as Style[]).map((s) => (
                <Chip key={s} active={style === s} onClick={() => setStyle(s)}>{styleLabels[s]}</Chip>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-medium text-foreground mb-2">{es ? "Qué te importa más" : "What matters most"}</div>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(prioLabels) as Priority[]).map((p) => (
                <Chip key={p} active={priority === p} onClick={() => setPriority(p)}>{prioLabels[p]}</Chip>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-medium text-foreground mb-2">{es ? "Continente" : "Continent"}</div>
            <div className="flex flex-wrap gap-2">
              <Chip active={continent === "any"} onClick={() => setContinent("any")}>{es ? "Cualquiera" : "Any"}</Chip>
              {CONTINENTS.map((c) => (
                <Chip key={c} active={continent === c} onClick={() => setContinent(c)}>{tContinent(c, lang)}</Chip>
              ))}
            </div>
          </div>
        </section>

        <div className="text-center mb-8">
          <span className="inline-flex w-14 h-14 rounded-2xl bg-accent/10 text-accent items-center justify-center mb-3">
            <IconTrophy className="w-7 h-7" />
          </span>
          <h2 className="font-serif text-3xl text-foreground mb-2">{es ? "Tus 5 ciudades" : "Your top 5 cities"}</h2>
          <p className="text-muted text-sm">
            {es
              ? `Puedes permitirte ${affordableCount} de ${cities.length} ciudades del catálogo con este presupuesto.`
              : `You can afford ${affordableCount} of the ${cities.length} catalog cities with this budget.`}
          </p>
          {!anyAffordable && (
            <p className="text-sm text-red-400 mt-2">
              {es ? "Ninguna ciudad cuadra: te mostramos las más cercanas. Prueba a subir el presupuesto o bajar el alquiler." : "No city fits: showing the closest ones. Try raising the budget or lowering the rent."}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-4 mb-8">
          {results.map((r, i) => (
            <div
              key={r.city.slug}
              className={`relative overflow-hidden rounded-3xl border p-4 flex items-center gap-4 ${
                i === 0 && r.affordable ? "border-accent bg-accent/5 shadow-lg shadow-accent/10" : "border-white/10 bg-card"
              }`}
            >
              <img src={r.city.imageUrl} alt={tCity(r.city.name, lang)} className="h-16 w-16 rounded-2xl object-cover shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-serif text-foreground">{tCity(r.city.name, lang)}</span>
                  <span className="text-xs text-muted">{tCountry(r.city.country, lang)}</span>
                </div>
                <div className={`text-sm font-medium mt-0.5 ${r.affordable ? "text-emerald-400" : "text-red-400"}`}>
                  {r.affordable
                    ? es ? `Te sobran ${fmt(r.margin, lang)} €/mes` : `€${fmt(r.margin, lang)}/month left over`
                    : es ? `Te faltan ${fmt(-r.margin, lang)} €/mes` : `€${fmt(-r.margin, lang)}/month short`}
                </div>
                <div className="text-xs text-muted mt-1">
                  {es ? "Vida" : "Living"} ~{fmt(r.living, lang)} € + {es ? "alquiler" : "rent"} {fmt(rent, lang)} € = {fmt(r.total, lang)} €
                  {r.runway !== null && (
                    <> · {es ? `${r.runway.toFixed(1).replace(".", ",")} meses con tus ahorros` : `${r.runway.toFixed(1)} months of savings`}</>
                  )}
                </div>
                <div className="text-xs text-muted mt-0.5">
                  {es ? "Calidad" : "Quality"} {r.city.qualityOfLife} · {es ? "Seguridad" : "Safety"} {r.city.safetyScore} · {r.city.internetSpeed} Mbps
                </div>
              </div>
              <div className="flex flex-col items-end gap-2 shrink-0">
                {r.affordable && <div className="text-lg font-semibold text-accent">{Math.round(r.score * 100)}%</div>}
                <Link
                  href={`/cities/${r.city.slug}`}
                  className="hidden sm:inline-block text-xs font-medium text-accent border border-accent/50 rounded-full px-3 py-1.5 hover:bg-accent hover:text-white transition-colors whitespace-nowrap"
                >
                  {es ? "Ver ciudad" : "View city"}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={share}
            disabled={!anyAffordable}
            className="bg-accent text-white px-6 py-2.5 rounded-full font-medium text-sm hover:opacity-90 transition-all disabled:opacity-40"
          >
            {es ? "Compartir" : "Share"}
          </button>
          <button
            onClick={download}
            disabled={busy}
            className="border border-white/10 text-foreground px-6 py-2.5 rounded-full font-medium text-sm hover:border-accent transition-colors disabled:opacity-50"
          >
            {busy ? (es ? "Generando…" : "Generating…") : es ? "Descargar imagen" : "Download image"}
          </button>
        </div>

        <section className="mt-14 rounded-3xl border border-white/10 bg-card p-6 sm:p-8">
          <h2 className="font-serif text-2xl text-foreground mb-2">{es ? "Cómo se calcula" : "How it's calculated"}</h2>
          <p className="text-sm text-muted mb-6">
            {es
              ? "Sin cajas negras: estos son los datos, la fórmula y los límites de esta calculadora."
              : "No black boxes: here are the data, the formula, and the limits of this calculator."}
          </p>

          <h3 className="text-sm font-semibold text-foreground mb-2">{es ? "1. De dónde salen los datos" : "1. Where the data comes from"}</h3>
          <ul className="text-sm text-muted leading-relaxed list-disc pl-5 mb-6 space-y-1.5">
            <li>
              <span className="text-foreground">{es ? "Coste de vida:" : "Cost of living:"}</span>{" "}
              {es
                ? "gasto mensual de una persona sin alquiler según Numbeo (comida, transporte, ocio, suministros), convertido a euros."
                : "one person's monthly spending excluding rent per Numbeo (food, transport, leisure, utilities), converted to euros."}
            </li>
            <li>
              <span className="text-foreground">{es ? "Internet:" : "Internet:"}</span>{" "}
              {es
                ? "velocidad mediana de banda ancha fija del país (Speedtest Global Index de Ookla, vía World Population Review, 2025). Es un dato nacional, no de la ciudad."
                : "national median fixed broadband speed (Ookla Speedtest Global Index via World Population Review, 2025). It is a country figure, not a city one."}
            </li>
            <li>
              <span className="text-foreground">{es ? "Seguridad:" : "Safety:"}</span>{" "}
              {es
                ? "60% Índice de Seguridad de Numbeo (reescalado a 10) y 40% Global Peace Index del país."
                : "60% Numbeo Safety Index (rescaled to 10) and 40% the country's Global Peace Index."}
            </li>
            <li>
              <span className="text-foreground">{es ? "Calidad de vida:" : "Quality of life:"}</span>{" "}
              {es
                ? "60% índice de calidad de vida de Numbeo (reescalado a 10) y 40% Índice de Desarrollo Humano (IDH) del país."
                : "60% Numbeo Quality of Life Index (rescaled to 10) and 40% the country's Human Development Index (HDI)."}
            </li>
          </ul>

          <h3 className="text-sm font-semibold text-foreground mb-2">{es ? "2. La fórmula" : "2. The formula"}</h3>
          <ol className="text-sm text-muted leading-relaxed list-decimal pl-5 mb-4 space-y-1.5">
            <li>
              {es
                ? "Gasto de vida = coste de la ciudad × factor de estilo (ajustado ×0,85, normal ×1, cómodo ×1,25)."
                : "Living spend = city cost × lifestyle factor (tight ×0.85, normal ×1, comfortable ×1.25)."}
            </li>
            <li>
              {es
                ? "Coste total = gasto de vida + el alquiler que has indicado. Si el total es mayor que tu presupuesto, la ciudad no cuadra."
                : "Total cost = living spend + the rent you entered. If the total exceeds your budget, the city doesn't fit."}
            </li>
            <li>
              {es
                ? "Margen = presupuesto − coste total. Se puntúa de 0 a 1 según qué parte de la mitad de tu presupuesto disponible (sin alquiler) te sobra."
                : "Margin = budget − total cost. It is scored from 0 to 1 by how much of half your available budget (after rent) is left."}
            </li>
            <li>
              {es
                ? "Encaje = margen, calidad de vida, seguridad e internet ponderados. En modo equilibrado pesan 30%, 25%, 25% y 20%. Si eliges una prioridad, esa pasa a pesar 40% y las demás se reparten el resto."
                : "Match = weighted margin, quality of life, safety, and internet. In balanced mode they weigh 30%, 25%, 25%, and 20%. If you pick a priority, it weighs 40% and the others share the rest."}
            </li>
            <li>
              {es
                ? "Meses con ahorros = ahorros ÷ coste total mensual. Con 'Con playa' solo se consideran ciudades costeras."
                : "Months of savings = savings ÷ total monthly cost. With 'Beach' only coastal cities are considered."}
            </li>
          </ol>
          {results[0] && results[0].affordable && (
            <p className="text-xs text-muted bg-background/60 rounded-xl p-3 mb-6">
              {es
                ? `Ejemplo con tus datos: ${tCity(results[0].city.name, lang)} cuesta ${fmt(results[0].city.costPerMonth, lang)} € de base × ${STYLE_FACTOR[style].toString().replace(".", ",")} = ${fmt(results[0].living, lang)} € de vida, más ${fmt(rent, lang)} € de alquiler = ${fmt(results[0].total, lang)} €. Con un presupuesto de ${fmt(budget, lang)} € te sobran ${fmt(results[0].margin, lang)} €.`
                : `Example with your inputs: ${tCity(results[0].city.name, lang)} costs €${fmt(results[0].city.costPerMonth, lang)} base × ${STYLE_FACTOR[style]} = €${fmt(results[0].living, lang)} living, plus €${fmt(rent, lang)} rent = €${fmt(results[0].total, lang)}. With a €${fmt(budget, lang)} budget you have €${fmt(results[0].margin, lang)} left.`}
            </p>
          )}

          <h3 className="text-sm font-semibold text-foreground mb-2">{es ? "3. Qué debes tener en cuenta" : "3. What to keep in mind"}</h3>
          <ul className="text-sm text-muted leading-relaxed list-disc pl-5 mb-6 space-y-1.5">
            <li>{es ? "Son medias y estimaciones, no una oferta de precio: tu gasto real depende de tus hábitos y del barrio." : "These are averages and estimates, not a price quote: your real spending depends on your habits and neighborhood."}</li>
            <li>{es ? "El alquiler no está en nuestros datos: lo introduces tú, así que compáralo con anuncios reales." : "Rent isn't in our data: you enter it, so compare it with real listings."}</li>
            <li>{es ? "No incluye visados, impuestos, seguro médico ni vuelos. Mira la guía de cada ciudad para esos trámites." : "It excludes visas, taxes, health insurance, and flights. See each city's guide for those."}</li>
            <li>{es ? "La seguridad y la calidad de vida son percepciones y índices, no estadísticas oficiales de criminalidad." : "Safety and quality of life are perception-based indices, not official crime statistics."}</li>
            <li>{es ? "Los datos de Numbeo vienen de contribuciones de usuarios; descartamos ciudades con pocos contribuyentes o datos antiguos." : "Numbeo data comes from user contributions; we discard cities with few contributors or stale data."}</li>
          </ul>

          <p className="text-xs text-muted">
            {es ? "Fuentes: " : "Sources: "}
            <a href="https://www.numbeo.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Numbeo</a>,{" "}
            <a href="https://worldpopulationreview.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">World Population Review / Ookla</a>,{" "}
            <a href="https://www.visionofhumanity.org/maps/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Global Peace Index</a>,{" "}
            <a href="https://hdr.undp.org/data-center/human-development-index" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">UNDP HDI</a>.{" "}
            {es ? "Más detalle en la ficha de cada ciudad." : "More detail on each city page."}
          </p>
        </section>
      </main>
    </div>
  );
}

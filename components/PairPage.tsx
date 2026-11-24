import Link from "next/link";
import Navbar from "@/components/Navbar";
import JsonLd from "@/components/JsonLd";
import { allPairs, parsePair, pairSlug, similarCities } from "@/lib/pairs";
import { breadcrumbLd, absUrl } from "@/lib/seo";
import { tCity, tClimate, tBestTime } from "@/lib/dictionary";
import { visaSnippet, neighborhoods } from "@/lib/pairGuide";
import type { City } from "@/data/cities";
import type { Lang } from "@/lib/i18n";

const pct = (a: number, b: number) => Math.round((Math.abs(a - b) / Math.max(a, b)) * 100);

type Row = { label: string; a: string; b: string; winner: "a" | "b" | "tie" };

export function pairTexts(pair: string, lang: Lang) {
  const p = parsePair(pair);
  if (!p) return null;
  const es = lang === "es";
  const [a, b] = p;
  const na = tCity(a.name, lang);
  const nb = tCity(b.name, lang);
  const eur = (n: number) => `${n.toLocaleString(es ? "es-ES" : "en-US")} €`;
  const num = (n: number) => (es ? String(n).replace(".", ",") : String(n));
  const cheap = a.costPerMonth <= b.costPerMonth ? a : b;
  const dear = cheap === a ? b : a;
  const nc = tCity(cheap.name, lang);
  const nd = tCity(dear.name, lang);
  const diff = dear.costPerMonth - cheap.costPerMonth;
  const safer = a.safetyScore === b.safetyScore ? null : a.safetyScore > b.safetyScore ? a : b;
  const better = a.qualityOfLife === b.qualityOfLife ? null : a.qualityOfLife > b.qualityOfLife ? a : b;
  const other = (c: City) => (c === a ? b : a);

  const costAns = es
    ? diff === 0
      ? `${na} y ${nb} cuestan lo mismo según nuestros datos: ${eur(a.costPerMonth)} al mes sin contar alquiler.`
      : `${nc} es más barata: ${eur(cheap.costPerMonth)} al mes frente a ${eur(dear.costPerMonth)} en ${nd}, sin contar alquiler. Son ${eur(diff)} de diferencia al mes (${pct(a.costPerMonth, b.costPerMonth)} % menos), unos ${eur(diff * 12)} al año.`
    : diff === 0
      ? `${na} and ${nb} cost the same in our data: ${eur(a.costPerMonth)} per month excluding rent.`
      : `${nc} is cheaper: ${eur(cheap.costPerMonth)} per month versus ${eur(dear.costPerMonth)} in ${nd}, excluding rent. That is ${eur(diff)} less per month (${pct(a.costPerMonth, b.costPerMonth)}% lower), about ${eur(diff * 12)} a year.`;
  const safeAns = es
    ? safer
      ? `${tCity(safer.name, lang)} puntúa más alto en seguridad (${num(safer.safetyScore)} frente a ${num(other(safer).safetyScore)} sobre 10).`
      : `Ambas puntúan igual en seguridad (${num(a.safetyScore)} sobre 10).`
    : safer
      ? `${tCity(safer.name, lang)} scores higher on safety (${num(safer.safetyScore)} vs ${num(other(safer).safetyScore)} out of 10).`
      : `Both score the same on safety (${num(a.safetyScore)} out of 10).`;
  const hi = a.internetSpeed > b.internetSpeed ? a : b;
  const netAns = es
    ? a.internetSpeed === b.internetSpeed
      ? `Mismo dato para las dos: ${a.internetSpeed} Mbps de media de banda ancha fija, porque usamos la media nacional (Speedtest Global Index).`
      : `${tCity(hi.name, lang)} tiene mejor internet: ${hi.internetSpeed} Mbps frente a ${other(hi).internetSpeed} Mbps de media nacional.`
    : a.internetSpeed === b.internetSpeed
      ? `Same figure for both: ${a.internetSpeed} Mbps average fixed broadband, because we use the national average (Speedtest Global Index).`
      : `${tCity(hi.name, lang)} has faster internet: ${hi.internetSpeed} Mbps versus ${other(hi).internetSpeed} Mbps national average.`;
  const qolAns = es
    ? better
      ? `${tCity(better.name, lang)} tiene mejor calidad de vida (${num(better.qualityOfLife)} frente a ${num(other(better).qualityOfLife)} sobre 10).`
      : `Empatan en calidad de vida (${num(a.qualityOfLife)} sobre 10).`
    : better
      ? `${tCity(better.name, lang)} has a better quality of life (${num(better.qualityOfLife)} vs ${num(other(better).qualityOfLife)} out of 10).`
      : `They tie on quality of life (${num(a.qualityOfLife)} out of 10).`;

  const title = es
    ? `${na} vs ${nb}: coste de vida, internet y seguridad | Roavio`
    : `${na} vs ${nb}: cost of living, internet and safety | Roavio`;
  const description = es
    ? `${na} (${eur(a.costPerMonth)}/mes) frente a ${nb} (${eur(b.costPerMonth)}/mes): ${nc} es más barata. Compara internet, seguridad, calidad de vida y clima para nómadas digitales.`
    : `${na} (${eur(a.costPerMonth)}/month) vs ${nb} (${eur(b.costPerMonth)}/month): ${nc} is cheaper. Compare internet, safety, quality of life and climate for digital nomads.`;
  return { a, b, na, nb, costAns, safeAns, netAns, qolAns, title, description, eur, num };
}

export default function PairPage({ pair, lang }: { pair: string; lang: Lang }) {
  const t = pairTexts(pair, lang);
  if (!t) return null;
  const es = lang === "es";
  const pre = es ? "" : "/en";
  const { a, b, na, nb, costAns, safeAns, netAns, qolAns, eur, num } = t;
  const tt = { na_cheap: a.costPerMonth <= b.costPerMonth ? na : nb };
  const lower = (x: number, y: number): Row["winner"] => (x === y ? "tie" : x < y ? "a" : "b");
  const higher = (x: number, y: number): Row["winner"] => (x === y ? "tie" : x > y ? "a" : "b");
  const yes = es ? "Sí" : "Yes";
  const no = "No";
  const table: Row[] = [
    { label: es ? "Coste mensual (sin alquiler)" : "Monthly cost (excl. rent)", a: eur(a.costPerMonth), b: eur(b.costPerMonth), winner: lower(a.costPerMonth, b.costPerMonth) },
    { label: es ? "Internet (media del país)" : "Internet (country average)", a: `${a.internetSpeed} Mbps`, b: `${b.internetSpeed} Mbps`, winner: higher(a.internetSpeed, b.internetSpeed) },
    { label: es ? "Seguridad" : "Safety", a: `${num(a.safetyScore)} / 10`, b: `${num(b.safetyScore)} / 10`, winner: higher(a.safetyScore, b.safetyScore) },
    { label: es ? "Calidad de vida" : "Quality of life", a: `${num(a.qualityOfLife)} / 10`, b: `${num(b.qualityOfLife)} / 10`, winner: higher(a.qualityOfLife, b.qualityOfLife) },
    { label: es ? "Playa" : "Beach", a: a.hasBeach ? yes : no, b: b.hasBeach ? yes : no, winner: "tie" },
  ];
  const faqs = es
    ? [
        { q: `¿Qué es más barata, ${na} o ${nb}?`, a: costAns },
        { q: `¿Qué ciudad es más segura, ${na} o ${nb}?`, a: safeAns },
        { q: `¿Dónde hay mejor internet, en ${na} o en ${nb}?`, a: netAns },
        { q: `¿Qué ciudad tiene mejor calidad de vida?`, a: qolAns },
      ]
    : [
        { q: `Which is cheaper, ${na} or ${nb}?`, a: costAns },
        { q: `Which city is safer, ${na} or ${nb}?`, a: safeAns },
        { q: `Where is the internet better, ${na} or ${nb}?`, a: netAns },
        { q: `Which city has a better quality of life?`, a: qolAns },
      ];
  const related = [a, b]
    .flatMap((c) => similarCities(c, 6).map((o) => [c, o] as const))
    .filter(([c, o]) => o.slug !== a.slug && o.slug !== b.slug && allPairs().has(pairSlug(c.slug, o.slug)))
    .slice(0, 6);
  const comparePath = `/compare/${pair}`;
  const ld = [
    breadcrumbLd([
      { name: "Roavio", path: es ? "/" : "/en" },
      { name: es ? "Comparar" : "Compare", path: `${pre}/compare` },
      { name: `${na} vs ${nb}`, path: `${pre}${comparePath}` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    { "@context": "https://schema.org", "@type": "WebPage", name: `${na} vs ${nb}`, url: absUrl(`${pre}${comparePath}`), inLanguage: lang },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <JsonLd data={ld} />
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        <nav aria-label="Breadcrumb" className="text-xs text-muted mb-4">
          <Link href={es ? "/" : "/en"} className="hover:text-foreground">{es ? "Inicio" : "Home"}</Link> /{" "}
          <Link href={`${pre}/compare`} className="hover:text-foreground">{es ? "Comparar" : "Compare"}</Link> /{" "}
          <span className="text-foreground">{na} vs {nb}</span>
        </nav>
        <h1 className="text-3xl sm:text-5xl leading-tight mb-3">
          {es ? `${na} vs ${nb} para nómadas digitales` : `${na} vs ${nb} for digital nomads`}
        </h1>
        <p className="text-muted mb-8">{costAns} {safeAns} {qolAns}</p>

        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left text-muted">
                <th className="py-3 pr-4 font-medium"></th>
                <th className="py-3 pr-4 font-semibold text-foreground"><Link href={`${pre}/cities/${a.slug}`} className="hover:text-accent">{na}</Link></th>
                <th className="py-3 font-semibold text-foreground"><Link href={`${pre}/cities/${b.slug}`} className="hover:text-accent">{nb}</Link></th>
              </tr>
            </thead>
            <tbody>
              {table.map((r) => (
                <tr key={r.label} className="border-t border-white/10">
                  <td className="py-3 pr-4 text-muted">{r.label}</td>
                  <td className={`py-3 pr-4 ${r.winner === "a" ? "text-accent font-semibold" : ""}`}>{r.a}</td>
                  <td className={`py-3 ${r.winner === "b" ? "text-accent font-semibold" : ""}`}>{r.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted mt-3">
            {es
              ? "Datos de Numbeo, Speedtest Global Index, Global Peace Index y el Índice de Desarrollo Humano de la ONU. Cada ciudad muestra su fuente original en su ficha."
              : "Data from Numbeo, Speedtest Global Index, the Global Peace Index and the UN Human Development Index. Each city page shows its original source."}{" "}
            <Link href={`${pre}/metodologia`} className="text-accent hover:underline">{es ? "Cómo calculamos los datos" : "How we calculate the data"}</Link>
          </p>
        </div>


        <section className="mb-10">
          <h2 className="text-2xl mb-4">{es ? "Clima y mejor época" : "Climate and best time to go"}</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted leading-relaxed">
            {[a, b].map((c) => (
              <p key={c.slug}>
                <span className="text-foreground font-medium">{tCity(c.name, lang)}: </span>
                {es
                  ? `clima ${tClimate(c.climateType, lang).toLowerCase()}. Mejor época: ${tBestTime(c.bestTimeToVisit, lang)}. ${c.hasBeach ? "Tiene playa." : "No tiene playa."}`
                  : `${tClimate(c.climateType, lang).toLowerCase()} climate. Best time: ${tBestTime(c.bestTimeToVisit, lang)}. ${c.hasBeach ? "It has a beach." : "No beach."}`}
              </p>
            ))}
          </div>
        </section>

        {(visaSnippet(a.slug, lang) || visaSnippet(b.slug, lang)) && (
          <section className="mb-10">
            <h2 className="text-2xl mb-4">{es ? "Visado e impuestos" : "Visa and taxes"}</h2>
            <div className="space-y-4 text-sm text-muted leading-relaxed">
              {[a, b].map((c) => {
                const v = visaSnippet(c.slug, lang);
                return v ? (
                  <p key={c.slug}>
                    <span className="text-foreground font-medium">{tCity(c.name, lang)}: </span>
                    {v}{" "}
                    <Link href={`${pre}/cities/${c.slug}`} className="text-accent hover:underline">
                      {es ? "Ver guía completa" : "Read the full guide"}
                    </Link>
                  </p>
                ) : null;
              })}
            </div>
          </section>
        )}

        {(neighborhoods(a.slug, lang).length > 0 || neighborhoods(b.slug, lang).length > 0) && (
          <section className="mb-10">
            <h2 className="text-2xl mb-4">{es ? "Barrios recomendados" : "Recommended neighborhoods"}</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted leading-relaxed">
              {[a, b].map((c) => {
                const n = neighborhoods(c.slug, lang);
                return n.length ? (
                  <p key={c.slug}>
                    <span className="text-foreground font-medium">{tCity(c.name, lang)}: </span>
                    {n.join(", ")}.
                  </p>
                ) : null;
              })}
            </div>
          </section>
        )}

        <section className="mb-10">
          <h2 className="text-2xl mb-4">{es ? "¿Cuál te conviene?" : "Which one suits you?"}</h2>
          <ul className="space-y-2 text-sm text-muted leading-relaxed list-disc pl-5">
            <li>
              {es
                ? a.costPerMonth === b.costPerMonth
                  ? "Si miras el presupuesto: empatan."
                  : `Si miras el presupuesto: ${tt.na_cheap} cuesta menos al mes.`
                : a.costPerMonth === b.costPerMonth
                  ? "On budget: they tie."
                  : `On budget: ${tt.na_cheap} costs less per month.`}
            </li>
            <li>
              {es
                ? a.safetyScore === b.safetyScore
                  ? "Si priorizas seguridad: empatan."
                  : `Si priorizas seguridad: ${tCity((a.safetyScore > b.safetyScore ? a : b).name, lang)} puntúa más alto.`
                : a.safetyScore === b.safetyScore
                  ? "If safety is your priority: they tie."
                  : `If safety is your priority: ${tCity((a.safetyScore > b.safetyScore ? a : b).name, lang)} scores higher.`}
            </li>
            {a.hasBeach !== b.hasBeach && (
              <li>
                {es
                  ? `Si quieres playa: ${tCity((a.hasBeach ? a : b).name, lang)}.`
                  : `If you want a beach: ${tCity((a.hasBeach ? a : b).name, lang)}.`}
              </li>
            )}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl mb-4">{es ? "Preguntas frecuentes" : "Frequently asked questions"}</h2>
          <div className="space-y-5">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-semibold mb-1">{f.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 grid sm:grid-cols-2 gap-3">
          {[a, b].map((c) => (
            <Link key={c.slug} href={`${pre}/cities/${c.slug}`} className="block bg-card border border-white/10 rounded-2xl p-4 hover:border-accent/70 transition-colors">
              <span className="block font-medium">{es ? `Guía de ${tCity(c.name, lang)}` : `${tCity(c.name, lang)} guide`}</span>
              <span className="block text-xs text-muted mt-0.5">
                {es ? "Visado, impuestos, barrios y fuentes de los datos" : "Visa, taxes, neighborhoods and data sources"}
              </span>
            </Link>
          ))}
        </section>

        {related.length > 0 && (
          <section>
            <h2 className="text-2xl mb-4">{es ? "Otras comparaciones" : "More comparisons"}</h2>
            <ul className="flex flex-wrap gap-2">
              {related.map(([c, o]) => (
                <li key={c.slug + o.slug}>
                  <Link href={`${pre}/compare/${pairSlug(c.slug, o.slug)}`} className="inline-block border border-white/10 rounded-full px-3 py-1.5 text-sm text-muted hover:border-accent hover:text-foreground transition-colors">
                    {tCity(c.name, lang)} vs {tCity(o.name, lang)}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </main>
  );
}

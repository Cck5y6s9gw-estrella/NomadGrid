import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import JsonLd from "@/components/JsonLd";
import { allPairs, parsePair, pairSlug, similarCities } from "@/lib/pairs";
import { breadcrumbLd, absUrl } from "@/lib/seo";
import type { City } from "@/data/cities";

export const dynamicParams = false;

export function generateStaticParams() {
  return [...allPairs()].map((pair) => ({ pair }));
}

const eur = (n: number) => `${n.toLocaleString("es-ES")} €`;
const num = (n: number) => String(n).replace(".", ",");

function pct(a: number, b: number) {
  return Math.round((Math.abs(a - b) / Math.max(a, b)) * 100);
}

export async function generateMetadata({ params }: { params: Promise<{ pair: string }> }): Promise<Metadata> {
  const { pair } = await params;
  const p = parsePair(pair);
  if (!p) return {};
  const [a, b] = p;
  const cheap = a.costPerMonth <= b.costPerMonth ? a : b;
  const title = `${a.name} vs ${b.name}: coste de vida, internet y seguridad | Roavio`;
  const description = `${a.name} (${eur(a.costPerMonth)}/mes) frente a ${b.name} (${eur(b.costPerMonth)}/mes): ${cheap.name} es más barata. Compara internet, seguridad, calidad de vida y clima para nómadas digitales.`;
  const url = `https://www.roavio.es/compare/${pair}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: [{ url: a.imageUrl }] },
    twitter: { card: "summary_large_image", title, description, images: [a.imageUrl] },
  };
}

type Row = { label: string; a: string; b: string; winner: "a" | "b" | "tie" };

function rows(a: City, b: City): Row[] {
  const lower = (x: number, y: number): Row["winner"] => (x === y ? "tie" : x < y ? "a" : "b");
  const higher = (x: number, y: number): Row["winner"] => (x === y ? "tie" : x > y ? "a" : "b");
  return [
    { label: "Coste mensual (sin alquiler)", a: eur(a.costPerMonth), b: eur(b.costPerMonth), winner: lower(a.costPerMonth, b.costPerMonth) },
    { label: "Internet (media del país)", a: `${a.internetSpeed} Mbps`, b: `${b.internetSpeed} Mbps`, winner: higher(a.internetSpeed, b.internetSpeed) },
    { label: "Seguridad", a: `${num(a.safetyScore)} / 10`, b: `${num(b.safetyScore)} / 10`, winner: higher(a.safetyScore, b.safetyScore) },
    { label: "Calidad de vida", a: `${num(a.qualityOfLife)} / 10`, b: `${num(b.qualityOfLife)} / 10`, winner: higher(a.qualityOfLife, b.qualityOfLife) },
    { label: "Playa", a: a.hasBeach ? "Sí" : "No", b: b.hasBeach ? "Sí" : "No", winner: "tie" },
  ];
}

export default async function ComparePairPage({ params }: { params: Promise<{ pair: string }> }) {
  const { pair } = await params;
  const p = parsePair(pair);
  if (!p) notFound();
  const [a, b] = p;
  const table = rows(a, b);

  const cheap = a.costPerMonth <= b.costPerMonth ? a : b;
  const dear = cheap === a ? b : a;
  const diff = dear.costPerMonth - cheap.costPerMonth;
  const safer = a.safetyScore === b.safetyScore ? null : a.safetyScore > b.safetyScore ? a : b;
  const better = a.qualityOfLife === b.qualityOfLife ? null : a.qualityOfLife > b.qualityOfLife ? a : b;

  const costAns =
    diff === 0
      ? `${a.name} y ${b.name} cuestan lo mismo según nuestros datos: ${eur(a.costPerMonth)} al mes sin contar alquiler.`
      : `${cheap.name} es más barata: ${eur(cheap.costPerMonth)} al mes frente a ${eur(dear.costPerMonth)} en ${dear.name}, sin contar alquiler. Son ${eur(diff)} de diferencia al mes (${pct(a.costPerMonth, b.costPerMonth)} % menos), unos ${eur(diff * 12)} al año.`;
  const safeAns = safer
    ? `${safer.name} puntúa más alto en seguridad (${num(safer.safetyScore)} frente a ${num((safer === a ? b : a).safetyScore)} sobre 10).`
    : `Ambas puntúan igual en seguridad (${num(a.safetyScore)} sobre 10).`;
  const netAns =
    a.internetSpeed === b.internetSpeed
      ? `Mismo dato para las dos: ${a.internetSpeed} Mbps de media de banda ancha fija, porque usamos la media nacional (Speedtest Global Index).`
      : `${a.internetSpeed > b.internetSpeed ? a.name : b.name} tiene mejor internet: ${Math.max(a.internetSpeed, b.internetSpeed)} Mbps frente a ${Math.min(a.internetSpeed, b.internetSpeed)} Mbps de media nacional.`;
  const qolAns = better
    ? `${better.name} tiene mejor calidad de vida (${num(better.qualityOfLife)} frente a ${num((better === a ? b : a).qualityOfLife)} sobre 10).`
    : `Empatan en calidad de vida (${num(a.qualityOfLife)} sobre 10).`;

  const faqs = [
    { q: `¿Qué es más barata, ${a.name} o ${b.name}?`, a: costAns },
    { q: `¿Qué ciudad es más segura, ${a.name} o ${b.name}?`, a: safeAns },
    { q: `¿Dónde hay mejor internet, en ${a.name} o en ${b.name}?`, a: netAns },
    { q: `¿Qué ciudad tiene mejor calidad de vida?`, a: qolAns },
  ];

  const related = [a, b]
    .flatMap((c) => similarCities(c, 6).map((o) => [c, o] as const))
    .filter(([c, o]) => o.slug !== a.slug && o.slug !== b.slug && allPairs().has(pairSlug(c.slug, o.slug)))
    .slice(0, 6);

  const ld = [
    breadcrumbLd([
      { name: "Roavio", path: "/" },
      { name: "Comparar", path: "/compare" },
      { name: `${a.name} vs ${b.name}`, path: `/compare/${pair}` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `${a.name} vs ${b.name}`,
      url: absUrl(`/compare/${pair}`),
      inLanguage: "es",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <JsonLd data={ld} />
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        <nav aria-label="Breadcrumb" className="text-xs text-muted mb-4">
          <Link href="/" className="hover:text-foreground">Inicio</Link> / <Link href="/compare" className="hover:text-foreground">Comparar</Link> /{" "}
          <span className="text-foreground">{a.name} vs {b.name}</span>
        </nav>
        <h1 className="text-3xl sm:text-5xl leading-tight mb-3">{a.name} vs {b.name} para nómadas digitales</h1>
        <p className="text-muted mb-8">
          {costAns} {safeAns} {qolAns}
        </p>

        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left text-muted">
                <th className="py-3 pr-4 font-medium"></th>
                <th className="py-3 pr-4 font-semibold text-foreground"><Link href={`/cities/${a.slug}`} className="hover:text-accent">{a.name}</Link></th>
                <th className="py-3 font-semibold text-foreground"><Link href={`/cities/${b.slug}`} className="hover:text-accent">{b.name}</Link></th>
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
            Datos de Numbeo, Speedtest Global Index, Global Peace Index y el Índice de Desarrollo Humano de la ONU. Cada ciudad
            muestra su fuente original en su ficha.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl mb-4">Preguntas frecuentes</h2>
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
            <Link key={c.slug} href={`/cities/${c.slug}`} className="block bg-card border border-white/10 rounded-2xl p-4 hover:border-accent/70 transition-colors">
              <span className="block font-medium">Guía de {c.name}</span>
              <span className="block text-xs text-muted mt-0.5">Visado, impuestos, barrios y fuentes de los datos</span>
            </Link>
          ))}
        </section>

        {related.length > 0 && (
          <section>
            <h2 className="text-2xl mb-4">Otras comparaciones</h2>
            <ul className="flex flex-wrap gap-2">
              {related.map(([c, o]) => (
                <li key={c.slug + o.slug}>
                  <Link href={`/compare/${pairSlug(c.slug, o.slug)}`} className="inline-block border border-white/10 rounded-full px-3 py-1.5 text-sm text-muted hover:border-accent hover:text-foreground transition-colors">
                    {c.name} vs {o.name}
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

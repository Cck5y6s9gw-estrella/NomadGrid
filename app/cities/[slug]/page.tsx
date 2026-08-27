import { cities } from "@/data/cities";
import { cityGuides, visaDisclaimer } from "@/data/cityGuides";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import CityGuideSection from "@/components/CityGuideSection";
import { getCityInsights } from "@/lib/cityInsights";

export async function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) notFound();

  const { strengths, considerations } = getCityInsights(city, cities);
  const guide = cityGuides[city.slug];

  const stats = [
    { label: "Coste/mes", value: `${city.currency} ${city.costPerMonth.toLocaleString("es-ES")}`, icon: "💰" },
    { label: "Internet", value: `${city.internetSpeed} Mbps`, icon: "🛜" },
    { label: "Seguridad", value: `${city.safetyScore} / 10`, icon: "🔒" },
    { label: "Clima", value: city.climateType, icon: "🌤" },
    { label: "Calidad de vida", value: `${city.qualityOfLife} / 10`, icon: "⭐" },
    { label: "Playa", value: city.hasBeach ? "Sí" : "No", icon: "🏖" },
  ];

  const sourceRows = [
    {
      label: "Coste de vida",
      value: `${city.currency} ${city.costPerMonth.toLocaleString("es-ES")}/mes`,
      method: "Índice de Coste de Vida de Numbeo (sin alquiler), calculado usando Nueva York como referencia y convertido a euros al tipo de cambio actual.",
      url: city.sources.costOfLiving,
    },
    {
      label: "Velocidad de internet",
      value: `${city.internetSpeed} Mbps`,
      method: "Velocidad media de banda ancha fija por país, Speedtest Global Index (Ookla).",
      url: city.sources.internet,
    },
    {
      label: "Seguridad",
      value: `${city.safetyScore} / 10`,
      method: "Índice de Seguridad de Numbeo (percepción de seguridad de residentes), reescalado a una nota sobre 10.",
      url: city.sources.safety,
    },
    {
      label: "Calidad de vida",
      value: `${city.qualityOfLife} / 10`,
      method: "Índice de Calidad de Vida de Numbeo (combina poder adquisitivo, sanidad, clima, coste, tráfico y contaminación), reescalado a una nota sobre 10.",
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
          <p className="text-sm text-muted mb-1">{city.country} · {city.continent}</p>
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
              <h2 className="text-lg font-semibold mb-3">Sobre {city.name}</h2>
              <p className="text-muted leading-relaxed">{city.description}</p>
            </section>

            {/* Strengths & Considerations */}
            <section>
              <h2 className="text-lg font-semibold mb-4">Datos destacados</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-card border border-accent/20 rounded-2xl p-5">
                  <h3 className="text-sm font-semibold text-accent mb-3">✓ Puntos fuertes</h3>
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
                    <p className="text-sm text-muted">Sin datos destacados por encima de la media.</p>
                  )}
                </div>
                <div className="bg-card border border-border rounded-2xl p-5">
                  <h3 className="text-sm font-semibold text-muted mb-3">A tener en cuenta</h3>
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
                    <p className="text-sm text-muted">Sin datos por debajo de la media.</p>
                  )}
                </div>
              </div>
            </section>

            {/* Visa, sanidad y barrios (guía ampliada) */}
            {guide && (
              <>
                <div className="bg-card border border-border rounded-2xl p-4 text-xs text-muted leading-relaxed">
                  {visaDisclaimer}
                </div>
                <CityGuideSection title="Visado y fiscalidad" section={guide.visaFiscal} />
                <CityGuideSection title="Sanidad y seguro médico" section={guide.sanidad} />
                <CityGuideSection title="Barrios y coworkings" section={guide.barrios} />
              </>
            )}

            {/* Sources */}
            <section>
              <h2 className="text-lg font-semibold mb-1">Fuentes de los datos</h2>
              <p className="text-sm text-muted mb-4">
                Así calculamos cada cifra de esta ficha. Todos los enlaces llevan a la fuente original.
              </p>
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
                      Ver fuente →
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
              <h3 className="text-sm font-semibold mb-3">Resumen</h3>
              {[
                { label: "Continente", value: city.continent },
                { label: "Moneda local", value: city.currency },
                { label: "Coste mensual", value: `${city.currency} ${city.costPerMonth.toLocaleString("es-ES")}` },
                { label: "Internet", value: `${city.internetSpeed} Mbps` },
                { label: "Seguridad", value: `${city.safetyScore} / 10` },
                { label: "Calidad de vida", value: `${city.qualityOfLife} / 10` },
              ].map((r) => (
                <div key={r.label} className="flex justify-between text-sm">
                  <span className="text-muted">{r.label}</span>
                  <span className="text-foreground font-medium">{r.value}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link href="/compare" className="block w-full text-center bg-accent text-white py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
              Comparar con otra ciudad →
            </Link>
            <Link href="/cities" className="block w-full text-center border border-border text-foreground py-3 rounded-full text-sm font-medium hover:border-accent transition-colors">
              Ver todas las ciudades
            </Link>
          </div>
        </div>
      </div>

      <footer className="border-t border-border py-8 px-6 text-center text-xs text-muted mt-12">
              Roavio · Datos de coste, internet, seguridad y calidad de vida basados en Numbeo y Speedtest Global Index (Ookla) · Actualizado 2026
        <span className="mx-2">·</span>
        <Link href="/feedback" className="hover:text-accent transition-colors">Feedback</Link>
      </footer>
    </main>
  );
}
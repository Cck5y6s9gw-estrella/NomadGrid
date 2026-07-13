import { cities } from "@/data/cities";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) notFound();

  const stats = [
    { label: "Coste/mes", value: `${city.currency} ${city.costPerMonth.toLocaleString()}`, icon: "💰" },
    { label: "Internet", value: `${city.internetSpeed} Mbps`, icon: "🛜" },
    { label: "Seguridad", value: `${city.safetyScore} / 10`, icon: "🔒" },
    { label: "Clima", value: city.climateType, icon: "🌤" },
    { label: "Calidad de vida", value: `${city.qualityOfLife} / 10`, icon: "⭐" },
    { label: "Playa", value: city.hasBeach ? "Sí" : "No", icon: "🏖" },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="text-white font-semibold text-lg tracking-tight">NomadGrid</Link>
          <div className="flex items-center gap-6">
            <Link href="/cities" className="text-sm text-white/60 hover:text-white transition-colors">← Explorar</Link>
            <Link href="/compare" className="text-sm text-white/60 hover:text-white transition-colors">Comparar</Link>
          </div>
        </div>
      </nav>

      {/* Hero image */}
      <div className="relative h-80 pt-14">
        <img src={city.imageUrl} alt={city.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 pb-8">
          <p className="text-sm text-white/50 mb-1">{city.country} · {city.continent}</p>
          <h1 className="text-4xl font-bold">{city.name}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="text-sm font-semibold text-white">{s.value}</div>
              <div className="text-xs text-white/40 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section>
              <h2 className="text-lg font-semibold mb-3">Sobre {city.name}</h2>
              <p className="text-white/60 leading-relaxed">{city.description}</p>
            </section>

            {/* Pros & Cons */}
            <section>
              <h2 className="text-lg font-semibold mb-4">Pros y contras</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-green-950/30 border border-green-500/20 rounded-2xl p-5">
                  <h3 className="text-sm font-semibold text-green-400 mb-3">✓ Pros</h3>
                  <ul className="space-y-2">
                    {city.pros.map((p) => (
                      <li key={p} className="text-sm text-white/70 flex gap-2">
                        <span className="text-green-400 mt-0.5">·</span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-950/30 border border-red-500/20 rounded-2xl p-5">
                  <h3 className="text-sm font-semibold text-red-400 mb-3">✗ Contras</h3>
                  <ul className="space-y-2">
                    {city.cons.map((c) => (
                      <li key={c} className="text-sm text-white/70 flex gap-2">
                        <span className="text-red-400 mt-0.5">·</span>{c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            {/* Best time */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="text-sm font-semibold mb-2">📅 Mejor época para visitar</h3>
              <p className="text-sm text-white/60">{city.bestTimeToVisit}</p>
            </div>

            {/* Quick stats */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
              <h3 className="text-sm font-semibold mb-3">Resumen</h3>
              {[
                { label: "Continente", value: city.continent },
                { label: "Moneda local", value: city.currency },
                { label: "Coste mensual", value: `${city.currency} ${city.costPerMonth.toLocaleString()}` },
                { label: "Internet", value: `${city.internetSpeed} Mbps` },
                { label: "Seguridad", value: `${city.safetyScore} / 10` },
                { label: "Calidad de vida", value: `${city.qualityOfLife} / 10` },
              ].map((r) => (
                <div key={r.label} className="flex justify-between text-sm">
                  <span className="text-white/40">{r.label}</span>
                  <span className="text-white font-medium">{r.value}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link href="/compare" className="block w-full text-center bg-white text-black py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-colors">
              Comparar con otra ciudad →
            </Link>
            <Link href="/cities" className="block w-full text-center border border-white/20 text-white py-3 rounded-full text-sm font-medium hover:border-white/40 transition-colors">
              Ver todas las ciudades
            </Link>
          </div>
        </div>
      </div>

      <footer className="border-t border-white/10 py-8 px-6 text-center text-xs text-white/20 mt-12">
        NomadGrid · Datos orientativos basados en Numbeo y Nomad List · Actualizado 2025
      </footer>
    </main>
  );
}
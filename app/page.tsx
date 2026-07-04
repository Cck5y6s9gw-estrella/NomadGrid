import Link from "next/link";
import { cities } from "@/data/cities";

export default function Home() {
  const featured = cities.slice(0, 6);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="text-white font-semibold text-lg tracking-tight">
            NomadGrid
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/cities" className="text-sm text-white/60 hover:text-white transition-colors">Explorar</Link>
            <Link href="/compare" className="text-sm text-white/60 hover:text-white transition-colors">Comparar</Link>
            <Link href="/cities" className="text-sm bg-white text-black px-4 py-1.5 rounded-full font-medium hover:bg-white/90 transition-colors">
              Ver ciudades
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 text-center max-w-4xl mx-auto">
        <div className="inline-block text-xs font-medium tracking-widest text-white/40 uppercase mb-6 border border-white/10 px-3 py-1 rounded-full">
          20 ciudades · Datos actualizados 2025
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
          Encuentra tu próxima<br />
          <span className="text-white/40">ciudad nómada</span>
        </h1>
        <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto leading-relaxed">
          Compara coste de vida, internet, seguridad y clima en las mejores ciudades del mundo para trabajar en remoto.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/cities" className="bg-white text-black px-8 py-3 rounded-full font-medium text-sm hover:bg-white/90 transition-colors">
            Explorar ciudades →
          </Link>
          <Link href="/compare" className="border border-white/20 text-white px-8 py-3 rounded-full font-medium text-sm hover:border-white/40 transition-colors">
            Comparar ciudades
          </Link>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 md:grid-cols-6 gap-6 text-center">
          {[
            { label: "Ciudades", value: "20" },
            { label: "Continentes", value: "5" },
            { label: "Indicadores", value: "8" },
            { label: "Más barata", value: "$800/mes" },
            { label: "Internet max", value: "500 Mbps" },
            { label: "Más segura", value: "9.8/10" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-xl font-semibold text-white">{s.value}</div>
              <div className="text-xs text-white/40 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured cities */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-semibold">Ciudades destacadas</h2>
          <Link href="/cities" className="text-sm text-white/40 hover:text-white transition-colors">
            Ver todas →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((city) => (
            <Link key={city.slug} href={`/cities/${city.slug}`} className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300">
              <img
                src={city.imageUrl}
                alt={city.name}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{city.name}</h3>
                    <p className="text-sm text-white/50">{city.country}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{city.currency} {city.costPerMonth.toLocaleString()}</div>
                    <div className="text-xs text-white/40">al mes</div>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  {city.hasBeach && (
                    <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full">🏖 Playa</span>
                  )}
                  <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full">⭐ {city.qualityOfLife}</span>
                  <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full">🛜 {city.internetSpeed} Mbps</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-20 text-center px-6">
        <h2 className="text-3xl font-semibold mb-4">¿Listo para encontrar tu ciudad?</h2>
        <p className="text-white/40 mb-8">Compara todas las métricas que importan en un solo lugar.</p>
        <Link href="/cities" className="bg-white text-black px-8 py-3 rounded-full font-medium text-sm hover:bg-white/90 transition-colors">
          Ver las 20 ciudades →
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 text-center text-xs text-white/20">
        NomadGrid · Datos orientativos basados en Numbeo y Nomad List · Actualizado 2025
      </footer>
    </main>
  );
}
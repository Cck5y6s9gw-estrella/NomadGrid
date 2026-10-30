"use client";

import Link from "next/link";
import FavoriteButton from "@/components/FavoriteButton";
import { City } from "@/data/cities";
import { useLanguage } from "@/lib/i18n";
import { formatMoney, tCity, tCountry, tContinent } from "@/lib/dictionary";

function Meter({ label, value }: { label: string; value: number }) {
  const pct = Math.max(0, Math.min(100, value * 10));
  return (
    <div className="grid grid-cols-[64px_minmax(0,1fr)_28px] items-center gap-2.5 text-xs text-muted">
      <span>{label}</span>
      <span className="block h-1 rounded-full bg-foreground/10 overflow-hidden">
        <span className="block h-full rounded-full bg-gradient-to-r from-accent to-orange-400" style={{ width: `${pct}%` }} />
      </span>
      <span className="font-mono text-foreground text-right">{value.toFixed(1)}</span>
    </div>
  );
}

export default function CityCard({ city, index = 0 }: { city: City; index?: number }) {
  const { lang } = useLanguage();
  const es = lang === "es";
  return (
    <Link
      href={`/cities/${city.slug}`}
      style={{ animationDelay: `${Math.min(index, 8) * 45}ms` }}
      className="animate-pop-in group flex flex-col min-w-0 overflow-hidden rounded-[22px] border border-line bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={city.imageUrl}
          alt={tCity(city.name, lang)}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <span className="absolute top-3 left-3 text-[11.5px] text-white bg-black/40 backdrop-blur-md border border-white/20 rounded-full px-2.5 py-1">
          {tCountry(city.country, lang)}
          {city.hasBeach ? ` · ${es ? "Playa" : "Beach"}` : ""}
        </span>
        <FavoriteButton citySlug={city.slug} className="absolute top-2.5 right-2.5" />
      </div>
      <div className="flex flex-col gap-3.5 px-[18px] pt-4 pb-[18px]">
        <div className="flex items-baseline justify-between gap-2.5">
          <h3 className="font-display text-[22px] leading-tight text-foreground">{tCity(city.name, lang)}</h3>
          <small className="text-xs text-muted shrink-0">{tContinent(city.continent, lang)}</small>
        </div>
        <div className="flex items-baseline gap-1.5">
          <b className="font-mono font-medium text-2xl tracking-tight text-foreground">
            {formatMoney(city.costPerMonth, lang)} {city.currency === "EUR" ? "€" : city.currency}
          </b>
          <span className="text-xs text-muted">{es ? "/ mes sin alquiler" : "/ month excl. rent"}</span>
        </div>
        <div className="grid gap-2">
          <Meter label={es ? "Seguridad" : "Safety"} value={city.safetyScore} />
          <Meter label={es ? "Calidad" : "Quality"} value={city.qualityOfLife} />
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-line text-[12.5px] text-muted">
          <span>Internet</span>
          <span className="font-mono text-foreground">{city.internetSpeed} Mbps</span>
        </div>
      </div>
    </Link>
  );
}

"use client";

import { esimProviders } from "@/data/esimProviders";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/dictionary";
import type { City } from "@/data/cities";

export default function CityEsimSection({ city }: { city: City }) {
  const { lang } = useLanguage();
  const d = t(lang);

  return (
    <section>
      <h2 className="text-lg font-semibold mb-1">{d.esimTitle}</h2>
      <p className="text-sm text-muted mb-4">{d.esimIntro(city.name)}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {esimProviders.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-card border border-border rounded-2xl p-4 hover:border-accent transition-colors"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-semibold text-foreground">{p.name}</span>
              {p.badge && (
                <span className="text-[10px] font-medium text-accent border border-accent/40 rounded-full px-2 py-0.5">
                  {p.badge}
                </span>
              )}
            </div>
            <p className="text-xs text-muted leading-relaxed">{lang === "es" ? p.blurbEs : p.blurbEn}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

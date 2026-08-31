"use client";

import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/dictionary";
import type { City } from "@/data/cities";

export default function CityEsimSection({ city }: { city: City }) {
  const { lang } = useLanguage();
  const d = t(lang);

  return (
    <section>
      <h2 className="text-lg font-semibold mb-3">{d.esimTitle}</h2>
      <div className="bg-card border border-border rounded-2xl p-5 space-y-3">
        <p className="text-sm text-muted leading-relaxed">{d.esimIntro(city.name)}</p>
        <p className="text-sm text-muted leading-relaxed">{d.esimBody}</p>
        <p className="text-xs text-muted/70 italic">{d.esimComingSoon}</p>
      </div>
    </section>
  );
}

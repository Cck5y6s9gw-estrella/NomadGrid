"use client";

import type { City } from "@/data/cities";
import { useLanguage } from "@/lib/i18n";
import { tCity } from "@/lib/dictionary";
import { cityFaq } from "@/lib/cityFaq";

export default function CityFaq({ city }: { city: City }) {
  const { lang } = useLanguage();
  const faq = cityFaq(city, lang);
  return (
    <section aria-labelledby="city-faq">
      <h2 id="city-faq" className="text-3xl mb-4">
        {lang === "en" ? `FAQ about ${tCity(city.name, lang)}` : `Preguntas frecuentes sobre ${city.name}`}
      </h2>
      <div className="space-y-5">
        {faq.map((f) => (
          <div key={f.q}>
            <h3 className="font-semibold mb-1">{f.q}</h3>
            <p className="text-sm text-muted leading-relaxed">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import { cities, type City } from "@/data/cities";
import { tCity, tClimate, tBestTime } from "@/lib/dictionary";
import type { Lang } from "@/lib/i18n";

const n = (v: number, lang: Lang) => (lang === "es" ? String(v).replace(".", ",") : String(v));
const money = (v: number, lang: Lang) => `${v.toLocaleString(lang === "es" ? "es-ES" : "en-US")} €`;

export function cityFaq(city: City, lang: Lang): { q: string; a: string }[] {
  const es = lang === "es";
  const name = tCity(city.name, lang);
  const total = cities.length;
  const cheaper = cities.filter((c) => c.costPerMonth < city.costPerMonth).length;
  const costRank = cheaper + 1;
  const avgSafety = cities.reduce((s, c) => s + c.safetyScore, 0) / total;
  const safeRel = city.safetyScore >= avgSafety ? (es ? "por encima" : "above") : es ? "por debajo" : "below";
  const climate = tClimate(city.climateType, lang);
  const best = tBestTime(city.bestTimeToVisit, lang);

  if (es) {
    return [
      {
        q: `¿Cuánto cuesta vivir en ${name}?`,
        a: `Unos ${money(city.costPerMonth, lang)} al mes sin contar alquiler, según Numbeo. Es la ciudad número ${costRank} más barata de las ${total} que comparamos en Roavio.`,
      },
      {
        q: `¿Es segura ${name}?`,
        a: `Tiene ${n(city.safetyScore, lang)} sobre 10 en seguridad, ${safeRel} de la media de nuestro catálogo (${n(Math.round(avgSafety * 10) / 10, lang)}). Combinamos el índice de seguridad de Numbeo con el Global Peace Index del país.`,
      },
      {
        q: `¿Qué internet hay en ${name}?`,
        a: `La media de banda ancha fija en ${city.country} es de ${city.internetSpeed} Mbps (Speedtest Global Index de Ookla). Es un dato nacional, no de la ciudad.`,
      },
      {
        q: `¿Cuándo es mejor ir a ${name}?`,
        a: `La mejor época es: ${best}. El clima es de tipo ${climate.toLowerCase()}.${city.hasBeach ? " Tiene playa." : " No tiene playa."}`,
      },
    ];
  }
  return [
    {
      q: `How much does it cost to live in ${name}?`,
      a: `About ${money(city.costPerMonth, lang)} per month excluding rent, based on Numbeo. It is the ${costRank}${costRank === 1 ? "st" : costRank === 2 ? "nd" : costRank === 3 ? "rd" : "th"} cheapest of the ${total} cities we compare on Roavio.`,
    },
    {
      q: `Is ${name} safe?`,
      a: `It scores ${n(city.safetyScore, lang)} out of 10 for safety, ${safeRel} our catalog average (${n(Math.round(avgSafety * 10) / 10, lang)}). We combine Numbeo's safety index with the country's Global Peace Index.`,
    },
    {
      q: `How fast is the internet in ${name}?`,
      a: `The average fixed broadband speed in ${tCity(city.country, lang)} is ${city.internetSpeed} Mbps (Ookla Speedtest Global Index). This is a national figure, not a city one.`,
    },
    {
      q: `When is the best time to visit ${name}?`,
      a: `The best time is: ${best}. The climate is ${climate.toLowerCase()}.${city.hasBeach ? " It has a beach." : " It has no beach."}`,
    },
  ];
}

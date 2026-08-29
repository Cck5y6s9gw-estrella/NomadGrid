import { City } from "@/data/cities";
import type { Lang } from "@/lib/i18n";
import { formatMoney } from "@/lib/dictionary";

export type CityInsight = {
  label: string;
  detail: string;
};

function average(cities: City[], key: keyof City): number {
  const nums = cities.map((c) => c[key] as number);
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

const labels = {
  es: {
    lowCost: "Coste de vida bajo",
    lowCostDetail: (c: City, diff: number, total: number) =>
      `${c.currency} ${formatMoney(c.costPerMonth, "es")}/mes — ${Math.round(diff)}% por debajo de la media de las ${total} ciudades`,
    highCost: "Coste de vida alto",
    highCostDetail: (c: City, diff: number) =>
      `${c.currency} ${formatMoney(c.costPerMonth, "es")}/mes — ${Math.round(diff)}% por encima de la media`,
    fastInternet: "Internet rápido",
    fastInternetDetail: (c: City, diff: number, avg: number) =>
      `${c.internetSpeed} Mbps — ${Math.round(diff)}% por encima de la media (${Math.round(avg)} Mbps)`,
    slowInternet: "Internet por debajo de la media",
    slowInternetDetail: (c: City, avg: number) => `${c.internetSpeed} Mbps frente a una media de ${Math.round(avg)} Mbps`,
    highSafety: "Alta seguridad",
    highSafetyDetail: (c: City, avg: number) => `Índice de seguridad ${c.safetyScore}/10, por encima de la media (${avg.toFixed(1)}/10)`,
    lowSafety: "Seguridad por debajo de la media",
    lowSafetyDetail: (c: City, avg: number) => `Índice de seguridad ${c.safetyScore}/10 frente a una media de ${avg.toFixed(1)}/10`,
    highQuality: "Alta calidad de vida",
    highQualityDetail: (c: City, avg: number) => `${c.qualityOfLife}/10, por encima de la media (${avg.toFixed(1)}/10)`,
    lowQuality: "Calidad de vida por debajo de la media",
    lowQualityDetail: (c: City, avg: number) => `${c.qualityOfLife}/10 frente a una media de ${avg.toFixed(1)}/10`,
    beach: "Acceso a playa",
    beachDetail: "La ciudad cuenta con playa",
  },
  en: {
    lowCost: "Low cost of living",
    lowCostDetail: (c: City, diff: number, total: number) =>
      `${c.currency} ${formatMoney(c.costPerMonth, "en")}/mo — ${Math.round(diff)}% below the average of the ${total} cities`,
    highCost: "High cost of living",
    highCostDetail: (c: City, diff: number) =>
      `${c.currency} ${formatMoney(c.costPerMonth, "en")}/mo — ${Math.round(diff)}% above average`,
    fastInternet: "Fast internet",
    fastInternetDetail: (c: City, diff: number, avg: number) =>
      `${c.internetSpeed} Mbps — ${Math.round(diff)}% above average (${Math.round(avg)} Mbps)`,
    slowInternet: "Below-average internet",
    slowInternetDetail: (c: City, avg: number) => `${c.internetSpeed} Mbps vs. an average of ${Math.round(avg)} Mbps`,
    highSafety: "High safety",
    highSafetyDetail: (c: City, avg: number) => `Safety index ${c.safetyScore}/10, above average (${avg.toFixed(1)}/10)`,
    lowSafety: "Below-average safety",
    lowSafetyDetail: (c: City, avg: number) => `Safety index ${c.safetyScore}/10 vs. an average of ${avg.toFixed(1)}/10`,
    highQuality: "High quality of life",
    highQualityDetail: (c: City, avg: number) => `${c.qualityOfLife}/10, above average (${avg.toFixed(1)}/10)`,
    lowQuality: "Below-average quality of life",
    lowQualityDetail: (c: City, avg: number) => `${c.qualityOfLife}/10 vs. an average of ${avg.toFixed(1)}/10`,
    beach: "Beach access",
    beachDetail: "The city has a beach",
  },
} as const;

export function getCityInsights(city: City, allCities: City[], lang: Lang = "es") {
  const L = labels[lang];
  const avgCost = average(allCities, "costPerMonth");
  const avgInternet = average(allCities, "internetSpeed");
  const avgSafety = average(allCities, "safetyScore");
  const avgQuality = average(allCities, "qualityOfLife");

  const strengths: CityInsight[] = [];
  const considerations: CityInsight[] = [];

  const costDiff = ((avgCost - city.costPerMonth) / avgCost) * 100;
  if (costDiff >= 15) {
    strengths.push({ label: L.lowCost, detail: L.lowCostDetail(city, costDiff, allCities.length) });
  } else if (costDiff <= -15) {
    considerations.push({ label: L.highCost, detail: L.highCostDetail(city, -costDiff) });
  }

  const internetDiff = ((city.internetSpeed - avgInternet) / avgInternet) * 100;
  if (internetDiff >= 15) {
    strengths.push({ label: L.fastInternet, detail: L.fastInternetDetail(city, internetDiff, avgInternet) });
  } else if (internetDiff <= -15) {
    considerations.push({ label: L.slowInternet, detail: L.slowInternetDetail(city, avgInternet) });
  }

  const safetyDiff = ((city.safetyScore - avgSafety) / avgSafety) * 100;
  if (safetyDiff >= 10) {
    strengths.push({ label: L.highSafety, detail: L.highSafetyDetail(city, avgSafety) });
  } else if (safetyDiff <= -10) {
    considerations.push({ label: L.lowSafety, detail: L.lowSafetyDetail(city, avgSafety) });
  }

  const qualityDiff = ((city.qualityOfLife - avgQuality) / avgQuality) * 100;
  if (qualityDiff >= 10) {
    strengths.push({ label: L.highQuality, detail: L.highQualityDetail(city, avgQuality) });
  } else if (qualityDiff <= -10) {
    considerations.push({ label: L.lowQuality, detail: L.lowQualityDetail(city, avgQuality) });
  }

  if (city.hasBeach) {
    strengths.push({ label: L.beach, detail: L.beachDetail });
  }

  return { strengths, considerations };
}

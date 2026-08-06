import { City } from "@/data/cities";

export type CityInsight = {
  label: string;
  detail: string;
};

function average(cities: City[], key: keyof City): number {
  const nums = cities.map((c) => c[key] as number);
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

export function getCityInsights(city: City, allCities: City[]) {
  const avgCost = average(allCities, "costPerMonth");
  const avgInternet = average(allCities, "internetSpeed");
  const avgSafety = average(allCities, "safetyScore");
  const avgQuality = average(allCities, "qualityOfLife");

  const strengths: CityInsight[] = [];
  const considerations: CityInsight[] = [];

  const costDiff = ((avgCost - city.costPerMonth) / avgCost) * 100;
  if (costDiff >= 15) {
    strengths.push({
      label: "Coste de vida bajo",
      detail: `${city.currency} ${city.costPerMonth.toLocaleString("es-ES")}/mes — ${Math.round(costDiff)}% por debajo de la media de las 20 ciudades`,
    });
  } else if (costDiff <= -15) {
    considerations.push({
      label: "Coste de vida alto",
      detail: `${city.currency} ${city.costPerMonth.toLocaleString("es-ES")}/mes — ${Math.round(-costDiff)}% por encima de la media`,
    });
  }

  const internetDiff = ((city.internetSpeed - avgInternet) / avgInternet) * 100;
  if (internetDiff >= 15) {
    strengths.push({
      label: "Internet rápido",
      detail: `${city.internetSpeed} Mbps — ${Math.round(internetDiff)}% por encima de la media (${Math.round(avgInternet)} Mbps)`,
    });
  } else if (internetDiff <= -15) {
    considerations.push({
      label: "Internet por debajo de la media",
      detail: `${city.internetSpeed} Mbps frente a una media de ${Math.round(avgInternet)} Mbps`,
    });
  }

  const safetyDiff = ((city.safetyScore - avgSafety) / avgSafety) * 100;
  if (safetyDiff >= 10) {
    strengths.push({
      label: "Alta seguridad",
      detail: `Índice de seguridad ${city.safetyScore}/10, por encima de la media (${avgSafety.toFixed(1)}/10)`,
    });
  } else if (safetyDiff <= -10) {
    considerations.push({
      label: "Seguridad por debajo de la media",
      detail: `Índice de seguridad ${city.safetyScore}/10 frente a una media de ${avgSafety.toFixed(1)}/10`,
    });
  }

  const qualityDiff = ((city.qualityOfLife - avgQuality) / avgQuality) * 100;
  if (qualityDiff >= 10) {
    strengths.push({
      label: "Alta calidad de vida",
      detail: `${city.qualityOfLife}/10, por encima de la media (${avgQuality.toFixed(1)}/10)`,
    });
  } else if (qualityDiff <= -10) {
    considerations.push({
      label: "Calidad de vida por debajo de la media",
      detail: `${city.qualityOfLife}/10 frente a una media de ${avgQuality.toFixed(1)}/10`,
    });
  }

  if (city.hasBeach) {
    strengths.push({
      label: "Acceso a playa",
      detail: "La ciudad cuenta con playa",
    });
  }

  return { strengths, considerations };
}

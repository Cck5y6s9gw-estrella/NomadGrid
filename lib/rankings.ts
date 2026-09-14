import { cities, City } from "@/data/cities";

export type RankingDirection = "asc" | "desc";

export type RankingConfig = {
  slug: string;
  field: keyof City;
  direction: RankingDirection;
  icon: "coin" | "shield" | "star" | "wifi";
  titleEs: string;
  titleEn: string;
  descriptionEs: string;
  descriptionEn: string;
  cardTitleEs: string;
  cardTitleEn: string;
  unitEs: string;
  unitEn: string;
};

export const rankings: RankingConfig[] = [
  {
    slug: "coste-de-vida",
    field: "costPerMonth",
    direction: "asc",
    icon: "coin",
    titleEs: "Ranking de ciudades más baratas para nómadas digitales (2026)",
    titleEn: "Ranking of the Cheapest Cities for Digital Nomads (2026)",
    descriptionEs:
      "Las 105 ciudades de Roavio ordenadas de más barata a más cara por coste de vida mensual (sin alquiler), según datos de Numbeo.",
    descriptionEn:
      "All 105 Roavio cities ranked from cheapest to most expensive by monthly cost of living (excluding rent), based on Numbeo data.",
    cardTitleEs: "Coste de vida",
    cardTitleEn: "Cost of living",
    unitEs: "€/mes",
    unitEn: "€/mo",
  },
  {
    slug: "seguridad",
    field: "safetyScore",
    direction: "desc",
    icon: "shield",
    titleEs: "Ranking de ciudades más seguras para nómadas digitales (2026)",
    titleEn: "Ranking of the Safest Cities for Digital Nomads (2026)",
    descriptionEs:
      "Las 105 ciudades de Roavio ordenadas de más a menos segura según el índice de criminalidad de Numbeo.",
    descriptionEn:
      "All 105 Roavio cities ranked from safest to least safe based on Numbeo's crime index.",
    cardTitleEs: "Seguridad",
    cardTitleEn: "Safety",
    unitEs: "/10",
    unitEn: "/10",
  },
  {
    slug: "calidad-de-vida",
    field: "qualityOfLife",
    direction: "desc",
    icon: "star",
    titleEs: "Ranking de ciudades con mejor calidad de vida para nómadas digitales (2026)",
    titleEn: "Ranking of the Best Quality of Life Cities for Digital Nomads (2026)",
    descriptionEs:
      "Las 105 ciudades de Roavio ordenadas por calidad de vida general, según el índice de Numbeo (sanidad, coste, tráfico, contaminación y clima).",
    descriptionEn:
      "All 105 Roavio cities ranked by overall quality of life, based on Numbeo's index (healthcare, cost, traffic, pollution, and climate).",
    cardTitleEs: "Calidad de vida",
    cardTitleEn: "Quality of life",
    unitEs: "/10",
    unitEn: "/10",
  },
  {
    slug: "internet",
    field: "internetSpeed",
    direction: "desc",
    icon: "wifi",
    titleEs: "Ranking de ciudades con internet más rápido para nómadas digitales (2026)",
    titleEn: "Ranking of the Fastest Internet Cities for Digital Nomads (2026)",
    descriptionEs:
      "Las 105 ciudades de Roavio ordenadas por velocidad media de banda ancha fija, según el Speedtest Global Index (Ookla).",
    descriptionEn:
      "All 105 Roavio cities ranked by average fixed broadband speed, based on the Speedtest Global Index (Ookla).",
    cardTitleEs: "Internet",
    cardTitleEn: "Internet speed",
    unitEs: "Mbps",
    unitEn: "Mbps",
  },
];

export function getRankingBySlug(slug: string): RankingConfig | undefined {
  return rankings.find((r) => r.slug === slug);
}

export function getSortedCities(config: RankingConfig): City[] {
  const sorted = [...cities].sort((a, b) => {
    const av = a[config.field] as unknown as number;
    const bv = b[config.field] as unknown as number;
    return config.direction === "asc" ? av - bv : bv - av;
  });
  return sorted;
}

export function formatRankingValue(config: RankingConfig, city: City): string {
  switch (config.field) {
    case "costPerMonth":
      return `${city.currency === "EUR" ? "€" : city.currency + " "}${city.costPerMonth}`;
    case "safetyScore":
      return `${city.safetyScore}/10`;
    case "qualityOfLife":
      return `${city.qualityOfLife}/10`;
    case "internetSpeed":
      return `${city.internetSpeed} Mbps`;
    default:
      return String(city[config.field]);
  }
}

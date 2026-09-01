// Datos piloto del mapa interactivo de Roavio.
// Fase 1: solo coworkings (categoría gratuita). Hoteles y cafés se añadirán
// más adelante como capas de pago (hoteles vía afiliación, cafés en el plan premium).
// Coordenadas aproximadas a nivel de barrio/local a partir de las fuentes citadas en
// cada guía de "Barrios y coworkings" (data/cityGuides.ts / cityGuidesEn.ts).

export type PoiCategory = "coworking" | "hotel" | "cafe";

export type Poi = {
  id: string;
  citySlug: string;
  category: PoiCategory;
  name: string;
  neighborhood: { es: string; en: string };
  lat: number;
  lng: number;
  priceInfo?: { es: string; en: string };
};

export const pois: Poi[] = [
  // Valencia
  {
    id: "valencia-wayco",
    citySlug: "valencia",
    category: "coworking",
    name: "Wayco Ruzafa",
    neighborhood: { es: "Ruzafa", en: "Ruzafa" },
    lat: 39.4623,
    lng: -0.3745,
    priceInfo: { es: "Bono de día 25-40 € + IVA", en: "Day pass €25-40 + VAT" },
  },
  {
    id: "valencia-harinera",
    citySlug: "valencia",
    category: "coworking",
    name: "La Harinera",
    neighborhood: { es: "El Cabanyal", en: "El Cabanyal" },
    lat: 39.4715,
    lng: -0.3295,
    priceInfo: { es: "Espacio creativo junto a la playa", en: "Creative space near the beach" },
  },
  {
    id: "valencia-cloud",
    citySlug: "valencia",
    category: "coworking",
    name: "Cloud Coworking",
    neighborhood: { es: "Ciutat Vella", en: "Ciutat Vella" },
    lat: 39.4785,
    lng: -0.3760,
    priceInfo: { es: "En pleno centro histórico", en: "Right in the historic center" },
  },
  // Lisboa
  {
    id: "lisboa-coworklisboa",
    citySlug: "lisboa",
    category: "coworking",
    name: "Coworklisboa",
    neighborhood: { es: "Mouraria", en: "Mouraria" },
    lat: 38.7145,
    lng: -9.1338,
    priceInfo: { es: "Desde ~180 €/mes", en: "From ~€180/month" },
  },
  {
    id: "lisboa-secondhome",
    citySlug: "lisboa",
    category: "coworking",
    name: "Second Home",
    neighborhood: { es: "Mercado da Ribeira", en: "Mercado da Ribeira" },
    lat: 38.7065,
    lng: -9.1456,
    priceInfo: { es: "250-350 €/mes", en: "€250-350/month" },
  },
  {
    id: "lisboa-factory",
    citySlug: "lisboa",
    category: "coworking",
    name: "Factory Lisboa",
    neighborhood: { es: "Príncipe Real", en: "Príncipe Real" },
    lat: 38.7165,
    lng: -9.1500,
    priceInfo: { es: "200-280 €/mes", en: "€200-280/month" },
  },
  // Budapest
  {
    id: "budapest-kaptar",
    citySlug: "budapest",
    category: "coworking",
    name: "Kaptár",
    neighborhood: { es: "Distrito VII", en: "District VII" },
    lat: 47.4985,
    lng: 19.0665,
    priceInfo: { es: "~8 €/día o 100 €/mes", en: "~€8/day or €100/month" },
  },
  {
    id: "budapest-kubik",
    citySlug: "budapest",
    category: "coworking",
    name: "KUBIK",
    neighborhood: { es: "Distrito V", en: "District V" },
    lat: 47.4975,
    lng: 19.0545,
    priceInfo: { es: "~12 €/día, con terraza", en: "~€12/day, with terrace" },
  },
  {
    id: "budapest-espresso-embassy",
    citySlug: "budapest",
    category: "coworking",
    name: "Espresso Embassy",
    neighborhood: { es: "Andrássy út", en: "Andrássy Avenue" },
    lat: 47.5020,
    lng: 19.0640,
    priceInfo: { es: "Café de trabajo, ~2,50 €", en: "Work-friendly café, ~€2.50" },
  },
  // Tiflis
  {
    id: "tiflis-vibe",
    citySlug: "tiflis",
    category: "coworking",
    name: "Vibe Coworking Cafe",
    neighborhood: { es: "Vera", en: "Vera" },
    lat: 41.7080,
    lng: 44.7850,
    priceInfo: { es: "7 $/día o 93 $/mes", en: "$7/day or $93/month" },
  },
  {
    id: "tiflis-impacthub",
    citySlug: "tiflis",
    category: "coworking",
    name: "Impact Hub Tbilisi",
    neighborhood: { es: "Fabrika, Chugureti", en: "Fabrika, Chugureti" },
    lat: 41.6975,
    lng: 44.8090,
    priceInfo: { es: "15 $/día o 194 $/mes", en: "$15/day or $194/month" },
  },
  {
    id: "tiflis-dblock",
    citySlug: "tiflis",
    category: "coworking",
    name: "D Block @ Stamba",
    neighborhood: { es: "Rustaveli", en: "Rustaveli" },
    lat: 41.6990,
    lng: 44.7940,
    priceInfo: { es: "15 $/día o 185 $/mes", en: "$15/day or $185/month" },
  },
  // Tokio
  {
    id: "tokio-andwork",
    citySlug: "tokio",
    category: "coworking",
    name: ".andwork",
    neighborhood: { es: "Shibuya", en: "Shibuya" },
    lat: 35.6600,
    lng: 139.7010,
    priceInfo: { es: "Pase diario 3.300 ¥", en: "Day pass ¥3,300" },
  },
  {
    id: "tokio-midoriso",
    citySlug: "tokio",
    category: "coworking",
    name: "Midori.so",
    neighborhood: { es: "Nakameguro", en: "Nakameguro" },
    lat: 35.6438,
    lng: 139.6985,
    priceInfo: { es: "Desde 42.350 ¥/mes", en: "From ¥42,350/month" },
  },
  {
    id: "tokio-stokyo",
    citySlug: "tokio",
    category: "coworking",
    name: "S-Tokyo",
    neighborhood: { es: "Nihonbashi", en: "Nihonbashi" },
    lat: 35.6825,
    lng: 139.7740,
    priceInfo: { es: "24/7, desde 27.500 ¥/mes", en: "24/7, from ¥27,500/month" },
  },
];

export function getPoisByCity(citySlug: string): Poi[] {
  return pois.filter((p) => p.citySlug === citySlug);
}

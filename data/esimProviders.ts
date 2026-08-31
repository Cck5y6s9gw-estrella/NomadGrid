// Recommended eSIM providers shown on every city page.
// `url` currently points to each provider's normal site. Once Roavio is
// accepted into their affiliate programs, swap each `url` for the tracked
// affiliate link (and add the "may earn a commission" disclosure in
// lib/dictionary.ts -> esimDisclaimer) — no other file needs to change,
// every city page reads from here.
export type EsimProvider = {
  name: string;
  blurbEs: string;
  blurbEn: string;
  url: string;
  badge?: string;
};

export const esimProviders: EsimProvider[] = [
  {
    name: "Airalo",
    blurbEs: "El más popular: cobertura en más de 200 países y planes flexibles por días o GB.",
    blurbEn: "The most popular option: coverage in 200+ countries with flexible day- or GB-based plans.",
    url: "https://www.airalo.com",
    badge: "Popular",
  },
  {
    name: "Holafly",
    blurbEs: "Datos ilimitados, ideal si vas a trabajar en remoto y necesitas conexión constante.",
    blurbEn: "Unlimited data, ideal if you'll be working remotely and need a constant connection.",
    url: "https://esim.holafly.com",
  },
  {
    name: "Saily",
    blurbEs: "Precios competitivos y activación instantánea desde la app, del equipo de NordVPN.",
    blurbEn: "Competitive pricing and instant activation from the app, by the NordVPN team.",
    url: "https://saily.com",
  },
];

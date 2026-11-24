// Mapa de pares de ciudades con un artículo "X vs Y" ya publicado.
// Al añadir un nuevo artículo de comparativa, añade también su entrada aquí
// para que el comparador enlace automáticamente y lo sugiera en el estado vacío.
export type VsArticleEntry = {
  slugs: [string, string];
  article: string;
};

export const vsArticles: VsArticleEntry[] = [
  { slugs: ["barcelona", "valencia"], article: "barcelona-vs-valencia" },
  { slugs: ["budapest", "praga"], article: "budapest-vs-praga" },
  { slugs: ["lisboa", "oporto"], article: "lisboa-vs-oporto" },
  { slugs: ["valencia", "lisboa"], article: "valencia-vs-lisboa" },
  { slugs: ["valencia", "madrid"], article: "valencia-vs-madrid" },
  { slugs: ["zurich", "berlin"], article: "zurich-vs-berlin" },
  { slugs: ["san-juan", "puerto-vallarta"], article: "san-juan-vs-puerto-vallarta" },
  { slugs: ["tel-aviv", "dubai"], article: "tel-aviv-vs-dubai" },
  { slugs: ["girona", "bilbao"], article: "girona-vs-bilbao" },
  { slugs: ["bali", "chiang-mai"], article: "bali-vs-chiang-mai" },
  { slugs: ["bangkok", "chiang-mai"], article: "bangkok-vs-chiang-mai" },
  { slugs: ["bansko", "cluj-napoca"], article: "bansko-vs-cluj-napoca" },
  { slugs: ["catania", "cagliari"], article: "catania-vs-cagliari" },
  { slugs: ["chiang-mai", "chiang-rai"], article: "chiang-mai-vs-chiang-rai" },
  { slugs: ["cork", "dublin"], article: "cork-vs-dublin" },
  { slugs: ["edimburgo", "glasgow"], article: "edimburgo-vs-glasgow" },
  { slugs: ["fukuoka", "tokio"], article: "fukuoka-vs-tokio" },
  { slugs: ["ginebra", "zurich"], article: "ginebra-vs-zurich" },
  { slugs: ["gotemburgo", "estocolmo"], article: "gotemburgo-vs-estocolmo" },
  { slugs: ["jerusalen", "tel-aviv"], article: "jerusalen-vs-tel-aviv" },
  { slugs: ["katmandu", "pokhara"], article: "katmandu-vs-pokhara" },
  { slugs: ["kioto", "tokio"], article: "kioto-vs-tokio" },
  { slugs: ["lucerna", "lugano"], article: "lucerna-vs-lugano" },
  { slugs: ["medellin", "cali"], article: "medellin-vs-cali" },
  { slugs: ["montpellier", "valencia"], article: "montpellier-vs-valencia" },
  { slugs: ["mumbai", "nueva-delhi"], article: "mumbai-vs-nueva-delhi" },
  { slugs: ["napoles", "marsella"], article: "napoles-vs-marsella" },
  { slugs: ["riad", "dubai"], article: "riad-vs-dubai" },
  { slugs: ["stuttgart", "munich"], article: "stuttgart-vs-munich" },
  { slugs: ["timisoara", "brno"], article: "timisoara-vs-brno" },
  { slugs: ["turin", "milan"], article: "turin-vs-milan" },
  { slugs: ["vancouver", "montreal"], article: "vancouver-vs-montreal" },
  { slugs: ["varna", "rijeka"], article: "varna-vs-rijeka" },
];

export function findVsArticle(selectedSlugs: string[]): string | null {
  if (selectedSlugs.length !== 2) return null;
  const [a, b] = selectedSlugs;
  const match = vsArticles.find(
    (entry) =>
      (entry.slugs[0] === a && entry.slugs[1] === b) ||
      (entry.slugs[0] === b && entry.slugs[1] === a)
  );
  return match ? match.article : null;
}

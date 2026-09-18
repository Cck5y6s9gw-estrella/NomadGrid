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

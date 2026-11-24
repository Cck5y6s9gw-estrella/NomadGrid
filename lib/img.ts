/** Reescribe el ancho (w=) y la calidad de una URL de Unsplash para no servir 800px donde bastan 96. */
export function imgW(url: string, w: number, q = 70): string {
  if (!url.includes("images.unsplash.com")) return url;
  return url.replace(/([?&])w=\d+/, `$1w=${w}`).replace(/([?&])q=\d+/, `$1q=${q}`);
}

export function imgSet(url: string, widths: number[]): string {
  return widths.map((w) => `${imgW(url, w)} ${w}w`).join(", ");
}

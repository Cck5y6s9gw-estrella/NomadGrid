// Brillo decorativo naranja reutilizable — mismo efecto introducido en /match,
// ahora disponible para el resto de páginas. El contenedor padre debe llevar
// "relative overflow-hidden" para que quede recortado correctamente.
export default function Glow({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full bg-accent/20 blur-[120px] ${className}`}
    />
  );
}

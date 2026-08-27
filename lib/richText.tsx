import type { ReactNode } from "react";

// Convierte **negrita** y *cursiva* de estilo Markdown en nodos de React.
// No soporta anidamiento (negrita dentro de cursiva, etc.) porque el
// contenido de las guías de ciudad no lo necesita.
function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const regex = /(\*\*(.+?)\*\*)|(\*(.+?)\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    if (match[2] !== undefined) {
      nodes.push(<strong key={`${keyPrefix}-b-${i}`}>{match[2]}</strong>);
    } else if (match[4] !== undefined) {
      nodes.push(<em key={`${keyPrefix}-i-${i}`}>{match[4]}</em>);
    }
    lastIndex = regex.lastIndex;
    i++;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

// Convierte un bloque de texto (párrafos separados por línea en blanco,
// con **negrita**/*cursiva* estilo Markdown) en elementos <p> de React.
export function renderRichText(content: string): ReactNode[] {
  const paragraphs = content
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return paragraphs.map((p, idx) => (
    <p key={idx} className="text-muted leading-relaxed">
      {renderInline(p, `p${idx}`)}
    </p>
  ));
}
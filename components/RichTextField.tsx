"use client";

import { useRef, useState } from "react";
import { marked } from "marked";

export default function RichTextField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [showPreview, setShowPreview] = useState(false);

  function wrapSelection(before: string, after: string = before) {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = value.slice(start, end);
    const newValue =
      value.slice(0, start) + before + selected + after + value.slice(end);
    onChange(newValue);
    requestAnimationFrame(() => {
      textarea.focus();
      textarea.setSelectionRange(start + before.length, end + before.length);
    });
  }

  function insertLinePrefix(prefix: string) {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const lineStart = value.lastIndexOf("\n", start - 1) + 1;
    const newValue = value.slice(0, lineStart) + prefix + value.slice(lineStart);
    onChange(newValue);
    requestAnimationFrame(() => {
      textarea.focus();
      textarea.setSelectionRange(start + prefix.length, start + prefix.length);
    });
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-medium text-muted">{label}</label>
        <button
          type="button"
          onClick={() => setShowPreview((v) => !v)}
          className="text-xs text-accent hover:underline"
        >
          {showPreview ? "Ver editor" : "Ver vista previa"}
        </button>
      </div>

      {!showPreview && (
        <>
          <div className="flex gap-1 mb-2">
            <button
              type="button"
              onClick={() => wrapSelection("**")}
              className="px-3 py-1 rounded-md text-sm font-bold border border-border text-foreground hover:border-accent/60"
              title="Negrita"
            >
              N
            </button>
            <button
              type="button"
              onClick={() => wrapSelection("*")}
              className="px-3 py-1 rounded-md text-sm italic border border-border text-foreground hover:border-accent/60"
              title="Cursiva"
            >
              K
            </button>
            <button
              type="button"
              onClick={() => insertLinePrefix("## ")}
              className="px-3 py-1 rounded-md text-sm font-semibold border border-border text-foreground hover:border-accent/60"
              title="Subtítulo"
            >
              H2
            </button>
            <button
              type="button"
              onClick={() => insertLinePrefix("- ")}
              className="px-3 py-1 rounded-md text-sm border border-border text-foreground hover:border-accent/60"
              title="Lista"
            >
              •
            </button>
          </div>
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={12}
            className="w-full rounded-xl border border-border bg-card p-4 text-sm text-foreground focus:outline-none focus:border-accent/60"
            placeholder="Escribe aquí el cuerpo del artículo..."
          />
        </>
      )}

      {showPreview && (
        <div
          className="rounded-xl border border-border bg-card p-4"
          dangerouslySetInnerHTML={{ __html: marked.parse(value) as string }}
        />
      )}
    </div>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const types = [
  "Feedback general",
  "Incidencia o error",
  "Sugerencia de ciudad",
  "Otra cosa",
];

export default function FeedbackPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState(types[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, type, message }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setName("");
      setEmail("");
      setType(types[0]);
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="max-w-xl mx-auto px-6 pt-28 pb-20">
        <div className="mb-10">
          <div className="text-xs font-medium tracking-widest text-accent uppercase mb-3">Feedback</div>
          <h1 className="text-3xl font-semibold mb-2 tracking-tight">
            Cuéntanos qué <span className="text-accent">falta</span>
          </h1>
          <p className="text-muted text-sm">
            Roavio está en beta. Si algo no funciona, echas en falta una ciudad, o tienes una idea, este es el sitio.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4 text-lg">
              ✓
            </div>
            <p className="text-foreground font-medium mb-1">Mensaje enviado</p>
            <p className="text-muted text-sm mb-6">Gracias, lo leeré personalmente.</p>
            <button
              onClick={() => setStatus("idle")}
              className="text-sm text-accent hover:underline"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 space-y-5">
            <div>
              <label className="block text-sm text-muted mb-2">Tipo</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full bg-background border border-border rounded-xl px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:border-accent/60 transition-colors"
              >
                {types.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm text-muted mb-2">Mensaje</label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Cuéntanos con el máximo detalle posible..."
                className="w-full bg-background border border-border rounded-xl px-3.5 py-2.5 text-sm text-foreground placeholder-muted focus:outline-none focus:border-accent/60 transition-colors resize-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-muted mb-2">Nombre (opcional)</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-background border border-border rounded-xl px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:border-accent/60 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-muted mb-2">Email (opcional)</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Si quieres respuesta"
                  className="w-full bg-background border border-border rounded-xl px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:border-accent/60 transition-colors"
                />
              </div>
            </div>

            {status === "error" && (
              <p className="text-sm text-red-400">Algo ha fallado. Inténtalo de nuevo en un momento.</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-accent text-white py-2.5 rounded-full font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {status === "loading" ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        )}
      </div>

      <footer className="border-t border-border py-8 px-6 text-center text-xs text-muted">
        Roavio · Datos de coste, internet, seguridad y calidad de vida basados en Numbeo y Speedtest Global Index (Ookla) · Actualizado 2026
        <span className="mx-2">·</span>
        <Link href="/feedback" className="hover:text-accent transition-colors">Feedback</Link>
      </footer>
    </main>
  );
}
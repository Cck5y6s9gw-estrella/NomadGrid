"use client";

import { useState } from "react";
import RichTextField from "./RichTextField";

export default function PublishForm() {
  const [titleEs, setTitleEs] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [dekEs, setDekEs] = useState("");
  const [dekEn, setDekEn] = useState("");
  const [bodyEs, setBodyEs] = useState("");
  const [bodyEn, setBodyEn] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] || null;
    setImage(file);
    setImagePreview(file ? URL.createObjectURL(file) : null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData();
    formData.append("title_es", titleEs);
    formData.append("title_en", titleEn);
    formData.append("dek_es", dekEs);
    formData.append("dek_en", dekEn);
    formData.append("body_es", bodyEs);
    formData.append("body_en", bodyEn);
    formData.append("date", new Date().toISOString().slice(0, 10));
    if (image) formData.append("image", image);

    try {
      const res = await fetch("/api/publish-article", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Algo ha fallado.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("No se ha podido conectar. Inténtalo de nuevo.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center">
        <p className="text-lg font-bold mb-2">¡Artículo enviado!</p>
        <p className="text-sm text-muted mb-6">
          Tardará 1-2 minutos en aparecer en /articulos mientras se despliega.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 rounded-full bg-accent text-white text-sm font-medium"
        >
          Publicar otro artículo
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-muted block mb-2">Título (español)</label>
          <input required value={titleEs} onChange={(e) => setTitleEs(e.target.value)}
            className="w-full rounded-xl border border-border bg-card p-3 text-sm focus:outline-none focus:border-accent/60" />
        </div>
        <div>
          <label className="text-sm font-medium text-muted block mb-2">Título (inglés)</label>
          <input required value={titleEn} onChange={(e) => setTitleEn(e.target.value)}
            className="w-full rounded-xl border border-border bg-card p-3 text-sm focus:outline-none focus:border-accent/60" />
        </div>
        <div>
          <label className="text-sm font-medium text-muted block mb-2">Resumen corto (español)</label>
          <input required value={dekEs} onChange={(e) => setDekEs(e.target.value)}
            className="w-full rounded-xl border border-border bg-card p-3 text-sm focus:outline-none focus:border-accent/60" />
        </div>
        <div>
          <label className="text-sm font-medium text-muted block mb-2">Resumen corto (inglés)</label>
          <input required value={dekEn} onChange={(e) => setDekEn(e.target.value)}
            className="w-full rounded-xl border border-border bg-card p-3 text-sm focus:outline-none focus:border-accent/60" />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-muted block mb-2">
          Imagen de portada (opcional, menos de 4MB)
        </label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {imagePreview && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imagePreview} alt="" className="mt-3 w-full h-48 object-cover rounded-xl border border-border" />
        )}
      </div>

      <RichTextField label="Cuerpo (español)" value={bodyEs} onChange={setBodyEs} />
      <RichTextField label="Cuerpo (inglés)" value={bodyEn} onChange={setBodyEn} />

      {status === "error" && <p className="text-sm text-red-400">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="px-6 py-3 rounded-full bg-accent text-white text-sm font-medium disabled:opacity-50"
      >
        {status === "loading" ? "Publicando..." : "Publicar"}
      </button>
    </form>
  );
}
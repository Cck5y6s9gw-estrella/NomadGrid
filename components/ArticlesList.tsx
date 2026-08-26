"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import type { Article } from "../lib/articles";

type Lang = "es" | "en";

export default function ArticlesList({ articles }: { articles: Article[] }) {
  const [lang, setLang] = useState<Lang>("es");

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground px-6 pt-28 pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-10">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight mb-2">
                {lang === "es" ? "Artículos" : "Articles"}
              </h1>
              <p className="text-sm text-muted">
                {lang === "es"
                  ? `${articles.length} ${articles.length === 1 ? "artículo publicado" : "artículos publicados"}`
                  : `${articles.length} ${articles.length === 1 ? "article published" : "articles published"}`}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setLang("es")}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  lang === "es"
                    ? "bg-accent text-white border-accent"
                    : "border-border text-muted hover:border-accent/60"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  lang === "en"
                    ? "bg-accent text-white border-accent"
                    : "border-border text-muted hover:border-accent/60"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {articles.length === 0 ? (
            <div className="rounded-2xl border-2 border-dashed border-border py-20 px-6 text-center">
              <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
                ✎
              </div>
              <p className="text-muted">
                {lang === "es"
                  ? "Todavía no hay artículos publicados."
                  : "No articles published yet."}
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articulos/${article.slug}`}
                  className="group block rounded-2xl border border-border bg-card overflow-hidden hover:border-accent/60 hover:-translate-y-0.5 transition-all duration-200"
                >
                  {article.cover ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={article.cover}
                      alt=""
                      className="w-full h-40 object-cover"
                    />
                  ) : (
                    <div className="h-1.5 w-full bg-gradient-to-r from-accent to-accent/30" />
                  )}
                  <div className="p-5">
                    <p className="text-xs text-muted uppercase tracking-wide mb-2">
                      {article.date}
                    </p>
                    <h2 className="text-lg font-bold mb-1.5 tracking-tight">
                      {article.title[lang]}
                    </h2>
                    <p className="text-sm text-muted mb-4 line-clamp-2">
                      {article.dek[lang]}
                    </p>
                    <span className="text-sm font-medium text-accent">
                      {lang === "es" ? "Leer más" : "Read more"}
                      <span className="inline-block transition-transform group-hover:translate-x-0.5 ml-1">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import type { Article } from "../lib/articles";

type Lang = "es" | "en";

export default function ArticleView({ article }: { article: Article }) {
  const [lang, setLang] = useState<Lang>("es");

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground px-6 pt-28 pb-20">
        <div className="mx-auto max-w-2xl">
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/articulos"
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              {lang === "es" ? "← Volver a artículos" : "← Back to articles"}
            </Link>

            <div className="flex gap-2">
              <button
                onClick={() => setLang("es")}
                className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors ${
                  lang === "es"
                    ? "bg-accent text-white border-accent"
                    : "border-border text-muted hover:border-accent/60"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors ${
                  lang === "en"
                    ? "bg-accent text-white border-accent"
                    : "border-border text-muted hover:border-accent/60"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {article.cover && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={article.cover}
              alt=""
              className="w-full h-72 object-cover rounded-2xl border border-border mb-8"
            />
          )}

          <p className="text-xs text-muted uppercase tracking-wide mb-3">
            {article.date}
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight leading-tight mb-3">
            {article.title[lang]}
          </h1>
          <p className="text-lg text-muted mb-10">{article.dek[lang]}</p>

          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: article.bodyHtml[lang] }}
          />

          <div className="mt-16 pt-6 border-t border-border">
            <Link
              href="/articulos"
              className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
            >
              {lang === "es" ? "← Ver todos los artículos" : "← See all articles"}
            </Link>
          </div>

          <style>{`
            .article-body h2 { font-size: 1.5rem; font-weight: 800; letter-spacing: -0.01em; margin: 32px 0 14px; color: #f5f5f4; }
            .article-body p { margin: 0 0 18px; font-size: 1.05rem; line-height: 1.75; color: #d4d4d4; }
            .article-body strong { color: #f5f5f4; }
            .article-body a { color: #ea580c; text-decoration: underline; text-underline-offset: 2px; }
            .article-body img { border-radius: 14px; margin: 20px 0; max-width: 100%; }
            .article-body ul, .article-body ol { margin: 0 0 18px; padding-left: 24px; color: #d4d4d4; line-height: 1.7; }
          `}</style>
        </div>
      </main>
    </>
  );
}
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

export type Article = {
  slug: string;
  title: { es: string; en: string };
  dek: { es: string; en: string };
  date: string;
  cover: string;
  bodyHtml: { es: string; en: string };
};

function splitLanguages(rawBody: string): { es: string; en: string } {
  const marker = "---EN---";
  const parts = rawBody.split(marker);
  return {
    es: (parts[0] || "").trim(),
    en: (parts[1] || "").trim(),
  };
}

function formatDate(value: unknown): string {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }
  return typeof value === "string" ? value : "";
}

function readArticleFile(filename: string): Article {
  const slug = filename.replace(/\.md$/, "");
  const fullPath = path.join(ARTICLES_DIR, filename);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const { es, en } = splitLanguages(content);

  return {
    slug,
    title: { es: data.title_es ?? "", en: data.title_en ?? "" },
    dek: { es: data.dek_es ?? "", en: data.dek_en ?? "" },
    date: formatDate(data.date),
    cover: data.cover ?? "",
    bodyHtml: {
      es: marked.parse(es) as string,
      en: marked.parse(en) as string,
    },
  };
}

export function getAllArticles(): Article[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".md"));
  return files.map(readArticleFile).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticleBySlug(slug: string): Article | null {
  const fullPath = path.join(ARTICLES_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  return readArticleFile(`${slug}.md`);
}
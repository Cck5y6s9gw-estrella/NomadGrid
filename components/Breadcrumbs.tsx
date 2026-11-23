"use client";

import Link from "@/components/LocaleLink";
import { useLanguage } from "@/lib/i18n";

export type BreadcrumbItem = { es: string; en: string; href?: string };

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const { lang } = useLanguage();
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted mb-6">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {it.href ? (
              <Link href={it.href} className="hover:text-foreground transition-colors">
                {it[lang]}
              </Link>
            ) : (
              <span className="text-foreground" aria-current="page">{it[lang]}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

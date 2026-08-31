"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Show, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/dictionary";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const { lang, setLang } = useLanguage();
  const d = t(lang);
  const { isSignedIn } = useUser();

  const links = [
    { href: "/cities", label: d.navCities },
    { href: "/compare", label: d.navCompare },
    { href: "/articulos", label: d.navArticles },
    ...(isSignedIn ? [{ href: "/favoritos", label: d.navFavorites }] : []),
    { href: "/feedback", label: d.navFeedback },
  ];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-foreground font-semibold text-lg tracking-tight">
          <img src="/logo-icon.png" alt="Roavio" className="h-6 w-auto" />
          Roavio
        </Link>

        <div className="flex items-center gap-3">
          <div className="flex items-center border border-border rounded-full p-0.5 text-xs font-medium">
            <button
              onClick={() => setLang("es")}
              className={`px-2.5 py-1 rounded-full transition-colors ${
                lang === "es" ? "bg-accent text-white" : "text-muted hover:text-foreground"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 rounded-full transition-colors ${
                lang === "en" ? "bg-accent text-white" : "text-muted hover:text-foreground"
              }`}
            >
              EN
            </button>
          </div>

          <Show
            when="signed-in"
            fallback={
              <SignInButton mode="modal">
                <button className="text-xs font-medium tracking-wide text-accent border border-accent/50 rounded-full px-4 py-1.5 hover:bg-accent hover:text-white hover:border-accent transition-all duration-200 shadow-[0_0_0_1px_rgba(234,88,12,0.08)]">
                  {d.signIn}
                </button>
              </SignInButton>
            }
          >
            <UserButton />
          </Show>

          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label={d.navOpenMenu}
              className="flex items-center gap-2 text-sm text-foreground border border-border rounded-full px-3.5 py-1.5 hover:border-accent/60 transition-colors"
            >
              <span className="flex flex-col gap-[3px] w-4">
                <span className="h-[2px] w-full bg-foreground rounded-full" />
                <span className="h-[2px] w-full bg-foreground rounded-full" />
                <span className="h-[2px] w-full bg-foreground rounded-full" />
              </span>
              {d.navMenu}
            </button>

            {open && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-card border border-border rounded-2xl shadow-lg overflow-hidden py-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-2.5 text-sm transition-colors ${
                      pathname === link.href
                        ? "text-accent"
                        : "text-foreground hover:bg-background/60 hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

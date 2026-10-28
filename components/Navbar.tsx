"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Show, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/dictionary";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "@/components/ThemeProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const { lang, setLang } = useLanguage();
  const { theme } = useTheme();
  const d = t(lang);
  const { isSignedIn } = useUser();

  const links = [
    { href: "/cities", label: d.navCities },
    { href: "/match", label: d.navMatch },
    { href: "/calculadora", label: d.navBudget },
    { href: "/mapa", label: d.navMap },
    { href: "/compare", label: d.navCompare },
    { href: "/rankings", label: d.navRankings },
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
    <nav className="fixed top-3 left-0 right-0 z-50 px-3 sm:px-6" aria-label="Principal">
      <div className="max-w-6xl mx-auto h-14 flex items-center justify-between gap-2 rounded-full border border-line bg-glass backdrop-blur-xl pl-4 sm:pl-5 pr-2 sm:pr-2.5">
        <Link
          href="/"
          className="flex items-center gap-1.5 sm:gap-2 text-foreground font-semibold tracking-tight shrink-0 min-w-0"
        >
          <img src={theme === "light" ? "/logo-icon-light.png" : "/logo-icon.png"} alt="Roavio" className="h-6 w-auto shrink-0" />
          <span className="text-base sm:text-lg">Roavio</span>
        </Link>

        <div className="hidden min-[1360px]:flex items-center gap-0.5 text-[13.5px] text-foreground/80">
          {links.slice(0, 7).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 rounded-full transition-colors ${
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "bg-foreground/10 text-foreground"
                  : "hover:bg-foreground/10 hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <div className="flex items-center border border-line rounded-full p-0.5 text-xs font-medium shrink-0">
            <button
              onClick={() => setLang("es")}
              className={`px-2 sm:px-2.5 py-1 rounded-full transition-colors ${
                lang === "es" ? "bg-accent text-white" : "text-muted hover:text-foreground"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2 sm:px-2.5 py-1 rounded-full transition-colors ${
                lang === "en" ? "bg-accent text-white" : "text-muted hover:text-foreground"
              }`}
            >
              EN
            </button>
          </div>

          <ThemeToggle />

          <Show
            when="signed-in"
            fallback={
              <SignInButton mode="modal">
                <button className="text-xs font-medium tracking-wide text-white bg-accent rounded-full px-3 sm:px-4 py-2 hover:opacity-90 transition-opacity whitespace-nowrap shrink-0">
                  <span className="hidden sm:inline">{d.signIn}</span>
                  <span className="sm:hidden">{d.signIn.split("/")[0]}</span>
                </button>
              </SignInButton>
            }
          >
            <UserButton />
          </Show>

          <div className="relative shrink-0" ref={menuRef}>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label={d.navOpenMenu}
              className="flex items-center gap-2 text-sm text-foreground border border-line rounded-full px-2.5 sm:px-3.5 py-1.5 hover:border-accent/60 transition-colors whitespace-nowrap"
            >
              <span className="flex flex-col gap-[3px] w-4 shrink-0">
                <span className="h-[2px] w-full bg-foreground rounded-full" />
                <span className="h-[2px] w-full bg-foreground rounded-full" />
                <span className="h-[2px] w-full bg-foreground rounded-full" />
              </span>
              <span className="hidden sm:inline">{d.navMenu}</span>
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

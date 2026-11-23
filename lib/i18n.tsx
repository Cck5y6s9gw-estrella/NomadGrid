"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { enPath, isEnPath, stripEn } from "@/lib/locale";

export type Lang = "es" | "en";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** "/en" cuando la URL es la versión inglesa, "" en el resto. */
  prefix: "" | "/en";
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "es",
  setLang: () => {},
  prefix: "",
});

const STORAGE_KEY = "roavio_lang";
const GEO_COOKIE_KEY = "roavio_geo_lang";
const BOT_RE = /bot|crawl|spider|google|bing|slurp|baidu|yandex|duckduck|facebookexternalhit|twitter|lighthouse|headless|preview/i;

function readCookie(name: string): string | null {
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.split("=")[1]) : null;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const forced: Lang | null = isEnPath(pathname) ? "en" : null;
  const [lang, setLangState] = useState<Lang>(forced ?? "es");
  const effLang: Lang = forced ?? lang;

  useEffect(() => {
    document.documentElement.lang = effLang;
  }, [effLang]);

  useEffect(() => {
    // En /en/* el idioma lo fija la URL.
    if (forced) return;
    try {
      let pref: Lang | null = null;
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "es" || stored === "en") {
        pref = stored;
      } else if (!BOT_RE.test(window.navigator.userAgent)) {
        // Sin elección previa: geolocalización (inglés fuera de España) y,
        // si no, el idioma del navegador. Los bots se quedan siempre en español.
        const geoLang = readCookie(GEO_COOKIE_KEY);
        if (geoLang === "es" || geoLang === "en") {
          pref = geoLang;
        } else if ((window.navigator.language || "").toLowerCase().startsWith("en")) {
          pref = "en";
        }
      }
      if (pref === "en") {
        const target = enPath(pathname);
        if (target) {
          router.replace(target + window.location.search);
          return;
        }
        setLangState("en");
      } else {
        setLangState("es");
      }
    } catch {
      // localStorage/cookies unavailable — keep default "es"
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forced, pathname]);

  function setLang(next: Lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
    const search = typeof window !== "undefined" ? window.location.search : "";
    if (next === "en") {
      const target = enPath(pathname);
      if (target && target !== pathname) {
        router.push(target + search);
        return;
      }
      setLangState("en");
    } else {
      if (forced) {
        router.push(stripEn(pathname) + search);
        return;
      }
      setLangState("es");
    }
  }

  return (
    <LanguageContext.Provider value={{ lang: effLang, setLang, prefix: forced ? "/en" : "" }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

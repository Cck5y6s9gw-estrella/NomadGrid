"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "es" | "en";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "es",
  setLang: () => {},
});

const STORAGE_KEY = "roavio_lang";
const GEO_COOKIE_KEY = "roavio_geo_lang";

function readCookie(name: string): string | null {
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.split("=")[1]) : null;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    try {
      // 1. Explicit choice the user already made on this device wins.
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "es" || stored === "en") {
        setLangState(stored);
        return;
      }

      // 2. Otherwise, fall back to the IP-based geolocation cookie set by
      // the server (English by default outside Spain).
      const geoLang = readCookie(GEO_COOKIE_KEY);
      if (geoLang === "es" || geoLang === "en") {
        setLangState(geoLang);
        return;
      }

      // 3. Last resort: the browser's own language setting.
      const browserLang = window.navigator.language || "";
      if (browserLang.toLowerCase().startsWith("en")) {
        setLangState("en");
      }
    } catch {
      // localStorage/cookies unavailable — keep default "es"
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function setLang(next: Lang) {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

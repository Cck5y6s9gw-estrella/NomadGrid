"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Theme = "dark" | "light";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
});

const STORAGE_KEY = "roavio_theme";

// Otros componentes (como el mapa, que no puede pintarse con clases de
// Tailwind porque MapLibre pide colores reales) escuchan este evento para
// reaccionar a un cambio de tema sin pasar por un re-render de React.
export const THEME_CHANGE_EVENT = "roavio-theme-change";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    // El script inline en <head> ya fijó data-theme antes del primer pintado
    // (lee localStorage de forma síncrona); aquí solo sincronizamos el
    // estado de React con lo que quedó en el DOM, sin volver a tocarlo.
    const current = document.documentElement.getAttribute("data-theme");
    setThemeState(current === "light" ? "light" : "dark");
  }, []);

  function applyTheme(next: Theme) {
    setThemeState(next);
    document.documentElement.setAttribute("data-theme", next);
    document.documentElement.style.colorScheme = next;
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage no disponible (modo privado, etc.) — el tema sigue
      // funcionando para esta sesión, solo no se recuerda para la próxima.
    }
    window.dispatchEvent(new CustomEvent<Theme>(THEME_CHANGE_EVENT, { detail: next }));
  }

  function toggleTheme() {
    applyTheme(theme === "dark" ? "light" : "dark");
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}

"use client";

import { useTheme } from "./ThemeProvider";
import { IconSun, IconMoon } from "./Icon";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
      title={theme === "dark" ? "Modo claro" : "Modo oscuro"}
      className="flex items-center justify-center w-8 h-8 rounded-full border border-border text-muted hover:text-accent hover:border-accent/60 transition-colors shrink-0"
    >
      {theme === "dark" ? <IconSun className="w-4 h-4" /> : <IconMoon className="w-4 h-4" />}
    </button>
  );
}

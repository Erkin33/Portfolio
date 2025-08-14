"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type Ctx = { theme: Theme; toggle: () => void; set: (t: Theme) => void };

const ThemeCtx = createContext<Ctx | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  // начальная инициализация (localStorage → OS)
  useEffect(() => {
    const saved = (typeof window !== "undefined" &&
      (localStorage.getItem("theme") as Theme | null)) || null;

    const preferredDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const initial: Theme = saved ?? (preferredDark ? "dark" : "light");
    setTheme(initial);
  }, []);

  // применяем класс на <html> и сохраняем
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme(t => (t === "dark" ? "light" : "dark"));
  const set = (t: Theme) => setTheme(t);

  return <ThemeCtx.Provider value={{ theme, toggle, set }}>{children}</ThemeCtx.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error("useTheme must be used within <ThemeProvider>");
  return ctx;
}

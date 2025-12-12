"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
  mode: "light" | "dark";
  font: string;
  toggleTheme: () => void;
  toggleFont: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [font, setFont] = useState("default");
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    
    if (savedTheme) {
      setMode(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setMode(prefersDark ? "dark" : "light");
    }
    setMounted(true);
  }, []);

  // Apply theme class to HTML element
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(mode);
  }, [mode]);

  // Apply font class to HTML element
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("font-default", "font-rounded", "font-elegant");
    root.classList.add(`font-${font}`);
  }, [font]);

  // Save theme preference to localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("theme", mode);
    }
  }, [mode, mounted]);

  const toggleTheme = () => {
    setMode((m) => (m === "light" ? "dark" : "light"));
  };

  const toggleFont = () =>
    setFont((f) =>
      f === "default" ? "rounded" : f === "rounded" ? "elegant" : "default"
    );

  return (
    <ThemeContext.Provider value={{ mode, font, toggleTheme, toggleFont }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

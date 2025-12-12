"use client";

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext<any>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState("light");
  const [font, setFont] = useState("default");

  const toggleTheme = () =>
    setMode((m) => (m === "light" ? "dark" : "light"));

  const toggleFont = () =>
    setFont((f) =>
      f === "default" ? "rounded" : f === "rounded" ? "elegant" : "default"
    );

  return (
    <ThemeContext.Provider value={{ mode, font, toggleTheme, toggleFont }}>
      <div className={`${mode} font-${font}`}>{children}</div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

"use client";

import { useTheme } from "@/app/theme-provider";

export default function ThemeToggle() {
  const { toggleTheme, mode } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-xl border"
    >
      {mode === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}

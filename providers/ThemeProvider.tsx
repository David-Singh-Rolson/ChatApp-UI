"use client";

import { useEffect, useState } from "react";
import { useUIStore } from "@/store/ui-store";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useUIStore((state) => state.theme);
  const [mounted, setMounted] = useState(false);

  // Initialize theme from Zustand store or system preference
  useEffect(() => {
    if (!mounted) {
      // Check if theme is already in store, otherwise check system preference
      const savedTheme = localStorage.getItem("ui-storage");
      if (!savedTheme) {
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)",
        ).matches;
        useUIStore.setState({ theme: prefersDark ? "dark" : "light" });
      }
      setMounted(true);
    }
  }, [mounted]);

  // Apply theme class to HTML element
  useEffect(() => {
    if (mounted) {
      const root = document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(theme);
    }
  }, [theme, mounted]);

  return <>{children}</>;
}

// Export hook that uses Zustand store for backward compatibility
export const useTheme = () => {
  const theme = useUIStore((state) => state.theme);
  const toggleTheme = useUIStore((state) => state.toggleTheme);

  return {
    mode: theme,
    theme,
    toggleTheme,
  };
};

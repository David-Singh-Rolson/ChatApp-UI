import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface UIState {
  sidebarOpen: boolean;
  theme: "light" | "dark";
  activeChatId: string | null;
  toggleSidebar: () => void;
  setActiveChatId: (id: string) => void;
  toggleTheme: () => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      sidebarOpen: false,
      theme: "light",
      activeChatId: null,
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      setActiveChatId: (id: string) => set({ activeChatId: id }),
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
    }),
    {
      name: "ui-storage",
      partialize: (state) => ({ theme: state.theme }),
    }
  )
);


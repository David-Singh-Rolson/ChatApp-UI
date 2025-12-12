"use client";

import { useTheme } from "@/app/theme-provider";

export default function FontToggle() {
  const { toggleFont, font } = useTheme();

  return (
    <button onClick={toggleFont} className="px-4 py-2 rounded-xl border ml-4">
      Change Font ({font})
    </button>
  );
}

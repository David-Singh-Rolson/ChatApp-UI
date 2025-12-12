"use client";

import { useState, useEffect } from "react";

export default function FontToggle() {
  const [font, setFont] = useState("default");

  useEffect(() => {
    const savedFont = localStorage.getItem("font") || "default";
    setFont(savedFont);
  }, []);

  const toggleFont = () => {
    const nextFont =
      font === "default"
        ? "rounded"
        : font === "rounded"
          ? "elegant"
          : "default";
    setFont(nextFont);
    localStorage.setItem("font", nextFont);
    const root = document.documentElement;
    root.classList.remove("font-default", "font-rounded", "font-elegant");
    root.classList.add(`font-${nextFont}`);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("font-default", "font-rounded", "font-elegant");
    root.classList.add(`font-${font}`);
  }, [font]);

  return (
    <button onClick={toggleFont} className="px-4 py-2 rounded-xl border ml-4">
      Change Font ({font})
    </button>
  );
}

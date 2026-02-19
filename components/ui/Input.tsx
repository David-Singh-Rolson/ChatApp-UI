"use client";

import React, { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode; // ← supports icons
}

export default function Input({ label, icon, type, ...props }: InputProps) {
  const [visible, setVisible] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="space-y-1 w-full">
      {label && <label className="text-sm font-medium">{label}</label>}

      <div
        className="flex items-center gap-2 border rounded-xl px-3 py-2 
                   bg-white dark:bg-neutral-800 
                   border-gray-300 dark:border-neutral-700"
      >
        {/* LEFT ICON (optional) */}
        {icon && <span className="text-gray-500">{icon}</span>}

        {/* INPUT FIELD */}
        <input
          type={isPassword ? (visible ? "text" : "password") : type}
          {...props}
          className="w-full bg-transparent outline-none text-sm text-black dark:text-white"
        />

        {/* PASSWORD TOGGLE (only if type=password) */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setVisible((prev) => !prev)}
            className="text-gray-500"
          >
            {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </button>
        )}
      </div>
    </div>
  );
}

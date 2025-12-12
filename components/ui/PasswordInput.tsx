"use client";

import React, { useState } from "react";

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function PasswordInput(props: PasswordInputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="flex items-center gap-2 border rounded-xl px-3 py-2 
                    bg-white dark:bg-neutral-800 
                    border-gray-300 dark:border-neutral-700"
    >
      <input
        type={visible ? "text" : "password"}
        {...props}
        className="w-full bg-transparent outline-none text-sm text-black dark:text-white"
      />

      <button type="button" onClick={() => setVisible((prev) => !prev)} className="text-gray-500">
        {visible ? "🙈" : "👁️"}
      </button>
    </div>
  );
}

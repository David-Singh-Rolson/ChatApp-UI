import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export default function Input({ icon, ...props }: InputProps) {
  return (
    <div
      className="flex items-center gap-2 border rounded-xl px-3 py-2 
                    bg-white dark:bg-neutral-800 
                    border-gray-300 dark:border-neutral-700"
    >
      {icon && <span className="text-gray-500">{icon}</span>}
      <input
        {...props}
        className="w-full bg-transparent outline-none text-sm text-black dark:text-white"
      />
    </div>
  );
}

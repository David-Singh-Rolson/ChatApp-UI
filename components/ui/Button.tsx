"use client";

import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = true,
  iconLeft,
  iconRight,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "flex items-center justify-center font-medium rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-neutral-700 dark:text-white",
    outline:
      "border border-gray-400 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  const sizes = {
    sm: "py-2 px-3 text-sm",
    md: "py-3 px-4 text-sm",
    lg: "py-4 px-5 text-base",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], fullWidth && "w-full", className)}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading && (
        <span className="animate-spin mr-2 border-2 border-white/40 border-t-white rounded-full w-4 h-4"></span>
      )}

      {iconLeft && <span className="mr-2">{iconLeft}</span>}

      {children}

      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
}

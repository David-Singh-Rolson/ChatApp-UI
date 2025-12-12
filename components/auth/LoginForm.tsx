"use client";

import { useState } from "react";
import { useTheme } from "@/app/theme-provider";

export default function LoginForm() {
  const { theme } = useTheme(); // optional for theme-based styling
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    // ⚠️ NO BACKEND YET (as per your request)
    console.log("Attempt login:", { email, password });

    // later we will integrate: POST /auth/login → JWT
  };

  return (
    <form onSubmit={submit} className="space-y-5">
      {/* Email */}
      <div>
        <label className="text-sm text-gray-600 dark:text-gray-300">Email</label>
        <input
          type="email"
          required
          className="
            w-full border rounded-lg p-3 mt-1 outline-none
            bg-white dark:bg-[#24242e]
            text-gray-900 dark:text-gray-100
            border-gray-300 dark:border-gray-600
            focus:ring-2 focus:ring-purple-400
          "
          placeholder="johan@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Password */}
      <div>
        <label className="text-sm text-gray-600 dark:text-gray-300">Password</label>
        <input
          type="password"
          required
          className="
            w-full border rounded-lg p-3 mt-1 outline-none
            bg-white dark:bg-[#24242e]
            text-gray-900 dark:text-gray-100
            border-gray-300 dark:border-gray-600
            focus:ring-2 focus:ring-purple-400
          "
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="
          w-full py-3 rounded-lg text-white font-medium
          bg-purple-600 hover:bg-purple-700
          dark:bg-purple-500 dark:hover:bg-purple-600
          transition
        "
      >
        Login
      </button>
    </form>
  );
}

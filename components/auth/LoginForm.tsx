"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";

export default function LoginForm() {
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
        <Input
          type="email"
          required
          className="mt-1"
          placeholder="johan@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          }
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

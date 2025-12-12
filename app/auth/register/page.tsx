"use client";

import RegisterForm from "@/components/auth/RegisterForm";
import Link from "next/link";
export default function LoginForm() {
  return (
    <div className="w-[380px] bg-white dark:bg-[#1a1a22] rounded-2xl p-8 shadow-xl">
      <RegisterForm />
      <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
}

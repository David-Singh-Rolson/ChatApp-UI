import LoginForm from "@/components/auth/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="w-[380px] bg-white dark:bg-[#1a1a22] rounded-2xl p-8 shadow-xl">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
        Welcome Back 👋
      </h2>

      <LoginForm />
      <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        Don't have an account?{" "}
        <Link
          href="/auth/register"
          className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
        >
          Register
        </Link>
      </p>
    </div>
  );
}

import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="w-[380px] bg-white dark:bg-[#1a1a22] rounded-2xl p-8 shadow-xl">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
        Welcome Back 👋
      </h2>

      <LoginForm />
    </div>
  );
}

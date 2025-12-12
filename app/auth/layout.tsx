import ThemeToggle from "@/components/ui/ThemeToggle";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative">
        {/* Theme Toggle Button - positioned in top-right corner */}
        <div className="absolute top-6 right-6">
          <ThemeToggle />
        </div>
        {children}
      </div>
    );
  }
  
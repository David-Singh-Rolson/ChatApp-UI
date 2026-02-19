import "./globals.css";
import { ReactQueryProvider, ThemeProvider } from "../providers";
import ThemeToggle from "@/components/toggles/ThemeToggle";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <ReactQueryProvider>
          <ThemeProvider>
            {/* Theme Toggle Button - positioned in top-right corner on every page */}
            <div className="fixed top-6 right-6 z-50">
              <ThemeToggle />
            </div>
            {children}
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

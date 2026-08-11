import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider";
import { ColorThemeProvider } from "@/context/color-theme-context";
import "./global.css";

export const metadata: Metadata = {
  title: "Task Manager",
  description: "Full Stack Assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ColorThemeProvider>
            {children}
          </ColorThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
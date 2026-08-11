"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // After the component mounts on the client, we set mounted to true
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent rendering the emoji until the client knows the actual theme
  if (!mounted) {
    return (
      <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
        <span className="text-transparent">🌙</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <span className="text-yellow-400">☀️</span>
      ) : (
        <span className="text-gray-600">🌙</span>
      )}
    </button>
  );
}
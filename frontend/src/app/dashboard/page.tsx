"use client";

import Link from "next/link";
import TaskList from "./components/TaskList";
import { ThemeToggle } from "../../components/theme-toggle";
import { useColorTheme } from "../../context/color-theme-context";

export default function DashboardPage() {
  const { colorTheme } = useColorTheme();

  // Map the selected color to a Tailwind text class
  const getAccentClass = (theme: string) => {
    const map: Record<string, string> = {
      purple: "text-purple-600",
      amber: "text-amber-500",
      blue: "text-blue-600",
      pink: "text-pink-500",
      rose: "text-rose-500",
      emerald: "text-emerald-500",
      black: "text-black dark:text-white",
    };
    return map[theme] || "text-purple-600";
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-950">
      {/* Sidebar */}
      <aside className="w-67 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col h-full">
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <span className={getAccentClass(colorTheme)}>✦</span> Dexter
          </h1>
        </div>
        
        <div className="px-4 mb-4">
          <button className="w-full flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300">
            <span>Workspace</span>
            <span className="text-gray-400">▼</span>
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <Link 
            href="/dashboard" 
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-medium"
          >
            <span className="text-gray-500 dark:text-gray-400">📋</span>
            Tasks
          </Link>
          <Link 
            href="#" 
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="text-gray-400">📁</span>
            Projects
          </Link>

          {/* Color Picker Section */}
          <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
              Theme Color
            </p>
            <ColorPicker />
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Header */}
        <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">☰</button>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Tasks</h2>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">🔍</button>
            <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">⊞</button>
            
            {/* Theme Toggle Button */}
            <ThemeToggle />
            
            <button className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
              + Add Task
            </button>
          </div>
        </header>

        {/* Task Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          <TaskList />
        </div>
      </main>
    </div>
  );
}

// Nested Color Picker Component
function ColorPicker() {
  const { colorTheme, setColorTheme } = useColorTheme();

  const colors = [
    { id: "purple", hex: "#8b5cf6" },
    { id: "amber", hex: "#f59e0b" },
    { id: "blue", hex: "#3b82f6" },
    { id: "pink", hex: "#ec4899" },
    { id: "rose", hex: "#f43f5e" },
    { id: "emerald", hex: "#10b981" },
    { id: "black", hex: "#000000" },
  ];

  return (
    <div className="px-3 flex flex-wrap gap-2">
      {colors.map((c) => (
        <button
          key={c.id}
          onClick={() => setColorTheme(c.id as any)}
          className={`w-6 h-6 rounded-full border border-gray-300 dark:border-gray-600 transition-all ${
            colorTheme === c.id 
              ? "ring-2 ring-offset-2 ring-gray-400 dark:ring-gray-500" 
              : "hover:scale-110"
          }`}
          style={{ backgroundColor: c.hex }}
          aria-label={`Set color to ${c.id}`}
        />
      ))}
    </div>
  );
}
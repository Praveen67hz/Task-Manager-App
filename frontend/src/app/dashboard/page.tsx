"use client";

import Link from "next/link";
import TaskList from "./components/TaskList";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-50">
        
      {/* Sidebar */}
      <aside className="w-67 bg-white border-r border-gray-200 flex flex-col h-full">
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <span className="text-purple-600">✦</span> Dexter
          </h1>
        </div>
        
        <div className="px-4 mb-4">
          <button className="w-full flex items-center justify-between bg-gray-100 px-3 py-2 rounded-lg text-sm text-gray-700">
            <span>Workspace</span>
            <span className="text-gray-400">▼</span>
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <Link 
            href="/dashboard" 
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-100 text-gray-900 font-medium"
          >
            <span className="text-gray-500">📋</span>
            Tasks
          </Link>
          <Link 
            href="#" 
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <span className="text-gray-400">📁</span>
            Projects
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="text-gray-500 hover:text-gray-700">☰</button>
            <h2 className="text-lg font-semibold text-gray-900">Tasks</h2>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 text-gray-500 hover:text-gray-700">🔍</button>
            <button className="p-2 text-gray-500 hover:text-gray-700">⊞</button>
            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
              + Add Task
            </button>
          </div>
        </header>

        {/* Task Content Placeholder */}
        <div className="flex-1 overflow-y-auto p-6">
          <TaskList/>
        </div>
      </main>
    </div>
  );
}
"use client";

import { useState, useEffect } from "react";
import { api } from "@/lib/api";

interface Task {
  id: string;
  title: string;
  description: string | null;
  status: string;
  createdAt: string;
}

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  
  // State to track which task is currently being edited
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get("/tasks");
        setTasks(response.data);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleAddTask = async () => {
    if (!newTaskTitle.trim()) return;

    try {
      const response = await api.post("/tasks", {
        title: newTaskTitle,
        status: "To Do",
      });
      setTasks((prev) => [...prev, response.data]);
      setNewTaskTitle("");
    } catch (error) {
      console.error("Failed to add task:", error);
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      await api.delete(`/tasks/${id}`);
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  // Start editing a task
  const startEditing = (task: Task) => {
    setEditingTaskId(task.id);
    setEditTitle(task.title);
  };

  // Cancel editing
  const cancelEditing = () => {
    setEditingTaskId(null);
    setEditTitle("");
  };

  // Save the edited task
  const saveEdit = async (id: string) => {
    if (!editTitle.trim()) return;

    try {
      const response = await api.patch(`/tasks/${id}`, {
        title: editTitle,
      });
      // Update the task in the local state
      setTasks((prev) => 
        prev.map((task) => task.id === id ? response.data : task)
      );
      cancelEditing();
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  if (loading) {
    return <div className="p-4 text-center text-gray-500">Loading tasks...</div>;
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200 bg-gray-50 flex gap-2">
        <input
          type="text"
          placeholder="Enter task title..."
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button
          onClick={handleAddTask}
          className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Add Task
        </button>
      </div>

      {tasks.length === 0 ? (
        <div className="p-8 text-center text-gray-500">No tasks found. Create your first task!</div>
      ) : (
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
            <tr>
              <th className="px-6 py-3">Task</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Created</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {tasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-900">
                  {editingTaskId === task.id ? (
                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                      autoFocus
                    />
                  ) : (
                    task.title
                  )}
                </td>
                <td className="px-6 py-4">
                  <span className="inline-block px-2 py-1 text-xs rounded bg-blue-100 text-blue-600">
                    {task.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {new Date(task.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  {editingTaskId === task.id ? (
                    <>
                      <button
                        onClick={() => saveEdit(task.id)}
                        className="text-green-600 hover:text-green-800 font-medium text-sm"
                      >
                        Save
                      </button>
                      <button
                        onClick={cancelEditing}
                        className="text-gray-500 hover:text-gray-700 font-medium text-sm"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => startEditing(task)}
                        className="text-blue-500 hover:text-blue-700 font-medium text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteTask(task.id)}
                        className="text-red-500 hover:text-red-700 font-medium text-sm"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

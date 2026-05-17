"use client";

import { useState } from "react";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const initialTasks: Task[] = [
  { id: 1, title: "Review project workflow", completed: true },
  { id: 2, title: "Build task list baseline", completed: false },
  { id: 3, title: "Validate with lint", completed: false },
];

export function TaskTracker() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const completedCount = tasks.filter((task) => task.completed).length;
  const totalCount = tasks.length;
  const activeCount = totalCount - completedCount;

  function toggleTask(taskId: Task["id"]) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  return (
    <section className="mx-auto flex max-w-xl flex-col gap-6 rounded-lg border border-slate-200 bg-white p-6 text-slate-950 shadow-sm">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Mini Task Tracker</h1>
        <div className="flex flex-wrap gap-2 text-sm text-slate-600">
          <span>Total: {totalCount}</span>
          <span>Active: {activeCount}</span>
          <span>Completed: {completedCount}</span>
        </div>
      </div>

      <ul className="space-y-3">
        {tasks.map((task) => (
          <li key={task.id}>
            <button
              type="button"
              onClick={() => toggleTask(task.id)}
              className="flex w-full items-center gap-3 rounded-md border border-slate-200 px-4 py-3 text-left transition hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              <span
                className={`flex size-5 items-center justify-center rounded border text-xs ${
                  task.completed
                    ? "border-emerald-600 bg-emerald-600 text-white"
                    : "border-slate-300 text-transparent"
                }`}
                aria-hidden="true"
              >
                ✓
              </span>
              <span
                className={
                  task.completed ? "text-slate-500 line-through" : undefined
                }
              >
                {task.title}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

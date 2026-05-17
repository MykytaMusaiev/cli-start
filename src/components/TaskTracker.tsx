"use client";

import { useState, type FormEvent } from "react";

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
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const completedCount = tasks.filter((task) => task.completed).length;
  const totalCount = tasks.length;
  const activeCount = totalCount - completedCount;

  function handleAddTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedTitle = newTaskTitle.trim();

    if (!trimmedTitle) {
      setValidationMessage("Enter a task title.");
      return;
    }

    const nextTaskId = Math.max(...tasks.map((task) => task.id), 0) + 1;

    setTasks((currentTasks) => [
      ...currentTasks,
      { id: nextTaskId, title: trimmedTitle, completed: false },
    ]);
    setNewTaskTitle("");
    setValidationMessage("");
  }

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

      <form onSubmit={handleAddTask} className="space-y-2">
        <div className="flex gap-2">
          <label htmlFor="new-task-title" className="sr-only">
            New task title
          </label>
          <input
            id="new-task-title"
            type="text"
            value={newTaskTitle}
            onChange={(event) => setNewTaskTitle(event.target.value)}
            placeholder="Add a task"
            className="min-w-0 flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-300"
          />
          <button
            type="submit"
            className="rounded-md bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            Add
          </button>
        </div>
        {validationMessage ? (
          <p className="text-sm text-red-600">{validationMessage}</p>
        ) : null}
      </form>

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

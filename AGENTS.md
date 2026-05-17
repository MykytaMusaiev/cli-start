# AGENTS.md

## Project Context

This is a small training repository for practicing controlled Codex CLI workflow.

The goal is to build a minimal Mini Task Tracker while keeping every AI-assisted change scoped, reviewable, and easy to validate.

This is not a production application.

## Primary Workflow

Use this repository to practice:

```txt
analyze → plan → approve → implement one step → inspect diff → validate → commit → update session.md
```

Do not skip directly to implementation when the task has not been planned.

## Stack

- Framework: Next.js
- Language: TypeScript
- Styling: Tailwind CSS
- Linting: ESLint
- Package manager: pnpm

Use `package.json` as the source of truth for exact scripts, dependency versions, and package manager details.

Do not assume scripts or dependencies that are not present in `package.json`.

## Commands

Install dependencies:

```bash
pnpm install
```

Start development server:

```bash
pnpm dev
```

Build:

```bash
pnpm build
```

Lint:

```bash
pnpm lint
```

If a command is missing or fails because the script does not exist, report it instead of inventing a replacement.

## Current App Scope

The app should remain a one-screen Mini Task Tracker.

Allowed initial behavior:

- mock async loading;
- local task state;
- add task form;
- empty title validation;
- toggle completed status;
- completed / active / total derived counters;
- simple reusable components;
- small utility functions when justified.

## Initial Structure

Keep the structure minimal.

Expected initial implementation structure:

```txt
src/
  app/
    page.tsx
  components/
    TaskTracker.tsx
```

Add more files only when they reduce real complexity or are required by the approved task.

Do not create broad architecture folders before they are needed.

## Next.js Rules

- Keep `page.tsx` and `layout.tsx` as Server Components by default.
- Use Client Components only when hooks, event handlers, browser APIs, or local interactive state are required.
- Put interactive task tracker logic in a dedicated Client Component.
- Do not make the entire app client-side without a specific reason.

## TypeScript Rules

- Use explicit, meaningful types.
- Avoid `any`.
- Avoid magic strings and magic numbers when they represent reusable domain values.
- Keep feature-specific types close to the feature until reuse is proven.
- Extract shared types only when they are used in more than one place.

## Component Rules

- Keep components small and focused.
- Extract components only when the extraction improves readability or reuse.
- Do not create component folders prematurely.
- Do not introduce a UI library without approval.

## State Rules

- Use local component state for the initial Mini Task Tracker.
- Do not add global state management initially.
- Do not duplicate derived state.
- Derive counters from the task list instead of storing separate counter state.

## Utility Rules

- Use utility functions for reusable pure logic.
- Do not extract utilities prematurely.
- A utility is justified when logic is reused, complex enough to name, or useful for validation.

## Dependency Policy

Do not add new dependencies without explicit approval.

Before proposing a dependency, explain:

- what problem it solves;
- why the current stack is not enough;
- what trade-offs it adds.

## Refactoring Policy

Do not silently refactor unrelated code.

Refactoring requires approval when it:

- changes folder structure;
- changes public component APIs;
- changes state ownership;
- changes shared types or constants;
- introduces new abstractions;
- touches files outside the approved task scope.

Small local cleanup is allowed only when directly related to the approved task.

## Testing Policy

Tests are intentionally out of scope for the initial phase.

Do not add test frameworks or test files unless explicitly approved later.

For now, validation should use:

- lint when available;
- build when relevant;
- manual behavior check when applicable.

## Codex Task Rules

For every Codex task:

1. Start with read-only analysis when the task is not fully planned.
2. Identify affected files before implementation.
3. Provide a step-by-step plan.
4. Wait for approval before editing.
5. Implement only the approved step.
6. Do not touch unrelated files.
7. Report changed files, commands run, validation result, assumptions, risks, and suggested commit message.

## Git Rules

- Start from a clean working tree.
- Use one branch per task.
- Keep commits small and meaningful.
- Inspect `git diff` before committing.
- Commit manually after validation.
- Use Conventional Commits.

Commit format:

```txt
<type>(<scope>): <short description>
```

Examples:

```txt
docs(repo): add repository control documents
feat(tasks): add task tracker baseline
fix(tasks): correct completed counter
refactor(tasks): extract task filtering utility
```

## Output Expectations

At the end of an implementation task, report:

- summary of changes;
- files changed;
- commands run;
- validation result;
- assumptions;
- risks or limitations;
- suggested commit message.

If validation was not run, explain why.

## Current Non-Goals

Do not add during the initial phase:

- authentication;
- real backend;
- database;
- API routes;
- Server Actions;
- production deployment;
- complex routing;
- complex animations;
- tests;
- MCP/tools;
- skills;
- git worktree;
- multi-agent workflow;
- broad architecture docs.

## Definition of Done

A task is complete only when:

- scope was explicit;
- unrelated files were not changed;
- diff was reviewed;
- validation was run or explicitly documented;
- assumptions and risks were reported;
- commit message was suggested;
- `session.md` was updated if the session state changed.

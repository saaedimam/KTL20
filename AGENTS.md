# Repository Guidelines

## Project Structure & Module Organization
- `project/`: Vite + React + TypeScript app
  - `src/`: pages and components (PascalCase, e.g., `Home.tsx`)
  - `public/`: static assets bundled by Vite
  - `dist/`: production build output (ignored in Git)
- `index.js`: Express server serving `project/dist` on port `5000`.

## Build, Test, and Development Commands
- Install: `cd project && npm install`.
- Dev server: `npm run dev` (Vite with HMR).
- Lint: `npm run lint` (ESLint per `project/eslint.config.js`).
- Build: `npm run build` (emits `project/dist`).
- Serve build: `npm start` (Express serves `project/dist`).
  
Note: Legacy static-site tooling has been removed; use Vite commands.

## Coding Style & Naming Conventions
- Indentation: 2 spaces; TypeScript for React code.
- Components: PascalCase (e.g., `Header.tsx`). Hooks/utilities: camelCase.
- Linting: follow `project/eslint.config.js`; fix warnings before PR.
- Styling: Tailwind per `project/tailwind.config.js`; prefer utilities.

## Testing Guidelines
- No test runner configured yet. Prefer Vitest + React Testing Library.
- Name tests `*.test.tsx|ts` colocated with source; keep deterministic.

## Commit & Pull Request Guidelines
- Commits: imperative, concise subject (optionally scoped), e.g., `feat(ui): add hero`.
- PRs: include summary, linked issues, screenshots for UI changes, and test steps.
- Keep diffs focused; update docs/config when behavior changes.

## Security & Configuration Tips
- Do not commit secrets. `.env` and logs are ignored.
- Never embed credentials in client code.

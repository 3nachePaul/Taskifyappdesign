# Taskify App Design

## Prerequisites

- Node.js (recommended 18.x or newer)
- npm (recommended matching Node version)

## Quick start (local)

1. Install dependencies (make sure optional dependencies are allowed — don't use `--omit=optional`):

```bash
npm ci
```

2. If you see errors about esbuild (missing platform binary), run:

```bash
npm rebuild esbuild --update-binary
```

3. Start the dev server:

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

## Run in GitHub Codespaces or "Reopen in Container"

This repository includes a devcontainer configuration so Codespaces (or VS Code "Reopen in Container") will prepare the environment automatically.

What the devcontainer does:
- uses an official Node.js development image
- runs `npm ci` to install dependencies
- runs `npm rebuild esbuild --update-binary` to ensure the correct esbuild binary is installed for the container platform
- forwards the Vite dev port (5173)

To use Codespaces / devcontainer:

1. Open this repository in GitHub Codespaces or in VS Code and choose "Reopen in Container".
2. Wait for the container build and post-create steps to finish.
3. In the container terminal run:

```bash
npm run dev
```

You should be able to open the forwarded port (5173) from Codespaces or open http://localhost:5173 when developing locally in a container.

## Troubleshooting

- If `esbuild` complains about missing `@esbuild/<platform>` binary, make sure you installed dependencies without skipping optional dependencies. Running `npm rebuild esbuild --update-binary` usually fixes it.
- If you still have issues, try removing `node_modules` and the lockfile and reinstalling:

```bash
rm -rf node_modules package-lock.json
npm ci
npm rebuild esbuild --update-binary
```

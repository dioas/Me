# Dio Adhita Saputra — Portfolio

Personal portfolio of **Dio Adhita Saputra**, Senior Frontend Developer.
Built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS v4**,
and shipped as a fully static site.

## Tech stack

- [Next.js 15](https://nextjs.org/) — App Router, static export (`output: 'export'`)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)

## Getting started

> Requires **Node 18.18+** (Node 22 recommended — see `.nvmrc`).

```bash
nvm use            # picks up Node 22 from .nvmrc
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # generates a static site in ./out
```

## Deployment

The site is a static export, so it can be hosted anywhere for free.

### GitHub Pages

Pushing to `master` triggers `.github/workflows/static.yml`, which builds the
site and deploys `./out` to GitHub Pages.

- For a **project page** (`username.github.io/<repo>`) the workflow sets
  `PAGES_BASE_PATH` to the repo name so assets resolve correctly.
- For a **user page** or a **custom domain**, leave `PAGES_BASE_PATH` empty.

### Vercel

Import the repo on Vercel — no extra config needed (the Hobby plan is free for
personal projects).

## Project structure

```
app/            # App Router entry (layout, page, global styles)
components/     # UI sections & shared components
lib/data.ts     # All portfolio content (edit here to update the site)
public/         # Static assets (CV, etc.)
```

To update content (experience, skills, projects), edit `lib/data.ts`.

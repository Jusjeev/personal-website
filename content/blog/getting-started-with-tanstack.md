---
title: "Getting Started with TanStack Start"
date: "2025-09-12"
summary: "TanStack Start is a new SSR framework built on TanStack Router. Here's what I learned building this portfolio with it."
tags: ["TanStack", "React", "SSR", "TypeScript"]
author: "Alex Chen"
---

TanStack Start is the full-stack framework built on top of TanStack Router. After spending a few weeks using it to build this portfolio, here are my honest thoughts.

## What Makes It Different

Unlike Next.js or Remix, TanStack Start leans heavily into its router as the primary primitive. Everything — data loading, server functions, nested layouts — is expressed through the router. If you've used TanStack Router before, the mental model is familiar.

## File-Based Routing

Routes are just files in `src/routes/`. A few conventions worth knowing:

- `__root.tsx` — the root layout (HTML shell + global nav)
- `index.tsx` — maps to `/`
- `$param.tsx` — dynamic segments
- `api.*.ts` — server-only API routes

## Server Functions

Server functions are the cleanest part of the API. You define them alongside your client code and call them directly — no REST boilerplate:

```ts
import { createServerFn } from '@tanstack/react-start'

const getProjects = createServerFn().handler(async () => {
  return db.query('SELECT * FROM projects')
})
```

## Bottom Line

It's early-stage software. Some docs are thin, and you'll occasionally need to read source code. But the DX is excellent, the TypeScript integration is best-in-class, and it deploys on Netlify with zero config.

Worth watching closely.

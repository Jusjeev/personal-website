
export default [
  {
    "title": "Getting Started with TanStack Start",
    "date": "2025-09-12",
    "summary": "TanStack Start is a new SSR framework built on TanStack Router. Here's what I learned building this portfolio with it.",
    "tags": [
      "TanStack",
      "React",
      "SSR",
      "TypeScript"
    ],
    "author": "Alex Chen",
    "content": "TanStack Start is the full-stack framework built on top of TanStack Router. After spending a few weeks using it to build this portfolio, here are my honest thoughts.\n\n## What Makes It Different\n\nUnlike Next.js or Remix, TanStack Start leans heavily into its router as the primary primitive. Everything — data loading, server functions, nested layouts — is expressed through the router. If you've used TanStack Router before, the mental model is familiar.\n\n## File-Based Routing\n\nRoutes are just files in `src/routes/`. A few conventions worth knowing:\n\n- `__root.tsx` — the root layout (HTML shell + global nav)\n- `index.tsx` — maps to `/`\n- `$param.tsx` — dynamic segments\n- `api.*.ts` — server-only API routes\n\n## Server Functions\n\nServer functions are the cleanest part of the API. You define them alongside your client code and call them directly — no REST boilerplate:\n\n```ts\nimport { createServerFn } from '@tanstack/react-start'\n\nconst getProjects = createServerFn().handler(async () => {\n  return db.query('SELECT * FROM projects')\n})\n```\n\n## Bottom Line\n\nIt's early-stage software. Some docs are thin, and you'll occasionally need to read source code. But the DX is excellent, the TypeScript integration is best-in-class, and it deploys on Netlify with zero config.\n\nWorth watching closely.",
    "_meta": {
      "filePath": "getting-started-with-tanstack.md",
      "fileName": "getting-started-with-tanstack.md",
      "directory": ".",
      "extension": "md",
      "path": "getting-started-with-tanstack"
    }
  },
  {
    "title": "Five React 19 Features I Actually Use",
    "date": "2025-11-18",
    "summary": "React 19 shipped some genuinely useful additions. Here are the five I reach for most in day-to-day development.",
    "tags": [
      "React",
      "JavaScript",
      "Frontend"
    ],
    "author": "Alex Chen",
    "content": "React 19 has been out for a while now. The hype has settled and I've had time to figure out which new APIs I actually use versus which ones look cool in demos but never show up in real code.\n\nHere's my honest list.\n\n## 1. `use(promise)` in Components\n\nThe `use` hook lets you read a promise inside a component body. Paired with Suspense, this replaces most of the `useEffect` + `useState` data-fetching patterns:\n\n```tsx\nfunction Profile({ id }: { id: string }) {\n  const user = use(fetchUser(id)) // suspends until resolved\n  return <h1>{user.name}</h1>\n}\n```\n\n## 2. Server Actions (via `'use server'`)\n\nServer actions make form submissions and mutations feel native. No API route, no `fetch` call — just a function marked `'use server'`:\n\n```tsx\nasync function updateBio(formData: FormData) {\n  'use server'\n  await db.users.update({ bio: formData.get('bio') })\n}\n```\n\n## 3. `useOptimistic`\n\nOptimistic UI used to require careful state juggling. `useOptimistic` wraps it cleanly:\n\n```tsx\nconst [optimisticLikes, addOptimisticLike] = useOptimistic(likes, (state) => state + 1)\n```\n\n## 4. `useFormStatus`\n\nInside a form, `useFormStatus()` gives you the pending state without prop drilling. Excellent for disabling submit buttons.\n\n## 5. Ref as a Prop\n\nRefs can now be passed directly as `ref` props without `forwardRef`. Less boilerplate when building component libraries.\n\n---\n\nThe theme: React 19 mostly removes ceremony rather than adding new paradigms. That's the right call.",
    "_meta": {
      "filePath": "react-19-features.md",
      "fileName": "react-19-features.md",
      "directory": ".",
      "extension": "md",
      "path": "react-19-features"
    }
  },
  {
    "title": "Tailwind CSS v4: What Changed and Why It Matters",
    "date": "2025-10-05",
    "summary": "Tailwind v4 is a ground-up rewrite. No more config file, CSS-native variables, and a 10x faster engine. Here's the quick guide.",
    "tags": [
      "Tailwind CSS",
      "CSS",
      "Frontend",
      "Tooling"
    ],
    "author": "Alex Chen",
    "content": "Tailwind CSS v4 is a significant departure from v3. If you're upgrading an existing project or starting fresh, there are a few things worth understanding upfront.\n\n## No More `tailwind.config.js`\n\nConfiguration moves into your CSS file using `@theme`:\n\n```css\n@import \"tailwindcss\";\n\n@theme {\n  --color-brand: oklch(0.55 0.18 250);\n  --font-display: 'Fraunces', serif;\n  --radius-card: 0.75rem;\n}\n```\n\nThese CSS custom properties become Tailwind utilities automatically. `bg-brand`, `font-display`, `rounded-card` all just work.\n\n## CSS Variables Everywhere\n\nAll theme values are exposed as CSS custom properties at runtime. This means you can read `var(--color-brand)` in inline styles or JavaScript, and it plays nicely with dark mode.\n\n## Dark Mode is Now a Variant\n\nInstead of a `darkMode` config option, you define your own variant:\n\n```css\n@custom-variant dark (&:is(.dark *));\n```\n\nThis gives you full control over how dark mode is triggered — class, media query, or a data attribute.\n\n## Lightning CSS Engine\n\nv4 ships with a Rust-based engine (Lightning CSS under the hood). On large projects, build times drop dramatically. For this portfolio, `vite build` completes in under 2 seconds.\n\n## Migration\n\nThe Tailwind team provides a migration CLI (`npx @tailwindcss/upgrade`). It handles most of the mechanical changes. The tricky parts are custom plugins and design tokens — those need manual review.\n\nWorth it for new projects immediately. For existing projects, pick a slow week.",
    "_meta": {
      "filePath": "tailwind-css-v4-guide.md",
      "fileName": "tailwind-css-v4-guide.md",
      "directory": ".",
      "extension": "md",
      "path": "tailwind-css-v4-guide"
    }
  }
]
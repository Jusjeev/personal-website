# Jusjeev — Portfolio

Personal portfolio and résumé site for a CS graduate and full-stack developer. Built for job searching and professional networking.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [TanStack Start](https://tanstack.com/start) (SSR) |
| Routing | TanStack Router v1 (file-based) |
| Frontend | React 19 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Content | [Content Collections](https://www.content-collections.dev/) (type-safe markdown) |
| Images | Netlify Image CDN (on-demand optimization) |
| Forms | Netlify Forms |
| Deployment | Netlify |
| Language | TypeScript 5 (strict) |

## Pages

- **`/`** — Hero landing with skills overview and featured projects
- **`/about`** — Bio, photo gallery, full skills breakdown
- **`/projects`** — Project showcase with Netlify-optimized images
- **`/resume`** — Work experience and education timeline
- **`/contact`** — Contact form (Netlify Forms) and social links
- **`/blog/$slug`** — Individual blog post pages

## Running Locally

**Prerequisites:** Node.js 18+, npm or pnpm

```bash
# Install dependencies
npm install

# Start the Netlify dev server (includes image CDN emulation)
npx netlify dev

# Or start Vite directly (no image CDN)
npm run dev
```

The site is available at `http://localhost:8888` when using Netlify CLI, or `http://localhost:3000` with Vite directly.

## Content

All content lives in the `content/` directory as Markdown files with YAML frontmatter. Schemas are defined in `content-collections.ts`.

| Directory | Description |
|-----------|-------------|
| `content/jobs/` | Work experience entries |
| `content/education/` | Education entries |
| `content/projects/` | Project showcase entries |
| `content/blog/` | Blog posts |

## Dark Mode

Theme preference is stored in `localStorage` and applied via a `dark` class on `<html>`. A preload script prevents flash-of-wrong-theme on page load. Toggle via the sun/moon button in the navigation.

## Image Optimization

Project and gallery images are served through Netlify Image CDN at `/.netlify/images`. The CDN handles format negotiation (WebP/AVIF), resizing, and caching automatically. Remote images from `picsum.photos` are allowlisted in `netlify.toml`.

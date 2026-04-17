---
title: "Tailwind CSS v4: What Changed and Why It Matters"
date: "2025-10-05"
summary: "Tailwind v4 is a ground-up rewrite. No more config file, CSS-native variables, and a 10x faster engine. Here's the quick guide."
tags: ["Tailwind CSS", "CSS", "Frontend", "Tooling"]
author: "Alex Chen"
---

Tailwind CSS v4 is a significant departure from v3. If you're upgrading an existing project or starting fresh, there are a few things worth understanding upfront.

## No More `tailwind.config.js`

Configuration moves into your CSS file using `@theme`:

```css
@import "tailwindcss";

@theme {
  --color-brand: oklch(0.55 0.18 250);
  --font-display: 'Fraunces', serif;
  --radius-card: 0.75rem;
}
```

These CSS custom properties become Tailwind utilities automatically. `bg-brand`, `font-display`, `rounded-card` all just work.

## CSS Variables Everywhere

All theme values are exposed as CSS custom properties at runtime. This means you can read `var(--color-brand)` in inline styles or JavaScript, and it plays nicely with dark mode.

## Dark Mode is Now a Variant

Instead of a `darkMode` config option, you define your own variant:

```css
@custom-variant dark (&:is(.dark *));
```

This gives you full control over how dark mode is triggered — class, media query, or a data attribute.

## Lightning CSS Engine

v4 ships with a Rust-based engine (Lightning CSS under the hood). On large projects, build times drop dramatically. For this portfolio, `vite build` completes in under 2 seconds.

## Migration

The Tailwind team provides a migration CLI (`npx @tailwindcss/upgrade`). It handles most of the mechanical changes. The tricky parts are custom plugins and design tokens — those need manual review.

Worth it for new projects immediately. For existing projects, pick a slow week.

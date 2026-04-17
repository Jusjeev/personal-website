---
title: "Five React 19 Features I Actually Use"
date: "2025-11-18"
summary: "React 19 shipped some genuinely useful additions. Here are the five I reach for most in day-to-day development."
tags: ["React", "JavaScript", "Frontend"]
author: "Alex Chen"
---

React 19 has been out for a while now. The hype has settled and I've had time to figure out which new APIs I actually use versus which ones look cool in demos but never show up in real code.

Here's my honest list.

## 1. `use(promise)` in Components

The `use` hook lets you read a promise inside a component body. Paired with Suspense, this replaces most of the `useEffect` + `useState` data-fetching patterns:

```tsx
function Profile({ id }: { id: string }) {
  const user = use(fetchUser(id)) // suspends until resolved
  return <h1>{user.name}</h1>
}
```

## 2. Server Actions (via `'use server'`)

Server actions make form submissions and mutations feel native. No API route, no `fetch` call — just a function marked `'use server'`:

```tsx
async function updateBio(formData: FormData) {
  'use server'
  await db.users.update({ bio: formData.get('bio') })
}
```

## 3. `useOptimistic`

Optimistic UI used to require careful state juggling. `useOptimistic` wraps it cleanly:

```tsx
const [optimisticLikes, addOptimisticLike] = useOptimistic(likes, (state) => state + 1)
```

## 4. `useFormStatus`

Inside a form, `useFormStatus()` gives you the pending state without prop drilling. Excellent for disabling submit buttons.

## 5. Ref as a Prop

Refs can now be passed directly as `ref` props without `forwardRef`. Less boilerplate when building component libraries.

---

The theme: React 19 mostly removes ceremony rather than adding new paradigms. That's the right call.

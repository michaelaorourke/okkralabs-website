# CLAUDE.md — Project Conventions

## Overview

Okkralabs marketing website. Next.js 15 (App Router), React 19, Tailwind CSS 3, TypeScript 5 (strict). Deployed on Vercel.

**Repository:** https://github.com/michaelaorourke/okkralabs-website

## Commands

```bash
npm run dev      # Local dev server (http://localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
npx tsc --noEmit # Type check
```

## Architecture

```
src/app/           → Pages and API routes (App Router)
src/components/    → Reusable components
  layout/          → Navbar, Footer, Container
  sections/        → Homepage sections (Hero, ServicePillars, HowWeWork, CTA)
  contact/         → Contact form
  ui/              → Primitives (Button, Card, Badge, Logo)
src/lib/           → Shared utilities (cn, site config)
src/styles/        → globals.css (design tokens, animations)
docs/              → Design docs, positioning, implementation plan
```

## Key files

- `src/lib/site.ts` — Brand config: name, URL, email, Calendly link, nav items
- `src/styles/globals.css` — CSS custom properties (colors, animations)
- `tailwind.config.ts` — Extended theme (accent colors, brand ramp, shadows, radii)

## Conventions

### TypeScript
- Strict mode. No `any`. No `console.log` in committed code.
- Prefer named exports. Use `interface` for component props.

### Styling
- Tailwind utility-first. Custom properties defined in `globals.css`.
- Dark theme only. Background: `rgb(var(--bg))`. Text: `rgb(var(--text))`.
- Border radius: always `rounded-xl2` for cards, buttons, inputs.
- Text opacity: primary `text-white`, body `text-white/70`, muted `text-white/60`, minimum `text-white/40`.
- Accent color: `accent-400` for interactive highlights, focus rings, link hovers.

### Components
- Small, single-responsibility components.
- Cards include hover lift (`hover:-translate-y-0.5 hover:border-white/15`).
- Buttons: primary (`bg-white text-black`), secondary (`bg-white/5 text-white hover:bg-white/10`).
- Form inputs: `bg-white/5 border-white/10 focus:ring-accent-400/30`.
- All form labels must have `htmlFor`/`id` pairs.

### Animations
- CSS-only. No heavy libraries (no framer-motion, no GSAP).
- Entrance: `animate-fade-up` (600ms ease-out-expo).
- Stagger cards with `delay-0` through `delay-500` (100ms increments).
- Hover: transitions via Tailwind `transition-all duration-200`.

### Content
- Tone: clear, confident, direct. No buzzwords or marketing fluff.
- Email: `hello@okkralabs.com`. Calendly: defined in `site.ts`.
- "Book a call" CTAs link to Calendly. "Contact" nav links to `/contact`.

### Anti-patterns
- ❌ Environment variables (none required for MVP)
- ❌ External backend services or paid dependencies
- ❌ Stock photos or decorative illustrations
- ❌ Colors outside the defined palette
- ❌ `rounded-full` on cards (only on badges/tags)
- ❌ Font weights below 400 or above 600
- ❌ Text gradients

## Done criteria

A change is complete when:
1. Renders correctly at 375px, 768px, and 1440px
2. No TypeScript errors (`npx tsc --noEmit`)
3. No lint errors (`npm run lint`)
4. Matches the design guidelines (`docs/DESIGN_GUIDELINES.md`)

## Documentation

Read these before making significant changes:
- `docs/MASTER_PLAN.md` — Vision, audience, tech stack
- `docs/DESIGN_GUIDELINES.md` — Colors, typography, spacing, components
- `docs/REFERENCE_positioning.md` — Messaging and copy direction
- `docs/IMPLEMENTATION_PLAN.md` — Build phases and dependencies
- `tasks.md` — Granular task list with completion status

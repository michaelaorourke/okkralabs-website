# Implementation Plan

## Build Sequence
Each phase must be completed before moving to the next. Within each phase, tasks are ordered by dependency.

---

## Phase 0: Documentation ✅
1. Create `docs/MASTER_PLAN.md`
2. Create `docs/IMPLEMENTATION_PLAN.md` (this file)
3. Create `docs/DESIGN_GUIDELINES.md`
4. Create `docs/USER_JOURNEYS.md`
5. Create `tasks.md`
6. Remove duplicate `website-positioning.md` from root
7. Update `CLAUDE.md` with project conventions

## Phase 1: Design System Foundation
1. Define accent color and add to CSS custom properties in `globals.css`
2. Update `tailwind.config.ts` with accent tokens
3. Update `globals.css` with animation keyframes and utility classes
4. Fix button hover states (invalid `white/8` → `white/10`)
5. Add skip-to-content link in layout
6. Add proper label associations in forms (`htmlFor` / `id` pairs)

## Phase 2: Layout & Navigation
1. Build mobile hamburger menu with drawer in `navbar.tsx`
2. Add smooth open/close transition to mobile drawer
3. Verify all nav links work on mobile
4. Add active link indication

## Phase 3: Brand Assets & Metadata
1. Generate SVG favicon and place in `/public`
2. Generate apple-touch-icon and place in `/public`
3. Replace placeholder logo `<div>` with actual SVG logomark in navbar
4. Update `site.url` to production domain
5. Replace all `hello@example.com` with `hello@okkralabs.com`
6. Fix sitemap to use absolute URLs
7. Add Twitter/X card meta tags in layout
8. Add canonical URL support
9. Add JSON-LD Organization structured data
10. Update `metadataBase` to real domain

## Phase 4: Page Content & UX
1. Replace placeholder case studies on Work page with real projects
2. Remove "Replace these placeholders" instruction text
3. Add Calendly link to "Book a call" CTAs
4. Create `not-found.tsx` (branded 404 page)
5. Create `error.tsx` (branded 500 page)
6. Add entrance animations (fade-up on scroll) to sections
7. Add stagger animation to card grids
8. Add hover micro-interactions to cards

## Phase 5: Production Hardening
1. Improve contact form with basic client-side validation
2. Add honeypot field for spam prevention
3. Review accessibility (contrast ratios, ARIA, focus states)
4. Verify Lighthouse scores
5. Test all pages at mobile, tablet, desktop breakpoints
6. Push to GitHub and deploy via Vercel

---

## Dependencies
- Phase 1 must complete before Phase 2 (nav needs design tokens)
- Phase 3 can run in parallel with Phase 2
- Phase 4 depends on Phase 1 (animations need keyframes)
- Phase 5 depends on all prior phases

## Done Criteria
Each task is done when:
- The change renders correctly at 375px, 768px, and 1440px
- No TypeScript errors (`npx tsc --noEmit`)
- No lint errors (`npm run lint`)
- The change matches the Design Guidelines

# Tasks

> Read all docs in `/docs` before starting. Find the next unchecked task. Execute it. Report what you did and how to test it.

## Phase 0: Documentation
- [x] T001: Create docs/MASTER_PLAN.md
- [x] T002: Create docs/IMPLEMENTATION_PLAN.md
- [x] T003: Create docs/DESIGN_GUIDELINES.md
- [x] T004: Create docs/USER_JOURNEYS.md
- [x] T005: Create tasks.md (this file)
- [x] T006: Delete duplicate website-positioning.md from root
- [x] T007: Update CLAUDE.md with project conventions

## Phase 1: Design System
- [x] T008: Add accent color CSS custom properties to globals.css
- [x] T009: Add accent color tokens to tailwind.config.ts
- [x] T010: Add fade-up keyframe animation to globals.css
- [x] T011: Add animation utility classes to globals.css
- [x] T012: Fix secondary button hover (white/8 → white/10)
- [x] T013: Add skip-to-content link in layout.tsx
- [x] T014: Add htmlFor/id pairs to contact form labels

## Phase 2: Navigation
- [x] T015: Build mobile hamburger menu with drawer in navbar.tsx
- [x] T016: Add close-on-navigate behavior to mobile drawer
- [x] T017: Verify all nav links render on mobile viewport

## Phase 3: Brand Assets & SEO
- [x] T018: Create SVG favicon and add to /public
- [x] T019: Create apple-touch-icon.png reference in layout
- [x] T020: Replace placeholder logo div with SVG logomark in navbar
- [x] T021: Update site.url in src/lib/site.ts to https://okkralabs.com
- [x] T022: Replace all hello@example.com with hello@okkralabs.com
- [x] T023: Fix sitemap.xml to use absolute URLs with domain
- [x] T024: Add Twitter/X card meta tags in layout.tsx
- [x] T025: Add JSON-LD Organization structured data
- [x] T026: Update metadataBase to https://okkralabs.com

## Phase 4: Content & UX
- [x] T027: Replace placeholder case studies with real Okkralabs projects
- [x] T028: Remove "Replace these placeholders" text from Work page
- [x] T029: Add Calendly link to "Book a call" CTAs
- [x] T030: Create src/app/not-found.tsx (branded 404)
- [x] T031: Create src/app/error.tsx (branded error page)
- [x] T032: Add fade-up entrance animations to homepage sections
- [x] T033: Add stagger animation to card grids
- [x] T034: Add hover lift effect to cards

## Phase 5: Production Hardening
- [x] T035: Add honeypot field to contact form for spam prevention
- [x] T036: Improve contact form client-side validation UX
- [x] T037: Review and fix text contrast (ensure white/40 minimum)
- [x] T038: Update README.md with real project info and GitHub URL

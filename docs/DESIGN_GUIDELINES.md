# Design Guidelines

## References
These sites capture the target aesthetic:
- **Vercel** (vercel.com) — Dark, grid background, sharp typography, white CTAs
- **Linear** (linear.app) — Subtle gradients, smooth animations, minimal color
- **Stripe** (stripe.com) — Clean hierarchy, generous whitespace, professional restraint
- **Resend** (resend.com) — Dark theme, clear CTAs, developer-friendly feel

---

## Color System

### Base Palette (Dark Theme)
```css
--bg:       5 5 6;        /* Near-black background */
--surface:  10 10 12;     /* Slightly lifted surfaces */
--card:     14 14 18;     /* Card backgrounds */
--border:   255 255 255 / 0.10;  /* Subtle white borders */
--text:     244 244 245;  /* Primary text (near-white) */
--muted:    161 161 170;  /* Secondary text */
```

### Accent Color — Cool Blue
```css
--accent-50:  240 249 255;
--accent-100: 224 242 254;
--accent-200: 186 230 253;
--accent-300: 125 211 252;
--accent-400: 56 189 248;
--accent-500: 14 165 233;
--accent-600: 2 132 199;
--accent-700: 3 105 161;
--accent-800: 7 89 133;
--accent-900: 12 74 110;
```

### Text Opacity Rules
| Use | Opacity | Tailwind Class |
|---|---|---|
| Primary headings | 100% | `text-white` |
| Body text, descriptions | 70% | `text-white/70` |
| Labels, captions, nav links | 60% | `text-white/60` |
| Footer secondary, timestamps | 50% | `text-white/50` |
| Decorative / least important | 40% | `text-white/40` |

Never go below `white/40` — it fails contrast on dark backgrounds.

### When to Use Accent
- Badge dots and status indicators
- Primary button hover glow
- Active nav link underline
- Focus ring color
- Hero section subtle gradient highlight
- Link hover states (accent-400)

---

## Typography

### Font
- **Primary:** Inter (via Google Fonts variable `--font-inter`)
- **Weight range:** 400 (body), 500 (medium/labels), 600 (semibold/headings)

### Type Scale
| Element | Size (mobile) | Size (desktop) | Weight | Tracking |
|---|---|---|---|---|
| Hero h1 | `text-4xl` (36px) | `text-6xl` (60px) | 600 | `tracking-tight` |
| Page h1 | `text-3xl` (30px) | `text-5xl` (48px) | 600 | `tracking-tight` |
| Section h2 | `text-2xl` (24px) | `text-3xl` (30px) | 600 | default |
| Card title | `text-lg` (18px) | `text-lg` (18px) | 600 | default |
| Body | `text-base` (16px) | `text-base` (16px) | 400 | default |
| Small/caption | `text-sm` (14px) | `text-sm` (14px) | 400 | default |
| Badge/tag | `text-xs` (12px) | `text-xs` (12px) | 400–500 | default |

### Line Height
- Headings: default (tight)
- Body/descriptions: `leading-relaxed` (1.625)

---

## Spacing

### Section Padding
- Standard: `py-16 md:py-20` (64px / 80px)
- Hero: `py-20 md:py-28` (80px / 112px)

### Container
- Max width: `max-w-6xl` (1152px)
- Horizontal padding: `px-4 md:px-6`

### Card Grid Gaps
- Standard: `gap-6` (24px)
- Content inside cards: `p-6` (24px)

### Vertical Rhythm Inside Sections
- Badge to h1: `mt-6`
- h1 to description: `mt-4` or `mt-5`
- Description to content: `mt-8` or `mt-10`

---

## Components

### Card
- Border: `border border-white/10`
- Background: `bg-white/[0.03]`
- Radius: `rounded-xl2` (1.25rem / 20px)
- Shadow: `shadow-[0_0_0_1px_rgba(255,255,255,0.02)]`
- Hover: translate up 1px, slight border brightness increase

### Button — Primary
- Background: `bg-white text-black`
- Hover: `hover:bg-white/90`
- Border: `border border-white/10`
- Shadow: `shadow-soft`
- Radius: `rounded-xl2`

### Button — Secondary
- Background: `bg-white/5 text-white`
- Hover: `hover:bg-white/10` (NOT white/8)
- Border: `border border-white/10`

### Badge
- Inline-flex, rounded-full
- Border: `border-white/10`, Background: `bg-white/5`
- Dot: small circle, accent color or `white/70`

### Form Inputs
- Background: `bg-white/5`
- Border: `border border-white/10`
- Focus: `ring-2 ring-accent-400/30`
- Radius: `rounded-xl2`
- Placeholder: `text-white/40`

---

## Animation

### Entrance — Fade Up
```css
@keyframes fade-up {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
```
- Duration: 600ms
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo)
- Stagger cards by 100ms each

### Hover — Card Lift
- Transform: `translateY(-2px)` on hover
- Border: brighten to `white/15`
- Transition: 200ms ease

### Page Transitions
- Keep it simple: CSS-only, no heavy animation libraries
- Sections animate in on scroll via Intersection Observer or CSS `animation-timeline`

---

## Iconography
- Library: Lucide React
- Size: `h-5 w-5` inside icon containers
- Container: `h-10 w-10 rounded-xl2 border border-white/10 bg-white/5`
- Color: `text-white/80`

---

## Anti-Patterns (Do Not)
- ❌ Use colors outside the defined palette
- ❌ Add stock photos or decorative illustrations
- ❌ Use rounded-full on cards (only on badges/tags)
- ❌ Use font weights below 400 or above 600
- ❌ Add heavy animation libraries (framer-motion, GSAP)
- ❌ Use gradients on text
- ❌ Mix border-radius values (always `rounded-xl2` for cards/buttons/inputs)

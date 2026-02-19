# Okkralabs Website

Marketing site for [Okkralabs](https://okkralabs.com) — a product engineering consultancy based in the San Francisco Bay Area.

Built with Next.js 15, React 19, Tailwind CSS, and TypeScript. Deployed on Vercel.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Push to GitHub and import in [Vercel](https://vercel.com). No environment variables required.

## Project structure

```
src/
  app/          → Pages (App Router)
  components/   → UI components, sections, layout
  lib/          → Shared utilities and site config
  styles/       → Global CSS and design tokens
docs/           → Design guidelines, positioning, implementation plan
public/         → Static assets (favicon, sitemap, robots.txt)
```

## Customize

- Company name, description, URL, Calendly link: `src/lib/site.ts`
- Design tokens and animation keyframes: `src/styles/globals.css`
- Tailwind theme extensions: `tailwind.config.ts`

## Links

- **Live site:** [okkralabs.com](https://okkralabs.com)
- **Repository:** [github.com/michaelaorourke/okkralabs-website](https://github.com/michaelaorourke/okkralabs-website)

# Royalty Roofing — Start Landing (Next.js)

Next.js (App Router) port of the original Vite/React landing page. Visually and
behaviorally identical to the original; rebuilt on Next.js for Vercel.

## Stack
- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- Radix UI / shadcn components, framer-motion, lucide-react

## What changed from the original
- Vite → Next.js App Router (`src/app/`). Single route `/`, 404 → `not-found`.
- Removed Manus tooling (vite-plugin-manus-runtime, debug collector, storage proxy),
  the Express static server, wouter router, and unused OAuth/Map/ManusDialog scaffolding.
- Page head tracking moved into `src/app/layout.tsx`: Google Tag Manager (GTM-TQQLJ5MQ),
  GA4 (G-B0V4J1CX44), Google Ads (AW-931355603), DM Sans + Bebas Neue fonts. The form
  still fires the `form_submission` dataLayer event.
- Images localized: the page no longer depends on the temporary manuscdn.com CDN.
  All assets live in `public/images/`.
- `import.meta.env.VITE_*` → `process.env.NEXT_PUBLIC_*`.

## Environment variables (optional — see `.env.example`)
- `NEXT_PUBLIC_FORM_WEBHOOK_URL` — lead webhook (GoHighLevel/LeadConnector). Falls back
  to the original hardcoded URL if unset.
- `NEXT_PUBLIC_ANALYTICS_ENDPOINT` / `NEXT_PUBLIC_ANALYTICS_WEBSITE_ID` — optional umami.

## Develop / build
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Deploy on Vercel
Import the repo in Vercel. Framework preset = Next.js (auto-detected). No `vercel.json`
needed. Set the env vars above if you want to override the defaults.

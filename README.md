# Artem Potlog — Personal Site

A cinematic, single-scroll personal site positioning Artem Potlog as an energy /
O&G finance and general-management executive who leads AI/ML transformation.

Built with **Vite + React + TypeScript + Tailwind v4**, with a **Three.js**
particle hero, **Framer Motion** animations and **Lenis** smooth scrolling.

## Develop

```bash
npm install
npm run dev      # http://127.0.0.1:5173
```

## Build

```bash
npm run build    # type-checks then builds to ./dist
npm run preview  # serve the production build locally
```

## Structure

```
src/
├── components/   # HeroBackground (WebGL), nav, cards, panels, icons, primitives
├── sections/     # Hero, Thesis, Impact, Work, Experience, About, Contact
├── data/         # typed content (content.ts) + types.ts
├── lib/          # Lenis smooth scroll, active-section observer
└── index.css     # design tokens (petroleum / brass / oil-teal palette)
```

All copy and project data live in [`src/data/content.ts`](src/data/content.ts).
When the XRG simulation and the IFRS trainer are deployed, set their URLs in the
`DEPLOY_URLS` object at the top of that file.

## Deploy (Render)

This repo includes [`render.yaml`](render.yaml). Push to GitHub, then in Render:
**New + → Blueprint →** select this repo. It builds with `npm ci && npm run build`
and publishes `./dist` as a static site.

## Accessibility & performance

- Respects `prefers-reduced-motion` (smooth scroll, reveals, counters and the
  WebGL field all degrade gracefully).
- Three.js is lazy-loaded as a separate chunk, so initial JS is ~124 kB gzip.

# Mrtkriya — Claude Code project notes

A single-page React exhibition on Mrtkriya (Indian pottery & ceramic engineering) for the *Timeless India · 64 Kalas* school project.

## Build & dev

```bash
npm run dev      # vite dev server, default port 5173
npm run build    # vite production build into ./dist
npm run preview  # preview the production build
```

The project is plain JavaScript (no TypeScript). Tailwind v3 is used (not v4) because the Tailwind v4 Vite plugin is still stabilising; v3 with PostCSS is the lower-risk choice for a school project.

## Where things live

- **Sections render in `src/App.jsx`** in scroll order. The component order *is* the page order — change the order there, not by editing each file.
- **Content lives in `src/data/`** — never hardcode content in components. All facts, stats, and quotes are sourced from the academic report (see README for the fact-fidelity list).
- **Tokens & design**: CSS variables (`--c-terracotta`, `--c-gold`, etc.) are defined in `src/index.css` under `:root` with light/dark overrides on `html.light` / `html.dark`. Tailwind utilities use these via `bg-charcoal`, `text-gold`, etc., declared in `tailwind.config.js`.
- **Theme toggle** lives on `App.jsx` (`useState('dark')`) and writes the class to `<html>`. Initial state is dark.

## Conventions

- **Animations**: Framer Motion only — no CSS keyframes for component-level animation (the SVG wheel and grain overlay are the only CSS-driven exceptions). Reveals use the local `useScrollReveal` hook + `motion` initial/animate.
- **Counters** use `useCounter(end, { startWhen })` — the hook eases out with rAF. Pass `startWhen={true}` only after the element is in viewport (Hero gates by timeout; StatsBar uses `onViewportEnter`).
- **Cursor**: All interactive elements get `data-cursor` so the ring expands on hover. The cursor is disabled at `max-width: 900px`.
- **Section IDs**: Each section root has `id="..."` matching the entry in `Navbar.jsx`'s `links` array — that's how active-section highlighting and smooth-scroll work.

## Adding a new section

1. Create `src/components/NewSection.jsx`.
2. Wrap in `<section id="..." className="section">` and use `.container-wide` / `.container-mid` / `.container-narrow`.
3. Import into `src/App.jsx` and place it where you want in the scroll.
4. Add an entry to the `links` array in `src/components/Navbar.jsx` so it appears in the nav and gets active-state highlighting.

## Things that look weird but are intentional

- `body { cursor: none }` — the page provides its own cursor on desktop. On `max-width: 900px` the cursor is restored.
- The grain noise is a fixed-position inline SVG `data:` URL on `body::before` with `mix-blend-mode: overlay` — heavy enough to give texture, light enough not to dominate.
- The Engineering classification table is the only place we use a real `<table>` — the rest of the data uses cards.
- The masonry in Styles uses `column-count` (CSS Columns), not Grid, by design — Grid does not auto-vary card heights into staggered columns.

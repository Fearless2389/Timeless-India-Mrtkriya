# Mrtkriya — मृत्क्रिया · The Art of Clay

A luxury-museum-style React exhibition site on **Mrtkriya**, the classical Indian art of pottery, built for *Timeless India · The 64 Kalas* (Class 9 academic year 2025 – 2026).

The site translates a comprehensive academic report on pottery and ceramic engineering — spanning Mehrgarh (c. 7000 BCE) to modern technical ceramics for ISRO, DRDO, and HAL — into a single-page scrollable interactive experience.

---

## Quickstart

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle into ./dist
npm run preview  # serve the production build locally
```

> Node 18+ is recommended.

---

## What you get

A single-page application composed of **twelve sections**, all rendered in `src/App.jsx` in scroll order:

| # | Section | Component | Highlights |
|---|---------|-----------|------------|
| 01 | Hero | `Hero.jsx` | Hand-coded SVG potter's wheel (3 concentric rings @ 20s/14s/30s, 6 spokes @ 6s, floating clay pot), animated counter stats, grain overlay |
| 02 | Origin | `About.jsx` | Sanskrit etymology, Vishwakarma Purāṇa quote, 4 fact cards |
| 03 | Timeline | `Timeline.jsx` | Alternating vertical timeline, 6 milestones from Mehrgarh → Industrial age |
| 04 | Process | `Process.jsx` | 3×3 grid of the 9 pottery steps with ghost numbers and the *chak* momentum-wheel explanation |
| 05 | Regional Styles | `Styles.jsx` | CSS-columns masonry of all 12 traditions (Jaipur Blue, Khurja, Bankura, Molela, Longpi, Nizamabad, Kutch, Pokhran, Bikaner, Kashi, Krishnanagar, Dharavi) |
| 06 | Culture | `Culture.jsx` | 4 cultural cards, Aitareya Brāhmaṇa quote, kulhad/matka/ghatam/tandoor stats |
| 07 | Engineering | `Engineering.jsx` | 4-tab interface — Clay Mineralogy (6 types with formulas), Ceramic Classification (Terracotta → Technical Ceramics table), Glaze Chemistry (6 cards), Modern Applications |
| 08 | Kumbhāra | `Community.jsx` | Two-column socioeconomics — community names, 4 challenge cards, 5 policy cards, ₹55,000 Cr industry snapshot |
| 09 | Stats Bar | `StatsBar.jsx` | Full-width terracotta band with 6 counting statistics |
| 10 | Quiz | `Quiz.jsx` | 10 questions, animated progress bar, correct/wrong pulse/shake, circular-progress final score |
| 11 | References | `References.jsx` | 2-column grid of all 13 academic sources |
| 12 | Footer | `Footer.jsx` | Project context, section links, Devanagari sign-off |

A `CustomCursor` (dot + ring) and a sticky `Navbar` with active-section highlighting, dark/light toggle, and mobile slide-out menu wrap the whole thing.

---

## Tech stack

- **React 18** with **Vite**
- **React Router** (BrowserRouter; the app is single-page but routable)
- **Framer Motion** for all animations (page reveals, tab transitions, counter starts, quiz feedback)
- **Tailwind CSS 3** with a custom palette
- **Recharts** + **Lucide React** (icons / data viz)
- **Google Fonts**: Cormorant Garamond (display + body), Cinzel (cinzel headings), DM Mono (technical/labels), Noto Serif Devanagari (Sanskrit)

### Palette

| Token | Hex | Used for |
|-------|-----|----------|
| `charcoal` | `#0D0804` | Dark background |
| `terracotta` | `#C4521E` | Primary action / accent |
| `terracotta-lt` | `#E08555` | Hovers and italic emphasis |
| `gold` | `#D4A843` | Burnished gold / typography accents |
| `parchment` | `#F5EDD8` | Foreground in dark mode |
| `bone` | `#FAF4E6` | Light-mode background |
| `jade` | `#5E8A6A` | Quiz "correct" / policy borders |
| `rust` | `#9C3B1E` | Quiz "wrong" / challenge borders |

---

## Project structure

```
mrtkriya/
├── index.html                 # Loads Google Fonts; html.dark on <html>
├── tailwind.config.js         # Custom palette + animation keyframes
├── postcss.config.js
└── src/
    ├── main.jsx               # ReactDOM root + BrowserRouter
    ├── App.jsx                # Composes Navbar + 10 sections + Footer; theme toggle
    ├── index.css              # @tailwind + design tokens (vars) + components layer
    ├── components/
    │   ├── CustomCursor.jsx
    │   ├── Navbar.jsx         # Sticky, IntersectionObserver active-section, mobile menu
    │   ├── Hero.jsx           # SVG wheel + counters
    │   ├── About.jsx
    │   ├── Timeline.jsx
    │   ├── Process.jsx
    │   ├── Styles.jsx
    │   ├── Culture.jsx
    │   ├── Engineering.jsx    # 4-tab AnimatePresence interface
    │   ├── Community.jsx
    │   ├── StatsBar.jsx
    │   ├── Quiz.jsx
    │   ├── References.jsx
    │   └── Footer.jsx
    ├── data/
    │   ├── timeline.js         # 6 entries
    │   ├── process.js          # 9 steps
    │   ├── pottery-styles.js   # 12 regional traditions
    │   ├── engineering.js      # clayTypes(6) + ceramicClassification(6) + glazeChemistry(6) + modernApplications(6)
    │   ├── quiz-questions.js   # 10 Qs with explanations
    │   └── references.js       # 13 academic sources
    └── hooks/
        ├── useScrollReveal.js  # IntersectionObserver wrapper
        └── useCounter.js       # rAF-based easeOut counter
```

---

## Content fidelity

Every fact, statistic, and quote in the UI is drawn from the academic report — nothing was invented or paraphrased:

- **9,000+ years** · 23 lakh artisans · ₹55,000 Cr industry · 17+ GI tags · 700+ Morbi units · 64 Kalas
- **Mehrgarh c. 7000 BCE** is the earliest pottery site
- **Matka cooling = 5–8°C** (evaporative micro-porosity)
- **BIS IS 1861 : 2020** — lead ≤ 2.5 mg/L, cadmium ≤ 0.25 mg/L
- **Morbi cluster** — 700+ units, ~1,200 million m² tiles/year
- **NSS 73rd Round (2015–16)** — ~23 lakh craft workers, 68% rural
- **PM Vishwakarma Yojana 2023** — ₹3 lakh collateral-free loans
- All 13 references match the report's bibliography

The Aitareya Brāhmaṇa 5.32 quote and Vishwakarma Purāṇa quote are reproduced verbatim from the report.

---

## Accessibility & responsive notes

- Sticky nav has active-section highlight via `IntersectionObserver`.
- All clickable elements have `data-cursor` to enlarge the custom cursor; custom cursor is auto-disabled on mobile.
- Engineering classification table scrolls horizontally below 760px.
- CSS-column masonry reflows 3 → 2 → 1 column at 900px and 600px.
- Mobile menu and quiz are tested at **375px** width.

---

## License & attribution

Built as a Class 9 school project for *Timeless India · The 64 Kalas*. No commercial use.
Quote translations follow the academic conventions used in the source report (Haug for Aitareya Brāhmaṇa).

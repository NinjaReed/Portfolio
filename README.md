# MANOHARAVEERESH — Portfolio

A personal portfolio website built with the **KRISHNA** design system
(brutalist theme): plain HTML, CSS, and vanilla JavaScript. Fully responsive
and accessible.

## Structure

```
index.html              # All page content / sections
styles.css              # KRISHNA design-system tokens + layout
script.js               # Smooth scroll, mobile menu, active-nav, animations
images/                 # profile.jpg (hero) + face.svg (placeholder)
validate.js             # Project sanity-check (node validate.js)
```

## Sections

- `HOME` — hero
- `INFO` (#about) — system overview
- `WORK` (#experience) — log history / experience
- `CODE` (#github) — tech stack + projects
- `CONNECT` (#connect) — contact links

## Develop

```bash
# Build / validate
npm run build           # runs node validate.js

# Run locally
npm start               # python -m http.server 8000
```

Then open http://localhost:8000

## Deploy

This is a static site. Enable **GitHub Pages** on the repo:
*Settings → Pages → Build and deployment → Source: "Deploy from a branch" →
Branch: `main`, folder: `/ (root)` → Save.* The site publishes at
`https://ninjareed.github.io/Portfolio/`.

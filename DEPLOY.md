# Deployment Guide

This is a static site (HTML + CSS + JS). No build step is required — the
contents of this folder are served as-is.

## Local Preview

```bash
npm start
# or
python -m http.server 8000
```

Then open http://localhost:8000

## Deploy to Vercel

A `vercel.json` is included so the project deploys as a static site.

```bash
# One-time install of the Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Other Static Hosts

The site is plain static files, so it also works on:

- GitHub Pages (push the folder to a repo and enable Pages on `main`)
- Netlify (drag-and-drop the folder, or connect the repo)
- Any web server (copy the folder to the web root)

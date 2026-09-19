# BabelStacks.github.io

Organization website for [BabelStacks](https://github.com/BabelStacks), served at
**https://www.babelstacks.com**.

Built with [Astro](https://astro.build). Pages render to static HTML at build
time and ship **zero JavaScript** unless a component explicitly opts in.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # output to dist/
npm run preview    # serve the built site
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages. No manual step.

Repo Settings → Pages must have **Source: GitHub Actions** (not "Deploy from a
branch").

## Structure

```
src/
  layouts/Base.astro      shared shell — <head>, meta, header, footer
  components/             Header, Footer
  pages/                  file-based routes (index, about, 404)
  styles/global.css       design tokens + base styles
public/
  CNAME                   custom domain — must match `site` in astro.config.mjs
  favicon.svg
```

## Adding interactivity

React is already configured. A component only loads JavaScript when given a
`client:` directive:

```astro
---
import Calculator from '../components/Calculator.tsx';
---
<Calculator client:visible />   <!-- hydrates when scrolled into view -->
```

Without a directive, the component renders to static HTML and ships no JS.
See [framework components](https://docs.astro.build/en/guides/framework-components/).

## Custom domain

The domain is pinned in two places that must agree:

- `public/CNAME` → `www.babelstacks.com`
- `site` in `astro.config.mjs` → `https://www.babelstacks.com`

`CNAME` lives in `public/` so each build re-emits it. If it were only set in
repo settings, a deploy would wipe it.

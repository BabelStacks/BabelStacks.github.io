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
  config.ts               site constants — contact email, nav, tool statuses
  content.config.ts       schemas for the tools and blog collections
  layouts/Base.astro      shared shell — <head>, meta, header, footer
  components/             Header, Footer, ToolCard
  content/
    tools/                one Markdown file per tool
    blog/                 one Markdown file per post
  pages/                  file-based routes
  styles/global.css       design tokens + base styles
public/
  CNAME                   custom domain — must match `site` in astro.config.mjs
  favicon.svg
```

## Pages

| Route | Source |
|---|---|
| `/` | `src/pages/index.astro` |
| `/about/` | `src/pages/about.astro` |
| `/tools/` | `src/pages/tools/index.astro` (lists the `tools` collection) |
| `/blog/` | `src/pages/blog/index.astro` |
| `/blog/<slug>/` | `src/pages/blog/[...slug].astro` |
| `/contact/` | `src/pages/contact.astro` |
| 404 | `src/pages/404.astro` |

## Adding content

Copy `src/content/tools/_example.md` or `src/content/blog/_example.md` and
edit the frontmatter. Both examples are `draft: true` so they stay unpublished;
set `draft: false` (or remove it) to publish. Frontmatter is validated at build
time against `src/content.config.ts` — a bad date or a missing field fails the
build rather than shipping a broken page.

Tool cards sort by `order` (lower first), then title. `status` is one of
`planned`, `building`, `beta`, `released` and controls the badge.

## Contact email

Set in one place: `CONTACT_EMAIL` in `src/config.ts`. The home, about, contact
pages and the footer all read it from there.

## Languages

`astro.config.mjs` declares `en` (default) and `zh` with
`prefixDefaultLocale: false`, so English stays at `/` and no URLs change when
Chinese is added. Only English content exists today.

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

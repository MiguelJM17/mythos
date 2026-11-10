# Mythos — A Journal of Philosophy and Literature (demo)

A static demo of *Mythos*, a student journal born in the philosophy classrooms of Miami Dade College. Built with [Astro](https://astro.build). No backend, no database.

**Live site:** https://migueljm17.github.io/mythos/ (every push to `main` redeploys it automatically via GitHub Actions).

## Run it locally

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:4321.

To build the static site into `dist/`:

```bash
npm run build
npm run preview   # serves dist/ at http://localhost:4321
```

## Add a new piece

Every piece is one Markdown file in `src/content/pieces/`. Copy an existing one, rename it (the file name becomes the URL, e.g. `my-paper.md` → `/read/my-paper`) and edit the header:

```markdown
---
title: The Title
dek: One line that tells the reader what the piece is about.
author: Full Name
section: philosophy    # philosophy | literature
form: Philosophic paper  # label shown on the piece: Philosophic paper, Short essay, Poem...
tags: [ethics, mind]
issue: i               # must match an id in src/data/issues.ts
date: 2026-11-01
featured: false        # true = big story on the home page
references:            # optional; *asterisks* make titles italic
  - "Author, A. (Year). Title. *Journal, 1*(2), 3–4."
---

The text of the piece in Markdown. Use ## for section headings.
For poems (form: Poem), each line break is kept and a blank line starts a new stanza.
```

Save the file and it appears on the issue page, under Philosophy or Literature, with reading time calculated automatically.

## Add a new issue

Add an entry to `src/data/issues.ts` (id, Roman numeral, theme, editors' letter) and set `current: true` on it. Then give its pieces that `issue` id.

## What is a demo and what isn't

- **Submit** validates the form, asks for confirmation and gives a tracking code, but nothing is uploaded or sent.
- **Track a submission** remembers codes only in the browser where they were created. Sample code: `MYT-0001`.
- Real submissions would need a form service or a small backend; the two functions in `src/lib/submissions.ts` are where that would plug in.
- The submission guidelines are a proposal, marked "draft" on the site.

## Publish for free

The build output is plain static files, so any of these works:

- **Netlify:** drag the `dist/` folder onto https://app.netlify.com/drop.
- **Vercel / Netlify with GitHub:** push this folder to a GitHub repo, import it, build command `npm run build`, output directory `dist`.
- **GitHub Pages:** works too; links are relative, so the site runs from a sub-path.

## Project map

```
src/
  content/pieces/     ← one .md file per piece
  data/issues.ts      ← issues and the editors' letter
  pages/              ← home, issue, read, about, submit, track, 404
  components/         ← header, footer, piece list, tags, empty state
  styles/global.css   ← colors, type, spacing (light + dark)
```

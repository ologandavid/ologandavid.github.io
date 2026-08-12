# David Ologan — portfolio (v2, framework-free)

A hand-built static site. **No build step, no dependencies.** Plain HTML, CSS,
and a little vanilla JavaScript. You edit content in small data files; layout
and styling live separately.

---

## Preview it locally

The site uses root-relative paths (`/styles/...`, `/assets/...`), so serve it
from the repo root with any static server. Python is already on your Mac:

```bash
cd /Users/dologan/Documents/ologandavid.github.io
python3 serve.py          # no-cache preview -> http://localhost:8000
```

Then open **http://localhost:8000/**. Edit a file, save, refresh — you'll always
see the latest. Use `serve.py` (not `python3 -m http.server`), because the plain
server lets the browser cache JS/CSS and hides your changes. (Opening the `.html`
files directly with `file://` won't work — the root-relative paths need a server.)

---

## File map

```
index.html          Home — hero + highlights + featured work + news
projects.html       Filterable project gallery
research.html       Publications + research experience
experience.html     Industry & hands-on experience
teaching.html       Teaching + outreach
cv.html             CV summary + résumé PDF link
projects/           One real page per project (+ _template.html to copy)

styles/theme.css    >>> ALL COLORS, FONTS, SPACING live here <<<
styles/main.css     Layout & component styles (reads tokens from theme.css)

content/            >>> YOUR CONTENT (plain data, no layout) <<<
  site.js             name, nav, socials, news, highlights
  projects.js         project cards + metadata
  publications.js     papers
  experience.js       research + work timelines
  cv.js               education, awards, skills
  teaching.js         teaching + outreach

scripts/site.js     Shared nav + footer (web components), theme toggle
scripts/render.js   Turns content/*.js into the cards, lists, timelines
```

The shared nav and footer are **web components** (`<site-header>`, `<site-footer>`),
so there is no duplicated navigation markup across pages — edit it once in
`content/site.js` (links) / `scripts/site.js` (markup).

---

## Change the color scheme (one place)

Open **`styles/theme.css`**. At the top is an `ACCENT` block:

```css
--accent:       #c2410c;   /* the single signature color */
--accent-hover: #9a3412;
```

Swap those two hex values and reload — the whole site restyles. A few ready-made
palettes are listed as comments right there (teal, indigo, amber, berry). Dark
mode has its own accent a few lines down; keep it in the same color family.

Fonts and spacing are tokens in the same file.

---

## Edit content

- **Text/links on a page:** open the matching file in `content/`. It's plain
  data with comments — no HTML layout to wade through.
- **The homepage intro paragraph** is written directly in `index.html` (kept as
  static text so search engines read it).
- **A project's write-up** is its own file in `projects/`.

### Add a new project

1. Add an entry to `content/projects.js` (copy an existing one; set a unique `slug`).
2. Copy `projects/_template.html` to `projects/<your-slug>.html` and set
   `data-project="<your-slug>"` on the `<body>`.
3. Write the body. The title, course, tags, and links come from `projects.js`.

---

## Deploy to GitHub Pages

This branch (`redesign`) keeps your current live site untouched. When you're
happy with the preview and want it live:

1. Merge `redesign` into `main` (or make it your default branch).
2. In the repo: **Settings → Pages → Build and deployment → Source →
   "Deploy from a branch"**, choose your branch and the **`/ (root)`** folder.
3. Disable the old al-folio build workflow (`.github/workflows/deploy.yml`) so it
   doesn't fight the static deploy.

The `.nojekyll` file at the root tells Pages to serve these files as-is.

> Note: the old al-folio files (the `_`-prefixed folders, `Gemfile`, etc.) are
> still present but unused. They can be removed in a cleanup pass once you've
> confirmed you're happy with the new site.

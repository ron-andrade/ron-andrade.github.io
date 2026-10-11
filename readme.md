# Ronald Andrade — Graphic Designer Portfolio

A single-page portfolio site: hero, filterable work grid, about, services, print section and contact. Plain HTML/CSS/JS — no build step, no dependencies.

## Structure

```
index.html      → page markup
style.css       → all styling
script.js       → project data + filtering + scroll reveal
images/         → sample project artwork (SVG)
```

## Running locally

No build tools needed. Either:

- Open `index.html` directly in a browser, or
- Serve it locally so relative paths behave the same as in production:
  ```bash
  python3 -m http.server 8000
  # then visit http://localhost:8000
  ```

## Replacing the sample artwork

Fourteen real project images are included in `images/` (project-01.jpg → project-14.jpg). To swap in real work:

1. Add your image files to `images/` (JPG, PNG or SVG all work — the grid crops to a 4:3 tile automatically).
2. Open `script.js` and edit the `projects` array at the top: update `title`, `category`, `img` (the filename) and `num` for each entry, or add/remove entries entirely.
3. Categories used by the filter buttons: `branding`, `social`, `print`, `packaging`, `digital`, `motion`. Keep filenames/categories in sync with the buttons in `index.html` if you add new categories.

## Deploying

**GitHub Pages**
1. Push this folder to a GitHub repo.
2. Repo → Settings → Pages → Deploy from branch → select `main` and `/ (root)`.
3. Your site will be live at `https://<username>.github.io/<repo>/`.

**Vercel**
1. Import the repo at vercel.com/new.
2. Framework preset: "Other" (static site) — no build command needed.
3. Deploy.

## Editing content

- Contact email/phone, hero copy and about text all live directly in `index.html`.
- Colors, fonts and layout live in `style.css` (CSS variables at the top: `--ink`, `--paper`, `--muted`, `--line`, `--accent`).

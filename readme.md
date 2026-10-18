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

## Adding videos (Motion filter)

Open `script.js` and find the `videos` array. Copy one block and fill it in:

- **MP4 file:** put the file in `videos/`, then set `src: 'videos/your-file.mp4'` (add `poster: 'images/thumb.jpg'` for a thumbnail).
- **YouTube:** set `youtube: 'https://youtu.be/XXXXXXXXXXX'` — the thumbnail is automatic.
- `ratio: 9 / 16` for vertical, `16 / 9` for landscape, `1` for square.

The carousel, arrows, dots and swipe update automatically. Videos only play when clicked and pause when you move to another slide. Keep MP4s small (GitHub limit is 100 MB per file).

## Gallery

Sample work is shown as a collage where every design keeps its real shape (nothing is cropped). Each project in `script.js` has `w` and `h` (the image size) — if you add a new project, copy those two numbers from the image's width and height so the layout stays smooth.

# Ronald Andrade — Graphic Designer Portfolio

A single-page portfolio: hero, filterable work grid, motion section with showreel, about and services, print section and contact. Plain HTML/CSS/JS, no build step, no dependencies.

## Structure

```
index.html            page markup and text
style.css             all styling (colours at the top)
script.js             work data (top), motion videos (filmRows), and page behaviour
images/               artwork images (project-01.jpg ... project-14.jpg)
images/motion/        video poster stills
videos/               full videos, played with sound in the video player
videos/previews/      short muted loops shown on hover
videos/showreel.mp4   the muted reel at the top of the Motion section
```

## Running locally

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Adding a design to the work grid

1. Put the image in `images/`.
2. In `script.js`, copy one block in the `projects` array and fill it in.
3. Set `w` and `h` to the image's width and height in pixels so the grid doesn't jump while loading.
4. `category` is the main filter; `categories` lists every filter it should appear under: `branding`, `social`, `print`, `packaging`, `digital`.
5. Optional, for speed: the grid loads small copies from `images/grid/` named `<name>-480.webp`, `<name>-800.webp` and `<name>-800.jpg` (480 and 800 px wide). If they're missing, the grid falls back to the full image, so a new piece still works without them.

## Adding a video to the Motion section

1. Put the full video in `videos/` using a name without spaces, for example `client-logo-reveal.mp4`.
2. Add a poster still to `images/motion/` (a JPG around 960 px wide).
3. Optional: add a 4 to 6 second muted loop to `videos/previews/` for the hover preview. Without it, the card shows the poster only.
4. In `script.js`, find `filmRows` and copy a block into the row where it should appear. Videos in the same row are shown at the same height, so mixing vertical and landscape videos in one row works.
5. Set `ratio` to width divided by height: `16 / 9` for landscape, `9 / 16` for vertical.

Making a preview loop and poster with ffmpeg:

```bash
ffmpeg -ss 2 -t 5 -i videos/my-video.mp4 -an -vf "scale=640:-2" -crf 29 -movflags +faststart videos/previews/my-video.mp4
ffmpeg -ss 3 -i videos/my-video.mp4 -frames:v 1 -vf "scale=960:-2" -q:v 4 images/motion/my-video.jpg
```

Use `scale=360:-2` and `scale=540:-2` for vertical videos. Keep each file under 100 MB (GitHub's limit); compressing with `-crf 25` usually halves the size with no visible change.

## Deploying

GitHub Pages: Settings → Pages → Deploy from branch → `main`, `/ (root)`. The site goes live at `https://ron-andrade.github.io/`.

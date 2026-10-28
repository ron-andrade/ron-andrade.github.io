const projects = [
  {
    id: 1,
    num: '01',
    title: "Dixie Paper Trading — Bilingual Service Promo",
    category: 'social',
    categories: ["social", "print", "digital"],
    section: "Social Media Content",
    img: 'images/project-01.jpg',
    w: 1024,
    h: 1536,
    pos: 'top',
    desc: "Bilingual English/Arabic promotional ad presenting Dixie's featured print services — stickers, banners, business cards, gift tags, acrylics, paper bags and tissue boxes — with store hours and a WhatsApp call-to-action.",
    tools: "Portrait promo · English / Arabic",
    scope: "Dixie Paper Trading & Printing Services",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 2,
    num: '02',
    title: "Labneh & Cheese Al Bahiya Packaging Set",
    category: 'packaging',
    categories: ["packaging", "print"],
    section: "Package",
    img: 'images/project-02.jpg',
    w: 1586,
    h: 1682,
    pos: 'center',
    desc: "Label and pouch layouts for Labneh and Cheese Al Bahiya, with nutrition panels, bilingual copy, certification marks and a soft desert-landscape illustration direction.",
    tools: "Labels + pouch layouts · A4 print sheet",
    scope: "Zayed Authority · Made by People with Determination",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 3,
    num: '03',
    title: "Lily Glow — Product Menu & Usage Guide",
    category: 'print',
    categories: ["print", "branding"],
    section: "Menu",
    img: 'images/project-03.jpg',
    w: 2000,
    h: 1414,
    pos: 'center',
    desc: "Two-sided bilingual menu: an Arabic product range on one side and an English how-to-use guide on the other, framed by a soft floral border and a calligraphic wordmark.",
    tools: "Double-sided menu · Arabic / English",
    scope: "Lily Glow Skin & Body Care",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 4,
    num: '04',
    title: "Tri-Fold Brochure — Cover & Contact Panels",
    category: 'print',
    categories: ["print"],
    section: "Brochure",
    img: 'images/project-04.jpg',
    w: 2000,
    h: 1369,
    pos: 'center',
    desc: "Outer spread of a bilingual tri-fold: an empowerment cover with photography, a gold product panel with QR code, and a location map with contact details.",
    tools: "Tri-fold · outside spread",
    scope: "Zayed Authority for People of Determination",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 5,
    num: '05',
    title: "Safe Area Evacuation Instructions",
    category: 'print',
    categories: ["print", "digital"],
    section: "Poster",
    img: 'images/project-05.jpg',
    w: 1415,
    h: 2000,
    pos: 'top',
    desc: "Illustrated four-step Arabic evacuation guide for schools — stay calm, move in order, cooperate, stay in place — with safety notes and a friendly character-led layout.",
    tools: "50×70 cm poster · Arabic",
    scope: "Zayed Authority · EHS Department",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 6,
    num: '06',
    title: "Al Bahia Lebneh — 250 g Jar Label",
    category: 'packaging',
    categories: ["packaging"],
    section: "Package",
    img: 'images/project-06.jpg',
    w: 1891,
    h: 769,
    pos: 'center',
    desc: "Wraparound jar label with bilingual nutrition facts, partner and certification marks, a circular brand emblem and a fresh green-hills-and-sky illustration.",
    tools: "Wraparound label · 250 g",
    scope: "Zayed Authority · Made by People with Determination",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 7,
    num: '07',
    title: "Library Category Poster — 000 General Knowledge",
    category: 'print',
    categories: ["print"],
    section: "Poster",
    img: 'images/project-07.jpg',
    w: 1500,
    h: 2000,
    pos: 'top',
    desc: "Bold, child-friendly library category poster pairing an oversized classification number with Arabic and English titles and a playful learning illustration.",
    tools: "Portrait poster · Arabic / English",
    scope: "Library category poster series",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 8,
    num: '08',
    title: "Library Category Poster — 100 Philosophy & Psychology",
    category: 'print',
    categories: ["print"],
    section: "Poster",
    img: 'images/project-08.jpg',
    w: 1500,
    h: 2000,
    pos: 'top',
    desc: "Companion poster in the same series, using a friendly brain character, a contrasting deep-blue palette and the same bilingual type system.",
    tools: "Portrait poster · Arabic / English",
    scope: "Library category poster series",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 9,
    num: '09',
    title: "Swimming Pool Rules & Regulations",
    category: 'print',
    categories: ["print"],
    section: "Poster",
    img: 'images/project-09.jpg',
    w: 1415,
    h: 2000,
    pos: 'top',
    desc: "Bilingual safety poster with a consistent icon system for eleven pool rules, set on a subtle patterned background in the authority's gold and green palette.",
    tools: "Portrait poster · English / Arabic",
    scope: "Zayed Authority · EHS Department",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 10,
    num: '10',
    title: "Al Bahia Lebneh — 2 kg Tub Label",
    category: 'packaging',
    categories: ["packaging"],
    section: "Package",
    img: 'images/project-10.jpg',
    w: 1794,
    h: 1794,
    pos: 'center',
    desc: "Square tub label with nutrition facts, bilingual flavour callout (plain), origin and certification marks, and the Al Bahia emblem over a bright farmland scene.",
    tools: "Square label · 2000 g",
    scope: "Zayed Higher Organization for People of Determination",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 11,
    num: '11',
    title: "Tri-Fold Brochure — Inside Spread",
    category: 'print',
    categories: ["print"],
    section: "Brochure",
    img: 'images/project-11.jpg',
    w: 2000,
    h: 1369,
    pos: 'center',
    desc: "Inside spread with key-product photo strips, goal and cooperation panels, and an icon-led list of workshops, built on a gold-and-green brand palette.",
    tools: "Tri-fold · inside spread",
    scope: "Zayed Authority for People of Determination",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 12,
    num: '12',
    title: "Lycée Louis Massignon — Illuminated Signage",
    category: 'print',
    categories: ["print", "branding"],
    section: "Signage",
    img: 'images/project-12.jpg',
    w: 1257,
    h: 832,
    pos: 'center',
    desc: "Backlit Arabic and French lettering with a partner-logo panel, shown as a facade signage concept.",
    tools: "Backlit letter signage · Arabic / French",
    scope: "Signage concept",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 13,
    num: '13',
    title: "Business Card — FUTURE for Advanced Research & Studies",
    category: 'branding',
    categories: ["branding", "print"],
    section: "Business Card",
    img: 'images/project-13.jpg',
    w: 2174,
    h: 651,
    pos: 'center',
    desc: "Double-sided English/Arabic business card with gold accents, icon-led contact details and a QR code.",
    tools: "Double-sided card · 90×55 mm",
    scope: "FUTURE for Advanced Research & Studies",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 14,
    num: '14',
    title: "Business Card — Ardian",
    category: 'branding',
    categories: ["branding", "print"],
    section: "Business Card",
    img: 'images/project-14.jpg',
    w: 2166,
    h: 650,
    pos: 'center',
    desc: "Minimal bilingual corporate card with a centered red wordmark, a clean typographic hierarchy and a full regulatory line.",
    tools: "Double-sided card · 90×55 mm",
    scope: "Ardian",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
];

// =====================================================================
// MOTION WORK
// TO ADD A VIDEO: copy one block into the row where it should appear.
//   src      full video (with sound), in /videos
//   preview  short muted loop for hover, in /videos/previews (optional)
//   poster   still image, in /images/motion
//   ratio    width / height of the video: 16/9 landscape, 9/16 vertical
// Rows: every video in a row is shown at the same height.
// =====================================================================
const filmRows = [
  [
    {
      title: 'Al Rashid Transport, lifting services film',
      kind: 'Promo film',
      length: '60 sec',
      format: '16:9',
      lang: 'English',
      desc: 'A one-minute explainer for a heavy-lift contractor: why planning a lift is hard, the Think. Plan. Lift. process, landmark projects and a call to book a site visit.',
      src: 'videos/al-rashid-transport-film.mp4',
      preview: 'videos/previews/al-rashid-transport-film.mp4',
      poster: 'images/motion/al-rashid-transport-film.jpg',
      ratio: 16 / 9,
    },
    {
      title: 'Dixie Paper Trading, bilingual services promo',
      kind: 'Promo film',
      length: '60 sec',
      format: '16:9',
      lang: 'English and Arabic',
      desc: 'A service-by-service walkthrough for a print shop, from offset and wide-format printing to custom boxes and invitations, with every line set in both English and Arabic.',
      src: 'videos/dixie-bilingual-promo.mp4',
      preview: 'videos/previews/dixie-bilingual-promo.mp4',
      poster: 'images/motion/dixie-bilingual-promo.jpg',
      ratio: 16 / 9,
    },
    {
      title: 'Harbour View, apartment listing film',
      kind: 'Promo film',
      length: '60 sec',
      format: '16:9',
      lang: 'English',
      desc: 'An illustrated listing film for a two-bedroom harbour-view apartment: the skyline reveal, an animated floor plan, interior highlights, a walkable-distance map, amenities and a viewing call-to-action. A concept piece.',
      src: 'videos/harbour-view-unit-2304.mp4',
      preview: 'videos/previews/harbour-view-unit-2304.mp4',
      poster: 'images/motion/harbour-view-unit-2304.jpg',
      ratio: 16 / 9,
    },
  ],
  [
    {
      title: 'Dixie, vertical profile ad',
      kind: 'Social ad',
      length: '35 sec',
      format: '9:16',
      lang: 'English',
      desc: 'A vertical ad that plays like an app: upload your artwork, pick a product, get a quote. Built for Instagram Reels and TikTok.',
      src: 'videos/dixie-profile-ad-vertical.mp4',
      preview: 'videos/previews/dixie-profile-ad-vertical.mp4',
      poster: 'images/motion/dixie-profile-ad-vertical.jpg',
      ratio: 9 / 16,
    },
    {
      title: 'Dixie, print press logo reveal',
      kind: 'Logo animation',
      length: '12 sec',
      format: '9:16',
      lang: 'No dialogue',
      desc: 'The logo prints itself: a blank sheet lands under registration marks, misaligned colour plates snap into place and maple leaves scatter.',
      src: 'videos/dixie-logo-print-reveal.mp4',
      preview: 'videos/previews/dixie-logo-print-reveal.mp4',
      poster: 'images/motion/dixie-logo-print-reveal.jpg',
      ratio: 9 / 16,
    },
    {
      title: 'Dixie, line-drawn logo build',
      kind: 'Logo animation',
      length: '5 sec',
      format: '4:5',
      lang: 'No dialogue',
      desc: 'A short sting where the frame draws itself, the maple mark strokes in and the wordmark settles.',
      src: 'videos/dixie-logo-line-animation.mp4',
      preview: 'videos/previews/dixie-logo-line-animation.mp4',
      poster: 'images/motion/dixie-logo-line-animation.jpg',
      ratio: 400 / 518,
    },
  ],
  [
    {
      title: 'Haroon Andrade, logo intro',
      kind: 'Logo animation',
      length: '8 sec',
      format: '16:9',
      lang: 'No dialogue',
      desc: 'A crane, a truck and a gear assemble into the HA monogram before the name slides in.',
      src: 'videos/haroon-andrade-logo-intro.mp4',
      preview: 'videos/previews/haroon-andrade-logo-intro.mp4',
      poster: 'images/motion/haroon-andrade-logo-intro.jpg',
      ratio: 16 / 9,
    },
    {
      title: 'Al Rashid Group, logo reveal',
      kind: 'Logo animation',
      length: '7 sec',
      format: '16:9',
      lang: 'No dialogue',
      desc: 'Road lines light up toward the horizon and the company sign swings into place above them.',
      src: 'videos/al-rashid-group-logo-reveal.mp4',
      preview: 'videos/previews/al-rashid-group-logo-reveal.mp4',
      poster: 'images/motion/al-rashid-group-logo-reveal.jpg',
      ratio: 16 / 9,
    },
  ],
];

// ---------- helpers ----------
const $ = (s, el = document) => el.querySelector(s);
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const saveData = navigator.connection && navigator.connection.saveData;
const canHover = matchMedia('(hover: hover) and (pointer: fine)').matches;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const kindLabel = { branding: 'Branding', social: 'Social media', print: 'Print', packaging: 'Packaging', digital: 'Digital' };

// ---------- mobile menu ----------
const toggle = $('.menu-toggle');
const menu = $('#site-menu');
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', open);
  toggle.textContent = open ? 'Close' : 'Menu';
});
menu.addEventListener('click', e => {
  if (e.target.closest('a')) { menu.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); toggle.textContent = 'Menu'; }
});

// ---------- hero: print the headline in C, M, Y, then snap to black ----------
(function registerHeadline() {
  const h = $('#headline');
  if (!h || reduceMotion) return;
  const html = h.innerHTML;
  h.innerHTML = `<span class="ink">${html}</span>` +
    ['c', 'm', 'y'].map(p => `<span class="plate ${p}" aria-hidden="true">${html}</span>`).join('');
  h.classList.add('is-printing');
  setTimeout(() => { h.classList.remove('is-printing'); h.classList.add('is-printed'); }, 1150);
})();

// ---------- work grid ----------
const grid = $('#portfolio');
let visibleProjects = projects;
let artIndex = 0;

// The grid shows small copies from images/grid/ (made from the full image,
// 480 and 800 px wide). The full-size file is only loaded in the viewer.
// If a small copy is missing, the full image is used instead.
function gridImage(p) {
  const base = p.img.replace(/^images\/(.+)\.\w+$/, 'images/grid/$1');
  const fallback = `this.onerror=null;this.parentNode.querySelector('source')?.remove();this.src='${p.img}'`;
  return `<picture>
      <source type="image/webp" srcset="${base}-480.webp 480w, ${base}-800.webp 800w" sizes="(max-width: 700px) 48vw, 360px">
      <img src="${base}-800.jpg" alt="" width="${p.w}" height="${p.h}" loading="lazy" decoding="async" onerror="${fallback}">
    </picture>`;
}

function renderWork(filter = 'all') {
  visibleProjects = projects.filter(p => filter === 'all' || p.category === filter || (p.categories || []).includes(filter));
  grid.innerHTML = visibleProjects.map((p, i) => `
    <article class="piece marks">
      <div class="piece-sheet">${gridImage(p)}</div>
      <div class="piece-meta">
        <h3><button class="piece-open" data-i="${i}" aria-haspopup="dialog">${esc(p.title)}</button></h3>
        <span class="piece-kind">${esc(p.section)}</span>
      </div>
    </article>`).join('');
}
grid.addEventListener('click', e => {
  const piece = e.target.closest('.piece');
  if (!piece) return;
  openArt(+piece.querySelector('.piece-open').dataset.i);
});
document.querySelectorAll('.filters button').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.filters button').forEach(b => { b.classList.toggle('is-active', b === btn); b.setAttribute('aria-pressed', b === btn); });
  renderWork(btn.dataset.filter);
}));
renderWork();

// ---------- artwork viewer ----------
const artDialog = $('#artDialog');
function showArt() {
  const p = visibleProjects[artIndex];
  $('#art-img').src = p.img;
  $('#art-img').alt = p.title;
  $('#art-kind').textContent = `${p.section}, ${kindLabel[p.category] || p.category}`;
  $('#art-title').textContent = p.title;
  $('#art-desc').textContent = p.desc;
  $('#art-format').textContent = p.tools;
  $('#art-client').textContent = p.scope;
}
function openArt(i) { artIndex = i; showArt(); artDialog.showModal(); lockPage(); }
function stepArt(d) { artIndex = (artIndex + d + visibleProjects.length) % visibleProjects.length; showArt(); }
$('#artPrev').addEventListener('click', () => stepArt(-1));
$('#artNext').addEventListener('click', () => stepArt(1));
artDialog.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') stepArt(-1);
  if (e.key === 'ArrowRight') stepArt(1);
});

// close any viewer with its button or by clicking outside it,
// and keep the page behind from scrolling while it is open
document.querySelectorAll('dialog.viewer').forEach(d => {
  d.addEventListener('click', e => {
    if (e.target.closest('[data-close]')) return d.close();
    if (e.target !== d) return;
    const r = d.getBoundingClientRect();
    const outside = e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    if (outside) d.close();
  });
  d.addEventListener('close', () => document.documentElement.classList.remove('is-locked'));
});
const lockPage = () => document.documentElement.classList.add('is-locked');

// ---------- showreel ----------
const reel = $('#reel');
const reelToggle = $('#reelToggle');
function setReel(play) {
  if (play) reel.play().catch(() => setReel(false)); else reel.pause();
  reelToggle.textContent = play ? 'Pause reel' : 'Play reel';
  reelToggle.setAttribute('aria-pressed', !play);
}
reelToggle.addEventListener('click', () => setReel(reel.paused));
if (reduceMotion || saveData) {
  setReel(false);
} else {
  // only spend data on the reel once it is close to the screen
  new IntersectionObserver(([entry], io) => {
    if (entry.isIntersecting) { reel.preload = 'auto'; io.disconnect(); }
  }, { rootMargin: '800px 0px' }).observe(reel);
  new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && reelToggle.getAttribute('aria-pressed') === 'false') reel.play().catch(() => setReel(false));
    else if (!entry.isIntersecting) reel.pause();
  }, { threshold: 0.25 }).observe(reel);
}

// ---------- film cards ----------
const filmsEl = $('#films');
const allFilms = filmRows.flat();
filmsEl.innerHTML = filmRows.map(row => `
  <div class="film-row">${row.map(f => {
    const i = allFilms.indexOf(f);
    return `
    <article class="film${f.ratio < 1 ? ' is-tall' : ''}" style="--r:${f.ratio.toFixed(4)}" data-i="${i}">
      <div class="film-media">
        <img src="${f.poster}" alt="" loading="lazy" decoding="async">
        ${f.preview ? `<video muted loop playsinline preload="none" data-src="${f.preview}" aria-hidden="true"></video>` : ''}
        <span class="film-badge">${esc(f.length)}</span>
      </div>
      <div class="film-info">
        <h3><button class="film-open" aria-haspopup="dialog">${esc(f.title)}</button></h3>
        <p class="film-meta"><span>${esc(f.kind)}</span><span>${esc(f.format)}</span><span>${esc(f.lang)}</span></p>
      </div>
    </article>`;
  }).join('')}</div>`).join('');

function playPreview(card) {
  const v = card.querySelector('video');
  if (!v || reduceMotion || saveData) return;
  if (!v.src) v.src = v.dataset.src;
  v.play().then(() => card.classList.add('is-playing')).catch(() => {});
}
function stopPreview(card) {
  const v = card.querySelector('video');
  if (!v) return;
  v.pause();
  card.classList.remove('is-playing');
}

const cards = [...filmsEl.querySelectorAll('.film')];
if (canHover) {
  cards.forEach(c => {
    c.addEventListener('pointerenter', () => playPreview(c));
    c.addEventListener('pointerleave', () => stopPreview(c));
    c.addEventListener('focusin', () => playPreview(c));
    c.addEventListener('focusout', () => stopPreview(c));
  });
} else {
  // touch screens: play the previews that are mostly in view
  const io = new IntersectionObserver(entries => entries.forEach(e =>
    e.isIntersecting ? playPreview(e.target) : stopPreview(e.target)), { threshold: 0.7 });
  cards.forEach(c => io.observe(c));
}

// ---------- film player ----------
const filmDialog = $('#filmDialog');
const stage = $('#film-stage');
filmsEl.addEventListener('click', e => {
  const card = e.target.closest('.film');
  if (!card) return;
  const f = allFilms[+card.dataset.i];
  cards.forEach(stopPreview);
  if (!reel.paused) reel.pause();
  stage.innerHTML = `<video src="${f.src}" poster="${f.poster}" controls autoplay playsinline></video>`;
  stage.style.aspectRatio = '';
  $('#film-kind').textContent = `${f.kind}, ${f.length}, ${f.format}`;
  $('#film-title').textContent = f.title;
  $('#film-desc').textContent = f.desc;
  filmDialog.showModal();
  lockPage();
});
filmDialog.addEventListener('close', () => {
  stage.innerHTML = '';
  if (!reduceMotion && !saveData && reelToggle.getAttribute('aria-pressed') === 'false') reel.play().catch(() => {});
});

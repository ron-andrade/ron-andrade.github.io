const projects = [
  {
    id: 1,
    short: "Print shop promo",
    title: "Print shop, bilingual service promo",
    category: 'social',
    categories: ["social", "print", "digital"],
    section: "Social Media Content",
    img: 'images/project-01.jpg',
    w: 1024,
    h: 1536,
    pos: 'top',
    desc: "Bilingual English/Arabic promotional ad presenting a print shop's featured services — stickers, banners, business cards, gift tags, acrylics, paper bags and tissue boxes — with store hours and a WhatsApp call-to-action.",
    tools: "Portrait promo · English / Arabic",
    scope: "Print shop, Abu Dhabi",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 2,
    short: "Dairy packaging set",
    title: "Labneh and cheese packaging set",
    category: 'packaging',
    categories: ["packaging", "print"],
    section: "Package",
    img: 'images/project-02.jpg',
    w: 1586,
    h: 1682,
    pos: 'center',
    desc: "Label and pouch layouts for a labneh and cheese range, with nutrition panels, bilingual copy, certification marks and a soft desert-landscape illustration direction.",
    tools: "Labels + pouch layouts · A4 print sheet",
    scope: "Dairy brand, UAE",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 3,
    short: "Skincare menu",
    title: "Skincare product menu and usage guide",
    category: 'print',
    categories: ["print", "branding"],
    section: "Menu",
    img: 'images/project-03.jpg',
    w: 2000,
    h: 1414,
    pos: 'center',
    desc: "Two-sided bilingual menu: an Arabic product range on one side and an English how-to-use guide on the other, framed by a soft floral border and a calligraphic wordmark.",
    tools: "Double-sided menu · Arabic / English",
    scope: "Skincare brand, UAE",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 4,
    short: "Tri-fold brochure, cover",
    title: "Tri-fold brochure, cover and contact panels",
    category: 'print',
    categories: ["print"],
    section: "Brochure",
    img: 'images/project-04.jpg',
    w: 2000,
    h: 1369,
    pos: 'center',
    desc: "Outer spread of a bilingual tri-fold: an empowerment cover with photography, a gold product panel with QR code, and a location map with contact details.",
    tools: "Tri-fold · outside spread",
    scope: "Public organisation, UAE",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 5,
    short: "Evacuation poster",
    title: "Safe area evacuation instructions",
    category: 'print',
    categories: ["print", "digital"],
    section: "Poster",
    img: 'images/project-05.jpg',
    w: 1415,
    h: 2000,
    pos: 'top',
    desc: "Illustrated four-step Arabic evacuation guide for schools — stay calm, move in order, cooperate, stay in place — with safety notes and a friendly character-led layout.",
    tools: "50×70 cm poster · Arabic",
    scope: "Public organisation, UAE",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 6,
    short: "Labneh jar label",
    title: "Labneh jar label, 250 g",
    category: 'packaging',
    categories: ["packaging"],
    section: "Package",
    img: 'images/project-06.jpg',
    w: 1891,
    h: 769,
    pos: 'center',
    desc: "Wraparound jar label with bilingual nutrition facts, partner and certification marks, a circular brand emblem and a fresh green-hills-and-sky illustration.",
    tools: "Wraparound label · 250 g",
    scope: "Dairy brand, UAE",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 7,
    short: "Library poster, 000",
    title: "Library category poster, 000 General Knowledge",
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
    short: "Library poster, 100",
    title: "Library category poster, 100 Philosophy and Psychology",
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
    short: "Pool rules poster",
    title: "Swimming pool rules and regulations",
    category: 'print',
    categories: ["print"],
    section: "Poster",
    img: 'images/project-09.jpg',
    w: 1415,
    h: 2000,
    pos: 'top',
    desc: "Bilingual safety poster with a consistent icon system for eleven pool rules, set on a subtle patterned background in a gold and green palette.",
    tools: "Portrait poster · English / Arabic",
    scope: "Public organisation, UAE",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 10,
    short: "Labneh tub label",
    title: "Labneh tub label, 2 kg",
    category: 'packaging',
    categories: ["packaging"],
    section: "Package",
    img: 'images/project-10.jpg',
    w: 1794,
    h: 1794,
    pos: 'center',
    desc: "Square tub label with nutrition facts, bilingual flavour callout (plain), origin and certification marks, and the brand emblem over a bright farmland scene.",
    tools: "Square label · 2000 g",
    scope: "Dairy brand, UAE",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 11,
    short: "Tri-fold brochure, inside",
    title: "Tri-fold brochure, inside spread",
    category: 'print',
    categories: ["print"],
    section: "Brochure",
    img: 'images/project-11.jpg',
    w: 2000,
    h: 1369,
    pos: 'center',
    desc: "Inside spread with key-product photo strips, goal and cooperation panels, and an icon-led list of workshops, built on a gold-and-green brand palette.",
    tools: "Tri-fold · inside spread",
    scope: "Public organisation, UAE",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 12,
    short: "School signage",
    title: "School illuminated signage",
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
    short: "Research centre card",
    title: "Research centre business card",
    category: 'branding',
    categories: ["branding", "print"],
    section: "Business Card",
    img: 'images/project-13.jpg',
    w: 2174,
    h: 651,
    pos: 'center',
    desc: "Double-sided English/Arabic business card with gold accents, icon-led contact details and a QR code.",
    tools: "Double-sided card · 90×55 mm",
    scope: "Research centre",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 14,
    short: "Investment firm card",
    title: "Investment firm business card",
    category: 'branding',
    categories: ["branding", "print"],
    section: "Business Card",
    img: 'images/project-14.jpg',
    w: 2166,
    h: 650,
    pos: 'center',
    desc: "Minimal bilingual corporate card with a centered red wordmark, a clean typographic hierarchy and a full regulatory line.",
    tools: "Double-sided card · 90×55 mm",
    scope: "Investment firm",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },  {
    id: 15,
    short: "Café brand board",
    title: "Café brand board, concept",
    category: 'branding',
    categories: ["branding"],
    section: "Brand board (concept)",
    img: 'images/project-15.jpg',
    w: 1800,
    h: 1100,
    pos: 'center',
    desc: "A full identity for a fictional specialty coffee bar: a coffee-bean mark, a bilingual wordmark, a warm roast-and-clay palette, type pairing, and the cup sleeve and loyalty card it lives on.",
    tools: "Logo, palette, type and applications · English / Arabic",
    scope: "Concept work, fictional brand",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 16,
    short: "Café Instagram posts",
    title: "Café Instagram posts, concept",
    category: 'social',
    categories: ["social", "digital"],
    section: "Social posts (concept)",
    img: 'images/project-16.jpg',
    w: 2000,
    h: 961,
    pos: 'center',
    desc: "Three 4:5 posts for the same fictional coffee bar: a seasonal drink with price, a new-branch announcement with map, and a bilingual good-morning post. One system, three jobs.",
    tools: "3 Instagram posts, 4:5 · English / Arabic",
    scope: "Concept work, fictional brand",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 17,
    short: "Fun run poster",
    title: "Seaside fun run poster, concept",
    category: 'print',
    categories: ["print"],
    section: "Poster (concept)",
    img: 'images/project-17.jpg',
    w: 1400,
    h: 1960,
    pos: 'center',
    desc: "A 50 x 70 cm poster for a fictional 10K run on the sea front: oversized type, a runner crossing the sun and the waves, and the date, route and sign-up set in English and Arabic.",
    tools: "50 x 70 cm poster · English / Arabic",
    scope: "Concept work, fictional brand",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 18,
    short: "Skincare packaging",
    title: "Skincare carton and jar, concept",
    category: 'packaging',
    categories: ["packaging", "print"],
    section: "Packaging (concept)",
    img: 'images/project-18.jpg',
    w: 1800,
    h: 1200,
    pos: 'center',
    desc: "Carton dieline and jar label for a fictional skincare line: a desert dune palette, bilingual front panel, directions and ingredients on the back, and a shelf view of the finished pack.",
    tools: "Carton dieline + jar label · English / Arabic",
    scope: "Concept work, fictional brand",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 19,
    short: "Property agency stationery",
    title: "Property agency stationery, concept",
    category: 'branding',
    categories: ["branding", "print"],
    section: "Stationery (concept)",
    img: 'images/project-19.jpg',
    w: 1800,
    h: 1150,
    pos: 'center',
    desc: "Letterhead, business cards and envelope for a fictional property agency. The mark is a roof line that doubles as an N and a compass point, in navy and brass.",
    tools: "A4 letterhead, 90 x 55 mm card, envelope · English / Arabic",
    scope: "Concept work, fictional brand",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },  {
    id: 20,
    short: "Off-plan launch carousel",
    title: "Off-plan launch carousel, concept",
    category: 'social',
    categories: ["social", "digital"],
    section: "Social ad (concept)",
    img: 'images/project-20.jpg',
    w: 1740,
    h: 1460,
    pos: 'center',
    desc: "A five-slide Instagram carousel for a fictional developer's sea-front launch, ordered the way a buyer asks: the view, the location in minutes, unit types and starting price, the 60/40 payment plan, then the deadline and the call to action.",
    tools: "Instagram carousel, 5 slides, 4:5",
    scope: "Concept work, fictional brand",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 21,
    short: "Property launch Stories",
    title: "Property launch Stories, concept",
    category: 'social',
    categories: ["social", "digital"],
    section: "Social ad (concept)",
    img: 'images/project-21.jpg',
    w: 1560,
    h: 1000,
    pos: 'center',
    desc: "Three sponsored Stories for the same launch: the reveal with a link sticker, a 2-bedroom floor plan room by room, and a viewing call to action with a poll sticker.",
    tools: "Instagram Stories, 3 frames, 9:16",
    scope: "Concept work, fictional brand",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 22,
    short: "Food delivery app ads",
    title: "Food delivery app ads, concept",
    category: 'social',
    categories: ["social", "digital"],
    section: "Social ad (concept)",
    img: 'images/project-22.jpg',
    w: 1400,
    h: 1000,
    pos: 'center',
    desc: "A feed ad and a Story ad for a fictional UAE food delivery app: a bold first-order offer with a promo code, and a late-night Story built around a 2 am craving.",
    tools: "Feed ad 4:5 + Story ad 9:16",
    scope: "Concept work, fictional brand",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 23,
    short: "National Day posts",
    title: "UAE National Day posts, concept",
    category: 'social',
    categories: ["social", "digital"],
    section: "Social post (concept)",
    img: 'images/project-23.jpg',
    w: 1480,
    h: 1000,
    pos: 'center',
    desc: "Eid Al Etihad greetings for two fictional brands, a sea-front developer and a delivery app, each in its own voice and using the national colours as a band rather than the flag itself.",
    tools: "2 Instagram posts, 4:5",
    scope: "Concept work, fictional brand",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },  {
    id: 24,
    short: "Logo folio",
    title: "Logo folio, nine bilingual marks, concept",
    category: 'branding',
    categories: ["branding"],
    section: "Logos (concept)",
    img: 'images/project-24.jpg',
    w: 1800,
    h: 1860,
    pos: 'center',
    desc: "Nine logo marks for fictional UAE brands, each with an English and Arabic lockup: an oud house, a falconry club, a date farm, a fintech app, a logistics firm, a construction company, a bakery, a gym and an abaya boutique. Each mark is drawn from the business itself: incense smoke, a falcon's cheek stripe, a dhow sail, a pulse line.",
    tools: "9 logo marks · English / Arabic lockups",
    scope: "Concept work, fictional brands",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },  {
    id: 25,
    short: "Property launch website",
    title: "Property launch website, concept",
    category: 'web',
    categories: ["web", "digital"],
    section: "Website (concept)",
    img: 'images/project-25.jpg',
    w: 2000,
    h: 1240,
    pos: 'center',
    desc: "A responsive launch site for a fictional sea-front development: the view and the call to register up top, key facts in one strip, the three apartment types with floor plans, the 60/40 payment plan and a short registration form. Designed for desktop and phone.",
    tools: "Responsive website · desktop and mobile",
    scope: "Concept work, fictional brand",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 26,
    short: "Food delivery landing page",
    title: "Food delivery landing page, concept",
    category: 'web',
    categories: ["web", "digital"],
    section: "Website (concept)",
    img: 'images/project-26.jpg',
    w: 2000,
    h: 1240,
    pos: 'center',
    desc: "A responsive landing page for a fictional UAE food delivery app: an area search and the app itself in the hero, how it works in three steps, food categories, and a first-order offer with a promo code. Designed for desktop and phone.",
    tools: "Responsive landing page · desktop and mobile",
    scope: "Concept work, fictional brand",
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
];


// =====================================================================
// MOTION WORK, split by kind. Each group gets its own heading on the page.
// TO ADD A VIDEO: copy one block into the row where it should appear.
//   src      full video (with sound), in /videos
//   preview  short muted loop for hover, in /videos/previews (optional)
//   poster   still image, in /images/motion
//   ratio    width / height of the video: 16/9 landscape, 9/16 vertical, 1 square
// Rows: every video in a row is shown at the same height.
// =====================================================================
const filmGroups = [
  {
    id: 'logo-reveals',
    title: 'Logo reveals',
    note: 'Short stings that bring a mark to life, from a few seconds of line work to a full build.',
    rows: [
      [
        {
          title: 'Construction company, logo reveal',
          kind: 'Logo reveal', length: '8.5 sec', format: '16:9', lang: 'With sound',
          desc: 'A blueprint line draws the company initials, the roof and window build above them and the Design and Build Services line settles underneath.',
          src: 'videos/jms-logo-reveal.mp4', preview: 'videos/previews/jms-logo-reveal.mp4', poster: 'images/motion/jms-logo-reveal.jpg',
          ratio: 16 / 9,
        },
        {
          title: 'Lifting services brand, logo intro',
          kind: 'Logo reveal', length: '8 sec', format: '16:9', lang: 'No dialogue',
          desc: 'A crane, a truck and a gear assemble into the monogram before the name slides in.',
          src: 'videos/haroon-andrade-logo-intro.mp4', preview: 'videos/previews/haroon-andrade-logo-intro.mp4', poster: 'images/motion/haroon-andrade-logo-intro.jpg',
          ratio: 16 / 9,
        },
      ],
      [
        {
          title: 'Print brand, logo reveal',
          kind: 'Logo reveal', length: '5 sec', format: '1:1', lang: 'With sound',
          desc: 'The colourful letters bounce in one by one, the flower and the character pop up and Prints is written in with a sparkle.',
          src: 'videos/namiya-logo-reveal.mp4', preview: 'videos/previews/namiya-logo-reveal.mp4', poster: 'images/motion/namiya-logo-reveal.jpg',
          ratio: 1,
        },
        {
          title: 'Road construction group, logo reveal',
          kind: 'Logo reveal', length: '7 sec', format: '16:9', lang: 'No dialogue',
          desc: 'Road lines light up toward the horizon and the company sign swings into place above them.',
          src: 'videos/al-rashid-group-logo-reveal.mp4', preview: 'videos/previews/al-rashid-group-logo-reveal.mp4', poster: 'images/motion/al-rashid-group-logo-reveal.jpg',
          ratio: 16 / 9,
        },
        {
          title: 'Print shop, print press logo reveal',
          kind: 'Logo reveal', length: '12 sec', format: '9:16', lang: 'No dialogue',
          desc: 'The logo prints itself: a blank sheet lands under registration marks, misaligned colour plates snap into place and maple leaves scatter.',
          src: 'videos/dixie-logo-print-reveal.mp4', preview: 'videos/previews/dixie-logo-print-reveal.mp4', poster: 'images/motion/dixie-logo-print-reveal.jpg',
          ratio: 9 / 16,
        },
        {
          title: 'Print shop, line-drawn logo build',
          kind: 'Logo reveal', length: '5 sec', format: '4:5', lang: 'No dialogue',
          desc: 'A short sting where the frame draws itself, the maple mark strokes in and the wordmark settles.',
          src: 'videos/dixie-logo-line-animation.mp4', preview: 'videos/previews/dixie-logo-line-animation.mp4', poster: 'images/motion/dixie-logo-line-animation.jpg',
          ratio: 400 / 518,
        },
      ],
    ],
  },
  {
    id: 'promo-films',
    title: 'Promo films',
    note: 'One-minute films that explain a business, a service or a home, with the script, design and edit done in-house.',
    rows: [
      [
        {
          title: 'Heavy-lift contractor, lifting services film',
          kind: 'Promo film', length: '60 sec', format: '16:9', lang: 'English',
          desc: 'A one-minute explainer for a heavy-lift contractor: why planning a lift is hard, the Think. Plan. Lift. process, landmark projects and a call to book a site visit.',
          src: 'videos/al-rashid-transport-film.mp4', preview: 'videos/previews/al-rashid-transport-film.mp4', poster: 'images/motion/al-rashid-transport-film.jpg',
          ratio: 16 / 9,
        },
        {
          title: 'Print shop, bilingual services promo',
          kind: 'Promo film', length: '60 sec', format: '16:9', lang: 'English and Arabic',
          desc: 'A service-by-service walkthrough for a print shop: offset printing, wide format, stickers and decals, invitations and graphic design, then why to choose them, where to find the shop and how to get in touch. Every line is set in both English and Arabic.',
          src: 'videos/dixie-bilingual-promo.mp4', preview: 'videos/previews/dixie-bilingual-promo.mp4', poster: 'images/motion/dixie-bilingual-promo.jpg',
          ratio: 16 / 9,
        },
        {
          title: 'Apartment listing film',
          kind: 'Promo film', length: '60 sec', format: '16:9', lang: 'English',
          desc: 'An illustrated listing film for a two-bedroom harbour-view apartment: the skyline reveal, an animated floor plan, interior highlights, a walkable-distance map, amenities and a viewing call-to-action. A concept piece.',
          src: 'videos/harbour-view-unit-2304.mp4', preview: 'videos/previews/harbour-view-unit-2304.mp4', poster: 'images/motion/harbour-view-unit-2304.jpg',
          ratio: 16 / 9,
        },
      ],
    ],
  },
  {
    id: 'social-ads',
    title: 'Social ads',
    note: 'Vertical and feed ads made for Instagram, Reels and TikTok, in English and Arabic.',
    rows: [
      [
        {
          title: 'Print shop, vertical profile ad',
          kind: 'Social ad', length: '35 sec', format: '9:16', lang: 'English',
          desc: 'A vertical ad that plays like an app: upload your artwork, pick a product, get a quote. Built for Instagram Reels and TikTok.',
          src: 'videos/dixie-profile-ad-vertical.mp4', preview: 'videos/previews/dixie-profile-ad-vertical.mp4', poster: 'images/motion/dixie-profile-ad-vertical.jpg',
          ratio: 9 / 16,
        },
        {
          title: 'Print shop, services reel',
          kind: 'Social ad', length: '18 sec', format: '9:16', lang: 'English and Arabic',
          desc: 'A fast vertical reel: the services slide past one by one, the shop feed shows more of the work, and it closes on a WhatsApp call to action.',
          src: 'videos/dixie-reel-vertical.mp4', preview: 'videos/previews/dixie-reel-vertical.mp4', poster: 'images/motion/dixie-reel-vertical.jpg',
          ratio: 9 / 16,
        },
        {
          title: 'Print shop, neon city feed ad',
          kind: 'Social ad', length: '10 sec', format: '4:5', lang: 'English and Arabic',
          desc: 'A neon night-city feed ad: the headline lights up, the service list builds in and the contact line lands, with an Arabic tagline at the foot.',
          src: 'videos/dixie-neon-feed-ad.mp4', preview: 'videos/previews/dixie-neon-feed-ad.mp4', poster: 'images/motion/dixie-neon-feed-ad.jpg',
          ratio: 4 / 5,
        },
      ],
    ],
  },
];
const reelFilm = {
  title: 'Showreel', kind: 'Showreel', length: '35 sec', format: '16:9',
  desc: 'A 35-second cut of the motion work on this page.',
  src: 'videos/showreel.mp4', poster: 'images/motion/showreel.jpg',
};

// ---------- helpers ----------
const $ = (s, el = document) => el.querySelector(s);
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const saveData = navigator.connection && navigator.connection.saveData;
const canHover = matchMedia('(hover: hover) and (pointer: fine)').matches;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const kindLabel = { branding: 'Branding', social: 'Social media', print: 'Print', packaging: 'Packaging', web: 'Web', digital: 'Digital' };
const allFilms = filmGroups.flatMap(g => g.rows.flat());
const MAX_ROW_H = 520; // px: no row of videos gets taller than this

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

// ---------- local time in Abu Dhabi, so visitors know when a reply is likely ----------
(function clock() {
  const el = $('#clock');
  if (!el || !window.Intl) return;
  const fmt = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Dubai' });
  const tick = () => { el.textContent = fmt.format(new Date()); };
  tick();
  el.closest('.clock-item').hidden = false;
  setInterval(tick, 30000);
})();

// ---------- previews: muted loops that play on hover, focus or when in view ----------
function playPreview(el) {
  const v = el.querySelector('video');
  if (!v || reduceMotion || saveData) return;
  if (!v.src) v.src = v.dataset.src;
  v.play().then(() => el.classList.add('is-playing')).catch(() => {});
}
function stopPreview(el) {
  const v = el.querySelector('video');
  if (!v) return;
  v.pause();
  el.classList.remove('is-playing');
}
function watchInView(els, threshold) {
  const io = new IntersectionObserver(entries => entries.forEach(e =>
    e.isIntersecting ? playPreview(e.target) : stopPreview(e.target)), { threshold });
  els.forEach(el => io.observe(el));
}

// ---------- entrances: the parts of each section rise in once, staggered ----------
const revealIO = 'IntersectionObserver' in window && !reduceMotion
  ? new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-in'); revealIO.unobserve(e.target); }
    }), { rootMargin: '0px 0px -8% 0px' })
  : null;
function reveal(els) {
  [...els].forEach((el, i) => {
    if (!revealIO) return el.classList.add('is-in');
    el.classList.add('rise');
    el.style.setProperty('--d', `${(i % 6) * 75}ms`);
    revealIO.observe(el);
  });
}

// ---------- work grid: every piece shown whole, at its own shape ----------
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
      <source type="image/webp" srcset="${base}-480.webp 480w, ${base}-800.webp 800w" sizes="(max-width: 700px) 92vw, 30vw">
      <img src="${base}-800.jpg" alt="" width="${p.w}" height="${p.h}" loading="lazy" decoding="async" onerror="${fallback}">
    </picture>`;
}

function renderWork(filter = 'all') {
  visibleProjects = projects.filter(p => filter === 'all' || p.category === filter || (p.categories || []).includes(filter));
  grid.innerHTML = visibleProjects.map((p, i) => `
    <article class="piece" data-i="${i}">
      <div class="piece-sheet">${gridImage(p)}</div>
      <div class="piece-meta">
        <h3><button class="piece-open" aria-haspopup="dialog">${esc(p.short || p.title)}</button></h3>
        <span class="piece-kind">${esc(p.section)}</span>
      </div>
    </article>`).join('');
  $('#workEmpty').hidden = visibleProjects.length > 0; // e.g. Web, until web pieces are added
}
grid.addEventListener('click', e => { const el = e.target.closest('.piece'); if (el) openArt(+el.dataset.i); });
document.querySelectorAll('.filters button').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.filters button').forEach(b => { b.classList.toggle('is-active', b === btn); b.setAttribute('aria-pressed', b === btn); });
  renderWork(btn.dataset.filter);
}));

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
  reelToggle.textContent = play ? 'Pause' : 'Play';
  reelToggle.setAttribute('aria-pressed', !play);
}
reelToggle.addEventListener('click', () => setReel(reel.paused));
if (reduceMotion || saveData) {
  setReel(false);
} else {
  new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && reelToggle.getAttribute('aria-pressed') === 'false') reel.play().catch(() => setReel(false));
    else if (!entry.isIntersecting) reel.pause();
  }, { threshold: 0.25 }).observe(reel);
}

// ---------- film groups ----------
const filmsEl = $('#films');
$('#motionJump').innerHTML = filmGroups.map(g =>
  `<a href="#${g.id}">${esc(g.title)} <span>${g.rows.flat().length}</span></a>`).join('');
filmsEl.innerHTML = filmGroups.map(g => `
  <section class="film-group${g.rows.flat().length === 1 ? ' is-single' : ''}" id="${g.id}" aria-labelledby="${g.id}-title">
    <div class="group-head">
      <h3 id="${g.id}-title">${esc(g.title)}</h3>
      <p>${esc(g.note)}</p>
    </div>
    ${g.rows.map(row => {
      const sum = row.reduce((t, f) => t + f.ratio, 0);
      return `<div class="film-row" style="max-width:${Math.round(sum * MAX_ROW_H)}px">${row.map(f => `
      <article class="film${f.ratio < 1 ? ' is-tall' : ''}" style="--r:${f.ratio.toFixed(4)}" data-i="${allFilms.indexOf(f)}">
        <div class="film-media">
          <img src="${f.poster}" alt="" loading="lazy" decoding="async">
          ${f.preview ? `<video muted loop playsinline preload="none" poster="${f.poster}" data-src="${f.preview}" aria-hidden="true"></video>` : ''}
        </div>
        <div class="film-info">
          <h4><button class="film-open" aria-haspopup="dialog">${esc(f.title)}</button></h4>
          <p class="film-meta">${esc(f.length)}, ${esc(f.format)}, ${esc(f.lang)}</p>
        </div>
      </article>`).join('')}</div>`;
    }).join('')}
  </section>`).join('');

const cards = [...filmsEl.querySelectorAll('.film')];
if (canHover) {
  cards.forEach(c => {
    c.addEventListener('pointerenter', () => playPreview(c));
    c.addEventListener('pointerleave', () => stopPreview(c));
    c.addEventListener('focusin', () => playPreview(c));
    c.addEventListener('focusout', () => stopPreview(c));
  });
} else {
  watchInView(cards, 0.7); // touch screens: play the previews that are mostly in view
}

// ---------- film player ----------
const filmDialog = $('#filmDialog');
const stage = $('#film-stage');
function openFilm(f) {
  cards.forEach(stopPreview);
  if (!reel.paused) reel.pause();
  stage.innerHTML = `<video src="${f.src}" poster="${f.poster}" controls autoplay playsinline></video>`;
  $('#film-kind').textContent = `${f.kind}, ${f.length}, ${f.format}`;
  $('#film-title').textContent = f.title;
  $('#film-desc').textContent = f.desc;
  filmDialog.showModal();
  lockPage();
}
filmsEl.addEventListener('click', e => {
  const card = e.target.closest('.film');
  if (card) openFilm(allFilms[+card.dataset.i]);
});
$('#reelSound').addEventListener('click', () => openFilm(reelFilm));
filmDialog.addEventListener('close', () => {
  if (filmDialog.open) return; // a new film was opened right after closing
  stage.innerHTML = '';
  if (!reduceMotion && !saveData && reelToggle.getAttribute('aria-pressed') === 'false') reel.play().catch(() => {});
});

renderWork();
reveal(document.querySelectorAll('.hero-copy, .hero-avatar, .note, .sticky, .motion-reel, .section-head > *, .group-head > *, .film, .about-copy > *, .services li, .press-copy > *, .spec, .contact-copy > *, .bcard'));

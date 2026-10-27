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

const grid = document.querySelector('#portfolio');
let activeFilter = 'all';
let currentModalIndex = 0;
let currentFilteredProjects = [...projects];

function render(filter = 'all') {
  activeFilter = filter;
  const isMotion = filter === 'motion';
  galleryEl.hidden = isMotion;
  if (motionEl) motionEl.hidden = !isMotion;
  if (!isMotion) stopAllVideos();
  grid.innerHTML = '';
  currentFilteredProjects = projects.filter(
    p => filter === 'all' || p.category === filter || (p.categories && p.categories.includes(filter))
  );

  currentFilteredProjects.forEach((p, index) => {
    const el = document.createElement('article');
    el.className = 'project reveal';
    el.dataset.category = p.category;
    el.setAttribute('tabindex', '0');
    el.setAttribute('role', 'button');
    el.setAttribute('aria-label', `View ${p.title}`);

    el.innerHTML = `
      <div class="project-media">
        <img src="${p.img}" alt="${p.title}" width="${p.w}" height="${p.h}" loading="lazy" />
        <span class="project-num">${p.num}</span>
        <span class="project-expand">EXPAND ↗</span>
      </div>
      <div class="project-meta">
        <div class="project-meta-details">
          <h3>${p.title}</h3>
          <span class="project-section-tag">${p.section}</span>
        </div>
        <span class="cat-badge">${p.category}</span>
      </div>`;

    el.addEventListener('click', () => openModal(index));
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(index);
      }
    });

    grid.appendChild(el);
  });
  observe();
}

document.querySelectorAll('.filters button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filters .active')?.classList.remove('active');
    btn.classList.add('active');
    render(btn.dataset.filter);
  });
});

function observe() {
  const io = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08 }
  );
  document.querySelectorAll('.reveal').forEach(e => io.observe(e));
}

// ---------- Motion / video carousel ----------
// TO ADD A VIDEO: copy one block inside `videos` and fill it in.
//   • MP4 file  -> put the file in /videos and set  src: 'videos/your-file.mp4'
//                  (optional poster: 'images/your-thumbnail.jpg')
//   • YouTube   -> set  youtube: 'https://youtu.be/XXXXXXXXXXX'  (thumbnail is automatic)
//   • ratio: 9 / 16 for vertical videos, 16 / 9 for landscape, 1 for square.
const videos = [
 {
    title: 'Al-Rashid-Brand',
    desc: 'Al-Rashid-Brand',
    src: 'videos/AlRashid Ad.mp4',
    poster: 'images/AlRashid_Thumbnail.png',
    ratio: 16 / 9,
  },
  {
    title: 'Dixie Paper Trading & Printing Services',
    desc: 'Dixie Printing Promo',
    src: 'videos/Dixie_Promo_60s_EN_AR.mp4',
    poster: 'images/Dixie_Promo_Thumbnail.png',
    ratio: 16 / 9,
  },
  {
    title: 'Dixie Paper Trading — Profile Ad',
    desc: 'Vertical 35-second profile ad for Dixie Paper Trading & Printing Services.',
    src: 'videos/dixie_profile_ad.mp4',
    poster: 'images/video-01.jpg',
    ratio: 9 / 16,
  },
   {
    title: 'Dixie Paper Trading — Logo',
    desc: 'Logo Animation',
    src: 'videos/Dixie Paper Trading Logo.mp4',
    poster: 'images/Video-02.jpg',
    ratio: 9 / 16,
   },

  {
    title: 'Dixie Paper Trading — Logo',
    desc: 'Logo Animation',
    src: 'videos/Dixie_Logo_Print_Canada_Vertical.mp4',
    poster: 'images/Video-02.jpg',
    ratio: 9 / 16,
   },
  {
    title: 'Haroon_Andrade_Brand',
    desc: 'Logo Animation',
    src: 'videos/Haroon_Andrade_Brand_Intro.mp4',
    poster: '',
    ratio: 16 / 9,
   },
  {
    title: 'al-rashid-brand',
    desc: 'Logo Animation',
    src: 'videos/al-rashid-brand-intro.mp4',
    poster: '',
    ratio: 16 /9,
   },
  // {
  //   title: 'Your video title',
  //   desc: 'One-line description.',
  //   youtube: 'https://youtu.be/XXXXXXXXXXX',
  //   ratio: 16 / 9,
  // },
];

const motionEl = document.querySelector('#motion');
const mTrack = document.querySelector('#motionTrack');
const mDots = document.querySelector('#motionDots');
const mPrev = document.querySelector('.motion-nav.prev');
const mNext = document.querySelector('.motion-nav.next');
let mActive = 0;
const mSlides = [];

function ytId(v) {
  const m = String(v).match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
  return m ? m[1] : String(v).trim();
}

videos.forEach((v, i) => {
  const id = v.youtube ? ytId(v.youtube) : null;
  const poster = v.poster || (id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : '');
  const idle = `<img src="${poster}" alt="${v.title}" /><button class="motion-play" aria-label="Play ${v.title}">&#9654;</button>`;
  const s = document.createElement('article');
  s.className = 'motion-slide';
  s.innerHTML = `<div class="motion-frame" style="--r:${v.ratio || 16 / 9}">${idle}</div>
    <div class="motion-info"><span class="project-num">${String(i + 1).padStart(2, '0')}</span><h3>${v.title}</h3><p>${v.desc || ''}</p></div>`;
  const frame = s.querySelector('.motion-frame');
  s.stop = () => { frame.innerHTML = idle; };
  frame.addEventListener('click', e => {
    if (frame.querySelector('video, iframe')) return;
    frame.innerHTML = id
      ? `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen title="${v.title}"></iframe>`
      : `<video src="${v.src}" poster="${poster}" controls autoplay playsinline></video>`;
  });
  mTrack.appendChild(s);
  mSlides.push(s);
  const dot = document.createElement('button');
  dot.className = 'motion-dot' + (i === 0 ? ' active' : '');
  dot.setAttribute('aria-label', `Go to video ${i + 1}`);
  dot.addEventListener('click', () => mTrack.scrollTo({ left: i * mTrack.clientWidth, behavior: 'smooth' }));
  mDots.appendChild(dot);
});

function stopAllVideos() { mSlides.forEach(s => s.stop()); }
function goTo(dir) { mTrack.scrollBy({ left: dir * mTrack.clientWidth, behavior: 'smooth' }); }
mPrev?.addEventListener('click', () => goTo(-1));
mNext?.addEventListener('click', () => goTo(1));
if (videos.length < 2) { mPrev?.remove(); mNext?.remove(); mDots.remove(); }

let mRaf;
mTrack?.addEventListener('scroll', () => {
  cancelAnimationFrame(mRaf);
  mRaf = requestAnimationFrame(() => {
    const idx = Math.round(mTrack.scrollLeft / mTrack.clientWidth);
    if (idx !== mActive) {
      mSlides[mActive]?.stop();
      mActive = idx;
      mDots.querySelectorAll('.motion-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
    }
  });
});

// Lightbox Modal Logic
const modal = document.querySelector('#artwork-modal');
const modalImg = document.querySelector('#modal-img');
const modalNum = document.querySelector('#modal-num');
const modalCategory = document.querySelector('#modal-category');
const modalTitle = document.querySelector('#modal-title');
const modalDesc = document.querySelector('#modal-desc');
const modalTools = document.querySelector('#modal-tools');
const modalScope = document.querySelector('#modal-scope');
const modalLink = document.querySelector('#modal-link');
const modalCloseBtn = document.querySelector('.modal-close');
const modalBackdrop = document.querySelector('.modal-backdrop');
const modalPrevBtn = document.querySelector('.modal-nav.prev');
const modalNextBtn = document.querySelector('.modal-nav.next');

function openModal(index) {
  if (!modal || index < 0 || index >= currentFilteredProjects.length) return;
  currentModalIndex = index;
  updateModalContent();
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function updateModalContent() {
  const item = currentFilteredProjects[currentModalIndex];
  if (!item) return;

  modalImg.src = item.img;
  modalImg.alt = item.title;
  modalNum.textContent = item.num;
  modalCategory.textContent = item.section;
  modalTitle.textContent = item.title;
  modalDesc.textContent = item.desc;
  modalTools.textContent = item.tools;
  modalScope.textContent = item.scope;
  modalLink.href = item.link;
}

function prevModal() {
  currentModalIndex = (currentModalIndex - 1 + currentFilteredProjects.length) % currentFilteredProjects.length;
  updateModalContent();
}

function nextModal() {
  currentModalIndex = (currentModalIndex + 1) % currentFilteredProjects.length;
  updateModalContent();
}

if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
if (modalPrevBtn) modalPrevBtn.addEventListener('click', prevModal);
if (modalNextBtn) modalNextBtn.addEventListener('click', nextModal);

window.addEventListener('keydown', e => {
  if (!modal || !modal.classList.contains('is-open')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowLeft') prevModal();
  if (e.key === 'ArrowRight') nextModal();
});

// Cursor Glow
const glow = document.querySelector('.cursor-glow');
if (glow) {
  window.addEventListener('pointermove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}

const galleryEl = grid.parentElement;

// Initial render
render();
observe();

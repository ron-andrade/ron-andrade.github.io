const projects = [
  {
    id: 1,
    num: '01',
    title: 'Andrade Monogram & Geometric Mark',
    category: 'branding',
    categories: ['branding', 'digital'],
    section: "Logo Creation's",
    img: 'images/project-01.svg',
    desc: 'Golden-ratio geometric identity monogram and brandmark system crafted with precision vector construction, hexagonal framing, and grid-aligned angles.',
    tools: 'Adobe Illustrator · Golden Ratio Grid',
    scope: 'Approved Brand Mark Sample',
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 2,
    num: '02',
    title: 'Executive Matte & Foil Business Cards',
    category: 'print',
    categories: ['print', 'branding'],
    section: "Business Card's",
    img: 'images/project-02.svg',
    desc: '600gsm duplexed cotton stationery with premium deep charcoal matte surface, blind debossing, and metallic gold foil stamping.',
    tools: 'Adobe InDesign · Pre-Press CMYK',
    scope: 'Corporate Stationery Sample',
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 3,
    num: '03',
    title: "L'Atelier Culinaire Menu Design",
    category: 'print',
    categories: ['print'],
    section: "Menu's",
    img: 'images/project-03.svg',
    desc: 'Seasonal craft cocktail and culinary dining menu layout with typographic hierarchy, structured grid, and tactile presentation on bespoke paper.',
    tools: 'Adobe InDesign · Typography Grid',
    scope: 'Hospitality & Dining Sample',
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 4,
    num: '04',
    title: 'Botanica Pure Skincare Packaging',
    category: 'packaging',
    categories: ['packaging', 'print'],
    section: 'Package',
    img: 'images/project-04.svg',
    desc: 'Luxury folding carton box and dropper bottle label packaging design with minimalist botanical emblem and regulatory specs.',
    tools: 'Adobe Illustrator · 3D Dielines',
    scope: 'Cosmetics Packaging Sample',
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 5,
    num: '05',
    title: 'Apex Advisory Strategic Growth Carousel',
    category: 'social',
    categories: ['social', 'digital'],
    section: "Service's Social Media Content",
    img: 'images/project-05.svg',
    desc: 'Data-driven advisory Instagram carousel slide deck designed for maximum audience engagement and high executive conversion.',
    tools: 'Adobe Photoshop · Figma',
    scope: 'Corporate Social Media Campaign',
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 6,
    num: '06',
    title: 'Lumina Architecture Brand System',
    category: 'branding',
    categories: ['branding'],
    section: "Logo Creation's",
    img: 'images/project-06.svg',
    desc: 'Full corporate visual identity manual including logo geometry, terracotta/obsidian color palette swatches, and typography rules.',
    tools: 'Adobe Illustrator · Brand Styleguide',
    scope: 'Architecture Firm Brand Identity',
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 7,
    num: '07',
    title: 'Studio Creative Hiring Poster',
    category: 'print',
    categories: ['print'],
    section: "Hiring's Poster",
    img: 'images/project-07.svg',
    desc: 'High-contrast Swiss typographic recruitment poster designed for physical studio display and digital agency hiring campaigns.',
    tools: 'Adobe InDesign · Illustrator',
    scope: 'Agency Recruitment Collateral',
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 8,
    num: '08',
    title: 'Velvet Glow Aesthetics Campaign',
    category: 'social',
    categories: ['social', 'digital'],
    section: "Beauty Social Media Content's",
    img: 'images/project-08.svg',
    desc: 'Editorial cosmetic treatment announcement social ad featuring warm radiant tones, botanical curves, and promotional CTA.',
    tools: 'Adobe Photoshop · Social Ads',
    scope: 'Aesthetic Clinic Campaign',
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 9,
    num: '09',
    title: 'Origin Roast Specialty Coffee Pouch',
    category: 'packaging',
    categories: ['packaging', 'print'],
    section: 'Package',
    img: 'images/project-09.svg',
    desc: 'Matte standup pouch packaging with custom tasting notes badge, elevation specs, and roast profile label design.',
    tools: 'Adobe Illustrator · Packaging',
    scope: 'Specialty Coffee Brand Sample',
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 10,
    num: '10',
    title: 'Sonic-X Pro Noise Cancelling Launch',
    category: 'digital',
    categories: ['digital', 'social'],
    section: "Product Social Media Content's",
    img: 'images/project-10.svg',
    desc: 'High-tech audio product launch social media ad with glowing cyan lighting accents, audio waveform graphics, and specs.',
    tools: 'Adobe Photoshop · Digital Art',
    scope: 'Hardware Product Launch',
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
  {
    id: 11,
    num: '11',
    title: 'Kinetic Motion Showcase & Reel Promo',
    category: 'motion',
    categories: ['motion', 'digital'],
    section: 'Video Creation',
    img: 'images/project-11.svg',
    desc: 'Kinetic typography title sequence keyframes and motion reel preview with interactive video player UI mockup.',
    tools: 'Adobe After Effects · Premiere Pro',
    scope: 'Video Creation & Motion Showcase',
    link: 'https://sites.google.com/view/andrade-ron/videos',
  },
  {
    id: 12,
    num: '12',
    title: 'Echo Electronic Music Festival Poster',
    category: 'print',
    categories: ['print'],
    section: "Event's Poster",
    img: 'images/project-12.svg',
    desc: 'Screenprint aesthetic event poster showcasing dynamic sound wave gradient contours, headliner lineup hierarchy, and ticket info.',
    tools: 'Adobe Illustrator · Screenprint Prep',
    scope: 'Cultural Festival Promotion',
    link: 'https://sites.google.com/view/andrade-ron/samples',
  },
];

const grid = document.querySelector('#portfolio');
let activeFilter = 'all';
let currentModalIndex = 0;
let currentFilteredProjects = [...projects];

function render(filter = 'all') {
  activeFilter = filter;
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
        <img src="${p.img}" alt="${p.title}" loading="lazy" />
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

// Initial render
render();
observe();

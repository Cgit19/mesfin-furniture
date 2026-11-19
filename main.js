/**
 * Mesfin Furniture — Main JavaScript
 * Handles: language switching, navigation, collections filtering,
 * portfolio rendering, lightbox, form submission, scroll animations.
 */

'use strict';

/* ═══════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════ */
let currentLang = localStorage.getItem('mf_lang') || 'en';
let currentFilter = 'all';
let lightboxImages = [];
let lightboxIndex = 0;

/* ═══════════════════════════════════════════════
   DOM READY
═══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  applyConfig();
  renderCollections();
  renderPortfolio();
  applyLanguage(currentLang);
  initNav();
  initLangSwitcher();
  initFilter();
  initLightbox();
  initForm();
  initScrollAnimations();
  initSmoothScroll();
});

/* ═══════════════════════════════════════════════
   CONFIG APPLICATION
   Applies phone/whatsapp from data.js BUSINESS_CONFIG
═══════════════════════════════════════════════ */
function applyConfig() {
  // Phone link (Contact section)
  const phoneEl = document.getElementById('phoneLink');
  if (phoneEl) {
    phoneEl.href = 'tel:' + BUSINESS_CONFIG.phone;
    phoneEl.textContent = BUSINESS_CONFIG.phone;
  }

  // Phone link (Footer)
  const footerPhoneEl = document.getElementById('footerPhoneLink');
  if (footerPhoneEl) {
    footerPhoneEl.href = 'tel:' + BUSINESS_CONFIG.phone;
    footerPhoneEl.textContent = BUSINESS_CONFIG.phone;
    if (footerPhoneEl.dataset) {
      footerPhoneEl.dataset.en = BUSINESS_CONFIG.phone;
      footerPhoneEl.dataset.am = BUSINESS_CONFIG.phone;
    }
  }

  // WhatsApp button
  const waBtn = document.getElementById('whatsappBtn');
  if (waBtn) {
    const msg = encodeURIComponent('Hello, I am interested in your furniture. Please let me know more.');
    waBtn.href = `https://wa.me/${BUSINESS_CONFIG.whatsapp}?text=${msg}`;
  }
}

/* ═══════════════════════════════════════════════
   RENDER COLLECTIONS
═══════════════════════════════════════════════ */
function renderCollections() {
  const grid = document.getElementById('collectionsGrid');
  if (!grid) return;

  grid.innerHTML = COLLECTIONS.map(item => `
    <article class="product-card fade-up" data-category="${item.category}" data-id="${item.id}">
      <div class="product-img-wrap">
        <img
          src="${item.image}"
          alt="${item.alt}"
          loading="lazy"
        />
      </div>
      <div class="product-body">
        <p class="product-category-tag"
           data-en="${getCategoryLabel(item.category, 'en')}"
           data-am="${getCategoryLabel(item.category, 'am')}">
          ${getCategoryLabel(item.category, 'en')}
        </p>
        <h3 class="product-title"
            data-en="${item.titleEn}"
            data-am="${item.titleAm}">
          ${currentLang === 'am' ? item.titleAm : item.titleEn}
        </h3>
        <p class="product-desc"
           data-en="${item.descEn}"
           data-am="${item.descAm}">
          ${currentLang === 'am' ? item.descAm : item.descEn}
        </p>
        <a href="#contact" class="product-link"
           data-en="Inquire Now →"
           data-am="አሁን ይጠይቁ →">
          ${currentLang === 'am' ? 'አሁን ይጠይቁ →' : 'Inquire Now →'}
        </a>
      </div>
    </article>
  `).join('');

  // Trigger animations for newly rendered cards
  setTimeout(observeElements, 100);
}

function getCategoryLabel(cat, lang) {
  const map = {
    bedroom: { en: 'Bedroom', am: 'መኝታ ቤት' },
    living:  { en: 'Living Room', am: 'መቀመጫ ክፍል' },
    dining:  { en: 'Dining & Kitchen', am: 'መመገቢያ' },
    office:  { en: 'Office', am: 'ቢሮ' },
    other:   { en: 'Other', am: 'ሌሎች' },
  };
  return (map[cat] && map[cat][lang]) || cat;
}

/* ═══════════════════════════════════════════════
   RENDER PORTFOLIO
═══════════════════════════════════════════════ */
function renderPortfolio() {
  const grid = document.getElementById('portfolioGrid');
  if (!grid) return;

  // Build the lightbox image list
  lightboxImages = PORTFOLIO.map(p => ({
    src: p.image,
    alt: p.alt,
    captionEn: p.captionEn,
    captionAm: p.captionAm
  }));

  grid.innerHTML = PORTFOLIO.map((item, idx) => `
    <div class="portfolio-item fade-up"
         tabindex="0"
         role="button"
         aria-label="View project: ${item.captionEn}"
         data-index="${idx}">
      <img
        src="${item.image}"
        alt="${item.alt}"
        loading="lazy"
      />
      <div class="portfolio-caption"
           data-en="${item.captionEn}"
           data-am="${item.captionAm}">
        ${currentLang === 'am' ? item.captionAm : item.captionEn}
      </div>
    </div>
  `).join('');

  // Click / keyboard open lightbox
  grid.querySelectorAll('.portfolio-item').forEach(el => {
    el.addEventListener('click', () => openLightbox(parseInt(el.dataset.index)));
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openLightbox(parseInt(el.dataset.index));
    });
  });

  setTimeout(observeElements, 100);
}

/* ═══════════════════════════════════════════════
   LANGUAGE SYSTEM
═══════════════════════════════════════════════ */
function initLangSwitcher() {
  const btn = document.getElementById('langBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'am' : 'en';
    localStorage.setItem('mf_lang', currentLang);
    applyLanguage(currentLang);
  });
}

function applyLanguage(lang) {
  currentLang = lang;

  // Body class for font family
  document.body.classList.toggle('lang-am', lang === 'am');
  document.documentElement.lang = lang === 'am' ? 'am' : 'en';
  document.documentElement.dir = 'ltr';

  // Switcher label
  const labelEn = document.querySelector('.lang-label-en');
  const labelAm = document.querySelector('.lang-label-am');
  if (labelEn) labelEn.style.display = lang === 'en' ? 'inline' : 'none';
  if (labelAm) labelAm.style.display = lang === 'am' ? 'inline' : 'none';

  // Translate all [data-en] / [data-am] elements
  document.querySelectorAll('[data-en]').forEach(el => {
    const text = lang === 'am' ? el.dataset.am : el.dataset.en;
    if (!text) return;

    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      const ph = lang === 'am' ? el.dataset.placeholderAm : el.dataset.placeholderEn;
      if (ph) el.placeholder = ph;
    } else if (el.tagName === 'OPTION') {
      el.textContent = text;
    } else {
      el.innerHTML = text;
    }
  });

  // Translate select options separately
  document.querySelectorAll('select option[data-en]').forEach(opt => {
    opt.textContent = lang === 'am' ? opt.dataset.am : opt.dataset.en;
  });

  // Translate portfolio captions (live re-render)
  document.querySelectorAll('.portfolio-caption[data-en]').forEach(el => {
    el.textContent = lang === 'am' ? el.dataset.am : el.dataset.en;
  });
}

/* ═══════════════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════════════ */
function initNav() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  // Scroll state
  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 48);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    navLinks.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  // Close on link click (mobile)
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ═══════════════════════════════════════════════
   COLLECTION FILTERING
═══════════════════════════════════════════════ */
function initFilter() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentFilter = btn.dataset.filter;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterCollections(currentFilter);
    });
  });
}

function filterCollections(filter) {
  document.querySelectorAll('.product-card').forEach(card => {
    const match = filter === 'all' || card.dataset.category === filter;
    card.classList.toggle('hidden', !match);
  });
}

/* ═══════════════════════════════════════════════
   LIGHTBOX
═══════════════════════════════════════════════ */
function initLightbox() {
  const backdrop = document.getElementById('lightboxBackdrop');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn  = document.getElementById('lightboxPrev');
  const nextBtn  = document.getElementById('lightboxNext');

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (backdrop) backdrop.addEventListener('click', closeLightbox);
  if (prevBtn)  prevBtn.addEventListener('click',  () => navigateLightbox(-1));
  if (nextBtn)  nextBtn.addEventListener('click',  () => navigateLightbox(1));

  document.addEventListener('keydown', e => {
    const lb = document.getElementById('lightbox');
    if (!lb || !lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft')  navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
}

function openLightbox(index) {
  lightboxIndex = index;
  updateLightboxImage();
  document.getElementById('lightbox').classList.add('open');
  document.getElementById('lightboxBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.getElementById('lightboxBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

function navigateLightbox(dir) {
  lightboxIndex = (lightboxIndex + dir + lightboxImages.length) % lightboxImages.length;
  updateLightboxImage();
}

function updateLightboxImage() {
  const item = lightboxImages[lightboxIndex];
  if (!item) return;
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCaption');
  img.src = item.src;
  img.alt = item.alt;
  cap.textContent = currentLang === 'am' ? item.captionAm : item.captionEn;
}

/* ═══════════════════════════════════════════════
   FORM → WHATSAPP
═══════════════════════════════════════════════ */
function initForm() {
  const form = document.getElementById('inquiryForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const name     = form.clientName.value.trim();
    const phone    = form.clientPhone.value.trim();
    const category = form.furnitureCategory.value;
    const desc     = form.designDesc.value.trim();
    const budget   = form.budget.value.trim();

    if (!name || !phone || !category || !desc) {
      const msg = currentLang === 'am'
        ? 'እባክዎ ሁሉንም አስፈላጊ መስኮች ይሙሉ።'
        : 'Please fill in all required fields.';
      alert(msg);
      return;
    }

    const catEl = form.furnitureCategory.options[form.furnitureCategory.selectedIndex];
    const catLabel = catEl ? catEl.textContent : category;

    let message = `Hello! I would like to request custom furniture.\n\n`;
    message += `*Name:* ${name}\n`;
    message += `*Phone:* ${phone}\n`;
    message += `*Furniture Type:* ${catLabel}\n`;
    message += `*Description:* ${desc}\n`;
    if (budget) message += `*Budget:* ${budget}\n`;
    message += `\n_Sent via Mesfin Furniture website_`;

    const url = `https://wa.me/${BUSINESS_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
}

/* ═══════════════════════════════════════════════
   SCROLL ANIMATIONS (Intersection Observer)
═══════════════════════════════════════════════ */
function initScrollAnimations() {
  observeElements();
}

function observeElements() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger children within a grid
          const delay = entry.target.closest('.products-grid, .portfolio-grid')
            ? [...entry.target.parentElement.children].indexOf(entry.target) * 80
            : 0;
          setTimeout(() => entry.target.classList.add('visible'), delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
  );

  document.querySelectorAll('.fade-up:not(.visible)').forEach(el => observer.observe(el));
}

/* ═══════════════════════════════════════════════
   SMOOTH SCROLL (for older browsers)
═══════════════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = document.getElementById('navbar').offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

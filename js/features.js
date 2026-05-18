/**
 * Enhanced features: filters, modal, FAQ, stats, wishlist panel, dark mode, scroll FX
 */

(function () {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  function showToast(msg) {
    if (typeof window.showToast === 'function') window.showToast(msg);
    else {
      const t = $('#toast');
      if (t) { t.textContent = msg; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 3000); }
    }
  }

  /* Scroll progress */
  function initScrollProgress() {
    const bar = $('#scrollProgress');
    if (!bar) return;
    window.addEventListener('scroll', () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = h > 0 ? (window.scrollY / h) * 100 + '%' : '0%';
    }, { passive: true });
  }

  /* Reveal on scroll */
  function initReveal() {
    const els = $$('.reveal');
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach((el) => io.observe(el));
  }

  /* Animated stats */
  function initStats() {
    $$('[data-count]').forEach((el) => {
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1800;
      const io = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        function tick(now) {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.floor(target * ease).toLocaleString() + suffix;
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      }, { threshold: 0.5 });
      io.observe(el);
    });
  }

  function updateToursCount() {
    const carousel = $('#toursCarousel');
    const countEl = $('#toursCount');
    if (!carousel || !countEl) return;
    const visible = $$('.tour-card', carousel).filter((c) => c.style.display !== 'none').length;
    countEl.textContent = visible + (visible === 1 ? ' tour' : ' tours');
  }

  /* Tour filters + sort */
  function initTourFilters() {
    const filters = $('#tourFilters');
    const carousel = $('#toursCarousel');
    const sort = $('#tourSort');
    if (!filters || !carousel) return;

    function applyFilter(f) {
      $$('.tour-card', carousel).forEach((card) => {
        const region = card.dataset.region || 'europe';
        const onSale = !!card.querySelector('.tour-badge--sale');
        const show = f === 'all' || (f === 'europe' && region === 'europe') || (f === 'sale' && onSale);
        card.style.display = show ? '' : 'none';
      });
      updateToursCount();
    }

    filters.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-filter]');
      if (!btn) return;
      $$('[data-filter]', filters).forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilter(btn.dataset.filter);
      showToast(btn.dataset.filter === 'all' ? 'Showing all tours' : 'Filtered: ' + btn.textContent.trim());
    });

    if (sort && typeof TOURS !== 'undefined') {
      sort.addEventListener('change', () => {
        const cards = Array.from($$('.tour-card', carousel));
        const val = sort.value;
        cards.sort((a, b) => {
          const ta = TOURS.find((t) => t.id === parseInt(a.dataset.id, 10));
          const tb = TOURS.find((t) => t.id === parseInt(b.dataset.id, 10));
          if (!ta || !tb) return 0;
          if (val === 'price-asc') return ta.priceNow - tb.priceNow;
          if (val === 'price-desc') return tb.priceNow - ta.priceNow;
          if (val === 'rating') return tb.rating - ta.rating;
          if (val === 'duration') return tb.days - ta.days;
          return tb.reviews - ta.reviews;
        });
        cards.forEach((c) => carousel.appendChild(c));
        carousel.scrollLeft = 0;
        showToast('Sorted: ' + sort.options[sort.selectedIndex].text);
      });
    }

    updateToursCount();
  }

  function initNavSpy() {
    const links = $$('[data-nav]');
    if (!links.length) return;
    const sections = links
      .map((a) => document.getElementById(a.getAttribute('href').slice(1)))
      .filter(Boolean);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          links.forEach((a) => a.classList.toggle('is-active', a.dataset.nav === id));
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
  }

  /* Tour modal */
  function initTourModal() {
    const modal = $('#tourModal');
    if (!modal || typeof TOURS === 'undefined') return;

    const title = $('#modalTitle');
    const img = $('#modalImage');
    const meta = $('#modalMeta');
    const desc = $('#modalDesc');
    const price = $('#modalPrice');
    const oldPrice = $('#modalOldPrice');

    function open(tour) {
      title.textContent = tour.title;
      img.src = tour.image;
      img.alt = tour.title;
      meta.textContent = tour.days + ' Days | ' + tour.countries + (tour.countries === 1 ? ' Country' : ' Countries');
      desc.textContent = tour.desc;
      oldPrice.textContent = typeof formatPrice === 'function' ? formatPrice(tour.priceOld) : '$ ' + tour.priceOld;
      price.textContent = 'Now ' + (typeof formatPrice === 'function' ? formatPrice(tour.priceNow) : '$ ' + tour.priceNow);
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
    }

    function close() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
    }

    document.addEventListener('click', (e) => {
      const viewBtn = e.target.closest('.tour-card__btn, .tour-card__image, .tour-card__title');
      if (viewBtn) {
        const card = viewBtn.closest('.tour-card');
        if (!card) return;
        e.preventDefault();
        const id = parseInt(card.dataset.id, 10);
        const tour = TOURS.find((t) => t.id === id);
        if (tour) open(tour);
      }
    });

    $$('[data-close-modal]', modal).forEach((el) => el.addEventListener('click', close));
    modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('open')) close(); });
    window.openTourModal = open;
  }

  /* Wishlist panel */
  function initWishlistPanel() {
    const panel = $('#wishlistPanel');
    const list = $('#wishlistList');
    const countEls = $$('[data-wishlist-count]');
    if (!panel || !list || typeof TOURS === 'undefined') return;

    function render() {
      const ids = typeof getWishlist === 'function' ? getWishlist() : JSON.parse(localStorage.getItem('expat_wishlist') || '[]');
      countEls.forEach((el) => { el.textContent = ids.length; el.classList.toggle('has-items', ids.length > 0); });
      if (!ids.length) {
        list.innerHTML = '<p class="wishlist-empty">No saved tours yet. Tap the heart on any tour!</p>';
        return;
      }
      list.innerHTML = ids.map((id) => {
        const t = TOURS.find((x) => x.id === id);
        if (!t) return '';
        return '<a href="#" class="wishlist-item" data-tour-id="' + t.id + '">' +
          '<img src="' + t.image + '" alt="" referrerpolicy="no-referrer">' +
          '<div><strong>' + t.title + '</strong><span>From $' + t.priceNow.toLocaleString() + '</span></div></a>';
      }).join('');
    }

    function closePanel() {
      panel.classList.remove('open');
      document.body.classList.remove('wishlist-open');
    }
    $('#wishlistBtn')?.addEventListener('click', () => {
      render();
      panel.classList.add('open');
      document.body.classList.add('wishlist-open');
    });
    $$('[data-close-wishlist]').forEach((el) => el.addEventListener('click', closePanel));
    list.addEventListener('click', (e) => {
      const item = e.target.closest('[data-tour-id]');
      if (item) {
        e.preventDefault();
        panel.classList.remove('open');
        document.body.classList.remove('wishlist-open');
        const tour = TOURS.find((t) => t.id === parseInt(item.dataset.tourId, 10));
        if (tour && window.openTourModal) {
          closePanel();
          window.openTourModal(tour);
        }
      }
    });

    document.addEventListener('click', () => setTimeout(render, 100));
    render();
  }

  /* FAQ accordion */
  function initFaq() {
    $$('.faq-item').forEach((item) => {
      const btn = $('.faq-item__question', item);
      btn?.addEventListener('click', () => {
        const open = item.classList.contains('open');
        $$('.faq-item.open').forEach((i) => i.classList.remove('open'));
        if (!open) item.classList.add('open');
      });
    });
  }

  /* Back to top */
  function initBackToTop() {
    const btn = $('#backToTop');
    if (!btn) return;
    window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 600), { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* Dark mode */
  function initTheme() {
    const toggle = $('#themeToggle');
    const saved = localStorage.getItem('expat_theme');
    if (saved === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    const icon = toggle?.querySelector('.material-icons-outlined');
    function syncThemeIcon() {
      const dark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (icon) icon.textContent = dark ? 'light_mode' : 'dark_mode';
    }
    syncThemeIcon();
    toggle?.addEventListener('click', () => {
      const dark = document.documentElement.getAttribute('data-theme') === 'dark';
      document.documentElement.setAttribute('data-theme', dark ? 'light' : 'dark');
      localStorage.setItem('expat_theme', dark ? 'light' : 'dark');
      syncThemeIcon();
      showToast(dark ? 'Light mode enabled' : 'Dark mode enabled');
    });
  }

  /* Destination chips */
  function initDestChips() {
    $$('.dest-chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        $$('.dest-chip').forEach((c) => c.classList.remove('active'));
        chip.classList.add('active');
        const dest = chip.dataset.dest;
        const input = $('#destinationInput');
        if (input) input.value = dest;
        showToast('Exploring ' + dest + ' tours');
        $('#tours')?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  /* Currency selector */
  function initCurrency() {
    const sel = $('#currencySelect');
    if (!sel) return;
    sel.addEventListener('change', () => showToast('Prices shown in ' + sel.value + ' (demo)'));
  }

  /* Chat widget expand */
  function initChat() {
    const fab = $('#chatFab');
    const widget = $('#chatWidget');
    if (!fab || !widget) return;
    fab.addEventListener('click', () => widget.classList.toggle('open'));
    $('[data-close-chat]')?.addEventListener('click', () => widget.classList.remove('open'));
  }

  document.addEventListener('DOMContentLoaded', () => {
    initScrollProgress();
    initReveal();
    initStats();
    initTourFilters();
    initNavSpy();
    initTourModal();
    initWishlistPanel();
    initFaq();
    initBackToTop();
    initTheme();
    initDestChips();
    initCurrency();
    initChat();
  });
})();

/**
 * Expat Explore Clone - Interactive features
 */

const TOUR_IMAGES = typeof IMAGES !== 'undefined' && IMAGES.tours
  ? IMAGES.tours
  : [
      'https://images.pexels.com/photos/1506900/pexels-photo-1506900.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/360142/pexels-photo-360142.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/773594/pexels-photo-773594.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/161815/pexels-photo-161815.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/1128440/pexels-photo-1128440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/1388031/pexels-photo-1388031.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/2363/pexels-photo-2363.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/1523901/pexels-photo-1523901.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    ];

const TOURS = [
  { id: 1, title: 'Best of Scandinavia & the Baltics', image: TOUR_IMAGES[0], days: 20, countries: 8, rating: 4.7, reviews: 28, region: 'europe', badge: 'best', desc: 'Spend 20 days adventuring through Scandinavia and the Baltic States. Experience the highlights of Norway, Sweden, Estonia, Poland and more!', priceOld: 4625, priceNow: 3855 },
  { id: 2, title: 'Helsinki to Warsaw', image: TOUR_IMAGES[1], days: 10, countries: 5, rating: 4.7, reviews: 37, region: 'europe', badge: '', desc: 'Explore Finland, Poland and the Baltic States over 10 days. Explore fascinating cities like Tallinn, Riga, and more!', priceOld: 1755, priceNow: 1545 },
  { id: 3, title: 'Nordic & Baltic Escape', image: TOUR_IMAGES[2], days: 11, countries: 6, rating: 4.7, reviews: 37, region: 'europe', badge: 'sale', desc: 'Embark on a Nordic and Baltic adventure! Discover unique destinations and historical sights in the Baltics, Finland and Scandinavia.', priceOld: 2200, priceNow: 1895 },
  { id: 4, title: 'Balkan Explorer', image: TOUR_IMAGES[3], days: 16, countries: 10, rating: 4.8, reviews: 142, region: 'europe', badge: 'popular', desc: "Experience the Balkans' unmatched beauty! Explore 10 unique countries, from Greece to Croatia.", priceOld: 3370, priceNow: 2555 },
  { id: 5, title: 'Highlights of Spain & Portugal', image: TOUR_IMAGES[4], days: 9, countries: 2, rating: 4.8, reviews: 204, region: 'europe', badge: 'best', desc: 'Discover the culture, cuisine and history of Spain & Portugal on a 9-day tour from Madrid to Lisbon, Porto and beyond.', priceOld: 2140, priceNow: 1645 },
  { id: 6, title: 'Eastern Highlights', image: TOUR_IMAGES[5], days: 11, countries: 7, rating: 4.8, reviews: 211, region: 'europe', badge: '', desc: 'Explore the highlights of Eastern Europe through Munich, Prague & Vienna.', priceOld: 2465, priceNow: 1905 },
  { id: 7, title: 'Taste of Spain', image: TOUR_IMAGES[6], days: 7, countries: 1, rating: 4.7, reviews: 66, region: 'europe', badge: 'sale', desc: "Discover Spain's most popular and picturesque cities, towns and coastal gems.", priceOld: 1490, priceNow: 1325 },
  { id: 8, title: 'Best of Europe', image: TOUR_IMAGES[7], days: 22, countries: 15, rating: 4.8, reviews: 79, region: 'europe', badge: 'popular', desc: 'Experience the very best of Europe, including Paris, Lucerne, Rome, Venice, Budapest, Vienna, Prague, Berlin and Amsterdam.', priceOld: 5125, priceNow: 3955 },
  { id: 9, title: 'Highlights of Southern Italy & Sicily', image: TOUR_IMAGES[8], days: 10, countries: 1, rating: 4.7, reviews: 66, region: 'europe', badge: '', desc: 'Discover the wonders of sun-soaked southern Italy on this 10-day tour.', priceOld: 2305, priceNow: 1775 },
  { id: 10, title: 'Best of UK & Ireland', image: TOUR_IMAGES[9], days: 13, countries: 5, rating: 4.9, reviews: 244, region: 'europe', badge: 'best', desc: 'Experience the landscapes, fairytale towns and mystical tales of England, Ireland, Scotland & Wales over 13 days!', priceOld: 4030, priceNow: 3055 }
];

const REVIEWS = [
  { text: 'The tour to the Kruger Park was excellent. We were able to see a variety of animals including the Big 5 except for the Rhino.', author: 'Sarah M.' },
  { text: 'Absolutely beautiful scenery and adventures on this tour. Saw so many amazing things and never disappointed and would do all over again.', author: 'James T.' },
  { text: 'This was our first Expat tour and we are returning home with wonderful memories. Thanks to everyone in our group.', author: 'Linda & Mark' },
  { text: 'This was really a Taste of Italy - Rome, Venice, Tuscany! Toured a lot of places, lots of walking, worth every moment.', author: 'David K.' }
];

const CONTINENT_DATA = {
  europe: { title: 'Europe is calling!', tours: ['7 Days | 6 Countries', '14 Days | 8 Countries', '13 Days | 5 Countries', '12 Days | 7 Countries', '7 Days | 1 Country'] },
  africa: { title: 'Discover Africa', tours: ['10 Days | 3 Countries', '14 Days | 4 Countries', '8 Days | 2 Countries'] },
  asia: { title: 'Explore Asia', tours: ['12 Days | 4 Countries', '15 Days | 5 Countries', '9 Days | 2 Countries'] },
  americas: { title: 'Americas Adventure', tours: ['10 Days | USA', '14 Days | Canada', '12 Days | South America'] },
  oceania: { title: 'Oceania Awaits', tours: ['10 Days | Australia', '8 Days | New Zealand', '14 Days | Both'] }
};

const WISHLIST_KEY = 'expat_wishlist';

function formatPrice(n) {
  return '$ ' + n.toLocaleString();
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let html = '';
  for (let i = 0; i < full; i++) html += '<span class="star filled">★</span>';
  if (half) html += '<span class="star half">★</span>';
  return html;
}

function getWishlist() {
  try {
    return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
  } catch {
    return [];
  }
}

function saveWishlist(ids) {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(ids));
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
window.showToast = showToast;
window.getWishlist = getWishlist;
window.formatPrice = formatPrice;

function buildTourCard(tour) {
  const wishlist = getWishlist();
  const isWishlisted = wishlist.includes(tour.id);
  const countryLabel = tour.countries === 1 ? 'Country' : 'Countries';
  const heartIcon = isWishlisted ? 'favorite' : 'favorite_border';

  const card = document.createElement('article');
  card.className = 'tour-card';
  card.dataset.id = String(tour.id);
  card.dataset.region = tour.region || 'europe';

  const badgeHtml = tour.badge === 'best' ? '<span class="tour-badge tour-badge--best">Best Seller</span>'
    : tour.badge === 'sale' ? '<span class="tour-badge tour-badge--sale">On Sale</span>'
    : tour.badge === 'popular' ? '<span class="tour-badge tour-badge--popular">Popular</span>' : '';

  const imageLink = document.createElement('a');
  imageLink.href = '#';
  imageLink.className = 'tour-card__image';
  const img = document.createElement('img');
  img.src = tour.image;
  img.alt = tour.title;
  img.loading = 'lazy';
  img.referrerPolicy = 'no-referrer';
  img.addEventListener('error', function onImgError() {
    if (this.dataset.fallback) return;
    this.dataset.fallback = '1';
    const ph = typeof IMAGES !== 'undefined' ? IMAGES.placeholder(600, 400, tour.title) : '';
    if (ph) this.src = ph;
  });
  if (badgeHtml) imageLink.insertAdjacentHTML('afterbegin', badgeHtml);
  imageLink.appendChild(img);

  const savePct = Math.round((1 - tour.priceNow / tour.priceOld) * 100);
  if (savePct >= 5) {
    imageLink.insertAdjacentHTML('beforeend', '<span class="tour-card__save">Save ' + savePct + '%</span>');
  }
  imageLink.insertAdjacentHTML(
    'beforeend',
    '<span class="tour-card__guaranteed"><span class="material-icons-outlined">verified</span> Guaranteed</span>'
  );

  const body = document.createElement('div');
  body.className = 'tour-card__body';
  body.innerHTML =
    '<div class="tour-card__header">' +
      '<a href="#" class="tour-card__title">' + tour.title + '</a>' +
      '<button class="tour-card__wishlist' + (isWishlisted ? ' active' : '') + '" data-id="' + tour.id + '" aria-label="Wishlist">' +
        '<span class="material-icons-outlined">' + heartIcon + '</span>' +
      '</button>' +
    '</div>' +
    '<div class="tour-card__rating">' +
      '<span>' + tour.rating + '</span>' +
      '<span class="stars">' + renderStars(tour.rating) + '</span>' +
      '<a href="#">' + tour.reviews + ' Reviews</a>' +
    '</div>' +
    '<p class="tour-card__meta">' + tour.days + ' Days | ' + tour.countries + ' ' + countryLabel + '</p>' +
    '<p class="tour-card__desc">' + tour.desc + '</p>' +
    '<div class="tour-card__pricing">' +
      '<div class="tour-card__old">' + formatPrice(tour.priceOld) + '</div>' +
      '<div class="tour-card__price">Now ' + formatPrice(tour.priceNow) + '</div>' +
    '</div>' +
    '<div class="tour-card__footer">' +
      '<a href="#" class="tour-card__btn">View Tour</a>' +
    '</div>';

  card.appendChild(imageLink);
  card.appendChild(body);
  return card;
}

function initImageFallbacks() {
  document.querySelectorAll('img').forEach((img) => {
    if (img.dataset.fallbackBound) return;
    img.dataset.fallbackBound = '1';
    img.referrerPolicy = img.referrerPolicy || 'no-referrer';
    img.addEventListener('error', function () {
      if (this.dataset.fallback) return;
      this.dataset.fallback = '1';
      const w = this.width || 600;
      const h = this.height || 400;
      const label = this.alt || 'Travel';
      if (typeof IMAGES !== 'undefined') {
        this.src = IMAGES.placeholder(w, h, label);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initImageFallbacks();
  const wl = getWishlist();
  document.querySelectorAll('[data-wishlist-count]').forEach((el) => {
    el.textContent = wl.length;
    el.classList.toggle('has-items', wl.length > 0);
  });

  const carousel = document.getElementById('toursCarousel');
  if (carousel) {
    TOURS.forEach((tour) => carousel.appendChild(buildTourCard(tour)));
    initImageFallbacks();

    carousel.addEventListener('click', (e) => {
      const btn = e.target.closest('.tour-card__wishlist');
      if (!btn) return;
      e.preventDefault();
      const id = parseInt(btn.dataset.id, 10);
      let list = getWishlist();
      const icon = btn.querySelector('.material-icons-outlined');
      if (list.includes(id)) {
        list = list.filter((x) => x !== id);
        btn.classList.remove('active');
        icon.textContent = 'favorite_border';
        showToast('Removed from wishlist');
      } else {
        list.push(id);
        btn.classList.add('active');
        icon.textContent = 'favorite';
        showToast('Added to wishlist');
      }
      saveWishlist(list);
      document.querySelectorAll('[data-wishlist-count]').forEach((el) => {
        el.textContent = list.length;
        el.classList.toggle('has-items', list.length > 0);
      });
    });
  }

  const reviewsGrid = document.getElementById('reviewsGrid');
  if (reviewsGrid) {
    REVIEWS.forEach((r) => {
      const card = document.createElement('div');
      card.className = 'review-card';
      card.innerHTML =
        '<div class="review-card__stars">★★★★★</div>' +
        '<p class="review-card__text collapsed">' + r.text + '</p>' +
        '<button class="review-card__read" type="button">Read more</button>' +
        '<p class="review-card__author">— ' + r.author + '</p>';
      reviewsGrid.appendChild(card);
    });

    reviewsGrid.querySelectorAll('.review-card__read').forEach((btn) => {
      btn.addEventListener('click', () => {
        const text = btn.previousElementSibling;
        const collapsed = text.classList.toggle('collapsed');
        btn.textContent = collapsed ? 'Read more' : 'Read less';
      });
    });
  }

  const carouselEl = document.getElementById('toursCarousel');
  const progress = document.querySelector('.carousel-progress__thumb');
  const scrollAmount = 340;

  function updateProgress() {
    if (!progress || !carouselEl) return;
    const max = carouselEl.scrollWidth - carouselEl.clientWidth;
    const pct = max > 0 ? (carouselEl.scrollLeft / max) * 75 : 0;
    progress.style.width = '25%';
    progress.style.transform = 'translateX(' + pct + '%)';
  }

  document.getElementById('toursPrev')?.addEventListener('click', () => {
    carouselEl?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });
  document.getElementById('toursNext')?.addEventListener('click', () => {
    carouselEl?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
  carouselEl?.addEventListener('scroll', updateProgress);
  updateProgress();

  document.querySelectorAll('.continent').forEach((path) => {
    path.addEventListener('click', () => {
      const data = CONTINENT_DATA[path.dataset.continent];
      if (!data) return;
      document.querySelectorAll('.continent').forEach((p) => p.classList.remove('active'));
      path.classList.add('active');
      document.getElementById('continentTitle').textContent = data.title;
      document.getElementById('continentTours').innerHTML = data.tours.map((t) => '<li>' + t + '</li>').join('');
      showToast('Showing tours: ' + data.title);
    });
  });
  document.querySelector('.continent[data-continent="europe"]')?.classList.add('active');

  const sideNav = document.getElementById('sideNav');
  const closeNav = () => {
    sideNav.classList.remove('open');
    sideNav.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('nav-open');
  };
  document.getElementById('menuBtn')?.addEventListener('click', () => {
    sideNav.classList.add('open');
    sideNav.setAttribute('aria-hidden', 'false');
    document.body.classList.add('nav-open');
  });
  document.getElementById('closeNav')?.addEventListener('click', closeNav);
  document.getElementById('navOverlay')?.addEventListener('click', closeNav);

  const searchOverlay = document.getElementById('searchOverlay');
  const closeSearch = () => {
    searchOverlay.classList.remove('open');
    searchOverlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('search-open');
  };
  document.getElementById('headerSearchBtn')?.addEventListener('click', () => {
    searchOverlay.classList.add('open');
    searchOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('search-open');
    document.getElementById('headerSearchInput')?.focus();
  });
  document.getElementById('closeSearch')?.addEventListener('click', closeSearch);

  document.getElementById('heroSearchForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = document.getElementById('destinationInput').value.trim();
    showToast(q ? 'Searching tours for "' + q + '"...' : 'Please enter a destination');
  });

  document.getElementById('closeBanner')?.addEventListener('click', () => {
    document.getElementById('topBanner').classList.add('hidden');
    localStorage.setItem('banner_closed', '1');
  });
  if (localStorage.getItem('banner_closed')) {
    document.getElementById('topBanner').classList.add('hidden');
  }

  const cookieBanner = document.getElementById('cookieBanner');
  if (!localStorage.getItem('cookies_accepted') && !localStorage.getItem('cookies_rejected')) {
    setTimeout(() => cookieBanner?.classList.add('visible'), 800);
  }
  document.getElementById('cookieAccept')?.addEventListener('click', () => {
    localStorage.setItem('cookies_accepted', '1');
    cookieBanner.classList.remove('visible');
    showToast('Cookie preferences saved');
  });
  document.getElementById('cookieReject')?.addEventListener('click', () => {
    localStorage.setItem('cookies_rejected', '1');
    cookieBanner.classList.remove('visible');
  });

  const nameInput = document.getElementById('newsName');
  const emailInput = document.getElementById('newsEmail');
  const joinBtn = document.getElementById('joinBtn');
  const validateNewsletter = () => {
    joinBtn.disabled = !(nameInput.value.trim() && emailInput.value.includes('@'));
  };
  nameInput?.addEventListener('input', validateNewsletter);
  emailInput?.addEventListener('input', validateNewsletter);
  document.getElementById('newsletterForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Welcome to the Expat Explore family!');
    e.target.reset();
    validateNewsletter();
  });


  document.getElementById('morePhotos')?.addEventListener('click', () => {
    showToast('Loading more traveller photos...');
  });

  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header?.classList.toggle('header--scrolled', window.scrollY > 50);
  });
});

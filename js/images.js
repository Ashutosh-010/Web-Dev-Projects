/**
 * Reliable image URLs (Pexels CDN – allows hotlinking, works without API key)
 * Format: auto-compress, sized for layout
 */
const IMG = (id, w, h) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}${h ? '&h=' + h : ''}&fit=crop`;

const IMAGES = {
  hero: IMG(3181360, 1920, 1080),
  promoRoad: IMG(21014, 800, 600),
  iceland: IMG(1618662, 1200, 800),
  article1: IMG(3184292, 400, 280),
  article2: IMG(2387866, 400, 280),
  article3: IMG(2363, 400, 280),
  blogItaly: IMG(1797161, 500, 333),
  blogUk: IMG(460672, 500, 333),
  review1: IMG(457878, 100, 100),
  review2: IMG(1320684, 100, 100),
  review3: IMG(2901209, 100, 100),
  tours: [
    IMG(1506900, 600, 400),   // Scandinavia / mountains
    IMG(360142, 600, 400),    // Helsinki / city
    IMG(773594, 600, 400),    // Nordic
    IMG(1029604, 600, 400),   // Balkans
    IMG(161815, 600, 400),    // Spain
    IMG(1128440, 600, 400),   // Eastern Europe / city
    IMG(1388031, 600, 400),   // Spain cities
    IMG(2363, 600, 400),      // Paris / Europe
    IMG(1523901, 600, 400),   // Italy
    IMG(460672, 600, 400)     // UK
  ],
  /** SVG data URI placeholder if remote image fails */
  placeholder(w, h, label) {
    const text = (label || 'Travel').slice(0, 20);
    return (
      'data:image/svg+xml,' +
      encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
          <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#2b57c5"/>
            <stop offset="100%" style="stop-color:#1a2b4a"/>
          </linearGradient></defs>
          <rect fill="url(#g)" width="100%" height="100%"/>
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
            fill="#fff" font-family="Arial,sans-serif" font-size="18" font-weight="bold">${text}</text>
        </svg>`
      )
    );
  }
};

/**
 * Reliable image URLs (Pexels CDN – allows hotlinking, works without API key)
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
  blogItaly: IMG(4037552, 500, 333),
  blogUk: IMG(672430, 500, 333),
  review1: IMG(457878, 100, 100),
  review2: IMG(1320684, 100, 100),
  review3: IMG(2901209, 100, 100),
  tours: [
    IMG(1638439, 800, 520),   // Norway / Scandinavia fjords
    IMG(2583852, 800, 520),   // Baltic old town
    IMG(3757121, 800, 520),   // Nordic landscape
    IMG(1024945, 800, 520),   // Adriatic / Balkans coast
    IMG(4171734, 800, 520),   // Spain architecture
    IMG(161174, 800, 520),    // Prague / Eastern Europe
    IMG(1388031, 800, 520),   // Spanish cities
    IMG(338515, 800, 520),    // London / UK–Europe
    IMG(4037552, 800, 520),   // Venice / Italy
    IMG(2666981, 800, 520)    // Ireland cliffs
  ],
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

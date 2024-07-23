const CACHE_NAME = 'calculator-pwa-v1';
const urlsToCache = [
  '/calculator/',
  '/calculator/index.html',
  '/calculator/styles.css',
  '/calculator/app.js',
  '/calculator/icon-192x192.png',
  '/calculator/icon-512x512.png'
];

// ... resto del código ...

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

/* Caches the whole app so it opens and works with no signal. Bump VERSION when you change any file. */
const VERSION = 'signed-pod-v3';
const FILES = [
  './',
  'index.html',
  'manifest.webmanifest',
  'pdf-lib.min.js',
  'pdf.min.mjs',
  'pdf.worker.min.mjs',
  'standard_fonts/LiberationSans-Regular.ttf',
  'standard_fonts/LiberationSans-Bold.ttf',
  'standard_fonts/LiberationSans-Italic.ttf',
  'standard_fonts/LiberationSans-BoldItalic.ttf',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || fetch(e.request))
  );
});

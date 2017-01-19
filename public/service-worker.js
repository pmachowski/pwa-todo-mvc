// this file will be replaced by the sw-precache

var CACHE_NAME = 'pwa-todo-cache-v1';
var urlsToCache = [
  '/',
  '/static/css/main.27d633d5.css',
  '/static/js/main.6a958990.js',
  '/manifest.json',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
  '/apple-touch-icon.png',
  '/asset-manifest.json',
  '/browserconfig.xml',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/favicon.ico',
  '/mstile-144x144.png',
  '/mstile-150x150.png',
  '/mstile-310x150.png',
  '/mstile-310x310.png',
  '/mstile-70x70.png',
  '/safari-pinned-tab.svg'
];

this.addEventListener('install', function(event) {
  // Perform install steps
  console.log('SW install called');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          console.log('fetch from cache: ', event.request.url);
          return response;
        }
        console.log('fetch file', event.request.url);
        return fetch(event.request);
      }
    )
  );
});

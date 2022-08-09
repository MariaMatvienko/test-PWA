self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("fox-store")
      .then((cache) =>
        cache.addAll([
          "/pwa-examples/public/",
          "/my-app/public/index.html",
          "/my-app/src/index.js",
          "/my-app/src/style.css",
        ])
      )
  );
});

self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});

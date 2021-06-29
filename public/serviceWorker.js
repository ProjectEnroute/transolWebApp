const CACHE_NAME = "transol";
const urlToCache = ["index.html", "offline.html"];

const self = this;

self.addEventListener("install", (e) => {
  console.log("install the resourse");
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("opened cache");
      return cache.addAll(urlToCache);
    })
  );
});

self.addEventListener("fetch", (e) => {
  console.log("fetching for resourse");
  e.respondWith(
    e.respondWith(
      caches
        .match(e.request)
        .then(() => {
          return fetch(e.request);
        })
        .catch(() => caches.match("offline.html"))
    )
  );
});

self.addEventListener("activate", (e) => {
  console.log("actvated the resourse");
  const CachesWhiteList = [];
  CachesWhiteList.push(CACHE_NAME);
  e.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames.map((cacheName) => {
            if (!CachesWhiteList.includes(cacheName)) {
              return caches.delete(cacheName);
            }
          })
        )
      )
      .then(() => {
        console.log("service worker is activated and ready to go");
      })
  );
});

const CACHE_NAME = 'pwa-news';
const urlsToCache = [
    '/',
    'index.html',
]

var self = this;

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache)
            })
    )
})


self.addEventListener('active', event => {
    const cacheWhitelist = ['pwa-task-manager']
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName)
                    }
                })
            )
        })
    )
})

self.addEventListener('fetch', function (event) {
    console.log("fetch", event);
    event.responWith(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.match(event.request).then(function (response) {
                console.log("response", response);
                return response || fetch(event.request).then(function (response) {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
})
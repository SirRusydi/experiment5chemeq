const CACHE='equilab-sk015-final';
const ASSETS=['./', './index.html', './manifest.json', './sw.js', './assets/procedure/a-prep.png', './assets/procedure/a-test.png', './assets/procedure/b-prep.png', './assets/procedure/b-temperature.png', './assets/procedure/c1-transfer.png', './assets/procedure/c2-burette.png', './assets/procedure/c3-add-water.png', './assets/procedure/c4-endpoint.png', './assets/procedure/c5-reading.png']
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).catch(()=>caches.match('./index.html')))));

self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));

const C='mevzuat-v1',A=['./','index.html','manifest.webmanifest','icon.svg'];
self.oninstall=e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting()));
self.onactivate=e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))));
self.onfetch=e=>{if(new URL(e.request.url).origin!=location.origin)return;
 e.respondWith(caches.match(e.request).then(r=>{const f=fetch(e.request).then(n=>{const c=n.clone();caches.open(C).then(x=>x.put(e.request,c));return n}).catch(()=>r);return r||f}))};

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("v1").then((cache) => {
            return cache.addAll([
                "./",
                "./index.html",
                "./styles.css",
                "./app.js",
                "./manifest.json",
                "./icon-192.png",
                "./icon-512.png"
            ]).catch((error) => {
                console.error("Error al agregar archivos al caché:", error);
            });
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        }).catch((error) => {
            console.error("Error al responder con el caché:", error);
        })
    );
});

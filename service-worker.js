self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          // Return cached response if available
          return response;
        }
        return fetch(event.request)
          .then(function(response) {
            // Cache the new response
            caches.open('my-site-cache').then(function(cache) {
              cache.put(event.request, response.clone());
            });
            return response;
          });
      })
  );
});

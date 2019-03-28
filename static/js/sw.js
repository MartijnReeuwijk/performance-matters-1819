if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  })
}
// .then(intall => {
//       console.log("test");
//   var CACHE_NAME = 'my-site-cache-v1';
//   var urlsToCache = [
//     '/',
//     '/css/style.css',
//     '/js/map.js'
//   ];
//
//   self.addEventListener('install', function(event) {
//     // Perform install steps
//     console.log("test");
//     event.waitUntil(
//       caches.open(CACHE_NAME)
//         .then(function(cache) {
//           console.log('Opened cache');
//           return cache.addAll(urlsToCache);
//         })
//     );
//   });
//
// });

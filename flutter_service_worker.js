'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "72e80a3e9ee47888ec01ddb474973eb1",
"assets/AssetManifest.bin.json": "334b1fa141925eb24081a8571b2f5d09",
"assets/AssetManifest.json": "99739b13bbb41bb421800df0aab5527d",
"assets/assets/fonts/Roboto-Bold.ttf": "2e9b3d16308e1642bf8549d58c60f5c9",
"assets/assets/fonts/Roboto-Italic.ttf": "270c8dce1ab3c57848d7d278cb96574f",
"assets/assets/fonts/Roboto-Regular.ttf": "327362a7c8d487ad3f7970cc8e2aba8d",
"assets/assets/images/application.png": "d4ced4503f989e7c874eceab36b5ebc9",
"assets/assets/images/calendar.png": "01d18998f62090ea86b73bafcfa7adb6",
"assets/assets/images/degree.jpg": "4a7e730d200a5b3408fb5846d93ba93c",
"assets/assets/images/ET_logo.png": "eb90e02bcecc87a4b0c16e18a7017e33",
"assets/assets/images/lecture.jpg": "dbf2731c9f6c83815062293cf9e404c4",
"assets/assets/images/menu.png": "239c5994a9499e99545cef73f73796f4",
"assets/assets/images/pin.png": "a826c7b7526eec88fb314a3c18678536",
"assets/assets/images/reading.jpg": "be35072a80cd05e1f6979a6d9f5bfe54",
"assets/assets/images/right-arrow.png": "a8b68ccf99b3ccbebab6be425f72781e",
"assets/assets/images/slider1.jpg": "2360a4a54d88b669d2e90563364ecf09",
"assets/assets/images/slider2.jpg": "f5246f221c96c72c651b98c806721049",
"assets/assets/images/slider3.jpg": "b995297c78ade87ddc53e217fe1efde0",
"assets/assets/images/telephone.png": "91c5bf318e2109f33be1796a061f0d61",
"assets/assets/images/user.png": "45000b334be5509e1a9d4ffef88b5b68",
"assets/assets/images/whatsapp.png": "084699860a79bb3aaed4c37da7870d4c",
"assets/assets/images/wifi.png": "764fe64b30dc6cbfd30eb53f3f566276",
"assets/ET_logo.png": "eb90e02bcecc87a4b0c16e18a7017e33",
"assets/FontManifest.json": "9f35ba4e4b2121721fca622557e51ffb",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/MaterialIcons-Regular.ttf": "4e85bc9ebe07e0340c9c4fc2f6c38908",
"assets/images/application.png": "d4ced4503f989e7c874eceab36b5ebc9",
"assets/images/calendar.png": "01d18998f62090ea86b73bafcfa7adb6",
"assets/images/degree.jpg": "4a7e730d200a5b3408fb5846d93ba93c",
"assets/images/ET_logo.png": "eb90e02bcecc87a4b0c16e18a7017e33",
"assets/images/lecture.jpg": "dbf2731c9f6c83815062293cf9e404c4",
"assets/images/menu.png": "239c5994a9499e99545cef73f73796f4",
"assets/images/pin.png": "a826c7b7526eec88fb314a3c18678536",
"assets/images/reading.jpg": "be35072a80cd05e1f6979a6d9f5bfe54",
"assets/images/right-arrow.png": "a8b68ccf99b3ccbebab6be425f72781e",
"assets/images/slider1.jpg": "2360a4a54d88b669d2e90563364ecf09",
"assets/images/slider2.jpg": "f5246f221c96c72c651b98c806721049",
"assets/images/slider3.jpg": "b995297c78ade87ddc53e217fe1efde0",
"assets/images/telephone.png": "91c5bf318e2109f33be1796a061f0d61",
"assets/images/user.png": "45000b334be5509e1a9d4ffef88b5b68",
"assets/images/whatsapp.png": "084699860a79bb3aaed4c37da7870d4c",
"assets/images/wifi.png": "764fe64b30dc6cbfd30eb53f3f566276",
"assets/NOTICES": "0bed065aee4069e4a91fc1233af08532",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "8d527f42d96bf48312236189f92ba6b0",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "ba46016a4e24f3c2cc1018998cc27e73",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4d0ce439c50f9ce9322003050e917b87",
"/": "4d0ce439c50f9ce9322003050e917b87",
"main.dart.js": "adbf4667133de722668ff99d345fbf8c",
"manifest.json": "3ae35a369d9a2e0ba8c068e6d36871db",
"version.json": "1f6b3cba9196e01af17d6ab5c1e8b543"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

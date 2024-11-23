'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6bc09779e5a6f0c28dbf80bbe2a82d61",
".git/config": "d5f6ba1aa871d8d2cdafe533fb8044b1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bbec780d3cc521dc2db482237f10662f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "370c16e8493e0cf0339277529d4135b2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2e1551b4157b5125cb986adde9cb88b5",
".git/logs/refs/heads/main": "02d8e5ef1066b57a57c2fee486f3ca3e",
".git/logs/refs/remotes/origin/main": "014993b7cb847aa7c2aefe9ad0df712c",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/f7b17181281f1dbe8e1359da1be2559b56e3a9": "32aa404f751b09d61d8b6c3fa0967f51",
".git/objects/09/88c3f9234cf12bbc2a36198e99fa00bdb127b5": "a6e6599a74d938ae66ba48a062f4b69b",
".git/objects/09/fa52fdde3697988c58c62db52fd3973a8d81d7": "b062676f4ada7d14e9d669562e073e58",
".git/objects/0d/9988541b38265bf153cfed3d7eee35a86057db": "fca01c1ddc3605ce8a07a8e541bee04b",
".git/objects/10/81a5350d8d969a761473a7c90fae997eafb368": "186e2ab8930093c8b623f35793cab500",
".git/objects/12/e88b7e35974582398bd9e2b03cc2ed918001dd": "8ef99cf7a2affcd99d840cfe1ab0879b",
".git/objects/18/3e55614a74163bea6f3ceb0e61000f1630a6b1": "0fa9111c389093bd4b42b566d63b12b3",
".git/objects/19/3f67846a7bcee1c85cd75bad3cc1f7a99fa8d2": "519f08b5f881296d545a12423dec5575",
".git/objects/21/17016a94fefb186ce7c9f47ab77d87cdae739e": "297b748bb430c09d85d8eda10e8d0b63",
".git/objects/23/e5b173362c675904683c4c170ea3f798f61fdc": "f4d63e2a0f14696337f91f0a2c0bfeca",
".git/objects/26/305ca524282918940844556599d0dd86487202": "319e79bd7ccdfd0c3a39b28061b9ecf5",
".git/objects/2b/a9a66d5fc22ea0d6e216bee7161d1485cbcf08": "2659c6a8a2eb5bcceff05dfc520689e0",
".git/objects/2c/edc1c6f11f9ddb3820dc4850f0659e091e4c57": "6e680b1be68887df0c69dc842cb6803e",
".git/objects/2e/b89aa1b71aae33d14c9dffc24ab3832084ad4b": "ff27cdb38c72d3da49e120e15bf5e90f",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/39/df187332e457965df893b1d0261aef7f476549": "9f2330d1dbcb75314007c8795fd05581",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/4c/a25deb9c19af1284a81a95f465f9e2f8600f4b": "572579e4c9e576f117df6446e4f31944",
".git/objects/5b/35b26e7d5d32b6c83bfb0bf60e44c821ac8f5d": "6795ed96a5ed00e2bd9fc8dd1be94926",
".git/objects/5d/2b1181d911224d023d112af9e36e3f329695ec": "6edb45808b7baef14dc4ba5e4097f755",
".git/objects/67/ab4e474265eae4285551c645e7b7472b388507": "dacc1c859b9d0aec368c10ec7ad8522b",
".git/objects/69/3d341bef43f22e5927ad39eb793592f843e1dc": "89c4686b65e12ce08c016d889d0f1010",
".git/objects/6b/533de4e3be3460087448e28e7229727aedb718": "b864cf73a28652de49dc9c161a050dc1",
".git/objects/6b/55457ccf507b51666f59b7e8cd1dc0ded7bc7e": "c1064f840f66ff18cb07b76eeaed2826",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/75/6df172411a4b7100824c6ddf42aac9b77e7eef": "07e0c1a5568c9ce876e2f64df048dc71",
".git/objects/7a/e2ac2c82fcb8e3184e970f2eabd5e81f420524": "24221b9c46ebc77c1885ee5b77594b6c",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/94/2b3ab734dd5e4fd2d8a512b0b162d62d2752f7": "68c603a498335c23fc1733516cd0bc15",
".git/objects/96/48c69f8843c3f447c3bc65544108d39c34be66": "cf4fec727e6dbe08eb7ba79c9d3b5913",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/a2/8ce3a0cba676957fdf0b4591655cbd1196407f": "d517e1a0e128ef42b7da4908608a69c9",
".git/objects/a2/bbea412dc3acb2399f388118905347bd8aecf9": "0b722a1f11b1f47dc3f41c5138f272bb",
".git/objects/a2/ce80b64c97099ca9f1419d8ce0d10e558ec52a": "fc575d2c0fdc1b6b5b3739ea2e913c85",
".git/objects/a3/7f78d7ca08e2a6188905e30ce10676104e2ed7": "99cc2bf10243ccca7ecbd22b8ffe5b2a",
".git/objects/a6/14061889c4e1b8ab193f72009c70255ee5d1e3": "2715ba6ef141a65315c2bbc12d2b818d",
".git/objects/ad/75db85354ee11812f09942836c0c69c3ea8884": "cbccaef89c8e5349317d2464ee17bad6",
".git/objects/b0/22544354a82b968bca60600c66c83235e30377": "b0478808b32234b1c76064a79149c553",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b3/6c866c3ac15d827f7e31ebd89ec66e9d99032d": "5dc37603c8ba5e433dd63efef551bf14",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/601d14f8696072582305ed962f34b014e2e196": "867936cc8d8d67c813a46d0c3a44f5ed",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c6/3e32d14bedf5bcb19e11e2ede2301eb919b79b": "b72dae2eba5e4169cf67a0f398d19d8b",
".git/objects/c6/bc9284e406636ab5c19df79c211bd83153837d": "cfa04e41d908a3799bef83048bc88c81",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/9c8c3075376e0edfbf54e2b8aa2a998932d3da": "3b8ed75fbf235d05af37a8671148be2a",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/f3ca14e618cd27be73c4d96c8d163a61f72d0e": "1637d3fef0fb6111c1c15c80ed9ad0d2",
".git/objects/dc/c8fddb0660951ef04b2c11f29eb4e438398b91": "8e4143c273bdb5e5d229da4e236cbc92",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/a7809d4e1e1e6aa4bdb738616b5b76d9cd64e9": "ba2713135b6d0ca56b361234e2bfef83",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/41914ea3b642d4ce5e3cdeda4074a99c11d388": "a408ca1eb61d09d787b5e291faa82a79",
".git/objects/fc/14a6b5e5f63b3c9620d9c372d64ab5dad85d21": "ecc4b7b2f6da6924b3986622f999c391",
".git/refs/heads/main": "617d5426ed91985697c0f6cb6ddc78af",
".git/refs/remotes/origin/main": "7a8380c6598903ba1de740fa29e582a6",
"assets/AssetManifest.bin": "3dbafa860cbbfc840eb3fb396ddc342d",
"assets/AssetManifest.bin.json": "52047c95a1155ba2d0c4a4c0014f383c",
"assets/AssetManifest.json": "53586c4bde1a101aba3341074976369c",
"assets/assets/service_account.json": "d12f4b3f1760953f89260e9a28b4eaf9",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "3135629a18edae188eefc56bb90d928e",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "b2706e13f6d3844aa34e6009ef2b110a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9f9bea9439508638c39cf690c127d3d3",
"/": "9f9bea9439508638c39cf690c127d3d3",
"main.dart.js": "9a509d98e0a42b0734e48758214542fd",
"manifest.json": "de54a1336e45c5844bb4f268cf8117a6",
"version.json": "488f7b4c6b42aab5071cfc3be93be5f9"};
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

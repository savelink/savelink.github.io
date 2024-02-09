'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"version.json": "67e4ef9c794e5d3c02ddcc103571df52",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"manifest.json": "795e87aa16c26d26ef4f179011be6604",
"main.dart.js": "54eb37f64da50ac1c3e850a41800e410",
"index.html": "248767f0c2621d96008b0d6964df2cc1",
"/": "248767f0c2621d96008b0d6964df2cc1",
"assets/FontManifest.json": "878b1f0fdd8999f45ffe13dbfbcb6cf7",
"assets/lang/ar.json": "df3083b0e797f3c99d2168bdcdb182aa",
"assets/lang/fr.json": "e4392cea9287a8b6b9194dd9ae508ef0",
"assets/lang/en.json": "e4392cea9287a8b6b9194dd9ae508ef0",
"assets/AssetManifest.json": "0d754e7d4c3934556e3b1c8c90bbcfd0",
"assets/fonts/MaterialIcons-Regular.otf": "9e3aad91b5d09d31e718a085dc397a6c",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "bcaf3ba974cf7900b3c158ca593f4971",
"assets/NOTICES": "54ab6d321a8d429060c82e4208d96c64",
"assets/AssetManifest.bin": "372d3ad405c58cfd6727a9462fd55577",
"assets/assets/Success-Check.flr": "fa58548a6bd0b6816a900d240b9a04be",
"assets/assets/kids/logos/tafseer.png": "97ca6df920620d2fd645c08d243a5998",
"assets/assets/kids/logos/adab.png": "cf6cf24c6a3553d05ba353b6611e43b3",
"assets/assets/kids/logos/fiqh.png": "188634c24ffcdf7b7a7d368ef38aa939",
"assets/assets/kids/logos/fiqh-small.png": "29c576198046d47dc03febf8bbd7f933",
"assets/assets/kids/logos/misc-small.png": "3d73ba37c87755044847a020e433e9db",
"assets/assets/kids/logos/adeiah.png": "cf6cf24c6a3553d05ba353b6611e43b3",
"assets/assets/kids/logos/adeiah-small.png": "4adb0ed70d94449c8544b6f761b4740e",
"assets/assets/kids/logos/seera-small.png": "43714abc81f6289c263689c4486443b3",
"assets/assets/kids/logos/seera.png": "0311423a026188ad22f5a6124c1f7cc8",
"assets/assets/kids/logos/misc.png": "57e3191c3f8af6984bd943d9909be318",
"assets/assets/kids/logos/aqeeda-small.png": "4e51d3d541c3b38bb5537348c1c563c1",
"assets/assets/kids/logos/hadeeth.png": "57e3191c3f8af6984bd943d9909be318",
"assets/assets/kids/logos/hadeeth-small.png": "3d73ba37c87755044847a020e433e9db",
"assets/assets/kids/logos/akhlaq.png": "188634c24ffcdf7b7a7d368ef38aa939",
"assets/assets/kids/logos/aqeeda.png": "407f528054d7e97645b9146db1c37337",
"assets/assets/kids/logos/akhlaq-small.png": "29c576198046d47dc03febf8bbd7f933",
"assets/assets/kids/logos/adab-small.png": "4adb0ed70d94449c8544b6f761b4740e",
"assets/assets/kids/logos/tafseer-small.png": "1cdb0a6b749e5890bb26e9377a3627a0",
"assets/assets/kids/play.png": "867df78add2f26a522e3ba59457073a3",
"assets/assets/loading.gif": "61387fabe512d4ded0ed5ad2b8332840",
"assets/assets/illus/Education-Illustration-Kit-09.png": "9a6ba7bffaaf0a9ce1b24c0261f712a7",
"assets/assets/illus/Education-Illustration-Kit-04.png": "868b1fa5a62bd2a7be6bd9e8dfc541e3",
"assets/assets/illus/Education-Illustration-Kit-05.png": "778bcfcf617d1e8f44e06ccec198d304",
"assets/assets/illus/Education-Illustration-Kit-01.png": "5648ebd5b1ac7f6b2d17e971454b6505",
"assets/assets/illus/noData_old.png": "10a53aa69a88df00e6525af3322c1e73",
"assets/assets/illus/noData.png": "bc5ad4b3c615fa1a771a81f98c5b839d",
"assets/assets/illus/Education-Illustration-Kit-03.png": "3c60e965c31fa63bfe0fff9d2c1c8f53",
"assets/assets/illus/Education-Illustration-Kit-11.png": "e6f619074b356373d8eb71f68c3deb20",
"assets/assets/illus/Education%2520Illustration%2520Kit-07.png": "9f4d04bd0a8fd0d7f7dcf10a5b6c4217",
"assets/assets/illus/Education%2520Illustration%2520Kit-08.png": "235cc99f29a2f0cdae1ad4fa04368aeb",
"assets/assets/illus/kosong.png": "8d5566331aee861e1dc7ef30f9bf04d9",
"assets/assets/illus/Education-Illustration-Kit-02.png": "9ff4215ba1a16a99a53203cd6afda1a0",
"assets/assets/illus/Education%2520Illustration%2520Kit-06.png": "015d4e604d201a7ee3463766430b04a3",
"assets/assets/illus/Education%2520Illustration%2520Kit-10.png": "1277595ffec65a9330da6cd2c03959f2",
"assets/assets/illus/kosong_old.png": "0f91c68a0c83270e57655a608e954203"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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

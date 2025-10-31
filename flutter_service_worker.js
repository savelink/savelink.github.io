'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"version.json": "67e4ef9c794e5d3c02ddcc103571df52",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"manifest.json": "795e87aa16c26d26ef4f179011be6604",
"main.dart.js": "f8386894d6f75fb4673df562ed308aaf",
"flutter_bootstrap.js": "d786dbeb57777d078081c123d68486e3",
"index.html": "3cb8aa67997136cca0cc4f2ffe8f3a43",
"/": "3cb8aa67997136cca0cc4f2ffe8f3a43",
"assets/FontManifest.json": "878b1f0fdd8999f45ffe13dbfbcb6cf7",
"assets/lang/ar.json": "df3083b0e797f3c99d2168bdcdb182aa",
"assets/lang/fr.json": "e4392cea9287a8b6b9194dd9ae508ef0",
"assets/lang/en.json": "e4392cea9287a8b6b9194dd9ae508ef0",
"assets/AssetManifest.json": "18e203d9beb1ac4e8a87928b10fb0123",
"assets/fonts/MaterialIcons-Regular.otf": "c4e10f58fed31da12aa2a646723e4961",
"assets/images/fffloomi01.png": "1cab403eaf190caee2c0ae680b8c4935",
"assets/images/theteam.jpg": "676fe0a12f84c0791e150d77c3b8d950",
"assets/images/user.png": "e27c8735da98ec6ccdcf12e258b26475",
"assets/images/tdlogo.png": "920f083e910ccac8f59813595425103e",
"assets/images/Tlogo2.png": "a581de9cffe3761bd81e0240a1e576a0",
"assets/images/secure.jpg": "786e275a7a52fba4bb6d510460669178",
"assets/images/security-pics.png": "227159e5cdd4cf6871dc08ef741eb15d",
"assets/images/welcome.png": "9ad8191a43378647c66dede6de24bf9b",
"assets/images/floomi.png": "83fcc89f5a499f8668a579d1daa5edf2",
"assets/images/tlogo.png": "83fcc89f5a499f8668a579d1daa5edf2",
"assets/images/logo.jpg": "ab79c437568d577e0a0e72455bf653d6",
"assets/images/logo.png": "a581de9cffe3761bd81e0240a1e576a0",
"assets/images/teamlogo.png": "83fcc89f5a499f8668a579d1daa5edf2",
"assets/images/conference.png": "61f2d25854aab392771a56562dd1ed13",
"assets/images/meetingpic.jpg": "fce43e3e4bd388a7ae5e7063556f3071",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "9fc4be16fd2c4af166bbe5de5256f500",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "bcaf3ba974cf7900b3c158ca593f4971",
"assets/NOTICES": "686908612c61629bac58e25f1da59f78",
"assets/AssetManifest.bin": "3c896804803fa1ad447fd6071bb04c79",
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

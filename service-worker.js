/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["about/index.html","3322fb914698385fdc648a8b19414db1"],["archives/2020/08/index.html","1bb1ac2336287be76ca5524a5ecee558"],["archives/2020/08/page/2/index.html","fa123b8acae1b1646521dce65c364a4c"],["archives/2020/09/index.html","96a185d3dbfb8d875034ecf8adedfeb2"],["archives/2020/index.html","38640ab1191d6ae986d61437e52b7cab"],["archives/2020/page/2/index.html","a2fba48727358ab87e2139870397f4a9"],["archives/index.html","6370736d5d34cbb255581cb99efb7399"],["archives/page/2/index.html","6370736d5d34cbb255581cb99efb7399"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["bangumis/index.html","d16a2cceb3692d1aad8127648f339218"],["categories/algorithm-note/index.html","c335fd13b7aa61eebb27ba63f7155a94"],["categories/algorithm-soultion/index.html","a607d6662a76b60097086ad523e03002"],["categories/algorithm-template/index.html","ec4819d57c1cfd0a318ca9fcf2c986e8"],["categories/index.html","444c6cea328ccdaa2fede2587188fa41"],["css/style.css","b7480a1f11e56214e1b1dbb934aff838"],["css/user.css","f46d045ad23169d467386b6e52d8e04d"],["friends/index.html","e7b6b44ef7d9ca75fc797c6e5d658174"],["images/face.jpg","d1efbdab5b8515434d314ca3b889b0a3"],["index.html","e21ae4b820b7af9f465cc3d8f8f895c4"],["js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["js/app.js","41f083b2dc9f597949663e71f56b9f7b"],["js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["js/funnytitle.js","c216c937ead9ab350501effd8ab639ae"],["js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["movies/index.html","dc5737889f8c6f44cb6f46c2c6a1d854"],["page/2/index.html","61d07b8a36f532b57e54036601403c64"],["photos/index.html","f1e030e624b1fded4bd749a7842a6826"],["posts/algorithm-note/algorithmic-learning-notes.html","9376296152d844cbbd64c086f4299680"],["posts/algorithm-note/knapsack.html","7b8f39d409f6d3f576992c5b7d69b0b3"],["posts/algorithm-soultion/cf1419a-digit-game.html","effb0968da24aed272deb86968598184"],["posts/algorithm-soultion/noip2000-sys-convert.html","80c0008461678d84dde555fa47887dab"],["posts/algorithm-soultion/noip2003-table-tennis.html","6b0012bce3c8cb8c4ee3abc03226f4fc"],["posts/algorithm-soultion/noip2005-school-tree.html","dbbaedff4b02895240cdb246b822cd80"],["posts/algorithm-soultion/usaco-the-angry-bull.html","e3882f409f5a20168b8686e759e2efc2"],["posts/algorithm-template/dijkstra.html","8456642d5219d8aae1b56287b5ffc8c2"],["posts/algorithm-template/high-precision-template.html","26f7668547ceeb1bfd99227d75fb5219"],["posts/algorithm-template/segment-tree.html","92311bbc67b70b34efd6779ff145b01b"],["posts/algorithm-template/tamplate-twophase-bfs.html","cb5075c40a4f1372ed77316249dbaa64"],["posts/algorithm-template/template-quick-pow.html","d7e62dadc3422f4777d32749ac9e00a4"],["posts/algorithm-template/trie-tree.html","4f71588cf254c6699caf30e06b9d8888"],["progress/index.html","db8cb1e46b9938399475dbf4cde86ab0"],["shuoshuo/index.html","8584e36cb13b1700f65461c5ea266682"],["sw-register.js","08975b5bed8c7cf49ef9d6e436d7b9b8"],["sw.js","57c34d2d1440ec344bf4c0cd2dd2ccbc"],["tags/01-knapsack/index.html","30c8b1a4673beff83a2abb1ce7bb8f9d"],["tags/Codeforces/index.html","e4b440ab8401f0a9682cc40974031c85"],["tags/DP/index.html","80d2620ce7d87c05543f3cf66227a818"],["tags/Dijkstra/index.html","da42be472cdd0550645264cb016236ec"],["tags/NOIP/index.html","7fcfcbb4c0a1d64316523e799f93a035"],["tags/STL/index.html","b99f39d5a96797c265f2591393097312"],["tags/USACO/index.html","a0557b1d39360e9455bba57de034e342"],["tags/binary-search/index.html","9e8a29d77d3fb9e2923c414503192f0c"],["tags/binary-tree/index.html","7ef89d3f49e52d6d4bb149a29ae6b16b"],["tags/completely-knapsack/index.html","4147bd3984c3b8d5d4fb9501d973f528"],["tags/data-structure/index.html","d7a1342fb8feaa3240dd25318a785997"],["tags/discretized/index.html","aea91a67bdd524ff729d3baffb0f00e1"],["tags/graph/index.html","da862755c444884ba7479a90f973db36"],["tags/high-precision/index.html","73725d0727bb263538e32da6500f8bde"],["tags/index.html","9bd6639d4b23cc71d7b1cdcf8c81a2d2"],["tags/knapsack/index.html","c3c03abe5769932ce5189bb0788eadbb"],["tags/math/index.html","d8abbdac623348ba17a08884c4795a7c"],["tags/prefix-sum/index.html","7176f5a82d7584a51ed3a7c74bf904c9"],["tags/preliminary-contest/index.html","2a93ef7dd98c18e66728a0aa81025730"],["tags/quick-pow/index.html","5d07f5f3e209e9719ea548757fe2b64a"],["tags/redouble/index.html","68d9b7f605cfcf86258f4e2ae30ef5a6"],["tags/search/index.html","34657877eda88af0bf912060b931e0e0"],["tags/segment-tree/index.html","6d047783d9bc367cd078002cf71ca36b"],["tags/shortest-path/index.html","b573d915eb43e91d6afdbc560d332647"],["tags/string/index.html","024c199348ac473d02074e96817369b8"],["tags/trie-tree/index.html","b21a06a5a8505117321db258bc0d8fc7"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});








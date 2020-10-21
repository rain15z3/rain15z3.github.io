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

var precacheConfig = [["about/index.html","84cb7afa9ebd2faa27aae669ecb275a6"],["archives/2020/08/index.html","d1ada6a4f328238501160d81515915ce"],["archives/2020/08/page/2/index.html","9cf8debbdc4e261d8c31710cd02a1d05"],["archives/2020/09/index.html","442392a2c9f05f11e82c2d9d27a43c3f"],["archives/2020/index.html","756b84fc404dab37ba4439941213fa3a"],["archives/2020/page/2/index.html","35790f1fdda1ef9094346fdaad82efb7"],["archives/index.html","2f82eb06c84e08d7266cf3b57ede427f"],["archives/page/2/index.html","2f82eb06c84e08d7266cf3b57ede427f"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["bangumis/index.html","3c7cc7f10e0f2cfb21d07d7b2ef6ef65"],["categories/algorithm-note/index.html","02c1923bd04f31410e95ea5630869e25"],["categories/algorithm-soultion/index.html","0436a0c9424f6a2ce4da3c000dc2adfb"],["categories/algorithm-template/index.html","baaa73b82c9d17de466e52171e187b50"],["categories/index.html","f568f51038a4909d8f7dc4989da06a18"],["css/style.css","b7480a1f11e56214e1b1dbb934aff838"],["css/user.css","f46d045ad23169d467386b6e52d8e04d"],["friends/index.html","aa9b2a0a5617dea9c2fc8449a94e54b1"],["images/face.jpg","d1efbdab5b8515434d314ca3b889b0a3"],["index.html","e7aa87ee900e6306fb030f78d786b998"],["js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["js/app.js","41f083b2dc9f597949663e71f56b9f7b"],["js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["js/funnytitle.js","c216c937ead9ab350501effd8ab639ae"],["js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["movies/index.html","dc5737889f8c6f44cb6f46c2c6a1d854"],["page/2/index.html","f9264b19039cde9e1ffaa7d9ec26f757"],["photos/index.html","a7f617076beb51a482138634185b5c0f"],["posts/algorithm-note/algorithmic-learning-notes.html","4af1f89a3bf0f8e032ac5b8395db731e"],["posts/algorithm-note/knapsack.html","29efa241b65b17cb4d38761b57a40afc"],["posts/algorithm-soultion/cf1419a-digit-game.html","3e8b2426e313ace70abc25a4e79c3ec8"],["posts/algorithm-soultion/noip2000-sys-convert.html","7a8bf288ad35c2db7077b8520d3abd2d"],["posts/algorithm-soultion/noip2003-table-tennis.html","7e08b3e522e9806f338c9c00bacb48fe"],["posts/algorithm-soultion/noip2005-school-tree.html","e2c342ca693f0ca35beb6eabef9c76b4"],["posts/algorithm-soultion/usaco-the-angry-bull.html","9118cb7d6b56a4da242148a5cc399465"],["posts/algorithm-template/dijkstra.html","12986ccd22491bea49d81e11adf47641"],["posts/algorithm-template/high-precision-template.html","dc8ee24510a02c923d594aa6d6571c9a"],["posts/algorithm-template/segment-tree.html","0baf08c425f9a301f1d27c10e8d951b3"],["posts/algorithm-template/tamplate-twophase-bfs.html","caa1918b8fd67ca258cef5f02e26c97e"],["posts/algorithm-template/template-quick-pow.html","ba48c1c26fd90fb9b5f2dbd6c4ae4d02"],["posts/algorithm-template/trie-tree.html","7b87830e1d67c9d46b9b7812ba6fb8dd"],["progress/index.html","c118b1d4c69af51b84689b28d826698b"],["shuoshuo/index.html","b7111ddadcb4ce15c8f105b7db74e230"],["sw-register.js","1f85f55923fdea43c6aa064ad6b3403a"],["sw.js","d8074fbd50d2c461732eb0b492081a0d"],["tags/01-knapsack/index.html","9151bf551d76352f2afe66ac807fd643"],["tags/Codeforces/index.html","b4f79a5264171f0c2b828f050501d16f"],["tags/DP/index.html","02af0295cb806e58ed3c7e1e8d4b228f"],["tags/Dijkstra/index.html","9f416bc762f136d6f5596f2c4c1d9e57"],["tags/NOIP/index.html","d101920550590b02e03be7ba723778f3"],["tags/STL/index.html","146c2675e6e1e433e363ee62a9658885"],["tags/USACO/index.html","c8c0705a30c29f62914cfbd7a4a9212e"],["tags/binary-search/index.html","700a6df7348d9984489cc90a1fbe1033"],["tags/binary-tree/index.html","dd5a971f3c5b2245f07c3dd72b507a46"],["tags/completely-knapsack/index.html","4e6ee5ed37c7da661ee7846bdc33627f"],["tags/data-structure/index.html","00f055395f5f8165cbdb2e8058d3089d"],["tags/discretized/index.html","9b90ac5fa5ce587bb214c58818ec888a"],["tags/graph/index.html","392afc10a609d4ecea6c79d34b740a81"],["tags/high-precision/index.html","c1327ef695e4b0b0413acc95f1610863"],["tags/index.html","d86048cab97f755d1cb245647c19769f"],["tags/knapsack/index.html","8bf06d39767eb6083168d3852486d736"],["tags/math/index.html","4cf1dd66021958ae8f04cdb02d83cba7"],["tags/prefix-sum/index.html","4d94b183fa3e3abad4e4f6dba2cdc9e3"],["tags/preliminary-contest/index.html","ccfcc4e6852a7ca5bda5fb7b070c7d2a"],["tags/quick-pow/index.html","527a63df29268df3c13e8dbc5042242a"],["tags/redouble/index.html","016479df61cd488c41c91966552b2a26"],["tags/search/index.html","550f73c48ab40ca5018b9a7a3e6a1bc3"],["tags/segment-tree/index.html","725042d93bbfdae3ae890890c25dfadf"],["tags/shortest-path/index.html","b505d7bcf744233c1e41fa4478db508e"],["tags/string/index.html","4c6b8be86520daef0a733766c19eef00"],["tags/trie-tree/index.html","0e3586825ad76ebb1950dce90fb7f866"]];
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








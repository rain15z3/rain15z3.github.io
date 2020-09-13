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

var precacheConfig = [["about/index.html","228f8507e8f73a6680c08adcde5db7cd"],["archives/2020/08/index.html","52585dac36646838c79b9729386fa34e"],["archives/2020/08/page/2/index.html","f57e6e241ca9a7ccc6eaaadd7436d911"],["archives/2020/09/index.html","20537b440493cf67f1ffbce5e613df58"],["archives/2020/index.html","92bde6005d7b6a7a5c9663c1bef4f25b"],["archives/2020/page/2/index.html","a09b53a8f029f738e4423cd7d9428625"],["archives/index.html","8c1dc0a0c0940e06b5ea00108e47b051"],["archives/page/2/index.html","8c1dc0a0c0940e06b5ea00108e47b051"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["bangumis/index.html","dbfe5d6f4de898aa5f36a05a38d1c561"],["categories/algorithm-note/index.html","819afc8af02eadafc756cfc06c972d41"],["categories/algorithm-soultion/index.html","53cf63b521498e574bae87b1ae24704d"],["categories/algorithm-template/index.html","a75200d75279e2fbd4ae2f09098ed4a4"],["categories/index.html","739a8ba865e90432aeb7496817055778"],["css/style.css","b7480a1f11e56214e1b1dbb934aff838"],["css/user.css","f46d045ad23169d467386b6e52d8e04d"],["images/face.jpg","d1efbdab5b8515434d314ca3b889b0a3"],["index.html","2a86368058d537c5d3ab072619ee7617"],["js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["js/app.js","41f083b2dc9f597949663e71f56b9f7b"],["js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["js/funnytitle.js","c216c937ead9ab350501effd8ab639ae"],["js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["movies/index.html","a13d2e85b5452dcd1a042e2309ad8f7b"],["page/2/index.html","cb193e206dae965958b3b63e79a2a67a"],["photos/index.html","7206b2aef668fbbc7d466ee29d6cdf9a"],["posts/algorithm-note/algorithmic-learning-notes.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/algorithm-note/knapsack.html","05a608d16fde256acba38e3f96c1a508"],["posts/algorithm-soultion/noip2000-sys-convert.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/algorithm-soultion/noip2003-table-tennis.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/algorithm-soultion/noip2005-school-tree.html","9a2e84620d058f090cf5831141c5bc90"],["posts/algorithm-soultion/usaco-the-angry-bull.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/algorithm-template/high-precision-template.html","5122a91e7cf31d36788dab371b99589b"],["posts/algorithm-template/segment-tree.html","94d6f260e3d6202dd41270c9697437bb"],["posts/algorithm-template/tamplate-twophase-bfs.html","95090ff9dfd80c0c4ebc65f89acd7399"],["posts/algorithm-template/template-quick-pow.html","9b9afeb334649ffd0ce24217703f0d89"],["posts/algorithm-template/trie-tree.html","d41d8cd98f00b204e9800998ecf8427e"],["progress/index.html","e0e12542952b8c94c41d10597e0621ef"],["shuoshuo/index.html","22fe0ca1ec67c15b6467f233db1f4f68"],["sw-register.js","6dc39da6bf107f7418f76a8fb39e6743"],["sw.js","22780cc8f59711a92f633eb86f8c1171"],["tags/01-knapsack/index.html","daa3084f08d4e497b1a404f84821ab84"],["tags/DP/index.html","3bcf9921efc4e895cc6214e7f3bc1cc2"],["tags/NOIP/index.html","81ea4722948c59e5b5ec350aadd9eb6d"],["tags/STL/index.html","6d67d102d5fa89dd341a5e0ecb7a4c88"],["tags/USACO/index.html","c4cc2df8b308c1f296715beddc02317b"],["tags/binary-search/index.html","4e625192ea88f662ef950be6d265a29a"],["tags/binary-tree/index.html","a73698054641356a6f8777abd3dd3506"],["tags/completely-knapsack/index.html","78792cd0afac939aa38a80e934ef959b"],["tags/data-structure/index.html","5007671f02712e22b1331a3635e65e1c"],["tags/discretized/index.html","ef8b2140ec7ebb09f75e60e074c876e8"],["tags/high-precision/index.html","f4a9b86eead0a60c2a4d9bb1995d1e6e"],["tags/index.html","de224b1664bb42e6cb6408f90ffd3324"],["tags/knapsack/index.html","05f2bed1f46921bbd48b7f63bed68b7b"],["tags/math/index.html","bef16bdcca6a8ccfd55d4c3b25dd585e"],["tags/prefix-sum/index.html","fea51cec65c5adb1cdf97e10de243c14"],["tags/preliminary-contest/index.html","10858d9d5490580f4f2c4c4ce3c784a9"],["tags/quick-pow/index.html","c563249257a198185aff42cd44ac6a86"],["tags/redouble/index.html","44edef20e5061d56be361e8e4775bccf"],["tags/search/index.html","db9daf648126dee71037b7ff8e8d6428"],["tags/segment-tree/index.html","9d4b21ce8a3e7b5e7284b1ff7a6014e8"],["tags/string/index.html","b509462abc617d15b00458ec5769b656"],["tags/trie-tree/index.html","8dc071e29c35a73e511a5a04efa6aef8"]];
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








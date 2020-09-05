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

var precacheConfig = [["about/index.html","8cf5664bb1a5c381c3bff8344e94ff3a"],["archives/2020/08/index.html","12914b3bffba3b15648a90a4685a3761"],["archives/2020/08/page/2/index.html","0216d33dc674272633907f848d61e59e"],["archives/2020/09/index.html","e9703fc4b229014a0397b543f79b889c"],["archives/2020/index.html","25958b0844c20400f5670a01f8d312ab"],["archives/2020/page/2/index.html","606be8a3298232edd1a45c636173ab3f"],["archives/index.html","72852c2d999b555da751c674e571f762"],["archives/page/2/index.html","72852c2d999b555da751c674e571f762"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["bangumis/index.html","f34a0729777310fc2e90ea4219c2ca10"],["categories/algorithm-note/index.html","e34c488a69ba525ad2c892c07e767a4b"],["categories/algorithm-soultion/index.html","e4b8ac195011a4f0cb9f9b50e4eea6b7"],["categories/algorithm-template/index.html","7bbf0eece755aed165e5e847529cacc9"],["categories/index.html","f49e7869f4f893e809dee2e3121d8e8d"],["css/style.css","b7480a1f11e56214e1b1dbb934aff838"],["css/user.css","2b18772bb85c92e0b26108b6ae9dfcc0"],["friends/index.html","18f8911989bcfe6153db304d82f8cea9"],["index.html","1584a15e5f4a93c6d386cda5b6fc3b44"],["js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["js/app.js","41f083b2dc9f597949663e71f56b9f7b"],["js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["js/funnytitle.js","af4d0216afdebc217fbd2bdceab74eec"],["js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["page/2/index.html","f1d25b7c4bcf7c6430fb8d8476986c72"],["photos/index.html","6a3ccba9dfe9583eabfd25a80bb4da96"],["posts/algorithm-note/algorithmic-learning-notes.html","8aba9dd738d054abd07b47eba4b141a1"],["posts/algorithm-note/knapsack.html","b34931f0779e78112df52801f0d26ffb"],["posts/algorithm-soultion/noip2000-sys-convert.html","72e8a1731a759c2a0658ef6b20dff85d"],["posts/algorithm-soultion/noip2003-table-tennis.html","6c13e10d87a1258b435e165d8969ea31"],["posts/algorithm-soultion/noip2005-school-tree.html","1e52753533ee6f43a033e53f25e9271a"],["posts/algorithm-soultion/usaco-the-angry-bull.html","ca5966b5ab3e3b567e7d8e41acdd9e02"],["posts/algorithm-template/high-precision-template.html","574b471f279222aecfcb463db4c48a3d"],["posts/algorithm-template/segment-tree.html","ed46e8b84c9df4c1245e383a7631be60"],["posts/algorithm-template/tamplate-twophase-bfs.html","c4c9160604812e01e20031b5c7346ad4"],["posts/algorithm-template/template-quick-pow.html","fd6085eb080796a8ead430e52fd69283"],["posts/algorithm-template/trie-tree.html","ecd00d3c64298987b3a67d72832984af"],["progress/index.html","a0d793c89908d5a08d5e14e3db2ac38d"],["shuoshuo/index.html","08b7892dd432b0ed332a830a303e038a"],["sw-register.js","a2534bb0f3cb98ef9fc78f7467cefebc"],["sw.js","5bca32db7b8d04fa3065e93eef28cce5"],["tags/01-knapsack/index.html","4a1649161c3e02aecc3417fe65d48f40"],["tags/DP/index.html","0a17739069c5a69ba7141c5e11e78d14"],["tags/NOIP/index.html","0be962cc45311a14510728f15b34491f"],["tags/STL/index.html","4e95949e09332ff767f18fa2165ce4e9"],["tags/USACO/index.html","cf6c2f8ccb2294567071ac2cfd9f2ccf"],["tags/binary-search/index.html","5352eade9a09e346538b2f19da4a920a"],["tags/binary-tree/index.html","4f3e84df47f1b160be105a1e0946aa06"],["tags/completely-knapsack/index.html","2c1bf5297c6a8b6e1c7b8a1170fc26fa"],["tags/data-structure/index.html","e4a6f221d4ca2b6e074355cef4bb63f1"],["tags/discretized/index.html","7f9dc94380363e04672c2dee66b5bbdc"],["tags/high-precision/index.html","e137cb82f573721c88af7ba25c2ea436"],["tags/index.html","8a2516214f4e2d269c6b7daa26136450"],["tags/knapsack/index.html","468c3b1b6c555b9b6db38206b61079a2"],["tags/math/index.html","fdcbd04abd2089d20b605266e9a6bc1a"],["tags/prefix-sum/index.html","299582972bf62f80f12e9e0e9a1bb673"],["tags/preliminary-contest/index.html","ab787db14a10ca674a4f3de1186d18a1"],["tags/quick-pow/index.html","080bb228e5f5b4df16cf20b8cf8a8beb"],["tags/redouble/index.html","4eea200fb015d80596d42de4ece9d44d"],["tags/search/index.html","347dfe075672f598a9a06a366a2a6663"],["tags/segment-tree/index.html","53e48b0736821c36d2ba151201660649"],["tags/string/index.html","4f1c6cdea36d55510b144c16f9795dd0"],["tags/trie-tree/index.html","4ab2b4375d40f1a07169387dc0348479"]];
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








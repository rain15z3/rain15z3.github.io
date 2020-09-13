/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","228f8507e8f73a6680c08adcde5db7cd"],["/archives/2020/08/index.html","52585dac36646838c79b9729386fa34e"],["/archives/2020/08/page/2/index.html","f57e6e241ca9a7ccc6eaaadd7436d911"],["/archives/2020/09/index.html","20537b440493cf67f1ffbce5e613df58"],["/archives/2020/index.html","92bde6005d7b6a7a5c9663c1bef4f25b"],["/archives/2020/page/2/index.html","a09b53a8f029f738e4423cd7d9428625"],["/archives/index.html","8c1dc0a0c0940e06b5ea00108e47b051"],["/archives/page/2/index.html","8c1dc0a0c0940e06b5ea00108e47b051"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","dbfe5d6f4de898aa5f36a05a38d1c561"],["/categories/algorithm-note/index.html","819afc8af02eadafc756cfc06c972d41"],["/categories/algorithm-soultion/index.html","53cf63b521498e574bae87b1ae24704d"],["/categories/algorithm-template/index.html","a75200d75279e2fbd4ae2f09098ed4a4"],["/categories/index.html","739a8ba865e90432aeb7496817055778"],["/css/style.css","b7480a1f11e56214e1b1dbb934aff838"],["/css/user.css","f46d045ad23169d467386b6e52d8e04d"],["/images/face.jpg","d1efbdab5b8515434d314ca3b889b0a3"],["/index.html","2a5bf4f0a2aaacd84bfbbf62b01f0c63"],["/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["/js/app.js","41f083b2dc9f597949663e71f56b9f7b"],["/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/funnytitle.js","c216c937ead9ab350501effd8ab639ae"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/movies/index.html","a13d2e85b5452dcd1a042e2309ad8f7b"],["/page/2/index.html","cb193e206dae965958b3b63e79a2a67a"],["/photos/index.html","7206b2aef668fbbc7d466ee29d6cdf9a"],["/posts/algorithm-note/algorithmic-learning-notes.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/algorithm-note/knapsack.html","05a608d16fde256acba38e3f96c1a508"],["/posts/algorithm-soultion/noip2000-sys-convert.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/algorithm-soultion/noip2003-table-tennis.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/algorithm-soultion/noip2005-school-tree.html","9a2e84620d058f090cf5831141c5bc90"],["/posts/algorithm-soultion/usaco-the-angry-bull.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/algorithm-template/high-precision-template.html","5122a91e7cf31d36788dab371b99589b"],["/posts/algorithm-template/segment-tree.html","94d6f260e3d6202dd41270c9697437bb"],["/posts/algorithm-template/tamplate-twophase-bfs.html","95090ff9dfd80c0c4ebc65f89acd7399"],["/posts/algorithm-template/template-quick-pow.html","9b9afeb334649ffd0ce24217703f0d89"],["/posts/algorithm-template/trie-tree.html","d41d8cd98f00b204e9800998ecf8427e"],["/progress/index.html","e0e12542952b8c94c41d10597e0621ef"],["/service-worker.js","24095dd3401b894cf56ba01ceedaeefa"],["/shuoshuo/index.html","22fe0ca1ec67c15b6467f233db1f4f68"],["/sw-register.js","6dc39da6bf107f7418f76a8fb39e6743"],["/tags/01-knapsack/index.html","daa3084f08d4e497b1a404f84821ab84"],["/tags/DP/index.html","3bcf9921efc4e895cc6214e7f3bc1cc2"],["/tags/NOIP/index.html","81ea4722948c59e5b5ec350aadd9eb6d"],["/tags/STL/index.html","6d67d102d5fa89dd341a5e0ecb7a4c88"],["/tags/USACO/index.html","c4cc2df8b308c1f296715beddc02317b"],["/tags/binary-search/index.html","4e625192ea88f662ef950be6d265a29a"],["/tags/binary-tree/index.html","a73698054641356a6f8777abd3dd3506"],["/tags/completely-knapsack/index.html","78792cd0afac939aa38a80e934ef959b"],["/tags/data-structure/index.html","5007671f02712e22b1331a3635e65e1c"],["/tags/discretized/index.html","ef8b2140ec7ebb09f75e60e074c876e8"],["/tags/high-precision/index.html","f4a9b86eead0a60c2a4d9bb1995d1e6e"],["/tags/index.html","de224b1664bb42e6cb6408f90ffd3324"],["/tags/knapsack/index.html","05f2bed1f46921bbd48b7f63bed68b7b"],["/tags/math/index.html","bef16bdcca6a8ccfd55d4c3b25dd585e"],["/tags/prefix-sum/index.html","fea51cec65c5adb1cdf97e10de243c14"],["/tags/preliminary-contest/index.html","10858d9d5490580f4f2c4c4ce3c784a9"],["/tags/quick-pow/index.html","c563249257a198185aff42cd44ac6a86"],["/tags/redouble/index.html","44edef20e5061d56be361e8e4775bccf"],["/tags/search/index.html","db9daf648126dee71037b7ff8e8d6428"],["/tags/segment-tree/index.html","9d4b21ce8a3e7b5e7284b1ff7a6014e8"],["/tags/string/index.html","b509462abc617d15b00458ec5769b656"],["/tags/trie-tree/index.html","8dc071e29c35a73e511a5a04efa6aef8"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */

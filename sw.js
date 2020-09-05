/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","8cf5664bb1a5c381c3bff8344e94ff3a"],["/archives/2020/08/index.html","12914b3bffba3b15648a90a4685a3761"],["/archives/2020/08/page/2/index.html","0216d33dc674272633907f848d61e59e"],["/archives/2020/09/index.html","e9703fc4b229014a0397b543f79b889c"],["/archives/2020/index.html","25958b0844c20400f5670a01f8d312ab"],["/archives/2020/page/2/index.html","606be8a3298232edd1a45c636173ab3f"],["/archives/index.html","72852c2d999b555da751c674e571f762"],["/archives/page/2/index.html","72852c2d999b555da751c674e571f762"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","f34a0729777310fc2e90ea4219c2ca10"],["/categories/algorithm-note/index.html","e34c488a69ba525ad2c892c07e767a4b"],["/categories/algorithm-soultion/index.html","e4b8ac195011a4f0cb9f9b50e4eea6b7"],["/categories/algorithm-template/index.html","7bbf0eece755aed165e5e847529cacc9"],["/categories/index.html","f49e7869f4f893e809dee2e3121d8e8d"],["/css/style.css","b7480a1f11e56214e1b1dbb934aff838"],["/css/user.css","2b18772bb85c92e0b26108b6ae9dfcc0"],["/friends/index.html","18f8911989bcfe6153db304d82f8cea9"],["/index.html","cecb0936a115b87802e1913beb05bbc1"],["/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["/js/app.js","41f083b2dc9f597949663e71f56b9f7b"],["/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/funnytitle.js","af4d0216afdebc217fbd2bdceab74eec"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/page/2/index.html","f1d25b7c4bcf7c6430fb8d8476986c72"],["/photos/index.html","6a3ccba9dfe9583eabfd25a80bb4da96"],["/posts/algorithm-note/algorithmic-learning-notes.html","8aba9dd738d054abd07b47eba4b141a1"],["/posts/algorithm-note/knapsack.html","b34931f0779e78112df52801f0d26ffb"],["/posts/algorithm-soultion/noip2000-sys-convert.html","72e8a1731a759c2a0658ef6b20dff85d"],["/posts/algorithm-soultion/noip2003-table-tennis.html","6c13e10d87a1258b435e165d8969ea31"],["/posts/algorithm-soultion/noip2005-school-tree.html","1e52753533ee6f43a033e53f25e9271a"],["/posts/algorithm-soultion/usaco-the-angry-bull.html","ca5966b5ab3e3b567e7d8e41acdd9e02"],["/posts/algorithm-template/high-precision-template.html","574b471f279222aecfcb463db4c48a3d"],["/posts/algorithm-template/segment-tree.html","ed46e8b84c9df4c1245e383a7631be60"],["/posts/algorithm-template/tamplate-twophase-bfs.html","c4c9160604812e01e20031b5c7346ad4"],["/posts/algorithm-template/template-quick-pow.html","fd6085eb080796a8ead430e52fd69283"],["/posts/algorithm-template/trie-tree.html","ecd00d3c64298987b3a67d72832984af"],["/progress/index.html","a0d793c89908d5a08d5e14e3db2ac38d"],["/service-worker.js","51a15c317b9ea2e893c488e240ad3350"],["/shuoshuo/index.html","08b7892dd432b0ed332a830a303e038a"],["/sw-register.js","a2534bb0f3cb98ef9fc78f7467cefebc"],["/tags/01-knapsack/index.html","4a1649161c3e02aecc3417fe65d48f40"],["/tags/DP/index.html","0a17739069c5a69ba7141c5e11e78d14"],["/tags/NOIP/index.html","0be962cc45311a14510728f15b34491f"],["/tags/STL/index.html","4e95949e09332ff767f18fa2165ce4e9"],["/tags/USACO/index.html","cf6c2f8ccb2294567071ac2cfd9f2ccf"],["/tags/binary-search/index.html","5352eade9a09e346538b2f19da4a920a"],["/tags/binary-tree/index.html","4f3e84df47f1b160be105a1e0946aa06"],["/tags/completely-knapsack/index.html","2c1bf5297c6a8b6e1c7b8a1170fc26fa"],["/tags/data-structure/index.html","e4a6f221d4ca2b6e074355cef4bb63f1"],["/tags/discretized/index.html","7f9dc94380363e04672c2dee66b5bbdc"],["/tags/high-precision/index.html","e137cb82f573721c88af7ba25c2ea436"],["/tags/index.html","8a2516214f4e2d269c6b7daa26136450"],["/tags/knapsack/index.html","468c3b1b6c555b9b6db38206b61079a2"],["/tags/math/index.html","fdcbd04abd2089d20b605266e9a6bc1a"],["/tags/prefix-sum/index.html","299582972bf62f80f12e9e0e9a1bb673"],["/tags/preliminary-contest/index.html","ab787db14a10ca674a4f3de1186d18a1"],["/tags/quick-pow/index.html","080bb228e5f5b4df16cf20b8cf8a8beb"],["/tags/redouble/index.html","4eea200fb015d80596d42de4ece9d44d"],["/tags/search/index.html","347dfe075672f598a9a06a366a2a6663"],["/tags/segment-tree/index.html","53e48b0736821c36d2ba151201660649"],["/tags/string/index.html","4f1c6cdea36d55510b144c16f9795dd0"],["/tags/trie-tree/index.html","4ab2b4375d40f1a07169387dc0348479"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","9ede08fe8d2e134d00ceae7cecefd676"],["/archives/2020/08/index.html","110541fbdbed614bee2bba98b169c897"],["/archives/2020/08/page/2/index.html","b011756e2d634f840bd276100f3c7350"],["/archives/2020/09/index.html","6dcbc70af25a665f85f2d2d2afb94027"],["/archives/2020/index.html","2ce8e8a17c5a9c2cb8c7f8cd347d69af"],["/archives/2020/page/2/index.html","a0000c0062a5e042821fb70f4579838a"],["/archives/index.html","7e586b7d670373f34bac17ed4555b97e"],["/archives/page/2/index.html","7e586b7d670373f34bac17ed4555b97e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","04b15c1d97c653320608a829218311d0"],["/categories/algorithm-note/index.html","b52b0528480a1cead0c564417439be8d"],["/categories/algorithm-soultion/index.html","dc66e1539b401906486b76b542237180"],["/categories/algorithm-template/index.html","71cd0826c4cd538774c631439b3eaba5"],["/categories/index.html","6e9f2711b6f76d6a934250271daeb974"],["/css/style.css","b7480a1f11e56214e1b1dbb934aff838"],["/css/user.css","648808b3b876998cdbc43ee193016410"],["/friends/index.html","9c10211eacf47793e3a2f260319392e6"],["/images/face.jpg","d1efbdab5b8515434d314ca3b889b0a3"],["/index.html","b0f7483399cac0e39b514a5fad114918"],["/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["/js/app.js","41f083b2dc9f597949663e71f56b9f7b"],["/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/funnytitle.js","af4d0216afdebc217fbd2bdceab74eec"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/page/2/index.html","53acdab14544ddc3008e10381ff28ede"],["/photos/index.html","7024941a770cf15137195c921c0bce0b"],["/posts/algorithm-note/algorithmic-learning-notes.html","d537c7f802ef72ef3763f8dd1a3c2251"],["/posts/algorithm-note/knapsack.html","a9e49b1a0590c10a22799029ecbcdadc"],["/posts/algorithm-soultion/cf1419a-digit-game.html","1253e1c198c7359fc138be6ac22c0244"],["/posts/algorithm-soultion/noip2000-sys-convert.html","6bbd3c5e37919cebc86cab105b48192b"],["/posts/algorithm-soultion/noip2003-table-tennis.html","87341e487aaffc6d687f92b5c2370d62"],["/posts/algorithm-soultion/noip2005-school-tree.html","f98fd237d184b478226a735025c55cd8"],["/posts/algorithm-soultion/usaco-the-angry-bull.html","a487dd61cabcbd5d5ff954f27f734edf"],["/posts/algorithm-template/dijkstra.html","4b9c1e702148f9d5968ef14f2acd3b83"],["/posts/algorithm-template/high-precision-template.html","8e3bb03f842d6c818a5822db7c051d93"],["/posts/algorithm-template/segment-tree.html","4e78600c85da5cf73aa0c16362d51332"],["/posts/algorithm-template/tamplate-twophase-bfs.html","f8bbf0e616386239c2bc68d7d16a4424"],["/posts/algorithm-template/template-quick-pow.html","602ad1e8fb18eb6cfe035e7da684a41e"],["/posts/algorithm-template/trie-tree.html","a6eba39448409453145ca4f09b156a2b"],["/progress/index.html","01f4dd45e59a5644925f3a7faf71d370"],["/service-worker.js","e770e2e6e06125532ba033f9746310b6"],["/shuoshuo/index.html","1006aa23a96797ddbfefb1c63f6b6426"],["/sw-register.js","49229a1df4c043ac850af500877e2eb7"],["/tags/01-knapsack/index.html","9aa9da3a1b86f92b0798963421a96154"],["/tags/Codeforces/index.html","4fd8ab9216e80f01bddf6d2695fb4e2d"],["/tags/DP/index.html","bcfe4d711239b0502a749fb51944afe4"],["/tags/Dijkstra/index.html","4549269b8837314e867845c48d64c0d6"],["/tags/NOIP/index.html","f0ece01c13275928ab551d31e9f58f4a"],["/tags/STL/index.html","88c5c668b950852d915d6a379457a815"],["/tags/USACO/index.html","8566ec7e062b5131b49cb40a30bf10e3"],["/tags/binary-search/index.html","c59ddaeaa4bff7f810c43741b74e3f75"],["/tags/binary-tree/index.html","8c8294a3f866155c03b32855c95cbabb"],["/tags/completely-knapsack/index.html","091d4bfbc3d9327d19c3ede96af0e970"],["/tags/data-structure/index.html","aa60518f917b599b1ffa1901ac9af2ee"],["/tags/discretized/index.html","8e67777b143dbce30185a4f0b23b8d28"],["/tags/graph/index.html","3982cea24294f75b4f844b5d22a63544"],["/tags/high-precision/index.html","d016708a33fdf46742c40056e6ac581d"],["/tags/index.html","541476c100f1730a76c1d28b6a48c504"],["/tags/knapsack/index.html","544c8d4750b8e5fc1e77d15ff4bf9bee"],["/tags/math/index.html","492b463eca1386dcf8c9533b75dae38b"],["/tags/prefix-sum/index.html","b52ba37a16c7d606fe6ea75250af2d6d"],["/tags/preliminary-contest/index.html","327faad373612e4ae8c671d2ee71e34f"],["/tags/quick-pow/index.html","2c46927515d7849d6538f9342a8fcf8d"],["/tags/redouble/index.html","63b94b12cb934b7712761ea1d409e541"],["/tags/search/index.html","3a12e31dd6b579ccb08a22f8a0f3a8ae"],["/tags/segment-tree/index.html","a6c9bbf5545b3b84837a80f48fadb878"],["/tags/shortest-path/index.html","5db9d60b7c9e89cf13150d769e8ab97f"],["/tags/string/index.html","2f8942e3014678418d962bd4d45f3028"],["/tags/trie-tree/index.html","5875792f35921decd2825a1a3b3a893b"]];
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

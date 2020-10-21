/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","84cb7afa9ebd2faa27aae669ecb275a6"],["/archives/2020/08/index.html","d1ada6a4f328238501160d81515915ce"],["/archives/2020/08/page/2/index.html","9cf8debbdc4e261d8c31710cd02a1d05"],["/archives/2020/09/index.html","442392a2c9f05f11e82c2d9d27a43c3f"],["/archives/2020/index.html","756b84fc404dab37ba4439941213fa3a"],["/archives/2020/page/2/index.html","35790f1fdda1ef9094346fdaad82efb7"],["/archives/index.html","2f82eb06c84e08d7266cf3b57ede427f"],["/archives/page/2/index.html","2f82eb06c84e08d7266cf3b57ede427f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","3c7cc7f10e0f2cfb21d07d7b2ef6ef65"],["/categories/algorithm-note/index.html","02c1923bd04f31410e95ea5630869e25"],["/categories/algorithm-soultion/index.html","0436a0c9424f6a2ce4da3c000dc2adfb"],["/categories/algorithm-template/index.html","baaa73b82c9d17de466e52171e187b50"],["/categories/index.html","f568f51038a4909d8f7dc4989da06a18"],["/css/style.css","b7480a1f11e56214e1b1dbb934aff838"],["/css/user.css","f46d045ad23169d467386b6e52d8e04d"],["/friends/index.html","aa9b2a0a5617dea9c2fc8449a94e54b1"],["/images/face.jpg","d1efbdab5b8515434d314ca3b889b0a3"],["/index.html","ce1108f26211f6152de373991e114c92"],["/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["/js/app.js","41f083b2dc9f597949663e71f56b9f7b"],["/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/funnytitle.js","c216c937ead9ab350501effd8ab639ae"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/movies/index.html","dc5737889f8c6f44cb6f46c2c6a1d854"],["/page/2/index.html","f9264b19039cde9e1ffaa7d9ec26f757"],["/photos/index.html","a7f617076beb51a482138634185b5c0f"],["/posts/algorithm-note/algorithmic-learning-notes.html","4af1f89a3bf0f8e032ac5b8395db731e"],["/posts/algorithm-note/knapsack.html","29efa241b65b17cb4d38761b57a40afc"],["/posts/algorithm-soultion/cf1419a-digit-game.html","3e8b2426e313ace70abc25a4e79c3ec8"],["/posts/algorithm-soultion/noip2000-sys-convert.html","7a8bf288ad35c2db7077b8520d3abd2d"],["/posts/algorithm-soultion/noip2003-table-tennis.html","7e08b3e522e9806f338c9c00bacb48fe"],["/posts/algorithm-soultion/noip2005-school-tree.html","e2c342ca693f0ca35beb6eabef9c76b4"],["/posts/algorithm-soultion/usaco-the-angry-bull.html","9118cb7d6b56a4da242148a5cc399465"],["/posts/algorithm-template/dijkstra.html","12986ccd22491bea49d81e11adf47641"],["/posts/algorithm-template/high-precision-template.html","dc8ee24510a02c923d594aa6d6571c9a"],["/posts/algorithm-template/segment-tree.html","0baf08c425f9a301f1d27c10e8d951b3"],["/posts/algorithm-template/tamplate-twophase-bfs.html","caa1918b8fd67ca258cef5f02e26c97e"],["/posts/algorithm-template/template-quick-pow.html","ba48c1c26fd90fb9b5f2dbd6c4ae4d02"],["/posts/algorithm-template/trie-tree.html","7b87830e1d67c9d46b9b7812ba6fb8dd"],["/progress/index.html","c118b1d4c69af51b84689b28d826698b"],["/service-worker.js","fe745b841d0ca6658e6829cd33e38afd"],["/shuoshuo/index.html","b7111ddadcb4ce15c8f105b7db74e230"],["/sw-register.js","aac8d38ce185b5547c7bcfef7b76747e"],["/tags/01-knapsack/index.html","9151bf551d76352f2afe66ac807fd643"],["/tags/Codeforces/index.html","b4f79a5264171f0c2b828f050501d16f"],["/tags/DP/index.html","02af0295cb806e58ed3c7e1e8d4b228f"],["/tags/Dijkstra/index.html","9f416bc762f136d6f5596f2c4c1d9e57"],["/tags/NOIP/index.html","d101920550590b02e03be7ba723778f3"],["/tags/STL/index.html","146c2675e6e1e433e363ee62a9658885"],["/tags/USACO/index.html","c8c0705a30c29f62914cfbd7a4a9212e"],["/tags/binary-search/index.html","700a6df7348d9984489cc90a1fbe1033"],["/tags/binary-tree/index.html","dd5a971f3c5b2245f07c3dd72b507a46"],["/tags/completely-knapsack/index.html","4e6ee5ed37c7da661ee7846bdc33627f"],["/tags/data-structure/index.html","00f055395f5f8165cbdb2e8058d3089d"],["/tags/discretized/index.html","9b90ac5fa5ce587bb214c58818ec888a"],["/tags/graph/index.html","392afc10a609d4ecea6c79d34b740a81"],["/tags/high-precision/index.html","c1327ef695e4b0b0413acc95f1610863"],["/tags/index.html","d86048cab97f755d1cb245647c19769f"],["/tags/knapsack/index.html","8bf06d39767eb6083168d3852486d736"],["/tags/math/index.html","4cf1dd66021958ae8f04cdb02d83cba7"],["/tags/prefix-sum/index.html","4d94b183fa3e3abad4e4f6dba2cdc9e3"],["/tags/preliminary-contest/index.html","ccfcc4e6852a7ca5bda5fb7b070c7d2a"],["/tags/quick-pow/index.html","527a63df29268df3c13e8dbc5042242a"],["/tags/redouble/index.html","016479df61cd488c41c91966552b2a26"],["/tags/search/index.html","550f73c48ab40ca5018b9a7a3e6a1bc3"],["/tags/segment-tree/index.html","725042d93bbfdae3ae890890c25dfadf"],["/tags/shortest-path/index.html","b505d7bcf744233c1e41fa4478db508e"],["/tags/string/index.html","4c6b8be86520daef0a733766c19eef00"],["/tags/trie-tree/index.html","0e3586825ad76ebb1950dce90fb7f866"]];
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

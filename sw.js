/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","5b31f5854accb39471b455b641d49e77"],["/archives/2020/08/index.html","1ef79f968f9c504930d0f99d29d7e1c1"],["/archives/2020/09/index.html","4af57ea7937568bfc239cd6affc4681f"],["/archives/2020/index.html","ff76c1ff2817299398598578334d6676"],["/archives/2020/page/2/index.html","63f135803d39fd39ccd504b63e78484d"],["/archives/index.html","2465f8a82080307e81e1f8561b397ce3"],["/archives/page/2/index.html","2465f8a82080307e81e1f8561b397ce3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","8076fc21509c2d0c34007efd43f52d6d"],["/categories/algorithm-note/index.html","6ef907bb8c88f6c4a942b98f0b209f22"],["/categories/algorithm-solution/index.html","6872f5063518cca9992f36319c1317cf"],["/categories/algorithm-template/index.html","2c39a498a5e4218c1b1b96acadd49298"],["/categories/index.html","ed2b0c8352c8ef23fdfe55c19da00e73"],["/css/style.css","b7480a1f11e56214e1b1dbb934aff838"],["/css/user.css","f46d045ad23169d467386b6e52d8e04d"],["/friends/index.html","6b93ff9da6d61355ec89b8d3e7f01220"],["/index.html","8e26918169ad7fc8ff97338e63922468"],["/js/Message.js","537e2e01cf5f1be597d522d1f5f3b691"],["/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["/js/app.js","41f083b2dc9f597949663e71f56b9f7b"],["/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/funnytitle.js","c216c937ead9ab350501effd8ab639ae"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/page/2/index.html","d5ac9f24a99f1d1a8caa36e42e3e2a1a"],["/photos/index.html","a89f2a2644a91e39980ea78b4c9221e9"],["/posts/algorithm-note/01-backpack.html","eed7e087771efdd4ef1525ddff72792f"],["/posts/algorithm-note/algorithmic-learning-notes.html","bf064dc9b6471ed604dd8ddbb9323db5"],["/posts/algorithm-solution/noip2000-sys-convert.html","617d1587643a526d5a3fc57654ff782d"],["/posts/algorithm-solution/noip2003-table-tennis.html","2de8119eca5621a1923bd50df6ed62e6"],["/posts/algorithm-solution/noip2005-school-tree.html","c1e0d832d8feed56bc75bac4b095e15b"],["/posts/algorithm-solution/usaco-the-angry-bull.html","91bedb0ca9d13d3a62a88be04fb4697c"],["/posts/algorithm-template/high-precision-template.html","b3702207ed2df278d11999fd1d6e1f09"],["/posts/algorithm-template/segment-tree.html","190a2c01c64cbb7c51a1384a20bdd793"],["/posts/algorithm-template/tamplate-twophase-bfs.html","98234994f6dd6db3372234693a5a4c3e"],["/posts/algorithm-template/template-quick-pow.html","4625f99e6f718cf9e58cefe0c9ddf264"],["/posts/algorithm-template/trie-tree.html","68929baef7452b4556e7334608d376fd"],["/progress/index.html","d55976e3c7676772650210a0b9535447"],["/service-worker.js","09a6211651ebbfcde23d304b6dce5956"],["/shuoshuo/index.html","f87d2cbede6fb16ea4daeffc94e9bb6e"],["/sw-register.js","56fac06109fdffc5b48163c6f7559f39"],["/tags/DP/index.html","05bc6f9d8cb1ab96de1cc6df764c09f0"],["/tags/NOIP/index.html","b029d4e571f6ea8cdc7ec1cf88bfa7bc"],["/tags/STL/index.html","698ec9854a61ab6af6dae903c924dada"],["/tags/USACO/index.html","655bce66a852539ddd09e4ce40fdd102"],["/tags/backpack/index.html","4ce0e8a2c89983440e603743bcd7a08d"],["/tags/binary-search/index.html","6b1bac176e8fd9999a33f642b1445999"],["/tags/binary-tree/index.html","faa50d08bb13ed79624613a73b8a667a"],["/tags/data-structure/index.html","6005fb37b628494f5662d2208a8a1e5a"],["/tags/discretized/index.html","dc50c8ceb9b412774c99766eeff671d6"],["/tags/high-precision/index.html","d5a404e396a84077809f2265b1199f1c"],["/tags/index.html","11988bd0795e49f15ebbe683b47ae158"],["/tags/math/index.html","9710dfbfc0f9386028bd6eef64694214"],["/tags/prefix-sum/index.html","dcb6ea9ee05fc785761af8f2481728cc"],["/tags/preliminary-contest/index.html","9ed54ff73581d013c08860b7c0bc64e0"],["/tags/quick-pow/index.html","e2df8dba3b9c49d3651e9b275fca4020"],["/tags/redouble/index.html","2fc96b764eea868f1b7444a45b3aeb18"],["/tags/search/index.html","7e2c5438caa4f2202cdd818f5f5f7988"],["/tags/segment-tree/index.html","7894bcf1f7358d038bb1e27b9cdf23a2"],["/tags/string/index.html","4c0814a9a51a386aef316006432ecadc"],["/tags/trie-tree/index.html","ec4727490e74a564fef41e123773c792"]];
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

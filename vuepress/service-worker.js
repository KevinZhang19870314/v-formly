/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7443de43b539076a583cd21451f31946"
  },
  {
    "url": "assets/css/0.styles.66e4ad9e.css",
    "revision": "e45671ee10fad68ed4a55ab18a3b30b0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8615edfd.js",
    "revision": "60ebc7de6cab03caf58fdccfc37d3c4a"
  },
  {
    "url": "assets/js/11.0f09ea36.js",
    "revision": "c1eefe7ebda4f9a9d71cb9ebf6a6b90a"
  },
  {
    "url": "assets/js/12.2d8f3a1b.js",
    "revision": "5a08f1d772e011c1d9df81422216a650"
  },
  {
    "url": "assets/js/13.a7623c86.js",
    "revision": "d1a06d88963231409f3493f606dd488c"
  },
  {
    "url": "assets/js/14.b5c8a178.js",
    "revision": "c964ae5a20bea24511c82e222956fdca"
  },
  {
    "url": "assets/js/15.1780a1b9.js",
    "revision": "9daa1d00de462646d650b06700480557"
  },
  {
    "url": "assets/js/16.533bee0f.js",
    "revision": "e6393861cc6a7f13c3b0c49e47e06e89"
  },
  {
    "url": "assets/js/17.076929bd.js",
    "revision": "c0a8287e1611dae6374e81ed0845c8b2"
  },
  {
    "url": "assets/js/18.b743ffeb.js",
    "revision": "5d7e99207fca2d43d76e5f779990256f"
  },
  {
    "url": "assets/js/19.25c30f36.js",
    "revision": "36977075b438c4b398e7ecc1f5946df7"
  },
  {
    "url": "assets/js/2.afd545d0.js",
    "revision": "28068d4c0d961a783eadcb32dbbd2cdf"
  },
  {
    "url": "assets/js/20.be0f37ba.js",
    "revision": "5aa0f607c4ed9e8e09b97fbf0ad66b6f"
  },
  {
    "url": "assets/js/21.20f75e34.js",
    "revision": "38d87b0dbced5868fec916f0dcf4bfce"
  },
  {
    "url": "assets/js/22.bf9fdfa2.js",
    "revision": "87dc761d3cc29aacdd26f0f6d1f287ff"
  },
  {
    "url": "assets/js/23.c530d52c.js",
    "revision": "fdea1efa96b203f6832e5365d10e401e"
  },
  {
    "url": "assets/js/24.36c01343.js",
    "revision": "357d293bed7661da7d7195ff53b810d6"
  },
  {
    "url": "assets/js/25.0022864f.js",
    "revision": "9b8457aa9688991d1abc56cb59db0e6d"
  },
  {
    "url": "assets/js/26.6b175edf.js",
    "revision": "d03a5d590e761c366c656cbfd48ecdde"
  },
  {
    "url": "assets/js/27.6eab9f69.js",
    "revision": "f1c180da7188691d7d12e5390f2d5640"
  },
  {
    "url": "assets/js/28.fe728db8.js",
    "revision": "0a17b50a46ca57a16de25a4702fb640e"
  },
  {
    "url": "assets/js/29.28d07caa.js",
    "revision": "f90fa60b4afce911ee321ec88e77960e"
  },
  {
    "url": "assets/js/3.5b1102e4.js",
    "revision": "498f06d8b4c1b798d94221c1e55f927d"
  },
  {
    "url": "assets/js/30.d740fa1e.js",
    "revision": "b16462474eca245fad33430aea675e6f"
  },
  {
    "url": "assets/js/31.2e16a423.js",
    "revision": "845357471cccb177e060a664b0f2eee5"
  },
  {
    "url": "assets/js/32.683a4141.js",
    "revision": "74501d2e325aaa575325d5becb8c1e41"
  },
  {
    "url": "assets/js/33.2915a402.js",
    "revision": "9207f0e04aa62fa6530502dd089572af"
  },
  {
    "url": "assets/js/34.0a892f8b.js",
    "revision": "bba8338068ebf6cb25860d854f12a93c"
  },
  {
    "url": "assets/js/35.ac512ed9.js",
    "revision": "af9737a455adf576ce4c624e81fb4bc4"
  },
  {
    "url": "assets/js/36.06abacf6.js",
    "revision": "3d6c94db270e7cec2d187b5827da6589"
  },
  {
    "url": "assets/js/37.b407d963.js",
    "revision": "fd468a9e766023de9b80b83b493a080a"
  },
  {
    "url": "assets/js/38.8cdbbab6.js",
    "revision": "2a36da399b71f5f70ec18217a38071e2"
  },
  {
    "url": "assets/js/39.87e283d4.js",
    "revision": "6442398e9d6871b6ab6c9ff5df819d84"
  },
  {
    "url": "assets/js/4.f60135b8.js",
    "revision": "1a36a791e7ab44195c825e20cdc98d02"
  },
  {
    "url": "assets/js/40.f47def86.js",
    "revision": "8587cd41ca7ade9a88640e67771c4436"
  },
  {
    "url": "assets/js/41.7d04522c.js",
    "revision": "f390dd5c708647678c42819db06e8ec6"
  },
  {
    "url": "assets/js/42.95bf4671.js",
    "revision": "23a9595e3b3fa77f8159c864f25c68d0"
  },
  {
    "url": "assets/js/43.29930248.js",
    "revision": "99b770cf1f18d028d0bb1f452e0fbcd2"
  },
  {
    "url": "assets/js/44.ed284e5d.js",
    "revision": "bdf96472f6da934ac7b71607a9f19dbb"
  },
  {
    "url": "assets/js/45.6dd67ff0.js",
    "revision": "a59f79bb61f91de34514dc14ac458b39"
  },
  {
    "url": "assets/js/46.2daa6597.js",
    "revision": "e2bbc5c3b07501e68403dd4358829d25"
  },
  {
    "url": "assets/js/47.64db9007.js",
    "revision": "d999b24655eb1a10f6a7ecd612bb4906"
  },
  {
    "url": "assets/js/48.f1cd39a3.js",
    "revision": "0d76bfdff1e85ca293b8fb5756c9c84b"
  },
  {
    "url": "assets/js/49.6ff9836c.js",
    "revision": "9c442c5a1e3c84e4544c553e53af66f9"
  },
  {
    "url": "assets/js/5.e4d17fb8.js",
    "revision": "65e70a29926cc10fd675bf0455fbb9db"
  },
  {
    "url": "assets/js/50.efd2e173.js",
    "revision": "e640e8740fb33cebfb7aa1d1bb9dd55a"
  },
  {
    "url": "assets/js/51.5ac5eade.js",
    "revision": "5231ce51411e4798cf49a819239a8618"
  },
  {
    "url": "assets/js/52.5668409a.js",
    "revision": "a88a28c889de6275d2775cdcad20cc15"
  },
  {
    "url": "assets/js/53.ccd65970.js",
    "revision": "62f8d160d0b934b99e007ba8c7a4b164"
  },
  {
    "url": "assets/js/54.bee48aad.js",
    "revision": "370ec306c5ea527368728f9b9671ef88"
  },
  {
    "url": "assets/js/55.f3a3b0b1.js",
    "revision": "1d6b3f02a32b5c23f3f5638bcb594fe3"
  },
  {
    "url": "assets/js/56.ffcdb39d.js",
    "revision": "f05722d4bfa088b99d5b2104d330f5c2"
  },
  {
    "url": "assets/js/57.e787f663.js",
    "revision": "327df81c2bc7454cf8a7274f567c4400"
  },
  {
    "url": "assets/js/58.bdffefee.js",
    "revision": "4ee2be4e694ab10d7f7c2a7dcfac2fc1"
  },
  {
    "url": "assets/js/59.b997abb0.js",
    "revision": "36f3eb34ea29c151b39cc141d9c8c54f"
  },
  {
    "url": "assets/js/6.91520b9e.js",
    "revision": "e20f52e93fe36cee3e2f56ab9c19a0fb"
  },
  {
    "url": "assets/js/7.3b88ca7e.js",
    "revision": "f2b64d0ed9b7f73a5e7b470f7e70ae66"
  },
  {
    "url": "assets/js/8.e50d8de6.js",
    "revision": "a1fd48222e0e00643d0f998390e9af7c"
  },
  {
    "url": "assets/js/9.f14fa4cc.js",
    "revision": "637dd1847d5773ee9c5ff99a7676822a"
  },
  {
    "url": "components/array.html",
    "revision": "47a0cb7b216aeea78d645fd46ed47b82"
  },
  {
    "url": "components/autocomplete.html",
    "revision": "d307254df1ee960172cec66486ed7003"
  },
  {
    "url": "components/boolean.html",
    "revision": "b49f60f6177047b963be88746c45812a"
  },
  {
    "url": "components/checkbox.html",
    "revision": "d909522b2c9287d0af35782b0eb2ae39"
  },
  {
    "url": "components/custom-components.html",
    "revision": "32a9b2218528777a4d92ba37a27027d7"
  },
  {
    "url": "components/date.html",
    "revision": "7f9dee88952b2b71775f4755a522c234"
  },
  {
    "url": "components/index.html",
    "revision": "debf82602d25b88daea7460d7b0e98ac"
  },
  {
    "url": "components/number.html",
    "revision": "94d7b0e2901c6f6caa1b6b04457b54d5"
  },
  {
    "url": "components/object.html",
    "revision": "0ae8092b3a15f863b7d043164bfc5366"
  },
  {
    "url": "components/radio.html",
    "revision": "73a8c1605e053569786d8afdd5cae2df"
  },
  {
    "url": "components/rate.html",
    "revision": "d7d4a63c3384cf1b24a37b11946be546"
  },
  {
    "url": "components/select.html",
    "revision": "43eed69aeaf3fbec2cd869029f1c4eae"
  },
  {
    "url": "components/slider.html",
    "revision": "f7a1ee01176470d131d37cee96c9cadc"
  },
  {
    "url": "components/string.html",
    "revision": "3fcd8a75ea2cd33a81e5d281cb025de7"
  },
  {
    "url": "components/tag.html",
    "revision": "3c721b087a282b9db770b49398b55709"
  },
  {
    "url": "components/text.html",
    "revision": "29eb479d6a3b854cec85542276501708"
  },
  {
    "url": "components/textarea.html",
    "revision": "1671e35d64e9b0dcdfcea702b1d4f5b5"
  },
  {
    "url": "components/time.html",
    "revision": "b4115156fa101757f6f45ab7c58d7fed"
  },
  {
    "url": "guide/custom-validator.html",
    "revision": "4ce01e6ad2fd81ce00d604be1e538f08"
  },
  {
    "url": "guide/form.html",
    "revision": "e5d0be22a9a51197a041b4abfdba5bce"
  },
  {
    "url": "guide/index.html",
    "revision": "72bda9178f065dc224fe6fddee897078"
  },
  {
    "url": "guide/layout.html",
    "revision": "d356bd1bc86dcdcd8f4966e05cb794b4"
  },
  {
    "url": "guide/meta.html",
    "revision": "0201c5d15eb78329ccf438e521823df2"
  },
  {
    "url": "guide/terms.html",
    "revision": "4b96fff265fbbd7b077d5eab11fc5a53"
  },
  {
    "url": "hero.png",
    "revision": "6a972f5be277f420aa41307ac20a4526"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "d746ff3036a7bf7747917c6006a200f6"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "zh/components/array.html",
    "revision": "5aca65da4840e6f0dd6adc296b532c12"
  },
  {
    "url": "zh/components/autocomplete.html",
    "revision": "40cf29b69c62b473294f32ecc62c9e71"
  },
  {
    "url": "zh/components/boolean.html",
    "revision": "cdfbf82ad0e3d251d53026e6cb5ccd74"
  },
  {
    "url": "zh/components/checkbox.html",
    "revision": "ea4b69cfcfb2d177a1c8ea13b3a3804a"
  },
  {
    "url": "zh/components/custom-components.html",
    "revision": "4607a9c370ac9ff2c07891b70993f087"
  },
  {
    "url": "zh/components/date.html",
    "revision": "2b9c8d6f142832c5639f3fd9da9263fb"
  },
  {
    "url": "zh/components/index.html",
    "revision": "256b5d2738a6f5331a3a83eb4142dfd5"
  },
  {
    "url": "zh/components/number.html",
    "revision": "bab57bef703009a954e18062ac1592c9"
  },
  {
    "url": "zh/components/object.html",
    "revision": "609d3384737624707c3c80655301f586"
  },
  {
    "url": "zh/components/radio.html",
    "revision": "1e32696987ca39429e51a049f7da3611"
  },
  {
    "url": "zh/components/rate.html",
    "revision": "0e930a70df4217b19982ec53cb6211e4"
  },
  {
    "url": "zh/components/select.html",
    "revision": "bf75c7304088480ccfa71cb0127bc48f"
  },
  {
    "url": "zh/components/slider.html",
    "revision": "c5d6b08f94202d7250a26e6d8df9ad20"
  },
  {
    "url": "zh/components/string.html",
    "revision": "3fb5d291134ddf17574c0eb7828fa4ef"
  },
  {
    "url": "zh/components/tag.html",
    "revision": "fa0d308b60a64d0e0c9738ce10ede3bb"
  },
  {
    "url": "zh/components/text.html",
    "revision": "11de1bb34efa1065152dcf3ab11df6a5"
  },
  {
    "url": "zh/components/textarea.html",
    "revision": "b6f078225f89bbc10dcc6de1277fb2da"
  },
  {
    "url": "zh/components/time.html",
    "revision": "255dabc5ba39efcaf3abf8d0cff30aeb"
  },
  {
    "url": "zh/guide/custom-validator.html",
    "revision": "37a451e5ceb24313645cb52e320594fd"
  },
  {
    "url": "zh/guide/form.html",
    "revision": "dbb60619c63dd617eae7509f73cb9ae0"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "c42f1d68dcecd9f54d3b99eff8ed5aa9"
  },
  {
    "url": "zh/guide/layout.html",
    "revision": "e57de39690cee563df7dde42c2de406c"
  },
  {
    "url": "zh/guide/meta.html",
    "revision": "ec72b52cc02a42b2f908a2c18da43946"
  },
  {
    "url": "zh/guide/terms.html",
    "revision": "013f2e5cd57359d46e5797ecfdd3058d"
  },
  {
    "url": "zh/index.html",
    "revision": "215b07ddb39ce28a4aab349c4593d8b6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

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
    "revision": "8d5e586cfc454f18d063bf216fe287ed"
  },
  {
    "url": "assets/css/0.styles.9a50fe7b.css",
    "revision": "b38afb0a20e470d57eaf38e92d892c20"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f3af2c7e.js",
    "revision": "12da62e01e5e59b599f7aeef7d3018bc"
  },
  {
    "url": "assets/js/11.0a075dcf.js",
    "revision": "998f14704851ffcd42c1c9aea0a22eb1"
  },
  {
    "url": "assets/js/12.2d8f3a1b.js",
    "revision": "5a08f1d772e011c1d9df81422216a650"
  },
  {
    "url": "assets/js/13.6569ec20.js",
    "revision": "ba698adf436d7ff96f0ebd4b8db2d6ff"
  },
  {
    "url": "assets/js/14.87d18763.js",
    "revision": "0c0f0f8f9f0edaa51b381c240ab22be1"
  },
  {
    "url": "assets/js/15.a604f56d.js",
    "revision": "f69f9a350ac9c421630d9de937a33008"
  },
  {
    "url": "assets/js/16.7ed5eaf0.js",
    "revision": "364ffc8b7539c9f63459644d29d1de63"
  },
  {
    "url": "assets/js/17.013e25d6.js",
    "revision": "7518b2a2d72c8575229cb40bfc5464bf"
  },
  {
    "url": "assets/js/18.e721068a.js",
    "revision": "5828d6d1958af8085a4427fdf2985222"
  },
  {
    "url": "assets/js/19.574a17fd.js",
    "revision": "c266b3edb999897081f5e9324a928826"
  },
  {
    "url": "assets/js/2.a91276c0.js",
    "revision": "a10370fcda95c52ef625da91883cfc6c"
  },
  {
    "url": "assets/js/20.b2f613b1.js",
    "revision": "83e1a3a426ef1b5b66670099fa320895"
  },
  {
    "url": "assets/js/21.cea7bd6c.js",
    "revision": "cab86b8e6d2b330e177264740c97603e"
  },
  {
    "url": "assets/js/22.54f4f8db.js",
    "revision": "8beebdd0604c9077ef7489cb2aab5962"
  },
  {
    "url": "assets/js/23.209e2b56.js",
    "revision": "27209e9ec751645637d567a27d140253"
  },
  {
    "url": "assets/js/24.2c8f7404.js",
    "revision": "fc2249f4d80f5cbd6a8e05e4f1ef0b39"
  },
  {
    "url": "assets/js/25.645d498f.js",
    "revision": "669a8068410e00162127f5c8a420fcdc"
  },
  {
    "url": "assets/js/26.73095cb0.js",
    "revision": "6707cc6de78f0b80132f5394e759fc07"
  },
  {
    "url": "assets/js/27.57844455.js",
    "revision": "83c43e4ec77c002e212612120091824a"
  },
  {
    "url": "assets/js/28.3cca5f0f.js",
    "revision": "6a91382c6b3b47bd78146aaad52f07bd"
  },
  {
    "url": "assets/js/29.263c3edd.js",
    "revision": "23795652547a346a08fb38ef2ab0b9f0"
  },
  {
    "url": "assets/js/3.58cbf2d7.js",
    "revision": "32800ef57797c18ea743429725df618a"
  },
  {
    "url": "assets/js/30.ae36e2eb.js",
    "revision": "1f676ecfbf23c9e32d8559dbe5c46103"
  },
  {
    "url": "assets/js/31.beb6137a.js",
    "revision": "161011257f967021262f3b6ad083654b"
  },
  {
    "url": "assets/js/32.6f6576e9.js",
    "revision": "b3c39e3e62982a7001f3ba4d3bcafc77"
  },
  {
    "url": "assets/js/33.59ecf41f.js",
    "revision": "234d1e415a4d77a8cdf4dd01b91c0136"
  },
  {
    "url": "assets/js/34.c300de66.js",
    "revision": "30655d344c77283bf044c8279150d3a4"
  },
  {
    "url": "assets/js/35.9b19ee61.js",
    "revision": "08ed0f8b25f9af5487aa0a53684bbbe0"
  },
  {
    "url": "assets/js/36.cbf1cbf1.js",
    "revision": "ae7a80c65b5855e724d753a56ad50b0d"
  },
  {
    "url": "assets/js/37.015c4166.js",
    "revision": "a30c588af244d35adb6ca7521faf10f9"
  },
  {
    "url": "assets/js/38.719ffb12.js",
    "revision": "766dc957b4b9dfaf412f7cb788422e96"
  },
  {
    "url": "assets/js/39.f48f4781.js",
    "revision": "aeeaeb4da25e4d893611542bf7ef908f"
  },
  {
    "url": "assets/js/4.f60135b8.js",
    "revision": "1a36a791e7ab44195c825e20cdc98d02"
  },
  {
    "url": "assets/js/40.5c4fae45.js",
    "revision": "669d8a0f025ffe491e7d880c09f5d68f"
  },
  {
    "url": "assets/js/41.8cb436a4.js",
    "revision": "a963fe823b052b957aa7786d1a0279ac"
  },
  {
    "url": "assets/js/42.8a3e94c8.js",
    "revision": "5f3674e66072e21e130886c2f6d58d48"
  },
  {
    "url": "assets/js/43.1a54db8f.js",
    "revision": "53a9799fc2e3793afd8eae6226936081"
  },
  {
    "url": "assets/js/44.038d4633.js",
    "revision": "a72eb06b635d6e49e2c99cf2fdc18530"
  },
  {
    "url": "assets/js/45.a3b895ba.js",
    "revision": "99597958c5b77915532882f62ce6643d"
  },
  {
    "url": "assets/js/46.d957e853.js",
    "revision": "ea805d643d499da33a9e7c3406ff4aa8"
  },
  {
    "url": "assets/js/47.e4565bc1.js",
    "revision": "3ef836982ea28bf9be5e28ebdfa552b8"
  },
  {
    "url": "assets/js/48.fa01edaa.js",
    "revision": "ce4920e8b6157646db2c6c5529297676"
  },
  {
    "url": "assets/js/49.71bb300f.js",
    "revision": "3c9d9a1772339560b912188bd3c544eb"
  },
  {
    "url": "assets/js/5.2eca896c.js",
    "revision": "951f1552959cc9e89ea4a6deb415adec"
  },
  {
    "url": "assets/js/50.ab54def6.js",
    "revision": "8e646013ee6bc8b052d5e63bef264395"
  },
  {
    "url": "assets/js/51.3bef87c7.js",
    "revision": "89bbcfda0b573cf1f0efd608bafb61d7"
  },
  {
    "url": "assets/js/52.044e810c.js",
    "revision": "a0c0485ccec3e2e615a5825dc3670b66"
  },
  {
    "url": "assets/js/53.7bb7892b.js",
    "revision": "28915ea810557ad1452a938ad4348d14"
  },
  {
    "url": "assets/js/54.97506b09.js",
    "revision": "fc1750081f863c858ae3b5092027d195"
  },
  {
    "url": "assets/js/55.2d2baaef.js",
    "revision": "8ee86d9c9b756b265f5e7ad51d275363"
  },
  {
    "url": "assets/js/56.7bc5df16.js",
    "revision": "a6e21891791c1e61bfa965264973de3f"
  },
  {
    "url": "assets/js/57.2bceaf01.js",
    "revision": "3ec194f752b904066b1e876115881025"
  },
  {
    "url": "assets/js/58.dbd142ae.js",
    "revision": "5a1d1cddab20ae6adf24cc2119391e01"
  },
  {
    "url": "assets/js/59.d95bf8cf.js",
    "revision": "5f6172f2e7b1c2d36d4ae9d5c6dd67b2"
  },
  {
    "url": "assets/js/6.a1cc20c7.js",
    "revision": "fef9f6fed131e670590e3b6aaf28b126"
  },
  {
    "url": "assets/js/60.429536a3.js",
    "revision": "df175e4815028e0ce8a97287ebef8cda"
  },
  {
    "url": "assets/js/61.f53f778a.js",
    "revision": "d12f2f36003e01a4c9775333ad8dac44"
  },
  {
    "url": "assets/js/7.62d0d05a.js",
    "revision": "a29c8e02eff8f04a934fa8202cde1eec"
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
    "revision": "492ae8fbbea03b71c2023f071457c2ca"
  },
  {
    "url": "components/autocomplete.html",
    "revision": "e220c23675e35e257b973cb70e9a5db1"
  },
  {
    "url": "components/boolean.html",
    "revision": "7b4683d33f9a06a6733a53632101f592"
  },
  {
    "url": "components/cascader.html",
    "revision": "b9d8c3f4fb9006e484ca81e01447844e"
  },
  {
    "url": "components/checkbox.html",
    "revision": "a427bacc6dfbf348e06fbe9cdd157d52"
  },
  {
    "url": "components/custom-components.html",
    "revision": "63e163b81c11eb2ca5d6cb3e296d8f9e"
  },
  {
    "url": "components/date.html",
    "revision": "f586b17fc7abddfd0579379851407496"
  },
  {
    "url": "components/index.html",
    "revision": "ab0bb5c8f61ae2b5f2289bfa7e561ec7"
  },
  {
    "url": "components/number.html",
    "revision": "f3ecfb4d3f0623989b6841532c01b6d9"
  },
  {
    "url": "components/object.html",
    "revision": "b61824c5454d9533721ff383eaf72e66"
  },
  {
    "url": "components/radio.html",
    "revision": "cb35b713c48669fa52320fa38989f43b"
  },
  {
    "url": "components/rate.html",
    "revision": "09dbb022b920cc0c10e375692682bf74"
  },
  {
    "url": "components/select.html",
    "revision": "bd6ec56f3fbb22a9005485f757e15fe0"
  },
  {
    "url": "components/slider.html",
    "revision": "ffd2342df9f5369e5e651127bc71d609"
  },
  {
    "url": "components/string.html",
    "revision": "38f3efba98dc075938d85f74bedde7ad"
  },
  {
    "url": "components/tag.html",
    "revision": "68b15857dca9fec7ee29f8468b06e15e"
  },
  {
    "url": "components/text.html",
    "revision": "655bb29ae07febfff2a50a63862a4967"
  },
  {
    "url": "components/textarea.html",
    "revision": "6dd0994758b6134817e14f799a46d843"
  },
  {
    "url": "components/time.html",
    "revision": "88a1e4c199b58f0ec33bcbb2ff880114"
  },
  {
    "url": "guide/custom-validator.html",
    "revision": "4de52fb2a11bf09a2474f451337bd2e2"
  },
  {
    "url": "guide/form.html",
    "revision": "c219faa6bea4e93401f150a588923328"
  },
  {
    "url": "guide/index.html",
    "revision": "7de0839ed7d3d350fb0f551746858a26"
  },
  {
    "url": "guide/layout.html",
    "revision": "e86d727bf7d4e94df8d0617002ded3d5"
  },
  {
    "url": "guide/meta.html",
    "revision": "b87513805a908f2b507cc6e933a8745c"
  },
  {
    "url": "guide/terms.html",
    "revision": "78ec9e9df96804ba9e0db88e85d4fd82"
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
    "revision": "7492ee1043e07f05da76fa53927190f0"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "zh/components/array.html",
    "revision": "16bea16e21f283c25d6839e0fe393374"
  },
  {
    "url": "zh/components/autocomplete.html",
    "revision": "e97410d9cc26b53bf2b1b79787049943"
  },
  {
    "url": "zh/components/boolean.html",
    "revision": "f1f16edce53fc54bbb58e334626eaf08"
  },
  {
    "url": "zh/components/cascader.html",
    "revision": "c83a55352c47199e78239f561f1e07d6"
  },
  {
    "url": "zh/components/checkbox.html",
    "revision": "637154fbca5f0f33f0ca2338fcfea216"
  },
  {
    "url": "zh/components/custom-components.html",
    "revision": "d8a90672cb60e34efe4955a76712b42e"
  },
  {
    "url": "zh/components/date.html",
    "revision": "1a35aea7d7fb7c8a2cfeab370c2d452e"
  },
  {
    "url": "zh/components/index.html",
    "revision": "0b390facaa030bf712df020303661bca"
  },
  {
    "url": "zh/components/number.html",
    "revision": "09ce2e0d3cc21dcd45369985b6b63c36"
  },
  {
    "url": "zh/components/object.html",
    "revision": "a3bebde8094246385817b5dbee1c16fc"
  },
  {
    "url": "zh/components/radio.html",
    "revision": "2c24f0affd89d51be0a364a5a94dbe6c"
  },
  {
    "url": "zh/components/rate.html",
    "revision": "6effbcfbda284b77e0a657391b74eeec"
  },
  {
    "url": "zh/components/select.html",
    "revision": "d4f45bace94a1a53b62eff40317351ee"
  },
  {
    "url": "zh/components/slider.html",
    "revision": "0c5c4b55ddd78987eeffafe3b07e554c"
  },
  {
    "url": "zh/components/string.html",
    "revision": "4c63916bb50a8d0a150d6a60f47dd4f9"
  },
  {
    "url": "zh/components/tag.html",
    "revision": "8e1b3d9067ec00ef76ce9e7a099a9d10"
  },
  {
    "url": "zh/components/text.html",
    "revision": "b060de1d05f994236de0f7cb686d127c"
  },
  {
    "url": "zh/components/textarea.html",
    "revision": "b742bb2d5c18dc030308d5ce599a40df"
  },
  {
    "url": "zh/components/time.html",
    "revision": "32dcdf051e8e19260eb68270270f7599"
  },
  {
    "url": "zh/guide/custom-validator.html",
    "revision": "cc6b2b0fbfbec45a63de6cdddc4eac23"
  },
  {
    "url": "zh/guide/form.html",
    "revision": "871e805c94027e99eedd68fe6b1472dd"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "d8a055ce5a3c490fb21785380607a526"
  },
  {
    "url": "zh/guide/layout.html",
    "revision": "98fffa2bba745d9187e7ca183664a0e5"
  },
  {
    "url": "zh/guide/meta.html",
    "revision": "4825ebf53232bb6bbea1505d7234b7cb"
  },
  {
    "url": "zh/guide/terms.html",
    "revision": "e9d750a6b838918fbf790d16f07af3ac"
  },
  {
    "url": "zh/index.html",
    "revision": "80218f9954b55e3f214ebd38751768b0"
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

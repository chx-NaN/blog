if(!self.define){let e,i={};const s=(s,d)=>(s=new URL(s+".js",d).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let c={};const n=e=>s(e,a),f={module:{uri:a},exports:c,require:n};i[a]=Promise.all(d.map((e=>f[e]||n(e)))).then((e=>(r(...e),c)))}}define(["./workbox-ec81a2a1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/03/20/hello-world/index.html",revision:"e418a9702741b03043dea5727b597b7a"},{url:"2022/03/20/我的第一篇博客/index.html",revision:"af034e6f4742ab44360da7f0320ebf13"},{url:"2022/03/21/HTML学习笔记/index.html",revision:"bbbc697a5428a0ca32e73324e913deb6"},{url:"2022/03/22/新建文本文档/index.html",revision:"0457631eb68b572dd164aafb408040e2"},{url:"404.html",revision:"1973b44d7d1dbc7b195fefea30771dc0"},{url:"about/index.html",revision:"3a476e0293356b21087ba6e9ab733a5f"},{url:"archives/2022/03/index.html",revision:"bb4baeafd554abd88e845cb87e50cc9b"},{url:"archives/2022/index.html",revision:"7e157fab97c1a51ccddda006f0251323"},{url:"archives/index.html",revision:"05d36384258efc8b072678812d388073"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/index.html",revision:"7b1b9a47b5b7dc97249300aa7b9dfe94"},{url:"categories/笔记/index.html",revision:"f9cc7df5c7430264784029f4555d6ff9"},{url:"categories/踩坑/index.html",revision:"39cf2d2a8e1d256455e8829df7f3cd8c"},{url:"css/iconfont.css",revision:"cb1cbb7840b4a41ae53da1f256067fc6"},{url:"css/index.css",revision:"d5ddd39d0c25d27a535ea3d2d16aafa8"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"b2bf18d89316eabb575d1aa974abb131"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"ce5e0a27ff2ffc3f4020facb4b359c96"},{url:"music/index.html",revision:"24ae3987a5047eb943b7cbbf1d803e70"},{url:"tags/html/index.html",revision:"1d5e62ebe683f16da117caa76d66c968"},{url:"tags/index.html",revision:"865345aac8159d6d6348389b2859c49f"},{url:"tags/nvm-node-环境/index.html",revision:"cff4d08f796337481e98e12415438b2d"},{url:"tags/笔记/index.html",revision:"9271e02c27ad0e00f07316cce0c53f2e"}],{})}));
//# sourceMappingURL=service-worker.js.map

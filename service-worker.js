if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let f={};const n=e=>d(e,c),a={module:{uri:c},exports:f,require:n};i[c]=Promise.all(r.map((e=>a[e]||n(e)))).then((e=>(s(...e),f)))}}define(["./workbox-ec81a2a1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/03/20/hello-world/index.html",revision:"dff952102306b2180ecfc92b075810d4"},{url:"2022/03/20/我的第一篇博客/index.html",revision:"e852d2e1d3693748fa63f8fe220f4afd"},{url:"2022/03/21/HTML学习笔记/index.html",revision:"fe875efe5903e6d7d2c591816459b04d"},{url:"404.html",revision:"c71e662494ed8a4f7f3e1134647e08e7"},{url:"about/index.html",revision:"c2967ccae6636b89677331dcac8112a3"},{url:"archives/2022/03/index.html",revision:"e22d9bf97510cc79378b5850801e91ef"},{url:"archives/2022/index.html",revision:"c1884f90fcbd9eb920603b1ac137b894"},{url:"archives/index.html",revision:"efc5b0823c3a74ecdcdbb41334f4d7a9"},{url:"categories/index.html",revision:"9fde5b893d66a01692d6679cfb2ea6fd"},{url:"categories/笔记/index.html",revision:"e5964b465049991a73992baffd0923c5"},{url:"css/iconfont.css",revision:"cb1cbb7840b4a41ae53da1f256067fc6"},{url:"css/index.css",revision:"d5ddd39d0c25d27a535ea3d2d16aafa8"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"7050a2158ff1b9c90a6f7e081fdff8e9"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"51e56f3d4d9d247d07835fb0103591e2"},{url:"tags/html/index.html",revision:"fcb0f41c41e98b80008a027d5ee52a35"},{url:"tags/index.html",revision:"fc03d973467356daf852a297cef9041d"},{url:"tags/笔记/index.html",revision:"71a92a67edda634cfdbb94e6801cea54"}],{})}));
//# sourceMappingURL=service-worker.js.map

(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{411:function(a,t,e){a.exports=e.p+"assets/img/cache.d7123112.jpg"},446:function(a,t,e){"use strict";e.r(t);var s=e(34),i=Object(s.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"缓存优点-减少延迟与带宽消耗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存优点-减少延迟与带宽消耗"}},[a._v("#")]),a._v(" 缓存优点：减少延迟与带宽消耗")]),a._v(" "),s("h2",{attrs:{id:"缓存分类-强制缓存与对比缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存分类-强制缓存与对比缓存"}},[a._v("#")]),a._v(" 缓存分类：强制缓存与对比缓存")]),a._v(" "),s("blockquote",[s("h3",{attrs:{id:"cache-control"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[a._v("#")]),a._v(" Cache-Control")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v(" 设置过期的时间⻓度（秒）\n")])])]),s("p",[a._v("在这个时间范围内，浏览器请求都会直接读缓存。当 expires 和 cache-control 都存在时，cache-control 的优先级更⾼")]),a._v(" "),s("blockquote",[s("h3",{attrs:{id:"expires"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[a._v("#")]),a._v(" Expires")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v(" 用于控制请求文件的有效时间\n")])])]),s("p",[a._v("当缓存中数据失效或过期，才决定从服务器更新数据,或者缓存被情空，否则将不会发出请求。\n缺陷在于，服务器时间和用户端时间可能存在不⼀致，所以 HTTP/1.1 加⼊了 cache-control 头来改进这个问题。")]),a._v(" "),s("blockquote",[s("h3",{attrs:{id:"etag-if-none-match"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etag-if-none-match"}},[a._v("#")]),a._v(" Etag / if-none-match")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("资源的值的唯一标识（类似MD5）\n")])])]),s("p",[a._v("开启 Etag 后，服务器端返回资源时，如果头部带上了 "),s("strong",[a._v('etag: "D5FC8B85A045FF720547BC36FC872550"')]),a._v("，那么资源下次请求时就会把值加⼊到请求头"),s("strong",[a._v('if-none-match: "D5FC8B85A045FF720547BC36FC872550"')]),a._v("，服务器可以对⽐这个值，确定资源是否发⽣变化，如果没有发⽣变化，则返回 304，否则 200（并且返回新的 Etag 进行缓存协商，生成新的规则，并缓存）")]),a._v(" "),s("blockquote",[s("h3",{attrs:{id:"last-modified-if-modified-since"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-if-modified-since"}},[a._v("#")]),a._v(" Last-modified / if-modified-since")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("资源最后一次修改的时间戳\n")])])]),s("p",[a._v("开启 Last-modified 后，服务器端返回资源时，如果头部带上了"),s("strong",[a._v("last-modified: Wed, 16 May 2018 02:57:16 GMT")]),a._v("，那么资源下次请求时就会把值加⼊到请求头 "),s("strong",[a._v("if-modified-since：Wed, 16 May 2018 05:55:38 GMT")]),a._v("，服务器可以对⽐这个值，确定资源是否发⽣变化，如果没有发⽣变化，则返回 304")]),a._v(" "),s("p",[s("img",{attrs:{src:e(411),alt:""}})]),a._v(" "),s("blockquote",[s("h3",{attrs:{id:"tips"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tips"}},[a._v("#")]),a._v(" Tips")])]),a._v(" "),s("ol",[s("li",[a._v("分布式系统里多台机器间文件的 last-modified 必须保持一致，以免负载均衡到不同机器导致比对失败")]),a._v(" "),s("li",[a._v("分布式系统尽量关闭掉 Etag(每台机器生成的 etag 都会不一样)")]),a._v(" "),s("li",[a._v("max-age 和 Expires 同时存在，则被 Cache-Control 的 max-age 覆盖")])])])}),[],!1,null,null,null);t.default=i.exports}}]);
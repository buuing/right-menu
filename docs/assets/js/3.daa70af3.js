(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{383:function(t,e,s){},384:function(t,e,s){},385:function(t,e,s){},387:function(t,e,s){"use strict";s(383)},388:function(t,e,s){"use strict";s(384)},389:function(t,e,s){"use strict";s(385)},390:function(t,e,s){"use strict";var i=s(51),a=(s(124),s(84),s(36),s(53),s(126),s(127),s(386),s(394),s(395),s(396));s(392),s(206),s(121),s(122),s(37),s(125),s(123);function n(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}var r={name:"NavLinks",components:{NavLink:s(393).a,DropdownLink:a.a},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var s=this.$page.path,a=this.$router.options.routes,n=this.$site.themeConfig.locales||{},r={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(i){var r,c=e[i],o=n[i]&&n[i].label||c.lang;return c.lang===t.$lang?r=s:(r=s.replace(t.$localeConfig.path,i),a.some((function(t){return t.path===r}))||(r=i)),{text:o,link:r}}))};return[].concat(Object(i.a)(this.userNav),[r])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(n(t),{items:(t.items||[]).map(n)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],s=0;s<e.length;s++){var i=e[s];if(new RegExp(i,"i").test(t))return i}return"Source"}}}},c=(s(387),s(30)),o={components:{NavLinks:Object(c.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.userLinks.length||t.repoLink?s("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return s("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?s("DropdownLink",{attrs:{item:t}}):s("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t._m(0),t._v("\n   \n  "),t._v(" "),t.repoLink?s("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),s("OutboundLink")],1):t._e()],2):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"https://github.com/buuing/right-menu",target:"_black"}},[this._v("\n      Github \n      "),e("img",{staticStyle:{transform:"translateY(5px)"},attrs:{src:"https://img.shields.io/github/stars/buuing/right-menu?style=social",height:"22",align:"top"}})])])}],!1,null,null,null).exports},data:function(){return{activeIndex:"/"}},computed:{navList:function(){return this.$themeConfig.locales[this.$localePath].nav}}},l=(s(388),Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-page-head"},[e("el-container",{staticClass:"header-box"},[e("div",{staticClass:"mobile mobile-nav"},[this._v("移动端菜单栏未开启")]),this._v(" "),e("router-link",{staticClass:"logo hidden-719",attrs:{to:"/",tag:"div"}},[this._v("\n       right-menu 右键菜单插件\n    ")]),this._v(" "),e("div",{staticClass:"nav-bar hidden-719"},[e("NavLinks")],1)],1)],1)}),[],!1,null,"3b2f6426",null));e.a=l.exports},391:function(t,e,s){"use strict";var i={},a=(s(389),s(30)),n=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-page-foot"},[this._m(0),this._v(" "),e("p",[e("span",[e("i",{staticClass:"iconfont reco-copyright"}),this._v("\n      2019 ~ "+this._s((new Date).getFullYear())+"\n      "),e("a",{attrs:{href:"https://github.com/buuing/right-menu/blob/master/LICENSE",target:"_black"}},[this._v("License MIT")])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("span",[this._v("\n      本插件完全免费，开源不易，"),e("a",{attrs:{href:"https://github.com/buuing/right-menu",target:"_black"}},[e("b",{staticStyle:{color:"#fff"}},[this._v("\n          如果您觉得好用可以点个\n          "),e("img",{staticStyle:{transform:"translateY(3px)"},attrs:{src:"https://img.shields.io/github/stars/buuing/right-menu?style=social",height:"22",align:"top"}}),this._v("\n          支持一下\n        ")]),this._v("\n         "),e("i",{staticClass:"iconfont reco-github"})])])])}],!1,null,"4a3d5304",null);e.a=n.exports},401:function(t,e,s){},414:function(t,e,s){t.exports=s.p+"assets/img/logo.ce63af9e.png"},415:function(t,e,s){t.exports=s.p+"assets/img/feeling_proud.69d84779.svg"},416:function(t,e,s){t.exports=s.p+"assets/img/JavaScript_frameworks.1dd02e08.svg"},417:function(t,e,s){t.exports=s.p+"assets/img/designer_life.dc563048.svg"},418:function(t,e,s){t.exports=s.p+"assets/img/Developer_activity.ba1aa0df.svg"},419:function(t,e,s){"use strict";s(401)},426:function(t,e,s){"use strict";s.r(e);var i=s(390),a=s(391),n={components:{Header:i.a,Footer:a.a}},r=(s(419),s(30)),c=Object(r.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("div",{directives:[{name:"menu",rawName:"v-menu"}],staticClass:"home-page"},[i("Header"),t._v(" "),i("div",{staticClass:"home-page-banner"},[i("el-container",{staticStyle:{"align-items":"center"}},[i("el-main",[i("div",[i("img",{attrs:{src:s(414),width:"200px"}}),t._v(" "),i("h1",[t._v("right-menu")]),t._v(" "),i("p",[t._v("一个右键菜单插件")])])])],1)],1),t._v(" "),i("div",{staticClass:"home-page-content"},[i("el-container",[i("div",{staticClass:"panel"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:s(415),width:"60%"}})]),t._v(" "),i("h1",[t._v("xxx")]),t._v(" "),i("p",[t._v("可实现多级菜单配置, 菜单内的文字 / 图标 / 点击回调均可自定义逻辑")])]),t._v(" "),i("div",{staticClass:"panel"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:s(416),width:"60%"}})]),t._v(" "),i("h1",[t._v("xxx")]),t._v(" "),i("p",[t._v("支持 Js / Vue / React 等框架；并且多端使用 / 配置 / 表现形式完全一致")])]),t._v(" "),i("div",{staticClass:"panel"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:s(417),width:"60%"}})]),t._v(" "),i("h1",[t._v("xxx")]),t._v(" "),i("p",[t._v("自动适配 windows / mac 系统菜单样式, 也可以自定义主题样式")])])]),t._v(" "),i("el-container",{staticClass:"home-page-wrapper",staticStyle:{"margin-top":"50px"}},[i("div",{staticClass:"text-wrapper"},[i("h1",[t._v("贡献者")]),t._v(" "),i("table",[i("tr",[i("td",{attrs:{align:"center"}},[i("a",{attrs:{href:"https://github.com/buuing",target:"_blank"}},[i("img",{attrs:{width:"60px",src:"https://avatars.githubusercontent.com/u/36689704"}})]),i("div",[i("span",{attrs:{title:"核心开发"}},[t._v("🤖")]),t._v(" "),i("span",{attrs:{title:"修复bug"}},[t._v("🚧")]),t._v(" "),i("span",{attrs:{title:"维护文档"}},[t._v("📚")])])]),t._v(" "),i("td",{attrs:{align:"center"}},[i("a",{attrs:{href:"https://github.com/yushen7",target:"_blank"}},[i("img",{attrs:{width:"60px",src:"https://avatars.githubusercontent.com/u/35678187"}})]),i("div",[i("span",{attrs:{title:"核心开发"}},[t._v("🤖")])])]),t._v(" "),i("td",{attrs:{align:"center"}},[i("a",{attrs:{href:"https://github.com/qingtiantongxie",target:"_blank"}},[i("img",{attrs:{width:"60px",src:"https://avatars.githubusercontent.com/u/24731632"}})]),i("div",[i("span",{attrs:{title:"逻辑优化"}},[t._v("🦄")]),i("span",{attrs:{title:"修复bug"}},[t._v("🚧")])])]),t._v(" "),i("td",{attrs:{align:"center"}},[i("a",{attrs:{href:"https://github.com/dora1995",target:"_blank"}},[i("img",{attrs:{width:"60px",src:"https://avatars.githubusercontent.com/u/53267289"}})]),i("div",[i("span",{attrs:{title:"修复bug"}},[t._v("🚧")])])])])])]),t._v(" "),i("div",{staticClass:"img-wrapper",staticStyle:{"max-width":"30rem"}},[i("img",{attrs:{src:s(418),width:"100%"}})])])],1),t._v(" "),i("Footer")],1):t._e()}),[],!1,null,"008dd2d8",null);e.default=c.exports}}]);
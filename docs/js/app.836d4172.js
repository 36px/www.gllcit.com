(function(t){function e(e){for(var s,o,i=e[0],l=e[1],c=e[2],u=0,f=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);m&&m(e);while(f.length)f.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},n=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"24493f8f"}[t]+".js"}function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=r[t]=[e,s]}));e.push(a[2]=s);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(t);var c=new Error;n=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",c.name="ChunkLoadError",c.type=s,c.request=n,a[1](c)}r[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var m=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),r=a.n(s);r.a},"120c":function(t,e,a){"use strict";var s=a("ac56"),r=a.n(s);r.a},"165d":function(t,e,a){},"3c1c":function(t,e,a){"use strict";var s=a("4b4a"),r=a.n(s);r.a},"4b4a":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),r=a("5c96"),n=a.n(r),o=(a("0fae"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("PageHeader"),a("router-view"),a("PageFooter")],1)}),i=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[t._m(0),a("div",[a("el-menu",{staticClass:"nav-bar",attrs:{mode:"horizontal","background-color":"#27aad6","text-color":"#ffffff","active-text-color":"#ffff00"}},[a("el-menu-item",{attrs:{index:"1"}},[t._v("首页")]),a("el-menu-item",{attrs:{index:"2"}},[t._v("公司简介")]),a("el-menu-item",{attrs:{index:"3"}},[t._v("行业新闻")]),a("el-menu-item",{attrs:{index:"4"}},[t._v("成功案例")]),a("el-menu-item",{attrs:{index:"5"}},[t._v("关于")])],1)],1)])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("table",[a("tr",[a("td",[a("img",{staticClass:"logo-image",attrs:{src:"https://release.bitwormhole.com/static/gllcit.com/logo.png"}})]),a("td",[a("img",{staticClass:"logo-text",attrs:{src:"https://release.bitwormhole.com/static/gllcit.com/text-lckj.svg"}})])])])])}],u={name:"HelloWorld",props:{msg:String}},m=u,f=(a("68f6"),a("2877")),d=Object(f["a"])(m,l,c,!1,null,"6283e03e",null),p=d.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("div",{staticClass:"footer-1"},[a("el-row",[a("el-col",{staticClass:"box1",attrs:{span:7,xs:24,sm:24,md:8}},[a("div",{staticClass:"box1-logo"},[a("img",{staticClass:"logo-image",attrs:{src:"https://release.bitwormhole.com/static/gllcit.com/logo.png"}})]),a("div",{staticClass:"box1-logo"},[a("img",{staticClass:"logo-text",attrs:{src:"https://release.bitwormhole.com/static/gllcit.com/text-lckj.svg"}})])]),a("el-col",{staticClass:"box2",attrs:{span:10,xs:24,sm:24,md:8}},[a("div",[t._v("0773-2881958")]),a("div",[t._v("桂林市七星区信息产业园")]),a("div",[a("a",{attrs:{href:"#"}},[t._v("联系我们")])])]),a("el-col",{staticClass:"box3",attrs:{span:7,xs:24,sm:24,md:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("img",{attrs:{src:"https://release.bitwormhole.com/static/gllcit.com/gllcit-qrcode.png"}})])])],1)],1),t._m(0)])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-2"},[a("span",[t._v("Copyright(C) 2020 gllcit.com All Rights Reserved .")]),a("span",[t._v("桂林联潮信息科技有限公司 版权所有")])])}],h={name:"PageFooter",props:{msg:String}},g=h,_=(a("7edb"),Object(f["a"])(g,b,v,!1,null,"591f0e3c",null)),x=_.exports,C={name:"app",components:{PageHeader:p,PageFooter:x}},w=C,y=(a("034f"),Object(f["a"])(w,o,i,!1,null,null,null)),j=y.exports,O=a("8c4f"),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[t._m(0),a("el-row",[a("el-col",{staticClass:"info-box",attrs:{span:12,xs:24,sm:12,md:12}},[a("CompanyInfoBox")],1),a("el-col",{staticClass:"info-box",attrs:{span:12,xs:24,sm:12,md:12}},[a("ItNewsBox")],1)],1),t._m(1),a("div",{staticClass:"info-box"},[a("CaseInfoBox")],1)],1)},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"banner"},[a("img",{staticClass:"banner-image",attrs:{src:"https://release.bitwormhole.com/static/gllcit.com/banner1.jpg"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"banner"},[a("img",{staticClass:"banner-image",attrs:{src:"https://release.bitwormhole.com/static/gllcit.com/banner2.jpg"}})])}],P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("box-title-bar",{attrs:{title:t.title}}),t._m(0)],1)},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",{staticClass:"case"},[a("a",{attrs:{href:"#"}},[a("img",{staticClass:"case-image",attrs:{src:"https://release.bitwormhole.com/static/gllcit.com/case1.png"}})])]),a("span",{staticClass:"case"},[a("a",{attrs:{href:"#"}},[a("img",{staticClass:"case-image",attrs:{src:"https://release.bitwormhole.com/static/gllcit.com/case2.png"}})])]),a("span",{staticClass:"case"},[a("a",{attrs:{href:"#"}},[a("img",{staticClass:"case-image",attrs:{src:"https://release.bitwormhole.com/static/gllcit.com/case3.png"}})])])])}],B={name:"CaseInfoBox",data(){return{title:"成功案例"}}},S=B,I=(a("3c1c"),Object(f["a"])(S,P,k,!1,null,"0146d694",null)),T=I.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("box-title-bar",{attrs:{title:t.title}}),t._m(0)],1)},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("tr",[a("td",[a("img",{attrs:{src:"https://release.bitwormhole.com/static/gllcit.com/company.jpg"}})]),a("td",[t._v("公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介 公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公 司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司 简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介。")])])])}],F={name:"CompanyInfoBox",data(){return{title:"公司信息"}}},H=F,N=Object(f["a"])(H,M,D,!1,null,null,null),W=N.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("box-title-bar",{attrs:{title:t.title}}),a("table",{staticStyle:{width:"100%"}},t._l(t.tableData,(function(e){return a("tr",{key:e.id,staticClass:"table-item"},[a("td",{staticClass:"item-title",attrs:{label:"",width:"180"}},[a("a",{attrs:{href:"#"}},[t._v(t._s(e.title))])]),a("td",{staticClass:"item-date",attrs:{label:"",width:"180"}},[t._v(t._s(e.date))])])})),0)],1)},A=[],J={name:"ItNewsBox",data(){return{title:"行业新闻",tableData:[{title:"t1",date:1999999}]}},mounted(){this.initTableWithMockData()},methods:{initTableWithMockData(){for(var t=[],e=1;e<10;++e){var a=e,s="title-"+e,r=1999999999+e,n={id:a,title:s,date:r};t.push(n)}this.tableData=t}}},L=J,R=(a("120c"),Object(f["a"])(L,q,A,!1,null,"ac1b4e58",null)),z=R.exports,G={name:"home",components:{CaseInfoBox:T,CompanyInfoBox:W,ItNewsBox:z},data(){return{}}},K=G,Q=(a("5e1e"),Object(f["a"])(K,E,$,!1,null,"c0d9355c",null)),U=Q.exports;s["default"].use(O["a"]);const V=[{path:"/",name:"home",component:U},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],X=new O["a"]({routes:V});var Y=X,Z=a("2f62");s["default"].use(Z["a"]);var tt=new Z["a"].Store({state:{},mutations:{},actions:{},modules:{}}),et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("table",{staticClass:"box-table",attrs:{border:"0",cellspacing:"0"}},[a("tr",{staticClass:"box-row"},[a("td",{staticClass:"box-title"},[t._v(t._s(t.title))]),t._m(0)])])])},at=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{staticClass:"box-more"},[a("a",{attrs:{href:"#"}},[t._v(" more "),a("i",{staticClass:"el-icon-caret-right"})])])}],st={name:"BoxTitleBar",props:{title:String}},rt=st,nt=(a("c238"),Object(f["a"])(rt,et,at,!1,null,"3fbbc39c",null)),ot=nt.exports;s["default"].config.productionTip=!1,s["default"].use(n.a),s["default"].component("box-title-bar",ot),new s["default"]({router:Y,store:tt,render:function(t){return t(j)}}).$mount("#app")},"5e1e":function(t,e,a){"use strict";var s=a("165d"),r=a.n(s);r.a},"68f6":function(t,e,a){"use strict";var s=a("d73b"),r=a.n(s);r.a},"7b36":function(t,e,a){},"7edb":function(t,e,a){"use strict";var s=a("a99f"),r=a.n(s);r.a},"85ec":function(t,e,a){},a99f:function(t,e,a){},ac56:function(t,e,a){},c238:function(t,e,a){"use strict";var s=a("7b36"),r=a.n(s);r.a},d73b:function(t,e,a){}});
//# sourceMappingURL=app.836d4172.js.map
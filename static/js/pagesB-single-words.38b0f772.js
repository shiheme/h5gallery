(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesB-single-words"],{"25d2":function(t,e,i){var a=i("8445");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("2fe08bb3",a,!0,{sourceMap:!1,shadowMode:!1})},"5cb3":function(t,e,i){"use strict";i.r(e);var a=i("a697"),n=i("6b7b");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("99a0");var o=i("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"44369246",null,!1,a["a"],void 0);e["default"]=c.exports},"6b7b":function(t,e,i){"use strict";i.r(e);var a=i("bd3e"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},8445:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".bee-page[data-v-44369246]{display:flex;flex-direction:column;align-items:center;justify-content:flex-end;background-color:rgba(0,0,0,.3);height:100vh}.safebtm[data-v-44369246]{padding-bottom:calc(%?0?% + env(safe-area-inset-bottom))}.session[data-v-44369246]{display:flex;flex-direction:column}.session .contentarea[data-v-44369246]{flex:1;height:0}.session .words[data-v-44369246]{padding:20px}",""]),t.exports=e},"99a0":function(t,e,i){"use strict";var a=i("25d2"),n=i.n(a);n.a},a697:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={beeIco:i("2b59").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"wrapper",class:{light:"light"===t.theme,dark:"dark"===t.theme,sym:"sym"===t.theme}},[i("v-uni-view",{staticClass:"bee-page"},[i("v-uni-view",{staticClass:"session",staticStyle:{width:"100%"},style:{height:t.windowHeight-t.statusBarHeight+"px"}},[i("v-uni-view",{staticClass:"toparea"},[i("v-uni-view",{staticClass:"titlearea",style:{height:t.titleBarHeight+"px"}},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.beeoptions.rightsgroup.copytitle))]),i("v-uni-view",{staticClass:"popup-box-btn cancel",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[i("bee-ico",{staticClass:"bee-icon",attrs:{name:"close-fill",size:44}})],1)],1)],1),i("v-uni-view",{staticClass:"contentarea"},[i("v-uni-scroll-view",{staticStyle:{width:"100%",height:"100%"},attrs:{type:"list","scroll-y":"true"}},[i("v-uni-view",{staticClass:"words",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.textClick(t.thread.words)}}},[i("v-uni-text",[t._v(t._s(t.thread.words))])],1)],1)],1)],1)],1)],1)},s=[]},bd3e:function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("6903")),s=(i("26cb"),{props:{},data:function(){return{id:0,previewindex:0,thread:{}}},computed:{},watch:{},onLoad:function(t){t&&(this.id=t.id),this.loadSingle()},onReady:function(){},onHide:function(){},methods:{loadSingle:function(){var t=this,e={api_type:"posts/"+this.id};n.default.apiWpv2({params:{},cools:e,method:"GET"}).then((function(e){t.thread=e}))},close:function(){uni.navigateBack({delta:1})}}});e.default=s}}]);
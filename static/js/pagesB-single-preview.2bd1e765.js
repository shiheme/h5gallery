(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesB-single-preview"],{"247d":function(e,t,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("a9e3");var r=n(i("a1ec")),a=(i("26cb"),{components:{beePreviewHome:r.default},props:{posttype:{type:String,default:""},id:{type:Number,default:0}},data:function(){return{posttype:"",id:0,previewindex:-1}},computed:{categories:function(){var e=this.$store.getters["emoji/get"]("emojis");return e}},watch:{},onLoad:function(e){e&&(this.posttype=e.posttype,this.id=Number(e.id))},onHide:function(){},onUnload:function(){this.$store.dispatch("beebeeo/setError",{loading:!1}),this.categories={}},methods:{}});t.default=a},2940:function(e,t,i){"use strict";i.r(t);var n=i("7f8ac"),r=i("b1e1");for(var a in r)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(a);var o=i("f0c5"),d=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"21872242",null,!1,n["a"],void 0);t["default"]=d.exports},"2cd9":function(e,t,i){"use strict";i.r(t);var n=i("e638"),r=i("b5ef");for(var a in r)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(a);var o=i("f0c5"),d=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"649ecf08",null,!1,n["a"],void 0);t["default"]=d.exports},"3ecd":function(e,t,i){"use strict";i.r(t);var n=i("744b"),r=i("6e4c");for(var a in r)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(a);var o=i("f0c5"),d=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"1e3c6972",null,!1,n["a"],void 0);t["default"]=d.exports},"5bb2":function(e,t,i){"use strict";i.r(t);var n=i("89c0"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},"6e4c":function(e,t,i){"use strict";i.r(t);var n=i("d079"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},"744b":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.loadlist&&e.thread.tolib.length>1?i("v-uni-swiper",{staticClass:"content",staticStyle:{height:"100%",width:"100%"},attrs:{"indicator-dots":!1,autoplay:!1,circular:!0,current:e.currentIndex,"cache-extent":1,"scroll-with-animation":e.needSwiperAnimation},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.swiperChange.apply(void 0,arguments)},transition:function(t){arguments[0]=t=e.$handleEvent(t),e.transitionChange.apply(void 0,arguments)}}},e._l(e.thread.tolib,(function(t,n){return i("v-uni-swiper-item",{key:n,attrs:{posttype:e.posttype,"data-idx":e.currentIndex,"data-id":t.id},on:{animationfinish:function(t){arguments[0]=t=e.$handleEvent(t),e.animationfinish.apply(void 0,arguments)},click:function(t){arguments[0]=t=e.$handleEvent(t),e.showprew.apply(void 0,arguments)}}},[i("v-uni-view",{staticStyle:{width:"100%",height:"100%",display:"flex","flex-direction":"column","align-items":"center","justify-content":"center"}},[i("bee-preview-image",{staticClass:"image",attrs:{status:e.currentIndex===n?1:0,prew:e.prewIndex===n,posttype:e.posttype,image:t,imgwidth:e.imgwidth,imgheight:e.imgheight,border:e.border},on:{render:function(t){arguments[0]=t=e.$handleEvent(t),e.onImageRender.apply(void 0,arguments)}}})],1)],1)})),1):i("v-uni-view",{staticClass:"content",staticStyle:{height:"100%",width:"100%"}},e._l(e.thread.tolib,(function(t,n){return i("v-uni-view",{key:n,attrs:{posttype:e.posttype,"data-idx":e.currentIndex,"data-id":t.id},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showprew.apply(void 0,arguments)}}},[i("v-uni-view",{staticStyle:{width:"100%",height:"100%",display:"flex","flex-direction":"column","align-items":"center","justify-content":"center"}},[i("bee-preview-image",{staticClass:"image",attrs:{status:e.currentIndex===n?1:0,prew:e.prewIndex===n,posttype:e.posttype,image:t,imgwidth:e.imgwidth,imgheight:e.imgheight,border:e.border},on:{render:function(t){arguments[0]=t=e.$handleEvent(t),e.onImageRender.apply(void 0,arguments)}}})],1)],1)})),1)},r=[]},"7a9c":function(e,t,i){var n=i("d81f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("4f06").default;r("43717772",n,!0,{sourceMap:!1,shadowMode:!1})},"7f8ac":function(e,t,i){"use strict";i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var n={beePage:i("ecdc").default},r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("bee-page",{ref:"beePage",staticClass:"wrapper page-single",class:{light:"light"===e.theme,dark:"dark"===e.theme,sym:"sym"===e.theme},attrs:{"data-bee-theme":e.theme}},[i("v-uni-view",{staticClass:"bee-page",staticStyle:{width:"100vw",height:"100vh",position:"relative"}},[i("bee-preview-home",{staticStyle:{width:"100%",height:"100%"},attrs:{postid:e.id,posttype:e.posttype,newindex:e.previewindex,thread:e.categories}})],1)],1)},a=[]},"89c0":function(e,t,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("a9e3"),i("c740");var r=n(i("3ecd")),a={components:{beePreviewList:r.default},props:{thread:{type:null|Object,default:{}},posttype:{type:String,default:""},postid:{type:Number,default:0},newindex:{type:Number,default:0}},data:function(){return{index:0}},computed:{},watch:{newindex:function(e){this.index=e}},created:function(){var e=this.postid,t=this.thread,i=0;if(e){var n=t.tolib.findIndex((function(t){return t.id===e}));-1!==n&&(i=n)}this.index=i},destroyed:function(){uni.$emit("PreviewerDestroy"),this.index=null},mounted:function(){},methods:{onLoop:function(e){this.loopon=e},onBeforeRender:function(e){var t=e.index;this.index=t}}};t.default=a},a1ec:function(e,t,i){"use strict";i.r(t);var n=i("e88f"),r=i("5bb2");for(var a in r)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(a);i("f3fb");var o=i("f0c5"),d=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"73c857dd",null,!1,n["a"],void 0);t["default"]=d.exports},b1e1:function(e,t,i){"use strict";i.r(t);var n=i("247d"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},b5ef:function(e,t,i){"use strict";i.r(t);var n=i("f74d"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},d079:function(e,t,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(i("c7eb")),a=n(i("1da1"));i("a9e3");var o=n(i("2cd9")),d={components:{beePreviewImage:o.default},mixins:[],props:{thread:{type:Object,default:function(){return{}}},posttype:{type:String,default:""},index:{type:Number,default:0},imgwidth:{type:[String,Number],default:0},imgheight:{type:[String,Number],default:0},border:{type:Number,default:0}},data:function(){return{currentIndex:-99,prewIndex:-99,needSwiperAnimation:!0,loadlist:!1}},computed:{},watch:{prewIndex:function(e){this.prewIndex=e},thread:function(e){var t=this.index,i=e.tolib[t];i&&this.toggleImage(t,!0)},index:function(e){var t=this.thread.tolib.length;if(t)if(e!==this.currentIndex&&e>=0&&e<t)this.toggleImage(e,!0);else{var i=this.thread.tolib[e];i&&i.id===this.currentRenderImage&&this.onImageRender({detail:i})}}},created:function(){var e=this.thread.tolib.length;if(e)if(this.index!==this.currentIndex&&this.index>=0&&this.index<e)this.toggleImage(this.index,!0);else{var t=this.thread.tolib[this.index];t&&t.id===this.currentRenderImage&&this.onImageRender({detail:t})}},mounted:function(){},destroyed:function(){this.loadlist=!0,uni.$emit("PreviewershowChange",this.loadlist)},onReady:function(){},methods:{onImageRender:function(e){var t=this.thread.tolib,i=this.currentIndex,n=t[i]||{};e.id===n.id&&(this.currentRenderImage=n.id)},toggleImage:function(e){var t=arguments,i=this;return(0,a.default)((0,r.default)().mark((function n(){var a,o;return(0,r.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=t.length>1&&void 0!==t[1]&&t[1],o=i.thread.tolib[e],o){n.next=4;break}return n.abrupt("return");case 4:i.currentIndex=e,i.needSwiperAnimation=!a,i.$emit("beforerender",{index:e,image:o}),i.loadlist=!0;case 8:case"end":return n.stop()}}),n)})))()},transitionChange:function(e){},animationfinish:function(e){0===this.currentIndex?(this.getvibrateShort("light"),this.$emit("loop",!0)):this.$emit("loop",!1)},swiperChange:function(e){var t=e.detail,i=t.current,n=t.source;uni.$emit("PreviewerbigChange",i),"touch"===n&&(this.currentIndex=i,this.toggleImage(i,!1))},showprew:function(e){this.loadlist=!0;var t=null;uni.$emit("PreviewershowChange",this.loadlist),t&&clearTimeout(t),t=setTimeout((function(){uni.navigateBack({delta:1})}),100)}}};t.default=d},d81f:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".switem[data-v-73c857dd]{background-color:rgba(30,30,30,.3);color:#141414;width:46px;height:20px;display:flex;align-items:center;justify-content:center;border-radius:20px;font-size:10px;font-weight:600;opacity:.4}.switem.on[data-v-73c857dd]{-webkit-animation:1.2s switem-on-data-v-73c857dd both cubic-bezier(.45,.05,.55,.95);animation:1.2s switem-on-data-v-73c857dd both cubic-bezier(.45,.05,.55,.95)}@-webkit-keyframes switem-on-data-v-73c857dd{0%{-webkit-transform:scale(0);transform:scale(0)}15%{-webkit-transform:scale(1.25);transform:scale(1.25)}32%{-webkit-transform:scale(.95);transform:scale(.95)}50%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(1);transform:scale(1)}}",""]),e.exports=t},e638:function(e,t,i){"use strict";i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var n={beeCommonImage:i("f36d").default},r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("share-element",{style:{position:"relative",width:e.imgwidth+"px",height:e.imgheight+"px","border-radius":"0px",overflow:"hidden",left:0,top:0},attrs:{key:"bill_"+e.status+"_"+e.image.id+e.mark,transform:!0,"transition-on-gesture":!0,"shuttle-on-push":"from","rect-tween-type":"cubic-bezier(0.4, 0.0, 0.2, 1.0)"}},[i("v-uni-view",{style:{position:"relative",width:"100%",height:"100%","border-radius":"0px"}},[i("bee-common-image",{style:{width:"100%",height:"100%","border-radius":"0px"},attrs:{src:e.image,border:e.border,big:!0,watered:!0},on:{onImageLoad:function(t){arguments[0]=t=e.$handleEvent(t),e.onImageLoad.apply(void 0,arguments)}}})],1)],1)},a=[]},e88f:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("bee-preview-list",{staticStyle:{height:"100%",width:"100%",position:"absolute",top:"0"},attrs:{thread:e.thread,index:e.index,imgwidth:e.windowWidth,imgheight:e.windowHeight,border:0,posttype:e.posttype},on:{beforerender:function(t){arguments[0]=t=e.$handleEvent(t),e.onBeforeRender.apply(void 0,arguments)},loop:function(t){arguments[0]=t=e.$handleEvent(t),e.onLoop.apply(void 0,arguments)}}})},r=[]},f3fb:function(e,t,i){"use strict";var n=i("7a9c"),r=i.n(n);r.a},f74d:function(e,t,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(i("5530"));i("a9e3");var a=i("26cb"),o={mixins:[],props:{status:{type:Number,value:0},posttype:{type:String,default:""},image:{type:Object,value:{}},index:{type:Number,default:0},imgwidth:{type:[String,Number],default:0},imgheight:{type:[String,Number],default:0},border:{type:Number,default:0}},data:function(){return{}},computed:(0,r.default)({},(0,a.mapState)({mark:function(e){return e.session.code}})),watch:{status:function(e){if(this.isAttached){var t=this.oldStatus;e!==t&&(this.oldStatus=e,1===e?this.isImgLoaded&&this.$emit("render",this.image):this.resetImg())}}},beforeMount:function(){this.isAttached=!0},created:function(){},mounted:function(){},destroyed:function(){this.isAttached=!1},onReady:function(){},methods:{resetImg:function(){},onImageLoad:function(e){this.isImgLoaded=!0,1===this.status&&this.$emit("render",this.image)}}};t.default=o}}]);
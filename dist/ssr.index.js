!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["vue-js-modal"]=e():t["vue-js-modal"]=e()}(global,function(){return i={},r.m=n=[function(t,e,n){var i=n(6);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n(4).default;t.exports.__inject__=function(t){r("27d83796",i,!1,t)}},function(t,e,n){var i=n(8);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n(4).default;t.exports.__inject__=function(t){r("0e783494",i,!1,t)}},function(t,e,n){var i=n(10);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n(4).default;t.exports.__inject__=function(t){r("17757f60",i,!1,t)}},function(t,e){t.exports=function(n){var a=[];return a.toString=function(){return this.map(function(t){var e=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var r=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(i),o=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[n].concat(o).concat([r]).join("\n")}return[n].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},a.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(n[r]=!0)}for(i=0;i<t.length;i++){var o=t[i];"number"==typeof o[0]&&n[o[0]]||(e&&!o[2]?o[2]=e:e&&(o[2]="("+o[2]+") and ("+e+")"),a.push(o))}},a}},function(t,e,n){"use strict";function i(t,e,n,i){if(i||"undefined"==typeof __VUE_SSR_CONTEXT__||(i=__VUE_SSR_CONTEXT__),i){i.hasOwnProperty("styles")||(Object.defineProperty(i,"styles",{enumerable:!0,get:function(){return o(i._styles)}}),i._renderStyles=o);var r=i._styles||(i._styles={});(n?function(t,e){for(var n=0;n<e.length;n++)for(var i=e[n].parts,r=0;r<i.length;r++){var o=i[r],a=o.media||"default",s=t[a];s?s.ids.indexOf(o.id)<0&&(s.ids.push(o.id),s.css+="\n"+o.css):t[a]={ids:[o.id],css:o.css,media:o.media}}}:function(t,e){for(var n=0;n<e.length;n++)for(var i=e[n].parts,r=0;r<i.length;r++){var o=i[r];t[o.id]={ids:[o.id],css:o.css,media:o.media}}})(r,e=function(t,e){for(var n=[],i={},r=0;r<e.length;r++){var o=e[r],a=o[0],s={id:t+":"+r,css:o[1],media:o[2],sourceMap:o[3]};i[a]?i[a].parts.push(s):n.push(i[a]={id:a,parts:[s]})}return n}(t,e))}}function o(t){var e="";for(var n in t){var i=t[n];e+='<style data-vue-ssr-id="'+i.ids.join(" ")+'"'+(i.media?' media="'+i.media+'"':"")+">"+i.css+"</style>"}return e}n.r(e),n.d(e,"default",function(){return i})},function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e.default=r.a},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"\n.vue-modal-resizer {\r\n  display: block;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  width: 12px;\r\n  height: 12px;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: 9999999;\r\n  background: transparent;\r\n  cursor: se-resize;\n}\n.vue-modal-resizer::after {\r\n  display: block;\r\n  position: absolute;\r\n  content: '';\r\n  background: transparent;\r\n  left: 0;\r\n  top: 0;\r\n  width: 0;\r\n  height: 0;\r\n  border-bottom: 10px solid #ddd;\r\n  border-left: 10px solid transparent;\n}\n.vue-modal-resizer.clicked::after {\r\n  border-bottom: 10px solid #369be9;\n}\r\n",""])},function(t,e,n){"use strict";n.r(e);var i=n(1),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e.default=r.a},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"\n.v--modal-block-scroll {\r\n  overflow: hidden;\r\n  width: 100vw;\n}\n.v--modal-overlay {\r\n  position: fixed;\r\n  box-sizing: border-box;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.2);\r\n  z-index: 999;\r\n  opacity: 1;\n}\n.v--modal-overlay.scrollable {\r\n  height: 100%;\r\n  min-height: 100vh;\r\n  overflow-y: auto;\r\n  -webkit-overflow-scrolling: touch;\n}\n.v--modal-overlay .v--modal-background-click {\r\n  width: 100%;\r\n  min-height: 100%;\r\n  height: auto;\n}\n.v--modal-overlay .v--modal-box {\r\n  position: relative;\r\n  overflow: hidden;\r\n  box-sizing: border-box;\n}\n.v--modal-overlay.scrollable .v--modal-box {\r\n  margin-bottom: 2px;\n}\n.v--modal {\r\n  background-color: white;\r\n  text-align: left;\r\n  border-radius: 3px;\r\n  box-shadow: 0 20px 60px -2px rgba(27, 33, 58, 0.4);\r\n  padding: 0;\n}\n.v--modal.v--modal-fullscreen {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  margin: 0;\r\n  left: 0;\r\n  top: 0;\n}\n.v--modal-top-right {\r\n  display: block;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\n}\n.overlay-fade-enter-active,\r\n.overlay-fade-leave-active {\r\n  transition: all 0.2s;\n}\n.overlay-fade-enter,\r\n.overlay-fade-leave-active {\r\n  opacity: 0;\n}\n.nice-modal-fade-enter-active,\r\n.nice-modal-fade-leave-active {\r\n  transition: all 0.4s;\n}\n.nice-modal-fade-enter,\r\n.nice-modal-fade-leave-active {\r\n  opacity: 0;\r\n  transform: translateY(-20px);\n}\r\n",""])},function(t,e,n){"use strict";n.r(e);var i=n(2),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e.default=r.a},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"\n.vue-dialog div {\r\n  box-sizing: border-box;\n}\n.vue-dialog .dialog-flex {\r\n  width: 100%;\r\n  height: 100%;\n}\n.vue-dialog .dialog-content {\r\n  flex: 1 0 auto;\r\n  width: 100%;\r\n  padding: 15px;\r\n  font-size: 14px;\n}\n.vue-dialog .dialog-c-title {\r\n  font-weight: 600;\r\n  padding-bottom: 15px;\n}\n.vue-dialog .dialog-c-text {\n}\n.vue-dialog .vue-dialog-buttons {\r\n  display: flex;\r\n  flex: 0 1 auto;\r\n  width: 100%;\r\n  border-top: 1px solid #eee;\n}\n.vue-dialog .vue-dialog-buttons-none {\r\n  width: 100%;\r\n  padding-bottom: 15px;\n}\n.vue-dialog-button {\r\n  font-size: 12px !important;\r\n  background: transparent;\r\n  padding: 0;\r\n  margin: 0;\r\n  border: 0;\r\n  cursor: pointer;\r\n  box-sizing: border-box;\r\n  line-height: 40px;\r\n  height: 40px;\r\n  color: inherit;\r\n  font: inherit;\r\n  outline: none;\n}\n.vue-dialog-button:hover {\r\n  background: rgba(0, 0, 0, 0.01);\n}\n.vue-dialog-button:active {\r\n  background: rgba(0, 0, 0, 0.025);\n}\n.vue-dialog-button:not(:first-of-type) {\r\n  border-left: 1px solid #eee;\n}\r\n",""])},function(t,e,n){"use strict";n.r(e);function i(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:e.overlayTransition}},[e.visibility.overlay?n("div",{ref:"overlay",class:e.overlayClass,attrs:{"aria-expanded":e.visibility.overlay.toString(),"data-modal":e.name}},[n("div",{staticClass:"v--modal-background-click",on:{mousedown:function(t){return t.target!==t.currentTarget?null:e.handleBackgroundClick(t)},touchstart:function(t){return t.target!==t.currentTarget?null:e.handleBackgroundClick(t)}}},[n("div",{staticClass:"v--modal-top-right"},[e._t("top-right")],2),e._v(" "),n("transition",{attrs:{name:e.transition},on:{"before-enter":e.beforeTransitionEnter,"after-enter":e.afterTransitionEnter,"after-leave":e.afterTransitionLeave}},[e.visibility.modal?n("div",{ref:"modal",class:e.modalClass,style:e.modalStyle},[e._t("default"),e._v(" "),e.resizable&&!e.isAutoHeight?n("resizer",{attrs:{"min-width":e.minWidth,"min-height":e.minHeight,"max-width":e.maxWidth,"max-height":e.maxHeight},on:{resize:e.handleModalResize}}):e._e()],2):e._e()])],1)]):e._e()])}function r(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className},[])}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){r=!0,o=t}finally{try{i||null==s.return||s.return()}finally{if(r)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach(function(t){l(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}r._withStripped=i._withStripped=!0;function c(t,e,n){return n<t?t:e<n?e:n}function u(){var t=window.innerWidth,e=document.documentElement.clientWidth;return t&&e?Math.min(t,e):e||t}var d=function(t){var e=0<arguments.length&&void 0!==t?t:0;return function(){return(e++).toString()}}();function f(t,e,n,i,r,o,a,s){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=l):r&&(l=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:u}}var h=f({name:"VueJsModalResizer",props:{minHeight:{type:Number,default:0},minWidth:{type:Number,default:0},maxWidth:{type:Number,default:Number.MAX_SAFE_INTEGER},maxHeight:{type:Number,default:Number.MAX_SAFE_INTEGER}},data:function(){return{clicked:!1,size:{}}},mounted:function(){this.$el.addEventListener("mousedown",this.start,!1)},computed:{className:function(){return{"vue-modal-resizer":!0,clicked:this.clicked}}},methods:{start:function(t){this.clicked=!0,window.addEventListener("mousemove",this.mousemove,!1),window.addEventListener("mouseup",this.stop,!1),t.stopPropagation(),t.preventDefault()},stop:function(){this.clicked=!1,window.removeEventListener("mousemove",this.mousemove,!1),window.removeEventListener("mouseup",this.stop,!1),this.$emit("resize-stop",{element:this.$el.parentElement,size:this.size})},mousemove:function(t){this.resize(t)},resize:function(t){var e=this.$el.parentElement;if(e){var n=t.clientX-e.offsetLeft,i=t.clientY-e.offsetTop,r=Math.min(u(),this.maxWidth),o=Math.min(window.innerHeight,this.maxHeight);n=c(this.minWidth,r,n),i=c(this.minHeight,o,i),this.size={width:n,height:i},e.style.width=n+"px",e.style.height=i+"px",this.$emit("resize",{element:e,size:this.size})}}}},r,[],!1,function(t){var e=n(5);e.__inject__&&e.__inject__(t)},null,"02cb9358");h.options.__file="src/Resizer.vue";var p=h.exports;function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t){switch(v(t)){case"number":return{type:"px",value:t};case"string":return function(t){if("auto"===t)return{type:t,value:0};for(var e=0;e<y.length;e++){var n=y[e];if(n.regexp.test(t))return{type:n.name,value:parseFloat(t)}}return{type:"",value:t}}(t);default:return{type:"",value:t}}}function b(t){if("string"!=typeof t)return 0<=t;var e=m(t);return("%"===e.type||"px"===e.type)&&0<e.value}var g="[-+]?[0-9]*.?[0-9]+",y=[{name:"px",regexp:new RegExp("^".concat(g,"px$"))},{name:"%",regexp:new RegExp("^".concat(g,"%$"))},{name:"px",regexp:new RegExp("^".concat(g,"$"))}];function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var x=f({name:"VueJsModal",props:{name:{required:!0,type:String},delay:{type:Number,default:0},resizable:{type:Boolean,default:!1},adaptive:{type:Boolean,default:!1},draggable:{type:[Boolean,String],default:!1},scrollable:{type:Boolean,default:!1},reset:{type:Boolean,default:!1},overlayTransition:{type:String,default:"overlay-fade"},transition:{type:String},clickToClose:{type:Boolean,default:!0},classes:{type:[String,Array],default:"v--modal"},styles:{type:[String,Array,Object]},minWidth:{type:Number,default:0,validator:function(t){return 0<=t}},minHeight:{type:Number,default:0,validator:function(t){return 0<=t}},maxWidth:{type:Number,default:Number.MAX_SAFE_INTEGER},maxHeight:{type:Number,default:Number.MAX_SAFE_INTEGER},width:{type:[Number,String],default:600,validator:b},height:{type:[Number,String],default:300,validator:function(t){return"auto"===t||b(t)}},pivotX:{type:Number,default:.5,validator:function(t){return 0<=t&&t<=1}},pivotY:{type:Number,default:.5,validator:function(t){return 0<=t&&t<=1}},open:{type:Boolean,default:!1}},components:{Resizer:p},data:function(){return{visible:this.open,visibility:{modal:this.open,overlay:this.open},shift:{left:0,top:0},modal:{width:0,widthType:"px",height:0,heightType:"px",renderedHeight:0},viewport:{width:0,height:0},mutationObserver:null}},created:function(){this.setInitialSize()},beforeMount:function(){var e=this;if(A.event.$on("toggle",this.handleToggleEvent),window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize(),this.scrollable&&!this.isAutoHeight&&console.warn('Modal "'.concat(this.name,'" has scrollable flag set to true ')+'but height is not "auto" ('.concat(this.height,")")),this.isAutoHeight){var t=function(){if("undefined"!=typeof window)for(var t=["","WebKit","Moz","O","Ms"],e=0;e<t.length;e++){var n=t[e]+"MutationObserver";if(n in window)return window[n]}return!1}();t?this.mutationObserver=new t(function(t){e.updateRenderedHeight()}):console.warn("MutationObserver was not found. Vue-js-modal automatic resizing relies heavily on MutationObserver. Please make sure to provide shim for it.")}this.clickToClose&&window.addEventListener("keyup",this.handleEscapeKeyUp)},beforeDestroy:function(){A.event.$off("toggle",this.handleToggleEvent),window.removeEventListener("resize",this.handleWindowResize),this.clickToClose&&window.removeEventListener("keyup",this.handleEscapeKeyUp),this.scrollable&&document.body.classList.remove("v--modal-block-scroll")},computed:{isAutoHeight:function(){return"auto"===this.modal.heightType},position:function(){var t=this.viewport,e=this.shift,n=this.pivotX,i=this.pivotY,r=this.trueModalWidth,o=this.trueModalHeight,a=t.width-r,s=t.height-o,l=e.left+n*a,u=e.top+i*s;return{left:parseInt(c(0,a,l)),top:parseInt(c(0,s,u))}},trueModalWidth:function(){var t=this.viewport,e=this.modal,n=this.adaptive,i=this.minWidth,r=this.maxWidth,o="%"===e.widthType?t.width/100*e.width:e.width,a=Math.max(i,Math.min(t.width,r));return n?c(i,a,o):o},trueModalHeight:function(){var t=this.viewport,e=this.modal,n=this.isAutoHeight,i=this.adaptive,r=this.minHeight,o=this.maxHeight,a="%"===e.heightType?t.height/100*e.height:e.height;if(n)return this.modal.renderedHeight;var s=Math.max(r,Math.min(t.height,o));return i?c(r,s,a):a},overlayClass:function(){return{"v--modal-overlay":!0,scrollable:this.scrollable&&this.isAutoHeight}},modalClass:function(){return["v--modal-box",this.classes]},stylesProp:function(){return"string"==typeof this.styles?this.styles.split(";").map(function(t){return t.trim()}).filter(Boolean).map(function(t){return t.split(":")}).reduce(function(t,e){var n=o(e,2);return s({},t,l({},n[0],n[1]))},{}):this.styles},modalStyle:function(){return[this.stylesProp,{top:this.position.top+"px",left:this.position.left+"px",width:this.trueModalWidth+"px",height:this.isAutoHeight?"auto":this.trueModalHeight+"px"}]}},watch:{visible:function(t){var e=this;t?(this.visibility.overlay=!0,setTimeout(function(){e.visibility.modal=!0,e.$nextTick(function(){e.addDraggableListeners(),e.callAfterEvent(!0)})},this.delay)):(this.visibility.modal=!1,setTimeout(function(){e.visibility.overlay=!1,e.$nextTick(function(){e.removeDraggableListeners(),e.callAfterEvent(!1)})},this.delay))}},methods:{handleToggleEvent:function(t,e,n){if(this.name===t){var i=void 0===e?!this.visible:e;this.toggle(i,n)}},setInitialSize:function(){var t=this.modal,e=m(this.width),n=m(this.height);t.width=e.value,t.widthType=e.type,t.height=n.value,t.heightType=n.type},handleEscapeKeyUp:function(t){27===t.which&&this.visible&&this.$modal.hide(this.name)},handleWindowResize:function(){this.viewport.width=u(),this.viewport.height=window.innerHeight,this.ensureShiftInWindowBounds()},createModalEvent:function(t){var e=0<arguments.length&&void 0!==t?t:{};return function(t){var e=0<arguments.length&&void 0!==t?t:{};return s({id:d(),timestamp:Date.now(),canceled:!1},e)}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach(function(t){_(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({name:this.name,ref:this.$refs.modal},e))},handleModalResize:function(t){this.modal.widthType="px",this.modal.width=t.size.width,this.modal.heightType="px",this.modal.height=t.size.height;var e=this.modal.size;this.$emit("resize",this.createModalEvent({size:e}))},toggle:function(t,e){var n=this.reset,i=this.scrollable,r=this.visible;if(r!==t){var o=r?"before-close":"before-open";"before-open"==o?("undefined"!=typeof document&&document.activeElement&&"BODY"!==document.activeElement.tagName&&document.activeElement.blur&&document.activeElement.blur(),n&&(this.setInitialSize(),this.shift.left=0,this.shift.top=0),i&&document.body.classList.add("v--modal-block-scroll")):i&&document.body.classList.remove("v--modal-block-scroll");var a=!1,s=this.createModalEvent({stop:function(){a=!0},state:t,params:e});this.$emit(o,s),a||(this.visible=t)}},getDraggableElement:function(){var t="string"!=typeof this.draggable?".v--modal-box":this.draggable;return t?this.$refs.overlay.querySelector(t):null},handleBackgroundClick:function(){this.clickToClose&&this.toggle(!1)},callAfterEvent:function(t){t?this.connectObserver():this.disconnectObserver();var e=t?"opened":"closed",n=this.createModalEvent({state:t});this.$emit(e,n)},addDraggableListeners:function(){var o=this;if(this.draggable){var t=this.getDraggableElement();if(t){var a=0,s=0,l=0,u=0,c=function(t){return t.touches&&0<t.touches.length?t.touches[0]:t},e=function(t){var e=t.target;if(!e||"INPUT"!==e.nodeName&&"TEXTAREA"!==e.nodeName){var n=c(t),i=n.clientX,r=n.clientY;document.addEventListener("mousemove",d),document.addEventListener("touchmove",d),document.addEventListener("mouseup",f),document.addEventListener("touchend",f),a=i,s=r,l=o.shift.left,u=o.shift.top}},d=function(t){var e=c(t),n=e.clientX,i=e.clientY;o.shift.left=l+n-a,o.shift.top=u+i-s,t.preventDefault()},f=function t(e){o.ensureShiftInWindowBounds(),document.removeEventListener("mousemove",d),document.removeEventListener("touchmove",d),document.removeEventListener("mouseup",t),document.removeEventListener("touchend",t),e.preventDefault()};t.addEventListener("mousedown",e),t.addEventListener("touchstart",e)}}},removeDraggableListeners:function(){},updateRenderedHeight:function(){this.$refs.modal&&(this.modal.renderedHeight=this.$refs.modal.getBoundingClientRect().height)},connectObserver:function(){this.mutationObserver&&this.mutationObserver.observe(this.$refs.overlay,{childList:!0,attributes:!0,subtree:!0})},disconnectObserver:function(){this.mutationObserver&&this.mutationObserver.disconnect()},beforeTransitionEnter:function(){this.connectObserver()},afterTransitionEnter:function(){},afterTransitionLeave:function(){},ensureShiftInWindowBounds:function(){var t=this.viewport,e=this.shift,n=this.pivotX,i=this.pivotY,r=this.trueModalWidth,o=this.trueModalHeight,a=t.width-r,s=t.height-o,l=e.left+n*a,u=e.top+i*s;this.shift.left-=l-c(0,a,l),this.shift.top-=u-c(0,s,u)}}},i,[],!1,function(t){var e=n(7);e.__inject__&&e.__inject__(t)},null,"29693cc7");x.options.__file="src/Modal.vue";function O(){var n=this,t=n.$createElement,i=n._self._c||t;return i("modal",{attrs:{name:"dialog",height:"auto",classes:["v--modal","vue-dialog",this.params.class],width:n.width,"pivot-y":.3,adaptive:!0,clickToClose:n.clickToClose,transition:n.transition},on:{"before-open":n.beforeOpened,"before-close":n.beforeClosed,opened:function(t){return n.$emit("opened",t)},closed:function(t){return n.$emit("closed",t)}}},[i("div",{staticClass:"dialog-content"},[n.params.title?i("div",{staticClass:"dialog-c-title",domProps:{innerHTML:n._s(n.params.title||"")}}):n._e(),n._v(" "),n.params.component?i(n.params.component,n._b({tag:"component"},"component",n.params.props,!1)):i("div",{staticClass:"dialog-c-text",domProps:{innerHTML:n._s(n.params.text||"")}})],1),n._v(" "),n.buttons?i("div",{staticClass:"vue-dialog-buttons"},n._l(n.buttons,function(t,e){return i("button",{key:e,class:t.class||"vue-dialog-button",style:n.buttonStyle,attrs:{type:"button"},domProps:{innerHTML:n._s(t.title)},on:{click:function(t){return t.stopPropagation(),n.click(e,t)}}},[n._v("\n      "+n._s(t.title)+"\n    ")])}),0):i("div",{staticClass:"vue-dialog-buttons-none"})])}var j=x.exports;O._withStripped=!0;var E=f({name:"VueJsDialog",props:{width:{type:[Number,String],default:400},clickToClose:{type:Boolean,default:!0},transition:{type:String,default:"fade"}},data:function(){return{params:{},defaultButtons:[{title:"CLOSE"}]}},computed:{buttons:function(){return this.params.buttons||this.defaultButtons},buttonStyle:function(){return{flex:"1 1 ".concat(100/this.buttons.length,"%")}}},methods:{beforeOpened:function(t){window.addEventListener("keyup",this.onKeyUp),this.params=t.params||{},this.$emit("before-opened",t)},beforeClosed:function(t){window.removeEventListener("keyup",this.onKeyUp),this.params={},this.$emit("before-closed",t)},click:function(t,e,n){var i=2<arguments.length&&void 0!==n?n:"click",r=this.buttons[t];r&&"function"==typeof r.handler?r.handler(t,e,{source:i}):this.$modal.hide("dialog")},onKeyUp:function(t){if(13===t.which&&0<this.buttons.length){var e=1===this.buttons.length?0:this.buttons.findIndex(function(t){return t.default});-1!==e&&this.click(e,t,"keypress")}}}},O,[],!1,function(t){var e=n(9);e.__inject__&&e.__inject__(t)},null,"09f0de1e");E.options.__file="src/Dialog.vue";function S(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{attrs:{id:"modals-container"}},n._l(n.modals,function(e){return i("modal",n._g(n._b({key:e.id,on:{closed:function(t){return n.remove(e.id)}}},"modal",e.modalAttrs,!1),e.modalListeners),[i(e.component,n._g(n._b({tag:"component",on:{close:function(t){return n.$modal.hide(e.modalAttrs.name)}}},"component",e.componentAttrs,!1),n.$listeners))],1)}),1)}var k=E.exports;function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function P(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}S._withStripped=!0;var M=f({data:function(){return{modals:[]}},created:function(){this.$root._dynamicContainer=this},methods:{add:function(t,e,n,i){var r=this,o=1<arguments.length&&void 0!==e?e:{},a=2<arguments.length&&void 0!==n?n:{},s=3<arguments.length&&void 0!==i?i:{},l=d(),u=a.name||"_dynamic_modal_"+l;this.modals.push({id:l,modalAttrs:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach(function(t){P(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},a,{name:u}),modalListeners:s,component:t,componentAttrs:o}),this.$nextTick(function(){r.$modal.show(u)})},remove:function(e){var t=this.modals.findIndex(function(t){return t.id===e});-1!==t&&this.modals.splice(t,1)}}},S,[],!1,null,null,"36d11756");M.options.__file="src/ModalsContainer.vue";var $=M.exports;function z(t){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function L(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"getModalsContainer",function(){return N});var N=function(t,e,n){if(!n._dynamicContainer&&e.injectModalsContainer){var i=(r=document.createElement("div"),document.body.appendChild(r),r);new t({parent:n,render:function(t){return t($)}}).$mount(i)}var r;return n._dynamicContainer},D={install:function(a,t){var s=1<arguments.length&&void 0!==t?t:{};if(!this.installed){this.installed=!0,this.event=new a,this.rootInstance=null;var e=s.componentName||"Modal",l=s.dynamicDefaults||{},r=function(t,e,n,i){var r=n&&n.root?n.root:D.rootInstance,o=N(a,s,r);o?o.add(t,e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach(function(t){L(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},l,{},n),i):console.warn("[vue-js-modal] In order to render dynamic modals, a <modals-container> component must be present on the page.")};a.prototype.$modal={show:function(t){for(var e=arguments.length,n=new Array(1<e?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];switch(z(t)){case"string":return function(t,e){D.event.$emit("toggle",t,!0,e)}.apply(void 0,[t].concat(n));case"object":case"function":return s.dynamic?r.apply(void 0,[t].concat(n)):console.warn("[vue-js-modal] $modal() received object as a first argument, but dynamic modals are switched off. https://github.com/euvl/vue-js-modal/#dynamic-modals");default:console.warn("[vue-js-modal] $modal() received an unsupported argument as a first argument.",t)}},hide:function(t,e){D.event.$emit("toggle",t,!1,e)},toggle:function(t,e){D.event.$emit("toggle",t,void 0,e)}},a.component(e,j),s.dialog&&a.component("VDialog",k),s.dynamic&&(a.component("ModalsContainer",$),a.mixin({beforeMount:function(){null===D.rootInstance&&(D.rootInstance=this.$root)}}))}}},A=e.default=D}],r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist/",r(r.s=11);function r(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}var n,i});
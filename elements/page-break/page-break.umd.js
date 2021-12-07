!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js"),require("@lrnwebcomponents/i18n-manager/lib/I18NMixin.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-icon/lib/simple-iconset.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js","@lrnwebcomponents/i18n-manager/lib/I18NMixin.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-icon/lib/simple-iconset.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).PageBreak={},e.lit,e.schemaBehaviors_js,e.IntersectionObserverMixin_js,e.I18NMixin_js,null,null,e.simpleIconset_js)}(this,(function(e,t,n,r,a,i,o,l){"use strict";function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n,r,a,i,o){try{var l=e[i](o),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,a)}function p(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){u(i,r,a,o,l,"next",e)}function l(e){u(i,r,a,o,l,"throw",e)}o(void 0)}))}}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function k(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function y(e,t,n){return y=k()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&v(a,n.prototype),a},y.apply(null,arguments)}function w(e){var t="function"==typeof Map?new Map:void 0;return w=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return y(e,arguments,m(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),v(r,e)},w(e)}function x(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){var t=k();return function(){var n,r=m(e);if(t){var a=m(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return x(this,n)}}function S(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}function M(){return M="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=S(e,t);if(r){var a=Object.getOwnPropertyDescriptor(r,t);return a.get?a.get.call(arguments.length<3?e:n):a.value}},M.apply(this,arguments)}function P(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function O(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var T=function(e){f(n,e);var t=E(n);function n(){var e;return h(this,n),(e=t.call(this)).target=null,e.breaks=[],e._timer=0,e}return b(n,[{key:"getParent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=null,r=null;return this.target&&("indent"===t?this.target.querySelectorAll("page-break").forEach((function(t){t===e&&(r=n),n=t})):"outdent"===t?this.target.querySelector('page-break[path="'.concat(e.parent,'"]'))&&(r=this.target.querySelector('page-break[path="'.concat(e.parent,'"]')),this.target.querySelector('page-break[path="'.concat(r.parent,'"]'))&&(r=this.target.querySelector('page-break[path="'.concat(r.parent,'"]'))),r=null):this.target.querySelector('page-break[path="'.concat(e.parent,'"]'))&&(r=this.target.querySelector('page-break[path="'.concat(e.parent,'"]')))),r}},{key:"elementsBetween",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"page-break",n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"nextElementSibling",a=[];for(e=e[r];e&&!e.matches(t);)!n||e.matches(n)?(a.push(e),e=e[r]):e=e[r];return a}},{key:"associatedPageBreak",value:function(e){for(e=e.previousElementSibling;e&&!e.matches("page-break");)e=e.previousElementSibling;return e}},{key:"betweenElementsQuery",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",n=[];switch(t){case"headings":this.breaks.forEach((function(t){n=[].concat(O(n),O(e.elementsBetween(t,"page-break","h1,h2,h3,h4,h5,h6")))}));break;case"noheadings":this.breaks.forEach((function(t){n=[].concat(O(n),O(e.elementsBetween(t,"page-break",":not(h1,h2,h3,h4,h5,h6)")))}));break;case"titles":this.breaks.forEach((function(t){n=[].concat(O(n),O(e.elementsBetween(t,"page-break","[data-page-break-title]")))}));break;case"notitles":this.breaks.forEach((function(t){n=[].concat(O(n),O(e.elementsBetween(t,"page-break",":not([data-page-break-title])")))}));break;case"all":this.breaks.forEach((function(t){n=[].concat(O(n),O(e.elementsBetween(t)))}))}return n}},{key:"connectedCallback",value:function(){window.addEventListener("page-break-registration",this.registerPageBreak.bind(this))}},{key:"disconnectedCallback",value:function(){window.removeEventListener("page-break-registration",this.registerPageBreak.bind(this))}},{key:"updateVisibleAsActive",value:function(){clearTimeout(this._timer),this._timer=setTimeout((function(){document.querySelector("page-break[element-visible]")&&window.history.pushState({},null,document.querySelector("page-break[element-visible]").path)}),500)}},{key:"registerPageBreak",value:function(e){var t=this;"add"===e.detail.action?this.breaks.find((function(t){return t===e.detail.value}))||this.breaks.push(e.detail.value):this.breaks.map((function(n,r){n===e.detail.value&&t.breaks.splice(r,1)})),1===this.breaks.length?this.target=e.detail.value.parentNode:0===this.breaks.length&&(this.target=null),this.__lock||(this.__lock=!0,setTimeout((function(){if(t.breaks.forEach((function(e){t.elementsBetween(e,"page-break","h1,h2,h3,h4,h5,h6").forEach((function(t){var n=(t.getAttribute("data-original-level")?new Number(t.getAttribute("data-original-level").replace("H","")):new Number(t.tagName.replace("H","")))+e.depth;n=n>6?6:n;var r=document.createElement("h".concat(n));r.setAttribute("data-original-level",t.tagName);for(var a=0,i=t.attributes.length;a<i;++a)r.setAttribute(t.attributes.item(a).nodeName,t.attributes.item(a).nodeValue);r.innerHTML=t.innerHTML,t.parentNode.replaceChild(r,t),e.target=r}))})),t.target&&t.target.children&&t.target.children.length>0)for(var e=[],n=t.target.querySelectorAll("page-break"),r=0;r<n.length;r++){var a=n[r];if(e.length>0){if(a.parent&&-1!==e.indexOf(a.parent))for(;-1!==e.indexOf(a.parent);)e.shift();else if(a.parent&&-1===e.indexOf(a.parent));else for(;e.length>0;)e.shift();var i=0;0!==r&&a.parent&&t.target.querySelector('page-break[path="'.concat(a.parent,'"]'))&&(i=t.target.querySelector('page-break[path="'.concat(a.parent,'"]')).depth+1),a.depth=i,r!=n.length&&n[r+1]&&n[r+1].parent===a.path&&a.parent&&e.unshift(a.parent)}}t.__lock=!1}),10))}}]),n}(w(HTMLElement));window.PageBreakManager=window.PageBreakManager||{},window.PageBreakManager.requestAvailability=function(){return window.PageBreakManager.instance||(window.PageBreakManager.instance=document.createElement("page-break-manager"),document.body.appendChild(window.PageBreakManager.instance)),window.PageBreakManager.instance},window.customElements.define("page-break-manager",T);var j,A,N,I=window.PageBreakManager.requestAvailability(),B=function(e){f(i,e);var n,r,a=E(i);function i(){var e;return h(this,i),(e=a.call(this)).status="",e.t={newPage:"New page",pageBreak:"Page break",pageDetails:"Page details",clickToUnlock:"Click to unlock"},e.pathAuto=!1,e.title=e.t.newPage,e.slug="#",e.published=!1,e.target=null,e.locked=!1,e.order=null,e.depth=0,e.itemId=null,e._haxState=!1,e.IORemoveOnVisible=!1,e.IODelay=250,e.remoteHeadingobserver=new MutationObserver((function(){e.title!=e.target.innerText&&(e.__moUpdate=!0,e.title=e.target.innerText)})),e.breakType="node",e}return b(i,[{key:"connectedCallback",value:function(){var e=this;M(m(i.prototype),"connectedCallback",this).call(this),"node"===this.breakType&&(this.nextElementSibling&&this.nextElementSibling.tagName&&["H1","H2","H3","H4","H5","H6"].includes(this.nextElementSibling.tagName)?(this.title=this.nextElementSibling.innerText,this.target=this.nextElementSibling,this.setupTargetData(this.target)):setTimeout((function(){if(null===e.target)if(e.nextElementSibling&&e.nextElementSibling.tagName&&["H1","H2","H3","H4","H5","H6"].includes(e.nextElementSibling.tagName))e.title=e.nextElementSibling.innerText,e.target=e.nextElementSibling,e.setupTargetData(e.target);else{var t=0===e.depth?"h2":"h".concat(e.depth+2),n=document.createElement(t);n.setAttribute("data-original-level","H2"),n.innerText=e.title,e.parentNode.insertBefore(n,e.nextElementSibling),setTimeout((function(){e.setupTargetData(e.nextElementSibling)}),100)}}),0)),window.dispatchEvent(new CustomEvent("page-break-registration",{composed:!0,bubbles:!0,cancelable:!0,detail:{value:this,action:"add"}})),window.dispatchEvent(new CustomEvent("page-break-change",{composed:!0,bubbles:!0,cancelable:!0,detail:{value:this}}))}},{key:"disconnectedCallback",value:function(){window.dispatchEvent(new CustomEvent("page-break-registration",{detail:{value:this,action:"remove"}})),window.dispatchEvent(new CustomEvent("page-break-change",{composed:!0,bubbles:!0,cancelable:!0,detail:{value:this}})),this.remoteHeadingobserver.disconnect(),M(m(i.prototype),"disconnectedCallback",this).call(this)}},{key:"setupTargetData",value:function(e){this.target&&this.remoteHeadingobserver.disconnect(),this.target=e,this._haxSibling=this,this.remoteHeadingobserver.observe(this.target,{characterData:!0,childList:!0,subtree:!0})}},{key:"updated",value:function(e){var t=this;M(m(i.prototype),"updated",this)&&M(m(i.prototype),"updated",this).call(this,e),e.forEach((function(e,n){var r;("itemId"===n&&null!=t[n]?t.schemaResourceID=t.itemId:"schemaResourceID"===n&&null==t.itemId&&(t.itemId=t.schemaResourceID.replace("#","")),"elementVisible"===n&&t.elementVisible&&t.itemId&&t.shadowRoot&&setTimeout((function(){I.updateVisibleAsActive()}),0),t.locked&&"locked"===n?I.elementsBetween(t).forEach((function(e){e.setAttribute("data-hax-lock","data-hax-lock")})):!t.locked&&"locked"===n&&e&&I.elementsBetween(t).forEach((function(e){e.removeAttribute("data-hax-lock")})),t._ceMenu&&["locked","parent","published"].includes(n)&&t._updateHAXCEMenu(),["title","parent","slug"].includes(n)&&window.dispatchEvent(new CustomEvent("page-break-change",{composed:!0,bubbles:!0,cancelable:!0,detail:{value:t}})),"node"===t.breakType&&t.target&&("title"===n&&t[n]&&(t.__moUpdate?t.__moUpdate=!1:t.title!=t.target.innerText&&(t.target.innerText=t.title)),!t._haxState&&"depth"===n&&t.depth>=0&&I.elementsBetween(t,"page-break","h1,h2,h3,h4,h5,h6").forEach((function(e){var n=(e.getAttribute("data-original-level")?new Number(e.getAttribute("data-original-level").replace("H","")):new Number(e.tagName.replace("H","")))+t.depth;n=n>6?6:n;var r=document.createElement("h".concat(n));r.setAttribute("data-original-level",e.tagName);for(var a=0,i=e.attributes.length;a<i;++a)r.setAttribute(e.attributes.item(a).nodeName,e.attributes.item(a).nodeValue);r.innerHTML=e.innerHTML,t.setupTargetData(r),e.parentNode.replaceChild(r,e)})),"_haxState"===n&&void 0!==e&&(t._haxState?I.elementsBetween(t,"page-break","h1,h2,h3,h4,h5,h6").forEach((function(e){if(e.getAttribute("data-original-level")){for(var n=new Number(e.getAttribute("data-original-level").replace("H","")),r=document.createElement("h".concat(n)),a=0,i=e.attributes.length;a<i;++a)r.setAttribute(e.attributes.item(a).nodeName,e.attributes.item(a).nodeValue);r.innerHTML=e.innerHTML,e.parentNode.replaceChild(r,e),t.setupTargetData(r)}})):I.elementsBetween(t,"page-break","h1,h2,h3,h4,h5,h6").forEach((function(e){var n=(e.getAttribute("data-original-level")?new Number(e.getAttribute("data-original-level").replace("H","")):new Number(e.tagName.replace("H","")))+t.depth;n=n>6?6:n;var r=document.createElement("h".concat(n));r.setAttribute("data-original-level",e.tagName);for(var a=0,i=e.attributes.length;a<i;++a)r.setAttribute(e.attributes.item(a).nodeName,e.attributes.item(a).nodeValue);r.innerHTML=e.innerHTML,e.parentNode.replaceChild(r,e),t.setupTargetData(r)})))),"breakType"===n)&&("node"===t[n]?(r=l.SimpleIconsetStore.getIcon("editor:format-page-break"),t.shadowRoot.querySelector("style").innerHTML='\n          :host([data-hax-ray]:hover) .mid::before {\n            content: "'.concat(t.t.pageBreak,'";\n          }')):(r=l.SimpleIconsetStore.getIcon("hax:page-details"),t.shadowRoot.querySelector("style").innerHTML='\n          :host([data-hax-ray]:hover) .mid::before {\n            content: "'.concat(t.t.pageDetails,'";\n          }')),t.style.backgroundImage='url("'.concat(r,'")'))}))}},{key:"firstUpdated",value:function(e){M(m(i.prototype),"firstUpdated",this)&&M(m(i.prototype),"firstUpdated",this).call(this,e)}},{key:"render",value:function(){return t.html(j||(j=P(['\n      <style>\n        :host([data-hax-ray]:hover) .mid::before {\n          content: "','";\n        }\n      </style>\n      <a .href="','" .name="#','" class="sr-only"\n        >','</a\n      >\n      <hr class="mid" />\n      ',"\n    "])),this.t.pageBreak,this.slug,this.itemId,this.title,this.locked?t.html(A||(A=P(['<simple-icon-lite\n            @click="','"\n            icon="icons:lock"\n            title="','"\n          ></simple-icon-lite>'])),this.haxClickLockInPage,this.t.clickToUnlock):"")}},{key:"haxHooks",value:function(){return{editModeChanged:"haxeditModeChanged",inlineContextMenu:"haxinlineContextMenu",activeElementChanged:"haxactiveElementChanged",setupActiveElementForm:"haxsetupActiveElementForm",preProcessInsertContent:"haxpreProcessInsertContent",trayDragNDropToNode:"haxtrayDragNDropToNode"}}},{key:"haxpreProcessInsertContent",value:(r=p(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=n;"HAX-BODY"!==r.parentNode.tagName;)r=r.parentNode;return e.next=4,I.associatedPageBreak(r);case 4:return(a=e.sent)&&(t.properties.parent=a.parent,t.properties.order=a.order+1,t.properties.published=a.published,t.properties.locked=a.locked),e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)}))),function(e,t){return r.apply(this,arguments)})},{key:"haxtrayDragNDropToNode",value:(n=p(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=t;"HAX-BODY"!==n.parentNode.tagName;)n=n.parentNode;return e.next=4,I.associatedPageBreak(n);case 4:(r=e.sent)&&(t.parent=r.parent,t.order=r.order+1,t.published=r.published,t.locked=r.locked);case 6:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)})},{key:"haxsetupActiveElementForm",value:function(e){var t=this;if(window.HAXCMS){var n=window.HAXCMS.requestAvailability().store.getManifestItems(!0),r=[];n.forEach((function(e){e.id!=t.itemId&&function(){for(var t=e,a="- ";t&&null!=t.parent;)(t=n.find((function(e){return e.id==t.parent})))&&(a="--"+a);r.push({text:a+e.title,value:e.id})}()})),e.settings.configure.forEach((function(t,n){"parent"===t.property&&(e.settings.configure[n].inputMethod="select",e.settings.configure[n].itemsList=r)}))}}},{key:"haxactiveElementChanged",value:function(e,t){!t&&this._ceMenu&&("site"===this.breakType?(this._ceMenu.disableOps=!1,this._ceMenu.canMoveElement=!0,this._ceMenu.insertAbove=!0):this._ceMenu.disableDuplicate=!1)}},{key:"haxeditModeChanged",value:function(e){this._haxState=e}},{key:"haxinlineContextMenu",value:function(e){this._ceMenu=e,this._updateHAXCEMenu(),"site"===this.breakType?(this._ceMenu.disableOps=!0,this._ceMenu.canMoveElement=!1,this._ceMenu.insertAbove=!1):this._ceMenu.disableDuplicate=!0}},{key:"_updateHAXCEMenu",value:function(){this._ceMenu.ceButtons=[{icon:this.locked?"icons:lock":"icons:lock-open",callback:"haxClickInlineLock",label:"Toggle Lock"},{icon:this.published?"lrn:view":"lrn:view-off",callback:"haxClickInlinePublished",label:"Toggle published"},{icon:"editor:format-indent-increase",callback:"haxIndentParent",label:"Move under parent page break",disabled:!I.getParent(this,"indent")},{icon:"editor:format-indent-decrease",callback:"haxOutdentParent",label:"Move out of parent page break",disabled:!I.getParent(this,"outdent")}]}},{key:"haxClickLockInPage",value:function(e){this.locked=!this.locked,window.dispatchEvent(new CustomEvent("hax-refresh-tray-form",{}))}},{key:"haxClickInlineLock",value:function(e){return this.locked=!this.locked,!0}},{key:"haxClickInlinePublished",value:function(e){return this.published=!this.published,!0}},{key:"haxIndentParent",value:function(e){return I.getParent(this,"indent")&&(this.parent=I.getParent(this,"indent").slug),!0}},{key:"haxOutdentItem",value:function(e){return I.getParent(this,"outdent")?this.parent=I.getParent(this,"outdent").slug:this.parent&&null===I.getParent(this,"outdent")&&(this.parent=null),!0}}],[{key:"tag",get:function(){return"page-break"}},{key:"properties",get:function(){var e={};return M(m(i),"properties",this)&&(e=M(m(i),"properties",this)),s(s({},e),{},{pathAuto:{type:Boolean,reflect:!0,attribute:"path-auto"},order:{type:Number},title:{type:String,reflect:!0},slug:{type:String},parent:{type:String,reflect:!0},published:{type:Boolean,reflect:!0},locked:{type:Boolean,reflect:!0},depth:{type:Number,reflect:!0},itemId:{type:String,attribute:"item-id",reflect:!0},breakType:{type:String,attribute:"break-type"},status:{type:String},_haxState:{type:Boolean}})}},{key:"styles",get:function(){return[t.css(N||(N=P(["\n        :host {\n          display: block;\n          opacity: 0;\n          height: 1px;\n        }\n        :host([data-hax-ray]) {\n          display: block;\n          margin: 20px 0;\n          padding: 20px;\n          opacity: 0.2;\n          background-position: center;\n          background-repeat: no-repeat;\n          transition: all 0.2s linear;\n        }\n        .mid {\n          border: none;\n          border-top: 2px solid #cccccc;\n          overflow: visible;\n          margin: 4px 0 0 0;\n          padding: 0;\n          height: 0;\n        }\n        :host([data-hax-ray]:hover) {\n          opacity: 1;\n        }\n        :host([data-hax-ray]:hover) .mid::before {\n          font-weight: bold;\n          color: #000000;\n          background-color: #ffffff;\n          font-size: 16px;\n          left: calc(50% - 2.5em);\n          top: -16px;\n          position: relative;\n          height: 0;\n          line-height: 36px;\n        }\n        simple-icon-lite {\n          float: right;\n          color: red;\n          --simple-icon-width: 36px;\n          --simple-icon-height: 36px;\n          margin-top: -28px;\n          margin-right: -46px;\n        }\n        .sr-only {\n          position: absolute;\n          left: -10000px;\n          top: auto;\n          width: 1px;\n          height: 1px;\n          overflow: hidden;\n        }\n      "])))]}},{key:"haxProperties",get:function(){return new URL("./lib/page-break.haxProperties.json","undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("page-break.umd.js",document.baseURI).href).href}}]),i}(r.IntersectionObserverMixin(a.I18NMixin(n.SchemaBehaviors(t.LitElement))));customElements.define(B.tag,B),e.PageBreak=B,Object.defineProperty(e,"__esModule",{value:!0})}));

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).ExampleHaxElement={})}(this,function(e){"use strict";function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach(function(t){r(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function l(e,t,n){return(l=c()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&a(o,n.prototype),o}).apply(null,arguments)}function f(e){var t="function"==typeof Map?new Map:void 0;return(f=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return l(e,arguments,u(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,e)})(e)}function p(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e,t,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return u=e.done,e},e:function(e){a=!0,i=e},f:function(){try{u||null==n.return||n.return()}finally{if(a)throw i}}}}function h(){var e,t,n=(e=["\n<style>\n:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n        </style>\n<slot></slot>"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return h=function(){return n},n}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(l,f(HTMLElement));var t,r,o=(t=l,r=c(),function(){var e,n=u(t);if(r){var o=u(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return p(this,e)});function l(){var e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(e=o.call(this)).tag=l.tag;var n=l.properties;for(var r in n)n.hasOwnProperty(r)&&(e.hasAttribute(r)?e[r]=e.getAttribute(r):(e.setAttribute(r,n[r].value),e[r]=n[r].value));return e._queue=[],e.template=document.createElement("template"),e.attachShadow({mode:"open"}),t||e.render(),e}return n(l,[{key:"render",value:function(){return html(h())}}],[{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Example hax-element",description:"Provide an example to pick apart of a working HAX element",icon:"icons:android",color:"green",groups:["Hax"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"You",owner:"Your Company"}},settings:{quick:[],configure:[{property:"title",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"},{property:"available",description:"",inputMethod:"boolean",required:!1,icon:"icons:android"}],advanced:[]}}}},{key:"properties",get:function(){return i(i({},s(u(l),"properties",this)),{},{title:{name:"title",type:String,value:"My Example",reflectToAttribute:!1,observer:!1},available:{name:"available",type:Boolean,value:"",reflectToAttribute:!1,observer:!1}})}},{key:"tag",get:function(){return"example-hax-element"}}]),n(l,[{key:"connectedCallback",value:function(){window.ShadyCSS&&window.ShadyCSS.styleElement(this),this._queue.length&&this._processQueue()}},{key:"_copyAttribute",value:function(e,t){var n,r=this.shadowRoot.querySelectorAll(t),o=this.getAttribute(e),i=null==o?"removeAttribute":"setAttribute",u=d(r);try{for(u.s();!(n=u.n()).done;){n.value[i](e,o)}}catch(e){u.e(e)}finally{u.f()}}},{key:"_queueAction",value:function(e){this._queue.push(e)}},{key:"_processQueue",value:function(){var e=this;this._queue.forEach(function(t){e["_".concat(t.type)](t.data)}),this._queue=[]}},{key:"_setProperty",value:function(e){var t=e.name,n=e.value;this[t]=n}},{key:"render",value:function(){this.shadowRoot.innerHTML=null,this.template.innerHTML=this.html,window.ShadyCSS&&window.ShadyCSS.prepareTemplate(this.template,this.tag),this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}}]),l}();window.customElements.define(b.tag,b),e.ExampleHaxElement=b,Object.defineProperty(e,"__esModule",{value:!0})});

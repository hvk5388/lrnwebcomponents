!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit"),require("@lrnwebcomponents/simple-colors/simple-colors.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/simple-colors/simple-colors.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).LrndesignSidenote={},e.lit,e.simpleColors_js)}(this,(function(e,n,t){"use strict";function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function s(e,n){return s=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},s(e,n)}function u(e,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=l(e);if(n){var o=l(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return u(this,t)}}function a(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=l(e)););return e}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var r=a(e,n);if(r){var o=Object.getOwnPropertyDescriptor(r,n);return o.get?o.get.call(arguments.length<3?e:t):o.value}},p.apply(this,arguments)}function d(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function y(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return b(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var m,g,h=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&s(e,n)}(a,e);var t,r,c,u=f(a);function a(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,a),(e=u.call(this)).label="",e.icon="",e}return t=a,c=[{key:"properties",get:function(){return o(o({},p(l(a),"properties",this)),{},{label:{type:String},icon:{type:String}})}},{key:"haxProperties",get:function(){return new URL("./lib/".concat(this.tag,".haxProperties.json"),"undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("lrndesign-sidenote.umd.js",document.baseURI).href).href}},{key:"styles",get:function(){return[].concat(y(p(l(a),"styles",this)),[n.css(g||(g=d(["\n        :host {\n          display: block;\n        }\n\n        #container {\n          display: block;\n          background-color: var(\n            --simple-colors-default-theme-accent-1,\n            #ffffff\n          );\n          padding: var(--lrndesign-sidenote-container-padding, 16px);\n          margin-left: var(--lrndesign-sidenote-container-margin-left, 0px);\n          color: var(--simple-colors-default-theme-accent-12, #000);\n        }\n\n        #header {\n          display: flex;\n          align-items: center;\n        }\n\n        #icon {\n          margin-right: 8px;\n        }\n\n        #label {\n          font-size: 20.8px;\n          margin: 12.8px 0;\n          flex: 1 1 auto;\n        }\n      "])))])}},{key:"tag",get:function(){return"lrndesign-sidenote"}}],(r=[{key:"render",value:function(){return n.html(m||(m=d(['\n      <div id="container">\n        <div id="header">\n          <simple-icon id="icon" icon=','></simple-icon>\n          <div id="label">',"</div>\n        </div>\n        <slot></slot>\n      </div>\n    "])),this.icon,this.label)}}])&&i(t.prototype,r),c&&i(t,c),a}(t.SimpleColors);customElements.define("lrndesign-sidenote",h),e.LrndesignSidenote=h,Object.defineProperty(e,"__esModule",{value:!0})}));

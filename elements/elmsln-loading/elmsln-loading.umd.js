!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/hax-iconset/lib/simple-hax-iconset.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/simple-colors/simple-colors.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/hax-iconset/lib/simple-hax-iconset.js"],n):n((e=e||self).ElmslnLoading={},e.litElement_js,e.simpleColors_js)}(this,function(e,n,t){"use strict";function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach(function(n){o(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,n){return(a=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function l(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function u(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var t,i=c(e);if(n){var o=c(this).constructor;t=Reflect.construct(i,arguments,o)}else t=i.apply(this,arguments);return l(this,t)}}function p(e,n,t){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var i=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=c(e)););return e}(e,n);if(i){var o=Object.getOwnPropertyDescriptor(i,n);return o.get?o.get.call(t):o.value}})(e,n,t||e)}function f(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function m(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return b(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}var y,h,d=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&a(e,n)}(d,t.SimpleColors);var o,r,l,b=u(d);function d(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,d),(e=b.call(this)).size="medium",e}return o=d,l=[{key:"styles",get:function(){return[].concat(m(p(c(d),"styles",this)),[n.css(h||(h=f(['\n        @-moz-keyframes spin {\n          100% {\n            -moz-transform: rotate(60deg);\n            filter: saturate(10) invert(0.9);\n          }\n        }\n        @-webkit-keyframes spin {\n          100% {\n            -webkit-transform: rotate(60deg);\n            filter: saturate(10) invert(0.9);\n          }\n        }\n        @keyframes spin {\n          100% {\n            -webkit-transform: rotate(60deg);\n            transform: rotate(60deg);\n          }\n        }\n        :host simple-icon {\n          display: block;\n          -webkit-animation: spin 1.25s ease-out infinite;\n          -moz-animation: spin 1.25s ease-out infinite;\n          animation: spin 1.25s ease-out infinite;\n        }\n        :host([size="tiny"]) simple-icon {\n          --simple-icon-width: 16px;\n          --simple-icon-height: 16px;\n          -webkit-animation: spin 0.75s ease-out infinite;\n          -moz-animation: spin 0.75s ease-out infinite;\n          animation: spin 0.75s ease-out infinite;\n        }\n        :host([size="small"]) simple-icon {\n          --simple-icon-width: 32px;\n          --simple-icon-height: 32px;\n          -webkit-animation: spin 1s ease-out infinite;\n          -moz-animation: spin 1s ease-out infinite;\n          animation: spin 1s ease-out infinite;\n        }\n        :host([size="medium"]) simple-icon {\n          --simple-icon-width: 64px;\n          --simple-icon-height: 64px;\n          -webkit-animation: spin 1.25s ease-out infinite;\n          -moz-animation: spin 1.25s ease-out infinite;\n          animation: spin 1.25s ease-out infinite;\n        }\n        :host([size="large"]) simple-icon {\n          --simple-icon-width: 80px;\n          --simple-icon-height: 80px;\n          -webkit-animation: spin 1.25s ease-out infinite;\n          -moz-animation: spin 1.25s ease-out infinite;\n          animation: spin 1.25s ease-out infinite;\n        }\n        :host([size="epic"]) simple-icon {\n          --simple-icon-width: 400px;\n          --simple-icon-height: 400px;\n          -webkit-animation: spin 2s ease-out infinite;\n          -moz-animation: spin 2s ease-out infinite;\n          animation: spin 2s ease-out infinite;\n        }\n      '])))])}},{key:"tag",get:function(){return"elmsln-loading"}},{key:"properties",get:function(){return s(s({},p(c(d),"properties",this)),{},{dark:{type:Boolean},color:{type:String},contrast:{type:Number},size:{type:String,reflect:!0}})}}],(r=[{key:"updated",value:function(e){var n=this;e.forEach(function(e,t){"color"==t&&n._getAccentColor(n[t])})}},{key:"render",value:function(){return n.html(y||(y=f(['\n      <simple-icon\n        icon="lrn:network"\n        accent-color="','"\n        contrast="','"\n        dark="','"\n      ></simple-icon>\n    '])),this.accentColor,this.contrast,this.dark)}},{key:"_getAccentColor",value:function(e){e=e.replace("-text",""),this.accentColor&&"grey"!==this.accentColor||!this.colors[e]||(this.accentColor=e)}}])&&i(o.prototype,r),l&&i(o,l),d}();window.customElements.define(d.tag,d),e.ElmslnLoading=d,Object.defineProperty(e,"__esModule",{value:!0})});

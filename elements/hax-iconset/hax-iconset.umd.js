!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js"],t):t((e=e||self).HaxIconset={},e.polymerElement_js)}(this,function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e,t,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=o(e)););return e}(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function s(){var e,t,n=(e=["\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return s=function(){return n},n}window.HaxIconset=window.HaxIconset||{},window.HaxIconset.requestAvailability=function(){return window.HaxIconset.instance||(window.HaxIconset.instance=document.createElement("hax-iconset"),document.body.appendChild(window.HaxIconset.instance)),window.HaxIconset.instance};var a=function(e){function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),r(this,o(a).apply(this,arguments))}var l,u,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(a,t.PolymerElement),l=a,f=[{key:"template",get:function(){return t.html(s())}},{key:"properties",get:function(){return{}}},{key:"tag",get:function(){return"hax-iconset"}}],(u=[{key:"connectedCallback",value:function(){c(o(a.prototype),"connectedCallback",this).call(this),window.addEventListener("hax-iconset-hide",this.hideHaxIconset.bind(this)),window.addEventListener("hax-iconset-show",this.showHaxIconset.bind(this))}},{key:"disconnectedCallback",value:function(){c(o(a.prototype),"connectedCallback",this).call(this),window.removeEventListener("hax-iconset-hide",this.hideHaxIconset.bind(this)),window.removeEventListener("hax-iconset-show",this.showHaxIconset.bind(this))}},{key:"hideHaxIconset",value:function(e){}},{key:"showHaxIconset",value:function(e){}}])&&n(l.prototype,u),f&&n(l,f),a}();window.customElements.define(a.tag,a),e.HaxIconset=a,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=hax-iconset.umd.js.map

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/polymer/lib/utils/render-status.js"),require("@polymer/polymer/lib/legacy/polymer.dom.js"),require("@polymer/polymer/lib/legacy/templatizer-behavior.js"),require("@polymer/polymer/lib/legacy/mutable-data-behavior.js"),require("@polymer/polymer/lib/legacy/class.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/polymer/lib/utils/render-status.js","@polymer/polymer/lib/legacy/polymer.dom.js","@polymer/polymer/lib/legacy/templatizer-behavior.js","@polymer/polymer/lib/legacy/mutable-data-behavior.js","@polymer/polymer/lib/legacy/class.js"],t):t((e=e||self).GrafittoFilter={},e.polymerElement_js,e.renderStatus_js,e.polymer_dom_js,e.templatizerBehavior_js,e.mutableDataBehavior_js,e.class_js)}(this,function(e,t,r,o,n,i,l){"use strict";function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){a(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var r,o=f(e);if(t){var n=f(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return m(this,r)}}function h(e,t,r){return(h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(o){var n=Object.getOwnPropertyDescriptor(o,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function d(){var e,t,r=(e=[' <div id="dom"><slot></slot></div> '],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return d=function(){return r},r}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(m,l.mixinBehaviors([n.Templatizer,i.OptionalMutableDataBehavior],t.PolymerElement));var r,o,a,s=b(m);function m(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),s.apply(this,arguments)}return r=m,a=[{key:"template",get:function(){return t.html(d())}},{key:"tag",get:function(){return"grafitto-filter"}},{key:"properties",get:function(){return p(p({},h(f(m),"properties",this)),{},{items:{type:Array,value:[]},like:{type:String,value:""},where:{type:String,value:"name"},caseSensitive:{type:Boolean,value:!1,reflectToAttribute:!0},as:{type:String,value:"items"},filtered:{type:Array,computed:"_computeFiltered(items, where, like, caseSensitive)",observer:"_onFilter",notify:!0},f:{type:Function,notify:!0}})}},{key:"observers",get:function(){return["_populateUserTemplate(filtered)"]}}],(o=[{key:"filter",value:function(){this.where=""}},{key:"_computeFiltered",value:function(e,t,r,o){var n=null;n=o?new RegExp(r):new RegExp(r,"i");var i=[];if(this.f){var l=this.f.bind(this);i=e.filter(l)}else{var c=this._decomposeWhere.bind(this);i=e.filter(function(e){if("object"==u(e)){var r=c(t,e);return void 0===r&&""!=t&&console.warn("grafitto-filter was unable to find a property in '"+t+"'"),n.test(r)}return"string"==typeof e?n.test(e):"number"==typeof e?n.test(e.toString()):void 0})}return i}},{key:"_populateUserTemplate",value:function(e){this.ctor?this.__clone[this.as]=e:(this._userTemplate=this.querySelector("template"),this._userTemplate||console.warn("grafitto-filter requires a template to be provided in light-dom"),this.templatize(this._userTemplate),this.__clone=this.stamp(null),this.__clone[this.as]=e,this.appendChild(this.__clone.root))}},{key:"_decomposeWhere",value:function(e,t){return e.split(".").reduce(function(e,t){return e&&e[t]},t)}},{key:"_onFilter",value:function(){this.dispatchEvent(new CustomEvent("filter",{bubbles:!0,cancelable:!0,composed:!0,detail:!0}))}}])&&c(r.prototype,o),a&&c(r,a),m}();window.customElements.define(v.tag,v),e.GrafittoFilter=v,Object.defineProperty(e,"__esModule",{value:!0})});

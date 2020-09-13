!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/simple-tooltip/simple-tooltip.js"),require("lit-element/lit-element.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/simple-tooltip/simple-tooltip.js","lit-element/lit-element.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js"],t):t((e=e||self).LrndesignAbbreviation={},null,e.litElement_js,e.schemaBehaviors_js)}(this,function(e,t,n,r){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){i(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}function p(e,t,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function b(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function d(){var e=b(["\n        :host {\n          display: inline-block;\n        }\n        abbr {\n          transition: 0.6s all ease;\n          padding: 2px 4px;\n          font-style: italic;\n          background-color: var(--abbreviation-bg, #f9f9f9);\n          text-underline-position: under;\n          text-decoration: underline double;\n          cursor: help;\n          outline: var(--abbreviation-selection, #ffff33);\n        }\n        abbr:focus,\n        abbr:active,\n        abbr:hover {\n          text-decoration: none;\n          background-color: var(--abbreviation-selection, #ffff33);\n        }\n        abbr::-moz-selection,\n        abbr::selection {\n          text-decoration: none;\n          background-color: var(--abbreviation-selection, #ffff33);\n        }\n        simple-tooltip {\n          --simple-tooltip-background: #000000;\n          --simple-tooltip-opacity: 1;\n          --simple-tooltip-text-color: #ffffff;\n          --simple-tooltip-delay-in: 0;\n        }\n      "]);return d=function(){return e},e}function h(){var e=b(['\n      <abbr tabindex="0" title="','" id="abbr">','</abbr>\n      <simple-tooltip for="abbr" position="top" offset="2" animation-delay="300"\n        >',"</simple-tooltip\n      >\n    "]);return h=function(){return e},e}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(b,r.SchemaBehaviors(n.LitElement));var t,i,c,u=f(b);function b(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),e=u.call(this),setTimeout(function(){},0),e}return t=b,c=[{key:"styles",get:function(){return[n.css(d())]}},{key:"tag",get:function(){return"lrndesign-abbreviation"}},{key:"properties",get:function(){return a(a({},p(l(b),"properties",this)),{},{abbr:{type:String},phrase:{type:String}})}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!1,canEditSource:!1,gizmo:{title:"Abbreviation",description:"Simple abbreviation with tooltip of full word",icon:"editor:title",color:"grey",groups:["Instructional","Term"],handles:[{type:"inline",text:"text"}],meta:{author:"ELMS:LN"}},settings:{quick:[{property:"abbr",title:"Abbreviation",description:"Abbreviation word",inputMethod:"textfield",icon:"editor:title"},{property:"phrase",title:"Phrase",description:"The phrase / original words",inputMethod:"textfield",icon:"editor:title"}],configure:[{property:"abbr",title:"Abbreviation",description:"Abbreviation word",inputMethod:"textfield",icon:"editor:title"},{property:"phrase",title:"Phrase",description:"The phrase / original words",inputMethod:"textfield",icon:"editor:title"}],advanced:[]}}}}],(i=[{key:"render",value:function(){return n.html(h(),this.phrase,this.abbr,this.phrase)}}])&&o(t.prototype,i),c&&o(t,c),b}();window.customElements.define(y.tag,y),e.LrndesignAbbreviation=y,Object.defineProperty(e,"__esModule",{value:!0})});

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/csv-render/csv-render.js"),require("lit-element/lit-element.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/csv-render/csv-render.js","lit-element/lit-element.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js"],t):t((e=e||self).LrnTable={},null,e.litElement_js,e.schemaBehaviors_js)}(this,function(e,t,r,n){"use strict";function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){i(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=l(e);if(t){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}function p(e,t,r){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var b,y,h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(h,n.SchemaBehaviors(r.LitElement));var t,i,c,a=f(h);function h(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),e=a.call(this),setTimeout(function(){},0),e}return t=h,c=[{key:"styles",get:function(){return[r.css(y||(y=d(["\n        :host {\n          display: block;\n        }\n        .hidden-title {\n          display: none;\n        }\n      "])))]}},{key:"tag",get:function(){return"lrn-table"}},{key:"properties",get:function(){return s(s({},p(l(h),"properties",this)),{},{title:{type:String},csvFile:{type:String,attribute:"csv-file"},description:{type:String}})}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"CSV table",description:"This can generate a table from a CSV file no matter where it is located.",icon:"editor:border-all",color:"green",groups:["Presentation","Table","Data"],handles:[{type:"csv",source:"csvFile"}],meta:{author:"ELMS:LN"}},settings:{configure:[{property:"csvFile",title:"Source",description:"The URL for this csv file.",inputMethod:"haxupload",required:!0},{property:"title",title:"Title",description:"Title for the table to be generated.",inputMethod:"textfield"},{property:"description",title:"Description",description:"More detailed description for improved accessibility of the table data.",inputMethod:"textfield"}],advanced:[]}}}}],(i=[{key:"render",value:function(){return r.html(b||(b=d(['\n      <div typeof="oer:SupportingMaterial">\n        <div class="hidden-title" property="oer:name">','</div>\n        <div property="oer:description">\n          <slot></slot>\n          <csv-render\n            data-source="','"\n            caption="','"\n            summary="','"\n          ></csv-render>\n        </div>\n      </div>\n    '])),this.title,this.csvFile,this.title,this.description)}}])&&o(t.prototype,i),c&&o(t,c),h}();window.customElements.define(h.tag,h),e.LrnTable=h,Object.defineProperty(e,"__esModule",{value:!0})});

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("@polymer/iron-icons/iron-icons.js"),require("@polymer/paper-input/paper-input.js"),require("@lrnwebcomponents/simple-tooltip/simple-tooltip.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@polymer/iron-icons/iron-icons.js","@polymer/paper-input/paper-input.js","@lrnwebcomponents/simple-tooltip/simple-tooltip.js"],t):t((e=e||self).SimpleSearch={},e.litElement_js)}(this,function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach(function(t){i(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function f(e,t,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function b(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function d(){var e=b([" <slot></slot> "]);return d=function(){return e},e}var v=function(e){c(i,t.LitElement);var r=h(i);function i(){return n(this,i),r.apply(this,arguments)}return o(i,[{key:"enableSearch",value:function(e){var t=this;e.addEventListener("simple-search",function(n){return t._searchContent(e)}),e.addEventListener("goto-result",function(e){return t.focus(e.detail)})}},{key:"_searchContent",value:function(e){var t=this.innerHTML;this.innerHTML=e.findMatches(t)}},{key:"focus",value:function(e){var t=this.querySelector('[match-number="'+e+'"]');null!=t&&t.focus()}},{key:"render",value:function(){return t.html(d())}}],[{key:"tag",get:function(){return"simple-search-content"}}]),i}();function m(){var e=b(["\n        :host {\n          margin-right: 4px;\n          font-family: var(--simple-search-match-font-family, unset);\n          color: var(--simple-search-match-text-color, #000);\n          background-color: var(--simple-search-match-bg-color, #f0f0f0);\n          border: var(--simple-search-match-border, 1px solid);\n          border-color: var(--simple-search-match-border-color, #ddd);\n          padding: var(--simple-search-match-padding, 0.16px 0px 0.16px 4px);\n          border-radius: var(--simple-search-match-border-radius, 0.16px);\n          font-weight: var(--simple-search-match-font-weight, bold);\n        }\n      "]);return m=function(){return e},e}function y(){var e=b([" <slot></slot> "]);return y=function(){return e},e}customElements.define(v.tag,v);var g=function(e){c(i,t.LitElement);var r=h(i);function i(){return n(this,i),r.apply(this,arguments)}return o(i,[{key:"render",value:function(){return t.html(y())}}],[{key:"tag",get:function(){return"simple-search-match"}},{key:"properties",get:function(){return s(s({},f(l(i),"properties",this)),{},{matchNumber:{type:Number,reflect:!0,attribute:"match-number"}})}},{key:"styles",get:function(){return[t.css(m())]}}]),i}();function _(){var e=b(["\n:host {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  width: 100%;\n}\n\n#input {\n  flex-grow: 2;\n  margin-right: 4px;\n  padding: var(--simple-search-padding, unset);\n  margin: var(--simple-search-margin, unset);\n  --paper-input-container-input-color: var(\n  --simple-search-input-text-color,\n  #000\n);\n  --paper-input-container-shared-input-style_-_color: var(\n  --simple-search-input-text-color,\n  #000\n);\n  --paper-input-container-focus-color: var(\n  --simple-search-input-line-color,\n  #000\n);\n  --paper-input-container-color: var(\n  --simple-search-input-placeholder-color,\n  #222\n);\n  color: var(--simple-search-input-placeholder-color, #222);\n}\n\n#xofy {\n  margin: 8px;\n}\n\nbutton {\n  margin: 8px 0 8px;\n  color: var(--simple-search-button-color, #111);\n  background-color: var(--simple-search-button-bg-color, #eee);\n  border-color: var(--simple-search-button-border-color, #ccc);\n}\n\nbutton:not([disabled]):focus,\nbutton:not([disabled]):hover {\n  cursor: pointer;\n  color: var(--simple-search-button-hover-color, #000);\n  background-color: var(--simple-search-button-hover-bg-color, #fff);\n  border-color: var(--simple-search-button-hover-border-color, #ddd);\n}\n\nbutton[disabled] {\n  cursor: not-allowed;\n  color: var(--simple-search-button-disabled-color, #999);\n  background-color: var(--simple-search-button-disabled-bg-color, #eee);\n  border-color: var(--simple-search-button-disabled-border-color, #ccc);\n}\n\nbutton:not([controls]) {\n  display: none;\n}\n\n*[shrink-hide] {\n  display: none;\n}\n      "]);return _=function(){return e},e}function x(){var e=b(['\n\n<paper-input\n    id="input"\n    label="','"\n    ?always-float-label="','"\n    ?no-label-float="','"\n    @change="','"\n  >\n    <iron-icon icon="','" slot="prefix"></iron-icon>\n  </paper-input>\n  <div id="xofy" ?shrink-hide="','">\n    ','\n  </div>\n  <div  ?shrink-hide="','">\n    <button\n      id="prev"\n      aria-label="','"\n      role="button"\n      controls="','"\n      tabindex="0"\n      ?disabled="','"\n      @click="','"\n    >\n      <iron-icon icon="','"></iron-icon>\n    </button>\n    <simple-tooltip for="prev">','</simple-tooltip>\n    <button\n      id="next"\n      aria-label="','"\n      role="button"\n      controls="','"\n      tabindex="0"\n      ?disabled="','"\n      @click="','"\n    >\n      <iron-icon icon="','"></iron-icon>\n    </button>\n    <simple-tooltip for="next">',"</simple-tooltip>\n  </div>"]);return x=function(){return e},e}customElements.define(g.tag,g);var w=function(e){c(i,t.LitElement);var r=h(i);function i(){var e;return n(this,i),(e=r.call(this)).alwaysFloatLabel=!1,e.caseSensitive=null,e.controls=null,e.nextButtonIcon="arrow-forward",e.nextButtonLabel="next result",e.noLabelFloat=!1,e.prevButtonIcon="arrow-back",e.prevButtonLabel="previous result",e.resultCount=0,e.resultPointer=0,e.searchInputIcon="search",e.searchInputLabel="search",e.searchTerms=[],e.target=null,e.selector=null,e.__hideNext=!0,e.__hidePrev=!0,e}return o(i,[{key:"render",value:function(){return t.html(x(),this.searchInputLabel,this.alwaysFloatLabel,this.noLabelFloat,this._handleChange,this.searchInputIcon,this._hasNoSearch(this.searchTerms),this._getResultsSpan(this.resultPointer,this.resultCount),this._hasNoSearch(this.searchTerms),this.prevButtonLabel,this.controls,this.__hidePrev,this._navigateResults,this.prevButtonIcon,this.prevButtonLabel,this.nextButtonLabel,this.controls,this.__hideNext,this._navigateResults,this.nextButtonIcon,this.nextButtonLabel)}}],[{key:"styles",get:function(){return[t.css(_())]}},{key:"properties",get:function(){return s(s({},f(l(i),"properties",this)),{},{alwaysFloatLabel:{attribute:"always-float-label",type:Boolean},caseSensitive:{attribute:"case-sensitive",type:Boolean},controls:{attribute:"controls",type:String},nextButtonIcon:{attribute:"next-button-icon",type:String},nextButtonLabel:{attribute:"next-button-label",type:String},noLabelFloat:{attribute:"no-label-float",type:Boolean},prevButtonIcon:{attribute:"prev-button-icon",type:String},prevButtonLabel:{attribute:"prev-button-label",type:String},resultCount:{attribute:"result-count",type:Number},resultPointer:{attribute:"result-pointer",type:Number},selector:{attribute:"selector",type:String},searchInputIcon:{attribute:"search-input-icon",type:String},searchInputLabel:{attribute:"search-input-label",type:String},searchTerms:{attribute:"search-terms",type:Array},target:{type:Object},__hideNext:{type:Boolean},__hidePrev:{type:Boolean}})}},{key:"tag",get:function(){return"simple-search"}}]),o(i,[{key:"updated",value:function(e){var t=this;e.forEach(function(e,n){"resultPointer"!==n&&"resultCount"!==n||t._getNavDisabled(t.resultPointer,t.resultCount)})}},{key:"_handleChange",value:function(e){var t=this,n=this.selector?" ".concat(this.selector):"",r=this.controls?this.getRootNode().querySelectorAll("#".concat(this.controls).concat(n)):null;console.log(this.controls,r,this.getRootNode()),this._getSearchText(),this.resultCount=0,this.resultPointer=0,r.forEach(function(e){t._searchSelection(e)}),this.dispatchEvent(new CustomEvent("simple-search",{detail:{search:this,content:e}}))}},{key:"_searchSelection",value:function(e){e&&e.innerHTML&&(e.innerHTML=this.findMatches(e.innerHTML))}},{key:"_hasNoSearch",value:function(e){return e.length<1}},{key:"_getResultsSpan",value:function(e,t){return t>0&&e>0?e+"/"+t:t>0?t:"0"}},{key:"_navigateResults",value:function(e){var t="next"===e.currentTarget.id?1:-1;this.resultPointer+t>0&&this.resultPointer+t<=this.resultCount&&(this.resultPointer+=t,this.dispatchEvent(new CustomEvent("goto-result",{detail:this.resultPointer})))}},{key:"_getNavDisabled",value:function(e,t){this.__hidePrev=this._isNavButtonDisabled(e,t,-1),this.__hideNext=this._isNavButtonDisabled(e,t)}},{key:"_isNavButtonDisabled",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return!t||0===t||e+n<=0||e+n>t}},{key:"_getSearchText",value:function(){var e=this.shadowRoot.querySelector("#input").value,t=new Array;if(null!=e){t=e.split(/[\"\']/gm);for(var n=0;n<t.length;n++)t[n]=t[n].trim(),""===t[n]&&t.splice(n,1)}this.searchTerms=t.slice(0)}},{key:"findMatches",value:function(e){var t=this;return this.resultPointer=0,e=e.replace(/<\/?simple-search-match[^>]*>/g,""),this.searchTerms.forEach(function(n){var r=t.caseSensitive?"gm":"gim",o=new RegExp("\\b("+n+")\\b",r);e=e.replace(o,function(e){return t.resultCount++,'<simple-search-match tabindex="0" match-number="'.concat(t.resultCount,'">').concat(e,"</simple-search-match>")})}),e}}]),i}();customElements.define(w.tag,w),e.SimpleSearch=w,Object.defineProperty(e,"__esModule",{value:!0})});

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/responsive-utility/lib/responsive-utility-behaviors.js"),require("@polymer/paper-button/paper-button.js"),require("@polymer/iron-icons/iron-icons.js"),require("@lrnwebcomponents/simple-tooltip/simple-tooltip.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/responsive-utility/lib/responsive-utility-behaviors.js","@polymer/paper-button/paper-button.js","@polymer/iron-icons/iron-icons.js","@lrnwebcomponents/simple-tooltip/simple-tooltip.js"],e):e((t=t||self).A11yTabs={},t.litElement_js,t.responsiveUtilityBehaviors_js)}(this,function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach(function(e){i(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,a=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return d(this,n)}}function f(t,e,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var a=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}(t,e);if(a){var o=Object.getOwnPropertyDescriptor(a,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function y(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function h(){var t=y(['\n        :host {\n          display: block;\n          height: var(--a11y-tabs-tab-height, --a11y-tabs-height);\n          overflow: var(--a11y-tabs-tab-overflow, --a11y-tabs-overflow);\n        }\n        :host([hidden]) {\n          display: none;\n        }\n        .sr-only {\n          position: absolute;\n          left: -99999px;\n          height: 0;\n          overflow: hidden;\n        }\n        #content-inner {\n          max-width: 100%;\n          overflow: auto;\n        }\n        ::slotted(*[slot="label"]) {\n          display: none;\n        }\n      ']);return h=function(){return t},t}function v(){var t=y(['\n      <span class="sr-only">Tab ','</span>\n      <slot name="label"></slot>\n      <div id="content-inner"><slot></slot></div>\n      <span class="sr-only">\n        End of tab ','. Back to <a href="#','">tabs</a>.\n      </span>\n    ']);return v=function(){return t},t}var g=function(t){c(o,e.LitElement);var n=p(o);function o(){var t;return a(this,o),(t=n.call(this)).disabled=!1,t.hidden=!1,t.order=1,t.total=1,t.addEventListener("a11y-tab-flag",function(e){return t.handleFlag(e)}),t}return r(o,[{key:"render",value:function(){return e.html(v(),this.xOfY,this.xOfY,this.id)}}],[{key:"styles",get:function(){return[e.css(h())]}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!0,canEditSource:!1,gizmo:{title:"Tab",description:"A single tab.",icon:"view-day",color:"grey",groups:["Content","Presentation","Tabs"]},settings:{quick:[{property:"disabled",title:"Disabled",inputMethod:"boolean"},{property:"sticky",title:"Sticky.",desc:"Horizontal tabs stick to the top of the window when scrolling.",inputMethod:"boolean"}],configure:[{property:"icon",title:"Tab Icon",inputMethod:"iconpicker"},{property:"disabled",title:"Disabled",inputMethod:"boolean"},{property:"label",title:"Tab Label",inputMethod:"textfield"},{slot:"",title:"Tab Content",description:"A content of the tab.",inputMethod:"code-editor"}],advanced:[{property:"id",title:"Unique ID",inputMethod:"textfield"},{property:"flag",title:"Optional Flag Text",inputMethod:"textfield"},{property:"flagIcon",title:"Optional Flag Icon",inputMethod:"iconpicker"}]}}}},{key:"properties",get:function(){return{flag:{type:String,reflect:!0},flagIcon:{type:String,attribute:"flag-icon"},disabled:{type:Boolean,reflect:!0,attribute:"disabled"},hidden:{type:Boolean,reflect:!0,attribute:"hidden"},icon:{type:String},id:{type:String,reflect:!0,attribute:"id"},label:{type:String},order:{type:Number},total:{type:Number}}}}]),r(o,[{key:"connectedCallback",value:function(){f(u(o.prototype),"connectedCallback",this).call(this),this._labelChanged(),this.observer.observe(this,{childList:!0})}},{key:"disconnectedCallback",value:function(){var t=this;this.observer.disconnect(),this.removeEventListener("a11y-tab-flag",function(e){return t.handleFlag(e)}),this._fireTabChanged(),f(u(o.prototype),"disconnectedCallback",this).call(this)}},{key:"updated",value:function(t){var e=this;t.forEach(function(t,n){["id","order"].includes(n)&&!e.id&&(e.id="tab-".concat(e.order)),["label","order"].includes(n)&&!e.label&&e._labelChanged(),"flag"===n&&e._fireTabChanged(),"flagIcon"===n&&e._fireTabChanged(),"icon"===n&&e._fireTabChanged(),"id"===n&&e._fireTabChanged(),"label"===n&&e._fireTabChanged(),"disabled"===n&&e.disabled&&e._fireTabChanged()})}},{key:"_handleFlag",value:function(t){this.flag=t.detail.flag,this.flagIcon=t.detail.flagIcon}},{key:"_labelChanged",value:function(){this.label&&""!==this.label.trim()||(this.label=this.querySelector('*[slot="label"]')?this.querySelector('*[slot="label"]').innerHTML:"Tab ".concat(this.order))}},{key:"_fireTabChanged",value:function(){this.dispatchEvent(new CustomEvent("a11y-tab-changed",{bubbles:!0,cancelable:!0,composed:!1,detail:this}))}},{key:"observer",get:function(){var t=this;return new MutationObserver(function(e){return t._labelChanged()})}},{key:"xOfY",get:function(){return"".concat(this.order," of ").concat(this.total)}}],[{key:"tag",get:function(){return"a11y-tab"}}]),o}();function k(){var t=y(['\n      <simple-tooltip for="','-button"> '," </simple-tooltip>\n    "]);return k=function(){return t},t}function m(){var t=y([' <span class="label">',"</span> "]);return m=function(){return t},t}function w(){var t=y(['\n      <iron-icon\n        class="icon"\n        ?hidden="','"\n        .icon="','"\n        .title="','"\n      >\n      </iron-icon>\n    ']);return w=function(){return t},t}function _(){var t=y(['\n      <span class="flag-type" ?hidden="','"> '," </span>\n    "]);return _=function(){return t},t}function x(){var t=y(['\n      <paper-button\n        id="','-button"\n        controls="','"\n        class="','"\n        @click="','"\n        ?disabled="','"\n        .flag="','"\n      >\n        '," ","\n        "," ","\n      </paper-button>\n      ","\n    "]);return x=function(){return t},t}function O(){var t=y(["\n:host {\n  display: block;\n  height: var(--a11y-tabs-height);\n  overflow: var(--a11y-tabs-overflow);\n  font-size: var(--a11y-tabs-font-size, unset);\n  font-family: var(--a11y-tabs-font-family, unset);\n  --a11y-tabs-width: 100%;\n  --a11y-tabs-background: white;\n  --a11y-tabs-border-color: #ddd;\n  --a11y-tabs-color: #000;\n  --a11y-tabs-faded-color: #333;\n  --a11y-tabs-focus-color: var(-a11y-tabs-color);\n  --a11y-tabs-faded-background: #f8f8f8;\n  --a11y-tabs-disabled-color: #999;\n  --a11y-tabs-disabled-background: #eee;\n  --a11y-tabs-border-radius: 2px;\n  --a11y-tabs-horizontal-background: var(--a11y-tabs-background, white);\n  --a11y-tabs-horizontal-border-radius: var(--a11y-tabs-border-radius, 2px);\n  --a11y-tabs-vertical-border-radius: var(--a11y-tabs-border-radius, 2px);\n  --a11y-tabs-content-background: var(--a11y-tabs-background, white);\n  --a11y-tabs-content-padding: 16px;\n  --a11y-tabs-button-padding: 8px;\n  --a11y-tabs-vertical-button-padding: var(--a11y-tabs-button-padding, 8px);\n  --a11y-tabs-horizontal-border-radius: unset;\n  --a11y-tabs-vertical-border-radius: unset;\n  --a11y-tabs-horizontal-button-padding: var(--a11y-tabs-button-padding, 8px);\n  --a11y-tabs-width: auto;\n}\n\n:host([vertical]) {\n  border: 1px solid var(--a11y-tabs-border-color);\n  border-radius: var(--a11y-tabs-vertical-border-radius);\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host #tabs {\n  align-items: stretch;\n  flex-wrap: var(--a11y-tabs-wrap, unset);\n  margin: 0;\n  display: flex;\n  list-style: none;\n  padding: 0;\n  overflow: auto;\n  max-width: 100%;\n  overflow-x: auto;\n  z-index: 1;\n  justify-content: var(--a11y-tabs-horizontal-justify-tabs);\n  background-color: var(--a11y-tabs-horizontal-background);\n  font-family: var(--a11y-tabs-tab-font-family, var(--a11y-tabs-font-family, unset));\n  font-size: var(--a11y-tabs-tab-font-size, var(--a11y-tabs-font-size, unset));\n}\n\n:host([vertical]) #tabs {\n  border-left: none;\n  flex: 0 0 auto;\n  flex-direction: column;\n  overflow-y: auto;\n  max-width: unset;\n  overflow-x: unset;\n  z-index: unset;\n  background-color: var(--a11y-tabs-vertical-background);\n  justify-content: var(--a11y-tabs-vertical-justify-tabs);\n  flex-wrap: var(--a11y-tabs-vertical-wrap);\n}\n\n:host([sticky]) #tabs {\n  position: sticky;\n  top: 0;\n}\n\n:host #tabs li {\n  display: flex;\n  align-items: stretch;\n}\n\n:host([vertical]) #tabs li {\n  flex-direction: column;\n}\n\n:host #tabs .flag-type {\n  position: absolute;\n  left: -99999px;\n  height: 0; \n  overflow: hidden;\n}\n\n:host #content {\n  padding: var(--a11y-tabs-content-padding);\n  background-color: var(--a11y-tabs-content-background);\n  border: 1px solid var(--a11y-tabs-border-color);\n  flex: 1 1 calc(100% - 2 * var(--a11y-tabs-content-padding));\n  overflow: auto;\n}\n\n:host([vertical]) #content {\n  border: none;\n}\n\n:host(:not([vertical])) #content {\n  border-radius: var(--a11y-tabs-horizontal-border-radius);\n  margin-top: -1px;\n}\n\n:host #tabs paper-button {\n  margin: 0;\n  text-transform: unset;\n  color: var(--a11y-tabs-faded-color);\n  border: 1px solid var(--a11y-tabs-border-color);\n  background-color: var(--a11y-tabs-faded-background);\n  padding: var(--a11y-tabs-horizontal-button-padding);\n  border-radius: var(--a11y-tabs-horizontal-border-radius) var(--a11y-tabs-horizontal-border-radius) 0 0; \n}\n\n:host([vertical]) #tabs paper-button {\n  border-top: none;\n  border-left: none;\n  border-radius: 0; \n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--a11y-tabs-vertical-button-padding);\n}\n\n:host(:not([vertical])) #tabs li:not(:first-of-type) paper-button {\n  border-left: none;\n}\n\n:host #tabs paper-button:active,\n:host #tabs paper-button:focus,\n:host #tabs paper-button:hover {\n  color: var(--a11y-tabs-focus-color);\n}\n\n:host #tabs paper-button.active[disabled] {\n  color: var(--a11y-tabs-focus-color);\n  background-color: var(--a11y-tabs-background);\n}\n\n:host(:not([vertical])) #tabs paper-button.active {\n  border-bottom: var(--a11y-tabs-background);\n}\n\n:host([vertical]) #tabs paper-button.active {\n  border-right: var(--a11y-tabs-background);\n}\n\n:host #tabs paper-button:not(.active)[disabled] {\n  color: var(--a11y-tabs-disabled-color);\n  background-color: var(--a11y-tabs-disabled-background);\n  cursor: not-allowed;\n}\n\n:host #tabs span.label,\n:host #tabs .flag-icon {\n  margin-right: 8px;\n}\n\n:host([icons-only]) #tabs paper-button {\n  justify-content: center;\n}\n\n:host([icons-only]) #tabs span.label {\n  display: none;\n}\n\n:host(:not([icons-only])) #tabs #tabs simple-tooltip {\n  display: none;\n}\n\niron-icon:not([hidden]) {\n  display: inline-block;\n}\n      "]);return O=function(){return t},t}function j(){var t=y(["\n    <li>","</li>\n  "]);return j=function(){return t},t}function T(){var t=y(['\n\n<ul id="tabs">\n  ','\n</ul>\n<div id="content">\n  <slot></slot>\n</div>']);return T=function(){return t},t}window.customElements.define(g.tag,g);var C=function(t){c(i,n.ResponsiveUtilityBehaviors(e.LitElement));var o=p(i);function i(){var t;return a(this,i),(t=o.call(this)).disabled=!1,t.hidden=!1,t.__tabs=[],t}return r(i,[{key:"render",value:function(){var t=this;return e.html(T(),this.tabs.map(function(n,a){return e.html(j(),t._tabButton(n))}))}}],[{key:"styles",get:function(){return[e.css(O())]}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!0,canEditSource:!1,gizmo:{title:"Tabs",description:"A set of tabs.",icon:"view-day",color:"grey",groups:["Content","Presentation","Tabs"]},settings:{quick:[{property:"disabled",title:"Disabled",inputMethod:"boolean"},{property:"hidden",title:"Hidden",inputMethod:"boolean"},{property:"sticky",title:"Sticky",desc:"Horizontal tabs stick to the top of the window when scrolling.",inputMethod:"boolean"}],configure:[{property:"disabled",title:"Disabled",inputMethod:"boolean"},{property:"hidden",title:"Hidden",inputMethod:"boolean"},{property:"sticky",title:"Sticky.",desc:"Horizontal tabs stick to the top of the window when scrolling.",inputMethod:"boolean"},{property:"layoutBreakpoint",title:"Layout Breakpoint",inputMethod:"Number",descripton:"Optional minimum breakpoint for horizontal layout of tabs. Default is unset (always horizontal). Setting `-1` forces vertical-only mode."},{property:"iconBreakpoint",title:"Icon Breakpoint",inputMethod:"Number",descripton:"Optional minimum breakpoint for showing tab text with icons. Default is always text with icons (0). Setting to -1 forces icon-only mode."},{slot:"",title:"Tabs",description:"A series of <a11y-tab/> elements.",inputMethod:"code-editor"}],advanced:[{property:"id",title:"Unique ID",inputMethod:"textfield"}]}}}},{key:"properties",get:function(){return l(l({},f(u(i),"properties",this)),{},{activeTab:{type:String,reflect:!0,attribute:"active-tab"},disabled:{type:Boolean,reflect:!0,attribute:"disabled"},hidden:{type:Boolean,reflect:!0,attribute:"hidden"},iconBreakpoint:{type:Number,attribute:"icon-breakpoint"},id:{type:String,reflect:!0},layoutBreakpoint:{type:Number,attribute:"layout-breakpoint"},responsiveSize:{type:String,reflect:!0,attribute:"responsive-size"},sticky:{type:Boolean,reflect:!0,attribute:"sticky"},__tabs:{type:Array}})}},{key:"tag",get:function(){return"a11y-tabs"}}]),r(i,[{key:"connectedCallback",value:function(){var t=this;f(u(i.prototype),"connectedCallback",this).call(this),this.updateTabs(),this.observer.observe(this,{attributes:!1,childList:!0,subtree:!1}),this.addEventListener("a11y-tab-changed",function(e){return t.updateTabs()})}},{key:"disconnectedCallback",value:function(){var t=this;this.observer&&this.observer.disconnect&&this.observer.disconnect(),this.removeEventListener("a11y-tab-changed",function(e){return t.updateTabs()}),f(u(i.prototype),"disconnectedCallback",this).call(this)}},{key:"firstUpdated",value:function(){f(u(i.prototype),"firstUpdated",this).call(this)&&f(u(i.prototype),"firstUpdated",this).call(this),window.ResponsiveUtility.requestAvailability(),window.dispatchEvent(new CustomEvent("responsive-element",{detail:{element:this}}))}},{key:"updated",value:function(t){var e=this;t.forEach(function(t,n){"id"===n&&e._idChanged(e.id,t),"activeTab"===n&&e.activeTab!==t&&e._activeTabChanged(e.activeTab,t),"responsiveWidth"===n&&(e.vertical?e.setAttribute("vertical",!0):e.removeAttribute("vertical")),["iconsBreakpoint","responsiveWidth","__tabs"].includes(n)&&(e.iconsOnly?e.setAttribute("icons-only",!0):e.removeAttribute("icons-only"))})}},{key:"selectTab",value:function(t){var e=this.querySelectorAll(this.tabQuery);if(e&&e.length>0){var n=Object.keys(e||[]).filter(function(t){return!e[t].disabled}).map(function(t){return e[t].id}),a=n.filter(function(e){return e===t})[0]||n[0];e.forEach(function(t){t.hidden=t.id!==a}),this.activeTab=a}}},{key:"updateTabs",value:function(t){this.__tabs=this.querySelectorAll(this.tabQuery),this.selectTab(this.activeTab)}},{key:"_activeTabChanged",value:function(t,e){t!==e&&this.selectTab(t),window.dispatchEvent(new CustomEvent("active-tab-changed",{bubbles:!0,cancelable:!0,composed:!0,detail:this}))}},{key:"_generateUUID",value:function(){return"ss-s-s-s-sss".replace(/s/g,Math.floor(65536*(1+Math.random())).toString(16).substring(1))}},{key:"_handleTab",value:function(t){t.disabled||(this.activeTab=t.id)}},{key:"_idChanged",value:function(t,e){t||(this.id="a11y-tabs"+this._generateUUID())}},{key:"_tabButton",value:function(t){var n=this;return e.html(x(),t.id,t.id,t.id!==this.activeTab||this.disabled?"":"active",function(e){return n._handleTab(t)},t.id===this.activeTab||t.disabled||this.disabled,t.flag,this._tabIcon(t,"flagIcon"),this._tabLabel(t),this._tabFlag(t),this._tabIcon(t,"icon"),this._tabTooltip(t))}},{key:"_tabFlag",value:function(t){return e.html(_(),!t.flag,t.flag)}},{key:"_tabIcon",value:function(t,n){return e.html(w(),!t[n],t[n],t[flag])}},{key:"_tabLabel",value:function(t){return e.html(m(),t.label)}},{key:"_tabTooltip",value:function(t){return e.html(k(),t.id,t.label)}},{key:"iconsOnly",get:function(){return this.iconBreakpoint&&(this.tabs||[]).filter(function(t){return!t.icon}).length<1&&this.responsiveWidth<this.iconBreakpoint}},{key:"observer",get:function(){var t=this;return new MutationObserver(function(){return t.updateTabs()})}},{key:"tabQuery",get:function(){return"a11y-tab"}},{key:"tabs",get:function(){var t=this;return Object.keys(this.__tabs||{}).map(function(e){return t.__tabs[e].order=e+1,t.__tabs[e].total=t.__tabs.length,t.__tabs[e]})}},{key:"vertical",get:function(){return this.layoutBreakpoint&&this.layoutBreakpoint<this.responsiveWidth}}]),i}();window.customElements.define(C.tag,C),t.A11yTabs=C,Object.defineProperty(t,"__esModule",{value:!0})});

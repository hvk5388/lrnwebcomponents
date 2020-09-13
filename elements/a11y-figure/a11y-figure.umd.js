!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"),require("@lrnwebcomponents/a11y-details/a11y-details.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","@lrnwebcomponents/a11y-details/a11y-details.js"],t):t((e=e||self).A11yFigure={},e.litElement_js,e.HAXWiring_js,e.a11yDetails_js)}(this,function(e,t,n,i){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){a(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,i=u(e);if(t){var r=u(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return f(this,n)}}function d(e,t,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function g(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function y(){var e=g(['\n        :host {\n          display: block;\n        }\n        :host([hidden]) {\n          display: none;\n        }\n        figure {\n          position: relative;\n        }\n        figcaption {\n          display: flex;\n          width: 100%;\n          align-items: center;\n          justify-content: space-between;\n          margin: var(--a11y-figure-figcaption-margin, 0);\n          padding: var(--a11y-figure-figcaption-padding, 0);\n          font-size: var(--a11y-figure-figcaption-fontSize, unset);\n          background-color: var(--a11y-figure-figcaption-backgroundColor, #fff);\n          color: var(--a11y-figure-figcaption-color, #000);\n        }\n        ::slotted([slot="figcaption"]) {\n          margin: 0;\n        }\n        img,\n        ::slotted([slot="image"]) {\n          width: 100%;\n        }\n      ']);return y=function(){return e},e}function h(){var e=g([' <img src="','" alt="','" /> ']);return h=function(){return e},e}function m(){var e=g(["\n      <figure>\n        ",'\n        <slot name="image" ?hidden="','"></slot>\n        <figcaption>\n          <slot name="figcaption"></slot>\n          <a11y-details\n            open-text="','"\n            close-text="','"\n          >\n            <div slot="summary"><slot name="summary"></slot></div>\n            <div slot="details"><slot name="details"></slot></div>\n            <slot name="figdetails"></slot>\n          </a11y-details>\n        </figcaption>\n      </figure>\n      <slot hidden></slot>\n    ']);return m=function(){return e},e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(a,i.A11yDetails);var r=p(a);function a(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(e=r.call(this)).tag=a.tag,e}return o(a,[{key:"render",value:function(){return t.html(m(),this.imgSrc?t.html(h(),this.imgSrc,this.imgAlt):"",this.imgSrc,this.openText,this.closeText)}},{key:"tag",value:function(){return"a11y-figure"}}],[{key:"styles",get:function(){return[t.css(y())]}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Accessible Figure",description:"Accessible figure with long description",icon:"av:call-to-action",color:"grey",groups:["11"],handles:[{type:"image",source:"imgSrc",alt:"imgAlt",caption:"figcaption",ariaDescribedby:"describedBy"}],meta:{author:"nikkimk",owner:"The Pennsylvania State University"}},settings:{quick:[],configure:[{property:"imgSrc",title:"Image",inputMethod:"haxupload"},{property:"imgAlt",title:"Alt Text",inputMethod:"alt",required:!0},{slot:"figcaption",title:"Figure Caption",description:"Figure caption text that is always visible.",inputMethod:"code-editor"},{slot:"details",title:"Decription",description:"Detailed image description that can be hidden or shown",inputMethod:"code-editor"},{slot:"summary",title:"Decription Button",description:'Default for button that shows/hides description text, eg. "info", "medatadata", etc. ',inputMethod:"code-editor"}],advanced:[{property:"openText",title:"Optional summary text when details are open",inputMethod:"textfield",required:!1},{property:"closeText",title:"Optional summary text when details are closed",inputMethod:"textfield",required:!1}]},demoSchema:[{tag:"a11y-figure",properties:{imgSrc:"//placekitten.com/400/300",imgAlt:"random kitten",openText:"Show Description",closeText:"Hide Description",style:"max-width:400px"},content:'<h4 slot="figcaption">Random Kitten</h4>\n<div slot="summary">Image Description</div>\n<div slot="details">Aenean eget nisl volutpat, molestie purus eget, bibendum metus. Pellentesque magna velit, tincidunt quis pharetra id, gravida placerat erat. Maecenas id dui pretium risus pulvinar feugiat vel nec leo. Praesent non congue tellus. Suspendisse ac tincidunt purus. Donec eu dui a metus vehicula bibendum sed nec tortor. Nunc convallis justo sed nibh consectetur, at pharetra nulla accumsan.</div>'}]}}},{key:"properties",get:function(){return s(s({},d(u(a),"properties",this)),{},{imgSrc:{type:String,attribute:"img-src"},imgAlt:{type:String,attribute:"img-alt"}})}}]),o(a,[{key:"_updateElement",value:function(){var e=this.querySelector("* > figure"),t=e?e.querySelector("* > img"):void 0,n=e?e.querySelector("* > figcaption"):void 0;t&&((this.querySelectorAll("[slot=image]")||[]).forEach(function(e){return e.remove()}),t.cloneNode(),t.slot="image",this.appendChild(t)),n&&this._copyAndFilter(n.cloneNode(!0),["figcaption","details","summary"])}},{key:"_copyAndFilter",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=t[n+1],r=e&&i?e.querySelector("* > ".concat(i)):void 0;r&&(this._copyAndFilter(r,t,n+1),Object.keys(r||{}).forEach(function(e){return r[e].remove()})),this._copyToSlot(t[n],e)}},{key:"_watchChildren",value:function(e){this._hasMutations(e)?(this._updateElement(),this.figureObserver.observe(this.querySelector("* > figure"),{childList:!0,subtree:!0,characterData:!0})):this._hasMutations(e,"removedNodes")&&!this.querySelector("* > figureObserver")&&this.detailsObserver.disconnect&&this.detailsObserver.disconnect()}},{key:"connectedCallback",value:function(){d(u(a.prototype),"connectedCallback",this).call(this),this.HAXWiring=new n.HAXWiring,this.HAXWiring.setup(a.haxProperties,a.tag,this)}},{key:"observer",get:function(){var e=this;return new MutationObserver(function(t){return e._watchChildren(t)})}},{key:"figureObserver",get:function(){var e=this;return new MutationObserver(function(){return e._updateElement()})}}]),a}();customElements.define("a11y-figure",b),e.A11yFigure=b,Object.defineProperty(e,"__esModule",{value:!0})});

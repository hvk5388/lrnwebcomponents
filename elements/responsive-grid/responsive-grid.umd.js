!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("lit-element/lit-element.js"),require("@lrnwebcomponents/responsive-utility/responsive-utility.js")):"function"==typeof define&&define.amd?define(["lit-element/lit-element.js","@lrnwebcomponents/responsive-utility/responsive-utility.js"],n):n((e=e||self).litElement_js)}(this,function(e){"use strict";function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,n,o){return n&&r(e.prototype,n),o&&r(e,o),e}function t(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&i(e,n)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,n){return(i=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function l(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function c(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var r,o=s(e);if(n){var t=s(this).constructor;r=Reflect.construct(o,arguments,t)}else r=o.apply(this,arguments);return l(this,r)}}function d(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function p(){var e=d(["\n        :host {\n          position: relative;\n          min-height: 1px;\n          float: left;\n        }\n        :host:after {\n          clear: both;\n        }\n        #col-inner {\n          padding-left: var(--responsive-grid-col-inner-padding-left, 15px);\n          padding-right: var(--responsive-grid-col-inner-padding-right, 15px);\n        }\n        /* Hide Print-Only on Screen */\n        @media screen {\n          :host([print-only]) {\n            display: none;\n          }\n        }\n        /* Hide Screen-Only on Print */\n        @media print {\n          :host([screen-only]) {\n            display: none;\n          }\n        }\n      "]);return p=function(){return e},e}function g(){var e=d([' <div id="col-inner"><slot></slot></div> ']);return g=function(){return e},e}var u=function(r){t(i,e.LitElement);var s=c(i);function i(){var e;return n(this,i),(e=s.call(this)).xl=1,e.lg=1,e.md=1,e.sm=1,e.xs=1,e}return o(i,[{key:"render",value:function(){return e.html(g())}}],[{key:"styles",get:function(){return[e.css(p())]}},{key:"tag",get:function(){return"responsive-grid-col"}}]),o(i,null,[{key:"properties",get:function(){return{xl:{type:Number},lg:{type:Number},md:{type:Number},sm:{type:Number},xs:{type:Number}}}}]),i}();function a(){var e=d(["\n        :host {\n          display: none;\n          clear: both;\n        }\n      "]);return a=function(){return e},e}function v(){var e=d([""]);return v=function(){return e},e}window.customElements.define(u.tag,u);var m=function(r){t(i,e.LitElement);var s=c(i);function i(){var e;return n(this,i),(e=s.call(this)).xl=!1,e.lg=!1,e.md=!1,e.sm=!1,e.xs=!1,e}return o(i,[{key:"render",value:function(){return e.html(v())}}],[{key:"styles",get:function(){return[e.css(a())]}},{key:"tag",get:function(){return"responsive-grid-clear"}}]),o(i,null,[{key:"properties",get:function(){return{xl:{type:Boolean},lg:{type:Boolean},md:{type:Boolean},sm:{type:Boolean},xs:{type:Boolean}}}}]),i}();function w(){var e=d(['\n        :host {\n          display: block;\n          width: 100%;\n          margin-right: auto;\n          margin-left: auto;\n          -webkit-box-sizing: border-box;\n          -moz-box-sizing: border-box;\n          box-sizing: border-box;\n        }\n        :host:before,\n        :host:after {\n          content: " ";\n          display: table;\n          -webkit-box-sizing: border-box;\n          -moz-box-sizing: border-box;\n          box-sizing: border-box;\n        }\n        #row-inner {\n          margin-left: var(--responsive-grid-row-inner-margin-left, -15px);\n          margin-right: var(--responsive-grid-row-inner-margin-right, -15px);\n        }\n        :host #row-inner:before,\n        :host #row-inner:after {\n          content: " ";\n          display: table;\n        }\n        :host #row-inner:after {\n          clear: both;\n        }\n        :host #row-inner:before,\n        :host #row-inner:after {\n          -webkit-box-sizing: border-box;\n          -moz-box-sizing: border-box;\n          box-sizing: border-box;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-clear[xs]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-clear[sm]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-clear[md]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-clear[lg]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-clear[xl]) {\n          display: block;\n        }\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[xs="0"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[sm="0"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[md="0"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[lg="0"]) {\n          display: inline-block;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="12"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="12"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="12"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="12"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="12"]) {\n          width: 100%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="11"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="11"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="11"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="11"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="11"]) {\n          width: 91.66666667%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="10"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="10"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="10"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="10"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="10"]) {\n          width: 83.33333333%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="9"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="9"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="9"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="9"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="9"]) {\n          width: 75%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="8"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="8"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="8"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="8"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="8"]) {\n          width: 66.66666667%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="7"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="7"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="7"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="7"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="7"]) {\n          width: 58.33333333%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="6"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="6"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="6"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="6"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="6"]) {\n          width: 50%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="5"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="5"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="5"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="5"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="5"]) {\n          width: 41.66666667%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="4"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="4"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="4"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="4"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="4"]) {\n          width: 33.33333333%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="3"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="3"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="3"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="3"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="3"]) {\n          width: 25%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="2"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="2"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="2"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="2"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="2"]) {\n          width: 16.66666667%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="1"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="1"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="1"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="1"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="1"]) {\n          width: 8.33333333%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="0"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="0"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="0"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="0"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="0"]) {\n          display: none;\n        }\n        :host #row-inner ::slotted(* > #col-inner) {\n          padding: 0px;\n        }\n        :host #row-inner[gutter="1"] ::slotted(* > #col-inner) {\n          padding: 5px;\n        }\n        :host #row-inner[gutter="2"] ::slotted(* > #col-inner) {\n          padding: 10px;\n        }\n        :host #row-inner[gutter="3"] ::slotted(* > #col-inner) {\n          padding: 15px;\n        }\n        :host #row-inner[gutter="4"] ::slotted(* > #col-inner) {\n          padding: 20px;\n        }\n      ']);return w=function(){return e},e}function f(){var e=d(['\n      <responsive-utility\n        xs="','"\n        sm="','"\n        md="','"\n        lg="','"\n        xl="','"\n        responsive-to-parent="','"\n      >\n      </responsive-utility>\n      <div id="row-inner" screen="','" gutter="','">\n        <slot></slot>\n      </div>\n    ']);return f=function(){return e},e}window.customElements.define(m.tag,m);var x=function(r){t(i,e.LitElement);var s=c(i);function i(){var e;return n(this,i),(e=s.call(this)).xl=null,e.lg=null,e.md=null,e.sm=null,e.xs=null,e.gutter=0,e.responsiveToParent=!1,e.screen="xs",window.ResponsiveUtility.requestAvailability(),e}return o(i,[{key:"render",value:function(){return e.html(f(),this.xs,this.sm,this.md,this.lg,this.xl,this.responsiveToParent,this.screen,this.gutter)}}],[{key:"styles",get:function(){return[e.css(w())]}},{key:"tag",get:function(){return"responsive-grid-row"}}]),o(i,[{key:"firstUpdated",value:function(){this.dispatchEvent(new CustomEvent("responsive-element",{bubbles:!0,cancelable:!0,composed:!0,detail:{element:this,attribute:"screen",relativeToParent:this.responsiveToParent}}))}},{key:"updated",value:function(e){var n=this;e.forEach(function(e,r){"screen"==r&&n.dispatchEvent(new CustomEvent("screen-changed",{detail:{value:n[r]}}))})}}],[{key:"properties",get:function(){return{xs:{type:Number},sm:{type:Number},md:{type:Number},lg:{type:Number},xl:{type:Number},gutter:{type:Number},responsiveToParent:{type:Boolean,reflect:!0,attribute:"responsive-to-parent"},screen:{type:String,reflect:!0}}}}]),i}();window.customElements.define(x.tag,x)});

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit"),require("lit/directives/unsafe-html.js"),require("@polymer/paper-input/paper-input.js")):"function"==typeof define&&define.amd?define(["exports","lit","lit/directives/unsafe-html.js","@polymer/paper-input/paper-input.js"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).PunnettSquare={},t.lit,t.unsafeHtml_js)}(this,(function(t,n,e){"use strict";function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}function i(t,n){return i=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},i(t,n)}function u(t,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function o(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=a(t);if(n){var i=a(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return u(this,e)}}function l(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}function p(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||s(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,n){if(t){if("string"==typeof t)return f(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?f(t,n):void 0}}function f(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var c,d,v,y,h,b,m,g,q,_,j,w=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&i(t,n)}(O,t);var a,u,f,w=o(O);function O(){var t;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,O),(t=w.call(this)).variant1="",t.variant2="",t.editable=!1;var n,e=[],r=function(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=s(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,o=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return u=t.done,t},e:function(t){o=!0,i=t},f:function(){try{u||null==e.return||e.return()}finally{if(o)throw i}}}}(t.querySelectorAll("[data-variant]"));try{for(r.s();!(n=r.n()).done;){var a=n.value,i=a.getAttribute("data-variant"),u={variant:i=t.__sortVariant(i),ref:a};e=[].concat(p(e),[u])}}catch(t){r.e(t)}finally{r.f()}return t.__results=e,t}return a=O,f=[{key:"tag",get:function(){return"punnett-square"}},{key:"properties",get:function(){return{variant1:{type:String},variant2:{type:String},editable:{type:Boolean},__results:{type:Array}}}}],(u=[{key:"__sortVariant",value:function(t){return t.split("").sort().join("")}},{key:"__ensureArray",value:function(t){return("string"==typeof t?t.split(",").map((function(t){return t.trim()})):[]).map((function(t){return"string"==typeof t?t.split("").map((function(t){return t.trim()})):[]}))}},{key:"render",value:function(){var t=this,e=this.__ensureArray(this.variant1),r=this.__ensureArray(this.variant2),a=e[0].length<1&&r[0].length<1;return console.log("asdf:",a),n.html(c||(c=l(['\n      <style>\n        :host {\n          display: block;\n          --punnett-square-table-border: 1px solid black;\n          --punnett-square-table-padding: 1em;\n          --punnett-square-input-font-size: 2em;\n          --punnett-square-input-text-align: center;\n        }\n\n        table {\n          border-collapse: var(--punnett-square-table-border-collapse, collapse);\n          width: var(--punnett-square-table-width, 100%);\n          border: var(--punnett-square-table-border);\n        }\n\n        th {\n          border: var(--punnett-square-th-border, var(--punnett-square-table-border));\n          padding: var(--punnett-square-th-padding, var(--punnett-square-table-padding));\n        }\n\n        td {\n          border: var(--punnett-square-td-border, var(--punnett-square-table-border));\n          text-align: var(--punnett-square-table-text-align, center);\n          padding: var(--punnett-square-td-padding, var(--punnett-square-table-padding));\n        }\n\n        #inputs {\n          display: var(--punnett-square-inputs-display, flex);\n          align-items: var(--punnett-square-inputs-align-items, center);\n        }\n\n        .input {\n          font-size: var(--punnett-square-input-font-size);\n          text-align: var(--punnett-square-input-text-align);\n        }\n\n        paper-input {\n          --paper-input-container-input: {\n            font-size: var(--punnett-square-paper-input-font-size, --punnett-square-input-font-size);\n            text-align: var(--punnett-square-paper-input-text-align, --punnett-square-input-text-align);\n          }\n        }\n      </style>\n      <div id="inputs">\n        Variant1: <div class="input">','</div>\n        Variant2: <div class="input">',"</div>\n      </div>\n\n      <table>\n        <thead>\n          <tr>\n            <th></th>\n            ","\n          </tr>\n        <tbody>\n          ","\n        </tbody>\n        </thead>\n      </table>\n    "])),this.editable?n.html(d||(d=l(['\n                <paper-input\n                  value="','"\n                  @value-changed=',"\n                ></paper-input>\n              "])),this.variant1,(function(n){return t.variant1=n.detail.value})):n.html(v||(v=l([" "," "])),this.variant1),this.editable?n.html(y||(y=l(['\n                <paper-input\n                  value="','"\n                  @value-changed=',"\n                ></paper-input>\n              "])),this.variant2,(function(n){return t.variant2=n.detail.value})):n.html(h||(h=l([" "," "])),this.variant2),e.map((function(t){return n.html(b||(b=l([" "," "])),t.map((function(t){return n.html(m||(m=l([" <th>","</th> "])),t)})))})),r.map((function(r,a){return r.map((function(r){return n.html(g||(g=l(["\n                  <tr>\n                    <th>","</th>\n                    ","\n                  </tr>\n                "])),r,e.map((function(e){return e.map((function(e){return n.html(q||(q=l(["\n                            <td>\n                              ","\n                            </td>\n                          "])),t.renderVariant("".concat(e).concat(r)))}))})))}))})))}},{key:"renderVariant",value:function(t){var r=this.__sortVariant(t),a=this.__results.find((function(t){return t.variant===r}));return a?n.html(_||(_=l([" "," "])),e.unsafeHTML(a.ref.outerHTML)):n.html(j||(j=l([" "," "])),r)}}])&&r(a.prototype,u),f&&r(a,f),O}(n.LitElement);customElements.define(w.tag,w),t.PunnettSquare=w,Object.defineProperty(t,"__esModule",{value:!0})}));

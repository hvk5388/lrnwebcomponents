!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).UserAction={})}(this,function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach(function(t){i(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function l(e,t,n){return(l=s()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&u(i,n.prototype),i}).apply(null,arguments)}function f(e){var t="function"==typeof Map?new Map:void 0;return(f=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return l(e,arguments,a(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,e)})(e)}function p(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e,t,n){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){a=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(a)throw o}}}}var h=function(){function e(){t(this,e),this.eventList={click:"click",mousedown:"mousedown",mouseup:"mouseup",visibility:"visibility",keypress:"keypress",keydown:"keydown",keyup:"keyup"},this.eventname="user-engagement"}return r(e,[{key:"valid",value:function(e){return!!this.eventList[e]}},{key:"fireAction",value:function(e,t,n){t.eventType=e,n.dispatchEvent(new CustomEvent(this.eventname,{bubbles:!0,composed:!0,cancelable:!1,detail:t}))}}]),e}();function d(){var e,t,n=(e=["\n<style>\n\n        </style>\n<slot></slot>"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return d=function(){return n},n}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(l,f(HTMLElement));var n,i,o=(n=l,i=s(),function(){var e,t=a(n);if(i){var r=a(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return p(this,e)});function l(){var e;t(this,l),(e=o.call(this)).UserActionBroker=new h,e.tag=l.tag;var n=l.properties;for(var r in n)if(n.hasOwnProperty(r))if(e.hasAttribute(r)){var i=e.getAttribute(r);"Boolean"===n[r].type&&(i=!0),e[r]=i}else e[r]=n[r].value;return e}return r(l,[{key:"render",value:function(){return html(d())}}],[{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"User action",description:"track user actions and allow them to talk to xAPI stores easily",icon:"icons:touch-app",color:"green",groups:["Action"],handles:[{type:"inline",text:""}],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{quick:[],configure:[{attribute:"track",title:"Track when the user: ",description:"What event to react to",inputMethod:"select",options:{visibility:"Can see this",keypress:"Presses a key here",click:"Clicks this"},required:!0,icon:"icons:android"},{attribute:"every",title:"Track every event",description:"Default behavior is just to track the first occurance",inputMethod:"boolean",required:!1,icon:"icons:android"},{slot:"",title:"Content",description:"Content that can emit events",inputMethod:"code-editor",required:!1,icon:"icons:android"}],advanced:[]}}}},{key:"properties",get:function(){return c(c({},y(a(l),"properties",this)),{},{track:{name:"track",type:String,value:"visibility"},eventname:{name:"eventname",type:String,value:"user-engagement"},every:{name:"every",type:Boolean,value:!1},visiblelimit:{name:"visiblelimit",type:Number,value:.5}})}},{key:"tag",get:function(){return"user-action"}}]),r(l,[{key:"connectedCallback",value:function(){this.__ready=!0}},{key:"attributeChangedCallback",value:function(e,t,n){if("eventname"===e&&n&&(this.UserActionBroker.eventname=n),"track"===e&&n)switch(n){case"visibility":this.observer=new IntersectionObserver(this.handleIntersectionCallback.bind(this),{root:document.rootElement,rootMargin:"0px",threshold:[0,.25,.5,.75,1]}),this.observer.observe(this);break;default:this.addEventListener(n,this.userActionEvent.bind(this))}}},{key:"handleIntersectionCallback",value:function(e){var t,n=b(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;Number(r.intersectionRatio).toFixed(2)>=this.visiblelimit&&this.__ready&&this.userActionEvent({detail:"visible"})}}catch(e){n.e(e)}finally{n.f()}}},{key:"userActionEvent",value:function(e){this.fired&&!this.every||!this.UserActionBroker.valid(this.track)?this.UserActionBroker.valid(this.track)||console.warn(this.track+" was not valid"):(this.UserActionBroker.fireAction(this.track,e,this),this.fired=!0)}}],[{key:"observedAttributes",get:function(){return["track","eventname"]}}]),l}();window.customElements.define(m.tag,m),e.UserAction=m,Object.defineProperty(e,"__esModule",{value:!0})});

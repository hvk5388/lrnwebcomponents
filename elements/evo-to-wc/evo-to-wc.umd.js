!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@lrnwebcomponents/editable-table/editable-table.js"),require("@lrnwebcomponents/a11y-tabs/a11y-tabs.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js"),require("@lrnwebcomponents/hax-iconset/lib/simple-hax-iconset.js"),require("@lrnwebcomponents/lrndesign-chart/lib/lrndesign-pie.js"),require("@lrnwebcomponents/lrndesign-chart/lib/lrndesign-line.js"),require("@lrnwebcomponents/lrndesign-chart/lib/lrndesign-bar.js"),require("@lrnwebcomponents/lrndesign-gallery/lrndesign-gallery.js"),require("@lrnwebcomponents/a11y-gif-player/a11y-gif-player.js"),require("@lrnwebcomponents/a11y-figure/a11y-figure.js"),require("@lrnwebcomponents/a11y-collapse/a11y-collapse.js"),require("@lrnwebcomponents/accent-card/accent-card.js"),require("@lrnwebcomponents/a11y-collapse/lib/a11y-collapse-group.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/editable-table/editable-table.js","@lrnwebcomponents/a11y-tabs/a11y-tabs.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js","@lrnwebcomponents/hax-iconset/lib/simple-hax-iconset.js","@lrnwebcomponents/lrndesign-chart/lib/lrndesign-pie.js","@lrnwebcomponents/lrndesign-chart/lib/lrndesign-line.js","@lrnwebcomponents/lrndesign-chart/lib/lrndesign-bar.js","@lrnwebcomponents/lrndesign-gallery/lrndesign-gallery.js","@lrnwebcomponents/a11y-gif-player/a11y-gif-player.js","@lrnwebcomponents/a11y-figure/a11y-figure.js","@lrnwebcomponents/a11y-collapse/a11y-collapse.js","@lrnwebcomponents/accent-card/accent-card.js","@lrnwebcomponents/a11y-collapse/lib/a11y-collapse-group.js"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).EvoToWc={})}(this,(function(e){"use strict";function n(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function t(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
/**
   * Copyright 2018 Pennsylvania State University
   * @license Apache-2.0, see License.md for full text.
   */()}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var r=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var o,r,a;return o=e,r=[{key:"courseicons",get:function(){return{assessment:"assessment",brainstorm:"lightbulb-outline",casestudy:"work",discussion:"question-answer",email:"mail",game:"hardware:videogame-asset",group:"social:group",handson:"pan-tool",image:"image:image",mobile:"hardware:phone-android",presentation:"device:dvr",reading:"chrome-reader-mode",reflection:"lightbulb-outline",rss:"mdi-social:rss-box",selfcheck:"assignment-turned-in",survey:"assignment",transcript:"receipt",video:"av:movie",webresource:"language",written:"create",yammer:"lrn:assessment"}}},{key:"headings",get:function(){return["h1","h2","h3","h4","h5","h6"]}},{key:"convert",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;this.convertIfNeeded(e,[{selector:".coursework",function:"convertIcons"},{selector:".graphme",function:"convertGraphmes"},{selector:".tablestyle,.tablestyle2,.tablestyle3",function:"convertTablestyles"},{selector:".tabbed-interface",function:"convertTabs"},{selector:".expandable,.accordion-interface",function:"convertCollapses"},{selector:"figure",function:"convertFigures"},{selector:"img.gif-player",function:"convertGifs"},{selector:".image-thumbnail, .dynamic-image-group,.wcslideplayer, .clickable-list",function:"convertGalleries"},{selector:".newcolorbox,.colorbox,.pulltext,.yellownote,.speechbubble",function:"convertCards"}])}},{key:"convertIfNeeded",value:function(e){var n=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];t.forEach((function(t){var o=e.querySelectorAll(t.selector);o.length>0&&n[t.function](o,e)}))}},{key:"convertAccordions",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];n.forEach((function(n){var o,r=document.createElement("a11y-collapse-group"),a=t(n.childNodes);r.radio=!0,r.headingButton=!0,a.forEach((function(n){e.isHeading(n)?(o=document.createElement("a11y-collapse"),n.slot="heading",o.headingButton=!0,o.append(n),r.append(o)):o&&o.append(n)})),n.parentElement.insertBefore(r,n),n.remove()}))}},{key:"convertCards",value:function(){var e=arguments.length>1?arguments[1]:void 0;this.convertIfNeeded(e,[{selector:".newcolorbox",function:"convertNewcolorboxes"},{selector:".colorbox",function:"convertColorboxes"},{selector:".pulltext",function:"convertPulltexts"},{selector:".yellownote",function:"convertYellownotes"},{selector:".speechbubble",function:"convertSpeechbubbles"}])}},{key:"convertCarousels",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];n.forEach((function(n){var t=document.createElement("lrndesign-gallery"),o=n.querySelectorAll("figure");t.layout="carousel",t.accentColor="light-blue",o.forEach((function(n){return t.append(e.slotGallery(n))})),n.parentNode.insertBefore(t,n),n.remove()}))}},{key:"convertCollapses",value:function(){var e=arguments.length>1?arguments[1]:void 0;this.convertIfNeeded(e,[{selector:".expandable",function:"convertExpandables"},{selector:".accordion-interface",function:"convertAccordions"}])}},{key:"convertColorboxes",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];n.forEach((function(n){var t=document.createElement("accent-card");t.accentColor="light-blue",e.replace(n,t,e.slotAccentCard)}))}},{key:"convertExpandables",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e.forEach((function(e){var n=document.createElement("a11y-collapse"),o=e.querySelector(".collapseable")?t(e.querySelector(".collapseable").childNodes):[],r=e.querySelector(".expandcollapse"),a=document.createElement("span");for((r?t(r.childNodes):[]).forEach((function(e){return a.append(e)})),r.parentNode.insertBefore(a,r);a.parentNode&&a.parentNode!==e;)a=a.parentNode;a.slot="heading",n.headingButton=!0,n.append(a),o.forEach((function(e){return n.append(e)})),e.parentNode.insertBefore(n,e),e.remove()}))}},{key:"convertFigures",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];n.forEach((function(n){var o,r,a,c=n.querySelector("figcaption"),l=document.createElement("a11y-figure"),i=n.querySelector("img");c&&n.classList.contains("image-info")&&(o=t(c.childNodes),e.setSize(i,l),r=document.createElement("details"),(a=document.createElement("summary")).innerHTML="info",r.append(a),o.forEach((function(e){return r.append(e)})),c.append(r),n.classList.remove("image-info")),n.parentElement.insertBefore(l,n),l.append(n)}))}},{key:"convertGifs",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];n.forEach((function(n){var t=document.createElement("a11y-gif-player"),o=n.src||"";e.setSize(n,t),e.setSize(n,t,"height"),t.src=o,t.srcWithoutAnimation=o.replace(/\.\w+$/,".gif"),n.parentElement.insertBefore(t,n),n.remove()}))}},{key:"convertGalleries",value:function(){var e=arguments.length>1?arguments[1]:void 0;this.convertIfNeeded(e,[{selector:".image-thumbnail",function:"convertThumbnails"},{selector:".dynamic-image-group,.wcslideplayer",function:"convertCarousels"},{selector:".clickable-list",function:"convertImageLists"}])}},{key:"convertGraphmes",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];n.forEach((function(n){["bar","line","pie"].forEach((function(t){return e.insertChart(n,t)})),n.classList.contains("showtable")||n.remove(),n.classList.remove("graphme")}))}},{key:"convertIcons",value:function(e,n){var t=this;Object.keys(this.courseicons).forEach((function(e){n.querySelectorAll(".coursework.".concat(e)).forEach((function(n){var o=n.firstElementChild,r=document.createElement("simple-icon-lite");r.icon=t.courseicons[e],r.style.marginRight="0.25em",o.insertBefore(r,o.firstChild),n.classList.remove("coursework"),n.classList.remove(e)}))}))}},{key:"convertImageLists",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];n.forEach((function(n){var t=document.createElement("lrndesign-gallery"),o=n.querySelectorAll("li");t.layout="grid",t.accentColor="light-blue",o.forEach((function(n){return t.append(e.slotGallery(n))})),n.parentNode.insertBefore(t,n),n.remove()}))}},{key:"convertNewcolorboxes",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];n.forEach((function(n){var t=document.createElement("accent-card");t.noBorder=!0,t.flat=!0,e.replace(n,t,e.slotAccentCard)}))}},{key:"convertPulltexts",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];n.forEach((function(n){var t=document.createElement("accent-card");t.accentColor="light-blue",t.horizontal=!0,e.replace(n,t,e.slotAccentCard)}))}},{key:"convertSpeechbubbles",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];n.forEach((function(n){var t=document.createElement("accent-card"),o=n.nextElementSibling;t.accentColor="light-blue",t.horizontal=!0,e.replace(n,t,e.slotAccentCard),o.classList.contains("speechbubble-caption")&&(o.slot="footer",o.style.fontSize="85%",o.classList.remove("speechbubble-caption"),t.append(o),o.style.textAlign="right")}))}},{key:"convertTabs",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];n.forEach((function(n){var t=document.createElement("a11y-tabs");e.replace(n,t,e.slotTabs.bind(e))}))}},{key:"convertTablestyles",value:function(e){e.forEach((function(e){var n=document.createElement("editable-table");n.bordered=e.classList.contains("dottedrows")||e.classList.contains("dottedcols")||e.classList.contains("linedrows")||e.classList.contains("linedcols"),n.columnStriped=e.classList.contains("alternatecols"),n.striped=!n.columnStriped&&e.classList.contains("alternaterows"),e.parentElement.insertBefore(n,e),e.classList.remove("tablestyle"),e.classList.remove("tablestyle2"),e.classList.remove("tablestyle3"),n.append(e)}))}},{key:"convertThumbnails",value:function(e){e.forEach((function(e){var n=document.createElement("lrndesign-gallery"),t=e.src,o=t.match("_thumb.")?t:void 0,r=o?o.replace(/_thumb\./,"_full."):void 0;n.innerHTML='<figure><img src="'.concat(t,'" ').concat("","></figure>"),parent=e.parentElement,n.layout="masonry",n.accentColor="light-blue",n.sources=[{alt:e.alt||"",details:"",src:t,thumbnail:o,large:r,sizing:"contain",title:e.alt||""}],n.style.display="inline-block",n.style.width="50%",n.style.minWidth="400px",n.style.maxWidth="800px",e.parentNode.insertBefore(n,e),e.remove(),parent&&"figure"==parent.tagName.toLowerCase()&&(parent.style.display="flex",parent.style.flexDirection="column",parent.style.alignItems="stretch")}))}},{key:"convertYellownotes",value:function(e){var n=this;e.forEach((function(e){var t=document.createElement("accent-card");t.accentColor="yellow",t.accentBackground=!0,t.noBorder=!0,n.replace(e,t,n.slotAccentCard)}))}},{key:"insertChart",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bar",o=document.createElement("table"),r=e.classList.contains("".concat(n,"chart"))?document.createElement("lrndesign-".concat(n)):void 0;r&&(r.scale="ct-octave",t(e.childNodes).forEach((function(e){return o.append(e.cloneNode(!0))})),r.append(o),"pie"!==n&&(r.showGridBackground=!0),"line"===n&&(r.fullWidth=!0),e.parentNode.insertBefore(r,e))}},{key:"isHeading",value:function(e){return e&&e.tagName&&this.headings.includes(e.tagName.toLowerCase())}},{key:"replace",value:function(e,n,o){return e.parentElement.insertBefore(n,e),t(e.childNodes).forEach((function(e){(e=o?o(e):e)&&n.append(e)})),e.remove(),n}},{key:"setSize",value:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"width",o="".concat(e[t]);o&&(o.match(/\d$/)&&(o="".concat(o,"px")),n.style[t]=o)}},{key:"slotAccentCard",value:function(e){if(e&&e.tagName)this.isHeading(e)?e.slot="heading":e.slot="content";else{var n=document.createElement("span");n.append(e),n.slot="content",e=n}return e}},{key:"slotGallery",value:function(e){var n=document.createElement("figure"),o=document.createElement("figcaption"),r=e.firstElementChild.querySelector("img")||e.querySelector("img"),a=e.querySelector("figcaption")?t(e.querySelector("figcaption").childNodes):t(e.childNodes),c=e.querySelector(this.headings.join());return r&&(r.removeAttribute("width"),r.removeAttribute("height"),n.append(r)),c||(c=document.createElement("h3"),r&&(c.innerHTML=r.alt)),o.append(c),a.forEach((function(n){n!=e.firstElementChild&&o.append(n)})),n.append(o),n}},{key:"slotTabs",value:function(e){if(e&&e.tagName){var n=document.createElement("a11y-tab");if(n.id=e.id,e.firstElementChild)e.firstElementChild.slot="label",n.append(e.firstElementChild);else if(e.firstChild){var t=document.createElement("span");t.slot="label",t.append(e),n.append(t)}else n.label=n.id;return this.replace(e,n),n}return!1}}],r&&n(o.prototype,r),a&&n(o,a),e}();window.EvoToWc=window.EvoToWc||{},window.EvoToWc.requestAvailability=function(){return window.EvoToWc.instance||(window.EvoToWc.instance=new r),window.dispatchEvent(new CustomEvent("register-hax-converter",{bubbles:!0,composed:!0,cancelable:!0,detail:window.EvoToWc.instance.convert})),window.EvoToWc.instance};var a=window.EvoToWc.requestAvailability();e.EvoToWc=r,e.EvoToWcConverter=a,Object.defineProperty(e,"__esModule",{value:!0})}));

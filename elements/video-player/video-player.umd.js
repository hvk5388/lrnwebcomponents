!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/simple-colors/lib/simple-colors-polymer.js"),require("@lrnwebcomponents/a11y-behaviors/a11y-behaviors.js"),require("@polymer/polymer/lib/elements/dom-repeat.js"),require("@polymer/polymer/lib/elements/dom-if.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@lrnwebcomponents/media-behaviors/media-behaviors.js"),require("@lrnwebcomponents/a11y-media-player/a11y-media-player.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@lrnwebcomponents/simple-colors/lib/simple-colors-polymer.js","@lrnwebcomponents/a11y-behaviors/a11y-behaviors.js","@polymer/polymer/lib/elements/dom-repeat.js","@polymer/polymer/lib/elements/dom-if.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@lrnwebcomponents/media-behaviors/media-behaviors.js","@lrnwebcomponents/a11y-media-player/a11y-media-player.js"],t):t((e=e||self).VideoPlayer={},e.polymerElement_js,e.simpleColorsPolymer_js,e.a11yBehaviors_js,null,null,e.schemaBehaviors_js,e.mediaBehaviors_js)}(this,function(e,t,o,r,i,n,a,l){"use strict";function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e,t,o){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,o){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(o):i.value}})(e,t,o||e)}function f(){var e,t,o=(e=['\n<style>\n:host {\n  display: block;\n  margin: 0 0 15px;\n}\n.video-caption {\n  font-style: italic;\n  margin: 0;\n  padding: 8px;\n  @apply --video-player-caption-theme;\n}\n        </style>\n<style include="simple-colors-shared-styles-polymer"></style>\n<div style$="[[playerStyle]]">\n<template is="dom-if" if="[[isA11yMedia]]" restamp>\n  <a11y-media-player\n    accent-color$="[[accentColor]]"\n    audio-only$="[[audioOnly]]"\n    dark$="[[dark]]"\n    dark-transcript$="[[darkTranscript]]"\n    disable-interactive$="[[disableInteractive]]"\n    hide-timestamps$="[[hideTimestamps]]"\n    hide-transcript$="[[hideTiranscript]]"\n    id="[[_getPlayerId(playerId,schemaResourceID)]]"\n    lang$="[[lang]]"\n    linkable$="[[linkable]]"\n    media-type$="[[sourceType]]"\n    preload$="[[preload]]"\n    media-title$="[[mediaTitle]]"\n    sources$="[[sourceData]]"\n    stand-alone$="[[__standAlone]]"\n    sticky-corner$="[[stickyCorner]]"\n    thumbnail-src$="[[thumbnailSrc]]"\n    tracks$="[[trackData]]"\n    crossorigin$="[[crossorigin]]"\n    youtube-id$="[[youtubeId]]"\n  >\n    <template id="sources" is="dom-repeat" items="[[sourceData]]" as="sd" restamp>\n      <source src$="[[sd.src]]" type$="[[sd.type]]" />\n    </template>\n    <template id="tracks" is="dom-repeat" items="[[trackData]]" as="track" restamp>\n      <track\n        src$="[[track.src]]"\n        kind$="[[track.kind]]"\n        label$="[[track.label]]"\n        srclang$="[[track.lang]]"\n      />\n    </template>\n    <slot name="caption"></slot>\n  </a11y-media-player>\n</template>\n<template is="dom-if" if="[[!isA11yMedia]]">\n  <template is="dom-if" if="[[sandboxed]]">\n    <div class="responsive-video-container" lang$="[[lang]]">\n      <webview\n        resource$="[[schemaResourceID]]-video"\n        src$="[[sourceData.0.src]]"\n        width$="[[width]]"\n        height$="[[height]]"\n        frameborder="0"\n      ></webview>\n    </div>\n  </template>\n  <template is="dom-if" if="[[!sandboxed]]">\n    <template is="dom-if" if="[[iframed]]">\n      <div class="responsive-video-container" lang$="[[lang]]">\n        <iframe\n          resource$="[[schemaResourceID]]-video"\n          src$="[[sourceData.0.src]]"\n          width$="[[width]]"\n          height$="[[height]]"\n          frameborder="0"\n          webkitallowfullscreen=""\n          mozallowfullscreen=""\n          allowfullscreen=""\n        ></iframe>\n      </div>\n    </template>\n  </template>\n  <div id="videocaption" class$="video-caption">\n    <p>\n      [[mediaTitle]]\n      <span class="media-type print-only">(embedded media)</span>\n    </p>\n    <slot name="caption"></slot>\n  </div>\n</template>'],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return f=function(){return o},o}var h=function(e){function i(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),y(this,u(i).apply(this,arguments))}var n,h,b;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(i,l.MediaBehaviorsVideo(r.A11yBehaviors(a.SchemaBehaviors(o.SimpleColorsPolymer)))),n=i,b=[{key:"template",get:function(){return t.html(f())}},{key:"haxProperties",get:function(){return{canScale:{min:25,step:12.5},canPosition:!0,canEditSource:!1,gizmo:{title:"Video player",description:"This can present video in a highly accessible manner regardless of source.",icon:"av:play-circle-filled",color:"red",groups:["Video","Media"],handles:[{type:"video",source:"source",title:"caption",caption:"caption",description:"caption",color:"primaryColor"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"accentColor",title:"Accent color",description:"Select the accent color for the player.",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{attribute:"dark",title:"Dark theme",description:"Enable dark theme for the player.",inputMethod:"boolean",icon:"invert-colors"}],configure:[{property:"source",title:"Source",description:"The URL for this video.",inputMethod:"haxupload",icon:"link",required:!0,validationType:"url"},{property:"track",title:"Closed captions",description:"The URL for the captions file.",inputMethod:"textfield",icon:"link",required:!0,validationType:"url"},{property:"thumbnailSrc",title:"Thumbnail image",description:"Optional. The URL for a thumbnail/poster image.",inputMethod:"textfield",icon:"link",required:!0,validationType:"url"},{property:"mediaTitle",title:"Title",description:"Simple title for under video",inputMethod:"textfield",icon:"av:video-label",required:!1,validationType:"text"},{property:"accentColor",title:"Accent color",description:"Select the accent color for the player.",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{attribute:"dark",title:"Dark theme",description:"Enable dark theme for the player.",inputMethod:"boolean",icon:"invert-colors"}],advanced:[{property:"darkTranscript",title:"Dark theme for transcript",description:"Enable dark theme for the transcript.",inputMethod:"boolean"},{property:"hideTimestamps",title:"Hide timestamps",description:"Hide the time stamps on the transcript.",inputMethod:"boolean"},{property:"preload",title:"Preload source(s).",description:"How the sources should be preloaded, i.e. auto, metadata (default), or none.",inputMethod:"select",options:{preload:"Preload all media",metadata:"Preload media metadata only",none:"Don't preload anything"}},{property:"stickyCorner",title:"Sticky Corner",description:"Set the corner where a video plays when scrolled out of range, or choose none to disable sticky video.",inputMethod:"select",options:{none:"none","top-left":"top-left","top-right":"top-right","bottom-left":"bottom-left","bottom-right":"bottom-right"}},{property:"sources",title:"Other sources",description:"List of other sources",inputMethod:"array",properties:[{property:"src",title:"Source",description:"The URL for this video.",inputMethod:"textfield"},{property:"type",title:"Type",description:"Media type data",inputMethod:"select",options:{"audio/aac":"acc audio","audio/flac":"flac audio","audio/mp3":"mp3 audio","video/mp4":"mp4 video","video/mov":"mov video","audio/ogg":"ogg audio","video/ogg":"ogg video","audio/wav":"wav audio","audio/webm":"webm audio","video/webm":"webm video"}}]},{property:"tracks",title:"Track list",description:"Tracks of different languages of closed captions",inputMethod:"array",properties:[{property:"kind",title:"Kind",description:"Kind of track",inputMethod:"select",options:{subtitles:"subtitles"}},{property:"label",title:"Label",description:'The human-readable name for this track, eg. "English Subtitles"',inputMethod:"textfield"},{property:"src",title:"Source",description:"Source of the track",inputMethod:"textfield"},{property:"srclang",title:'Two letter, language code, eg. \'en\' for English, "de" for German, "es" for Spanish, etc.',description:"Label",inputMethod:"textfield"}]}]}}}},{key:"properties",get:function(){return function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),r.forEach(function(t){p(e,t,o[t])})}return e}({},m(u(i),"properties",this),{audioOnly:{type:Boolean,value:!1},accentColor:{type:String,value:null,reflectToAttribute:!0},crossorigin:{type:String,value:null,reflectToAttribute:!0},dark:{type:Boolean,value:!1,reflectToAttribute:!0},darkTranscript:{type:Boolean,value:!1},disableInteractive:{type:Boolean,value:!1},height:{type:String,value:null},hideTimestamps:{type:Boolean,value:!1},hideTranscript:{type:Boolean,value:!1},iframed:{type:Boolean,computed:"_computeIframed(sourceData, sandboxed)"},isA11yMedia:{type:Boolean,computed:"_computeA11yMedia(sourceType, sandboxed)"},isYoutube:{type:Boolean,computed:"_computeYoutube(sourceType)"},lang:{type:String,value:"en"},linkable:{type:Boolean,value:!1},mediaTitle:{type:String},playerId:{type:String,value:null},preload:{type:String,value:"metadata"},sandboxed:{type:Boolean,computed:"_computeSandboxed(sourceData)"},source:{type:String,value:null,reflectToAttribute:!0},sources:{type:Array,value:[]},sourceData:{type:Array,computed:"_getSourceData(source,sources,trackData)"},sourceType:{type:String,computed:"_computeSourceType(sourceData)"},stickyCorner:{type:String,value:"top-right",reflectToAttribute:!0},track:{type:String,value:null},tracks:{type:Array,value:[]},trackData:{type:Array,computed:"_getTrackData(track,tracks)"},thumbnailSrc:{type:String,value:null,reflectToAttribute:!0},width:{type:String,value:null},youtubeId:{type:String,computed:"_computeYoutubeId(source,sourceType)"}})}},{key:"tag",get:function(){return"video-player"}}],(h=[{key:"connectedCallback",value:function(){m(u(i.prototype),"connectedCallback",this).call(this)}},{key:"_computeYoutubeId",value:function(e,t){return void 0!==e&&"youtube"===t&&this._computeSRC(e).replace(/(https?:\/\/)?(www.)?youtube(-nocookie)?.com\/embed\//,"")}},{key:"_computeYoutube",value:function(e){return"youtube"===e}},{key:"_computeA11yMedia",value:function(e,t){return!(t||"youtube"!=e&&"local"!=e)}},{key:"_computeIframed",value:function(e,t){return!(!(e.length>0&&void 0!==e[0]&&window.MediaBehaviors.Video._sourceIsIframe(e[0].src))||t)}},{key:"_getTrackData",value:function(e,t){var o="string"==typeof t?JSON.parse(t).slice():t.slice();return null!=e&&""!==e&&o.push({src:e,srclang:this.lang,label:"en"===this.lang?"English":this.lang,kind:"subtitles"}),o}},{key:"_getPlayerId",value:function(e,t){return e||"".concat(t,"-media")}},{key:"_getSourceData",value:function(e,t,o){"string"==typeof t&&(t=JSON.parse(t));for(var r=t.slice(),i=0;i<r.length;i++)r[i].type=void 0!==r[i].type&&null!==r[i].type?r[i].type:this._computeMediaType(r[i].src),r[i].src=this._computeSRC(r[i].src);if(null!==e){var n=this._computeSRC(e);this.sourceType=this._computeSourceType(n),"youtube"!==this.sourceType&&r.unshift({src:n,type:this._computeMediaType(n)})}return this.__standAlone=null==o||o.length<1,r}},{key:"_computeMediaType",value:function(e){var t=this,o="",r=function(r,i){for(var n=0;n<i.length;n++)""===o&&null!=e&&e.toLowerCase().indexOf("."+i[n])>-1&&("audio"===r&&(t.audioOnly=!0),o=r+"/"+i[n])};return r("audio",["aac","flac","mp3","oga","wav"]),r("video",["mov","mp4","ogv","webm"]),o}},{key:"_computeSandboxed",value:function(e){if(e.length>0&&void 0!==e[0]&&window.MediaBehaviors.Video._sourceIsIframe(e[0].src)&&"function"==typeof document.createElement("webview").reload)return!0;return!1}},{key:"_computeSourceType",value:function(e){return e.length>0&&void 0!==e[0]&&"undefined"!==c(e[0].src)?window.MediaBehaviors.Video.getVideoType(e[0].src):null}},{key:"_computeSRC",value:function(e){if(null!==e&&void 0!==c(e)){var t=void 0!==this.sourceType?this.sourceType:window.MediaBehaviors.Video.getVideoType(e);e=window.MediaBehaviors.Video.cleanVideoSource(e,t),"vimeo"==t?(this.vimeoTitle?e+="?title=1":e+="?title=0",this.vimeoByline?e+="&byline=1":e+="&byline=0",this.vimeoPortrait?e+="&portrait=1":e+="&portrait=0","undefined"!==c(this.videoColor)&&(e+="&color="+this.videoColor)):"dailymotion"==t&&(e+="&ui-start-screen-info=false",e+="&ui-logo=false",e+="&sharing-enable=false",e+="&endscreen-enable=false","undefined"!==c(this.videoColor)&&(e+="&ui-highlight="+this.videoColor))}return e}},{key:"postProcesshaxNodeToContent",value:function(e){return e=(e=e.replace(' sources="[]",',"")).replace(' tracks="[]",',"")}}])&&s(n.prototype,h),b&&s(n,b),i}();window.customElements.define(h.tag,h),e.VideoPlayer=h,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=video-player.umd.js.map

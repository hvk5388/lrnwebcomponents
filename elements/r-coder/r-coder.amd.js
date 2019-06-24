define(["exports","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","./node_modules/@polymer/paper-button/paper-button.js","./node_modules/@lrnwebcomponents/code-editor/code-editor.js"],function(_exports,_polymerElement,_HAXWiring,_paperButton,_codeEditor){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.RCoder=void 0;function _templateObject_fba9c7c092b311e99dd365e1eafe4e4c(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n#editor {\n  height: var(--r-coder-editor-height, 300px);\n  width: var(--r-coder-editor-width, 100%);\n}\n\n#button {\n  margin: var(--r-code-button-margin, 10px 0);\n}</style>\n<code-editor id=\"editor\" language=\"r\"></code-editor>\n<paper-button id=\"button\" disabled=\"[[!__connected]]\" on-click=\"process\" raised>Process</paper-button>\n<div id=\"output\"></div>"]);_templateObject_fba9c7c092b311e99dd365e1eafe4e4c=function _templateObject_fba9c7c092b311e99dd365e1eafe4e4c(){return data};return data}/**
 * `r-coder`
 * `R coder interface for the r-service backend.`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */var RCoder=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(RCoder,_PolymerElement);function RCoder(){babelHelpers.classCallCheck(this,RCoder);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(RCoder).apply(this,arguments))}babelHelpers.createClass(RCoder,[{key:"connectedCallback",/**
   * life cycle, element is afixed to the DOM
   */value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(RCoder.prototype),"connectedCallback",this).call(this);this.HAXWiring=new _HAXWiring.HAXWiring;this.HAXWiring.setup(RCoder.haxProperties,RCoder.tag,this);this.ping();this.shadowRoot.getElementById("editor").editorValue=this.textContent.trim()}},{key:"ping",value:function(){var _ping=babelHelpers.asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){var status;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return fetch(this.endpoint,{method:"GET"}).then(function(res){return res.status});case 2:status=_context.sent;this.__connected=200===status;case 4:case"end":return _context.stop();}}},_callee,this)}));function ping(){return _ping.apply(this,arguments)}return ping}()/**
   * life cycle, element is removed from the DOM
   */ //disconnectedCallback() {}
},{key:"process",value:function(){var _process=babelHelpers.asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(){var code,data;return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:code=this.shadowRoot.getElementById("editor").value;_context2.next=3;return fetch(this.endpoint,{method:"POST",body:code}).then(function(res){return res.text()});case 3:data=_context2.sent;this.shadowRoot.getElementById("output").innerText=data;case 5:case"end":return _context2.stop();}}},_callee2,this)}));function process(){return _process.apply(this,arguments)}return process}()}],[{key:"template",// render function
get:function get(){return(0,_polymerElement.html)(_templateObject_fba9c7c092b311e99dd365e1eafe4e4c())}// haxProperty definition
},{key:"haxProperties",get:function get(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"R coder",description:"R coder interface for the r-service backend.",icon:"icons:android",color:"green",groups:["Coder"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"heymp",owner:"PSU"}},settings:{quick:[],configure:[{property:"endpoint",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"}],advanced:[]}}}// properties available to the custom element for data binding
},{key:"properties",get:function get(){return{endpoint:{name:"endpoint",type:"String",value:"/service/r-service",reflectToAttribute:!1,observer:!1},__connected:{name:"connected",type:"Boolean",value:!1,observer:!1}}}/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */},{key:"tag",get:function get(){return"r-coder"}}]);return RCoder}(_polymerElement.PolymerElement);_exports.RCoder=RCoder;window.customElements.define(RCoder.tag,RCoder)});
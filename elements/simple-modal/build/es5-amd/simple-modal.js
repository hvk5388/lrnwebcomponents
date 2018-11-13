define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@polymer/paper-dialog/paper-dialog.js",
  "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js",
  "./node_modules/@polymer/paper-button/paper-button.js",
  "./node_modules/@polymer/iron-icons/iron-icons.js",
  "./node_modules/@polymer/iron-icon/iron-icon.js",
  "./node_modules/@polymer/neon-animation/animations/scale-up-animation.js",
  "./node_modules/@polymer/neon-animation/animations/fade-out-animation.js",
  "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js"
], function(
  _exports,
  _polymerElement,
  _paperDialog,
  _paperDialogScrollable,
  _paperButton,
  _ironIcons,
  _ironIcon,
  _scaleUpAnimation,
  _fadeOutAnimation,
  _polymerDom
) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.SimpleModal = void 0;
  function _templateObject_39e960b0e78611e8a6e445fee9eb100b() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n#close {\n  float: right;\n  top: 0;\n  font-size: 12px;\n  text-transform: none;\n  right: 0;\n  position: absolute;\n  padding: 4px;\n  margin: 0;\n  color: var(--simple-modal-color, black);\n  background-color: transparent;\n  min-width: unset;\n}\n\n#close iron-icon {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  margin-right: 2px;\n}</style>\n<paper-dialog entry-animation="scale-up-animation"\nexit-animation="fade-out-animation" opened="{{opened}}" with-backdrop always-on-top>\n  <h2 hidden$="[[!title]]">[[title]]</h2>\n  <slot name="header"></slot>\n  <paper-dialog-scrollable>\n    <slot name="content"></slot>\n  </paper-dialog-scrollable>\n  <div class="buttons">\n    <slot name="buttons"></slot>\n  </div>\n  <paper-button id="close" on-tap="close"><iron-icon icon="[[closeIcon]]"></iron-icon> [[closeLabel]]</paper-button>\n</paper-dialog>'
    ]);
    _templateObject_39e960b0e78611e8a6e445fee9eb100b = function() {
      return data;
    };
    return data;
  }
  var SimpleModal = (function(_PolymerElement) {
    babelHelpers.inherits(SimpleModal, _PolymerElement);
    function SimpleModal() {
      babelHelpers.classCallCheck(this, SimpleModal);
      return babelHelpers.possibleConstructorReturn(
        this,
        (SimpleModal.__proto__ || Object.getPrototypeOf(SimpleModal)).apply(
          this,
          arguments
        )
      );
    }
    babelHelpers.createClass(
      SimpleModal,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                SimpleModal.prototype.__proto__ ||
                  Object.getPrototypeOf(SimpleModal.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            window.addEventListener(
              "simple-modal-show",
              this.showEvent.bind(this)
            );
            this.addEventListener(
              "transitionend",
              this.animationEnded.bind(this)
            );
          }
        },
        {
          key: "showEvent",
          value: function showEvent(e) {
            this.show(e.detail.title, e.detail.elements, e.detail.invokedBy);
          }
        },
        {
          key: "show",
          value: function show(title, elements, invokedBy) {
            var _this = this;
            this.set("invokedBy", invokedBy);
            this.title = title;
            var slots = ["header", "content", "buttons"];
            for (var i in slots) {
              if (elements[slots[i]]) {
                var element = elements[slots[i]].cloneNode(!0);
                element.setAttribute("slot", slots[i]);
                (0, _polymerDom.dom)(this).appendChild(element);
              }
            }
            setTimeout(function() {
              _this.opened = !0;
            }, 100);
          }
        },
        {
          key: "animationEnded",
          value: function animationEnded() {
            if (!this.opened) {
              if (this.invokedBy) {
                this.invokedBy.focus();
              }
              this.title = "";
              while (null !== (0, _polymerDom.dom)(this).firstChild) {
                (0, _polymerDom.dom)(this).removeChild(
                  (0, _polymerDom.dom)(this).firstChild
                );
              }
            }
          }
        },
        {
          key: "close",
          value: function close() {
            this.opened = !1;
          }
        },
        {
          key: "_openedChanged",
          value: function _openedChanged(newValue) {
            if (babelHelpers.typeof(newValue) !== "undefined" && !newValue) {
              this.close();
            }
          }
        },
        {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            babelHelpers
              .get(
                SimpleModal.prototype.__proto__ ||
                  Object.getPrototypeOf(SimpleModal.prototype),
                "disconnectedCallback",
                this
              )
              .call(this);
            window.removeEventListener(
              "simple-modal-show",
              this.showEvent.bind(this)
            );
            this.removeEventListener(
              "transitionend",
              this.animationEnded.bind(this)
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_39e960b0e78611e8a6e445fee9eb100b()
            );
          }
        },
        {
          key: "properties",
          get: function get() {
            return {
              title: { name: "title", type: String, value: "" },
              opened: {
                name: "opened",
                type: Boolean,
                value: !1,
                reflectToAttribute: !0,
                observer: "_openedChanged"
              },
              closeLabel: { name: "closeLabel", type: String, value: "Close" },
              closeIcon: { name: "closeIcon", type: String, value: "cancel" },
              invokedBy: { name: "invokedBy", type: Object }
            };
          }
        },
        {
          key: "tag",
          get: function get() {
            return "simple-modal";
          }
        }
      ]
    );
    return SimpleModal;
  })(_polymerElement.PolymerElement);
  _exports.SimpleModal = SimpleModal;
  window.customElements.define(SimpleModal.tag, SimpleModal);
  window.simpleModal = window.simpleModal || {};
  window.simpleModal.requestAvailability = function() {
    if (!window.simpleModal.instance) {
      window.simpleModal.instance = document.createElement("simple-modal");
      document.body.appendChild(window.simpleModal.instance);
    }
    return window.simpleModal.instance;
  };
});

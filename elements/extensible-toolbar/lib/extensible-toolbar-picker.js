/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { ExtensibleToolbarButton } from "./extensible-toolbar-button.js";
import "@lrnwebcomponents/simple-picker/simple-picker.js";
import "@lrnwebcomponents/es-global-bridge/es-global-bridge.js";
/**
 * `extensible-toolbar-picker`
 * `a picker for rich text editor (custom buttons can extend this)`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @polymer
 */
class ExtensibleToolbarPicker extends ExtensibleToolbarButton {
  constructor() {
    super();
    this.label = "Insert link";
  }
  // render function
  static get template() {
    return html`
      <style include="extensible-toolbar-button-styles">
        :host {
          margin: var(--extensible-toolbar-button-margin);
          --simple-picker-option: {
            line-height: var(--simple-picker-option-size);
            height: var(--simple-picker-option-size);
            max-height: var(--simple-picker-option-size);
          }
        }
      </style>
      <simple-picker
        id="button"
        allow-null$="[[allowNull]]"
        class="toolbar-button"
        disabled$="[[super.disabled]]"
        controls$="[[super.controls]]"
        on-change="_pickerChange"
        tabindex="0"
        title-as-html$="[[titleAsHtml]]"
        options="[[options]]"
        value="{{value}}"
      >
        <span id="label" class$="[[super.labelStyle]]">[[__label]]</span>
      </simple-picker>
      <paper-tooltip id="tooltip" for="button">[[__label]]</paper-tooltip>
    `;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      /**
       * Allow a null option to be selected?
       */
      allowNull: {
        name: "allowNull",
        type: Boolean,
        value: false
      },
      /**
       * The command used for document.execCommand.
       */
      command: {
        name: "command",
        type: String,
        value: "insertHTML"
      },
      /**
       * Optional icon for null value
       */
      icon: {
        name: "icon",
        type: String,
        value: null
      },
      /**
       * The command used for document.execCommand.
       */
      options: {
        name: "options",
        type: Array,
        value: [],
        notify: true
      },

      /**
       * Renders html as title. (Good for titles with HTML in them.)
       */
      titleAsHtml: {
        name: "titleAsHtml",
        type: Boolean,
        value: false
      },

      /**
       * The value
       */
      value: {
        name: "value",
        type: Object,
        value: null
      }
    };
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "extensible-toolbar-picker";
  }

  /**
   * determines the value of the picker based on the selected range
   *
   * @param {object} the text selected range
   * @returns {boolean} whether the button is toggled
   *
   */
  _isToggled(range) {
    //get all the possible block selectors from the options
    let selectors = this.options
        ? []
            .concat(...this.options)
            //flatten th eoptions array
            .map(option => option.value)
            //get all the values
            .filter(
              //remove the empty values
              option => option !== null && option !== ""
              //stringify the list
            )
            .join(",")
        : null,
      //get the selected range parent
      parent =
        range !== null && range.commonAncestorContainer
          ? range.commonAncestorContainer.parentNode
          : null;
    this.$.button.value =
      this.command === "formatBlock" &&
      selectors &&
      parent &&
      parent.closest(selectors) !== null
        ? parent.closest(selectors).tagName.toLowerCase()
        : null;
    return false;
  }

  /**
   * Handles default options loaded from an external js file
   */
  _setOptions() {
    this.set(
      "options",
      this._getPickerOptions(data, this.allowNull, this.icon)
    );
  }

  /**
   * Picker change
   */
  _pickerChange(e) {
    let val = this.$.button.value;
    e.preventDefault();
    if (val !== null && this.range !== undefined && this.range !== null) {
      this.commandVal = this.$.button.value;
      this.doTextOperation();
      if (this.block !== true) {
        this.$.button.value = null;
        this.dispatchEvent(new CustomEvent("deselect", { detail: this }));
      }
    }
  }
  /**
   * Converts option data to picker option data;
   * can be overridden in extended elements
   *
   * @param {object} data about the option
   * @returns {object} picker dato for the option
   */
  _getOptionData(option) {
    return {
      alt: option.alt,
      icon: option.icon,
      style: option.style,
      value: option.value
    };
  }

  /**
   * gets a list of icons and load them in a format
   * that the simple-picker can take;
   * if no icons are provided, loads a list from iron-meta
   *
   * @param {array} a list of custom icons for the picker
   * @param {array} default list of icons for the picker
   * @param {boolean} allow a null value for the picker
   */
  _getPickerOptions(options = [], allowNull = false, icon = null) {
    let items = [],
      cols =
        Math.sqrt(options.length) < 11
          ? Math.ceil(Math.sqrt(options.length))
          : 10;
    for (let i = 0; i < options.length; i++) {
      let row = Math.floor(i / cols),
        col = i - row * cols,
        data = this._getOptionData(options[i]);
      if (items[row] === undefined || items[row] === null) items[row] = [];
      items[row][col] = data;
    }
    return items;
  }
}
window.customElements.define(
  ExtensibleToolbarPicker.tag,
  ExtensibleToolbarPicker
);
export { ExtensibleToolbarPicker };
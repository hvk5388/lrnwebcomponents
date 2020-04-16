import { LitElement, html, css } from "lit-element/lit-element.js";
import "@lrnwebcomponents/hexagon-loader/hexagon-loader.js";
import "@polymer/iron-icons/av-icons.js";
import "@polymer/iron-icons/communication-icons.js";
import "@polymer/iron-icons/device-icons.js";
import "@polymer/iron-icons/editor-icons.js";
import "@polymer/iron-icons/hardware-icons.js";
import "@polymer/iron-icons/image-icons.js";
import "@polymer/iron-icons/iron-icons.js";
import "@polymer/iron-icons/maps-icons.js";
import "@polymer/iron-icons/notification-icons.js";
import "@polymer/iron-icons/places-icons.js";
import "@polymer/iron-icons/social-icons.js";
import "@lrnwebcomponents/lrn-icons/lrn-icons.js";
import "@lrnwebcomponents/mdi-iconset-svg/mdi-iconset-svg.js";
import "@lrnwebcomponents/hax-iconset/hax-iconset.js";
import "@lrnwebcomponents/simple-fields/lib/simple-fields-form.js";
import "./hax-element-card-list.js";

class HaxElementListSelector extends LitElement {
  static get tag() {
    return "hax-element-list-selector";
  }
  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
        :host([loading]) hax-element-card-list {
          visibility: hidden;
          opacity: 0;
          transition: 1s ease-in-out all;
        }
        hax-element-card-list {
          visibility: visible;
          opacity: 1;
        }
        hexagon-loader[loading] {
          position: absolute;
          width: 100%;
        }
      `
    ];
  }
  constructor() {
    super();
    this.loading = false;
    this.cols = 3;
    this.imports = [];
    this.haxData = [];
    this.method = "GET";
    this.basePath =
      this.pathFromUrl(decodeURIComponent(import.meta.url)) + "../../../";
  }
  static get properties() {
    return {
      /**
       * base path
       */
      basePath: {
        type: String,
        attribute: "base-path"
      },
      /**
       * JS imports
       */
      imports: {
        type: Object
      },
      /**
       * HAXSchema array
       */
      haxData: {
        type: Array
      },
      /**
       * Data filtered by form changes
       */
      filteredHaxData: {
        type: Array
      },
      /**
       * Columns to render
       */
      cols: {
        type: Number
      },
      /**
       * End point to load this data
       */
      fieldsEndpoint: {
        type: String,
        attribute: "fields-endpoint"
      },
      /**
       * End point to load up a list of imports
       */
      wcRegistryEndpoint: {
        type: String,
        attribute: "wc-registry-endpoint"
      },
      /**
       * Request method
       */
      method: {
        type: String
      },
      loading: {
        type: Boolean,
        reflect: true
      }
    };
  }
  // simple path from a url modifier
  pathFromUrl(url) {
    return url.substring(0, url.lastIndexOf("/") + 1);
  }
  render() {
    return html`
      <simple-fields-form
        id="form"
        autoload
        load-endpoint="${this.fieldsEndpoint}"
        method="${this.method}"
        @response="${this._response}"
        @value-changed="${this._valueChanged}"
      >
      </simple-fields-form>
      <hexagon-loader
        item-count="4"
        color="blue"
        ?loading="${this.loading}"
        size="large"
      ></hexagon-loader>
      <hax-element-card-list
        id="productlist"
        cols="${this.cols}"
        .list="${this.filteredHaxData}"
      ></hax-element-card-list>
    `;
  }
  updated(changedProperties) {
    var importBackstop;
    changedProperties.forEach(async (oldValue, propName) => {
      if (propName == "wcRegistryEndpoint") {
        this.loading = true;
        fetch(this[propName])
          .then(response => {
            return response.json();
          })
          .then(data => {
            this.imports = data;
          });
      }
      // when imports changes make sure we import everything found
      if (propName == "imports") {
        for (var tag in this[propName]) {
          let file = this[propName][tag];
          try {
            await import(`${this.basePath}${file}`).then(module => {
              if (
                module &&
                Object.keys(module)[0] &&
                module[Object.keys(module)[0]].haxProperties &&
                module[Object.keys(module)[0]].haxProperties.gizmo &&
                module[Object.keys(module)[0]].haxProperties.gizmo.title
              ) {
                let detail = {
                  tag: tag,
                  file: file,
                  status: true,
                  schema: module[Object.keys(module)[0]].haxProperties
                };
                let list = this.haxData;
                list.push(detail);
                clearTimeout(importBackstop);
                importBackstop = setTimeout(() => {
                  this.haxData = [...list];
                  console.log(this.haxData);
                  this.loading = false;
                }, 1000);
              } else {
                //console.log(`${tag} doesn't have haxSchema`);
              }
            });
          } catch (e) {
            console.warn(e);
          }
        }
      }
      // this is the local data we don't let change
      if (propName == "haxData") {
        this.filteredHaxData = [...this[propName]];
      }
    });
  }
  applyFilters(filters) {
    let data = [...this.haxData];
    Object.keys(filters).forEach(key => {
      if (filters[key] != "") {
        switch (key) {
          case "haxelements-search-search":
            data = data.filter(item => {
              if (
                item.schema.gizmo.title
                  .toLowerCase()
                  .includes(filters[key].toLowerCase())
              ) {
                return true;
              }
              return false;
            });
            break;
          case "haxelements-search-tags":
            data = data.filter(item => {
              if (item.schema.gizmo.groups.includes(filters[key])) {
                return true;
              }
              return false;
            });
            break;
          case "haxelements-search-hasdemo":
            // only filter if box checked otherwise show all
            if (filters[key]) {
              data = data.filter(item => {
                if (item.schema.demoSchema) {
                  return true;
                }
                return false;
              });
            }
            break;
        }
      }
    });
    return data;
  }
  /**
   * Listen for response and then apply initial settings
   */
  _response(e) {
    // tee up defaults
    let value = this.shadowRoot.querySelector("#form").submit();
    value.haxelements.settings["haxelements-settings-columns"] = this.cols;
    this.shadowRoot.querySelector("#form").setValue(value);
  }
  /**
   * notice any value changing and then getting the form fresh
   */
  _valueChanged(e) {
    clearTimeout(this.__valueDebounce);
    this.__valueDebounce = setTimeout(() => {
      let value = this.shadowRoot.querySelector("#form").submit();
      if (value && value.haxelements) {
        this.cols = parseInt(
          value.haxelements.settings["haxelements-settings-columns"]
        );
        this.filteredHaxData = [...this.applyFilters(value.haxelements.search)];
        if (this.shadowRoot.querySelector("#productlist").requestUpdate) {
          this.shadowRoot.querySelector("#productlist").requestUpdate();
        }
      }
    }, 50);
  }
}

window.customElements.define(
  HaxElementListSelector.tag,
  HaxElementListSelector
);
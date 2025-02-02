import { LitElement, html, css } from "lit";
import { SchemaBehaviors } from "@lrnwebcomponents/schema-behaviors/schema-behaviors.js";
import { licenseList } from "@lrnwebcomponents/license-element/license-element.js";
import { generateResourceID } from "@lrnwebcomponents/utils/utils.js";
/**
 * `citation-element`
 * An element dedicated to presenting and managing a correct citation on the web
 * both visually as well as semantically with simple inputs.
 * @demo demo/index.html
 * @element citation-element
 */
class CitationElement extends SchemaBehaviors(LitElement) {
  /**
   * LitElement constructable styles enhancement
   */
  static get styles() {
    return [
      css`
        :host {
          display: block;
          color: var(--license-text-color);
        }
        :host([display-method="footnote"]) {
          visibility: hidden;
          opacity: 0;
        }
        :host([display-method="popup"]) {
          display: block;
        }
        .license-link {
          font-size: 16px;
          line-height: 16px;
          font-style: italic;
        }
        .citation-date {
          font-size: 16px;
          line-height: 16px;
          font-style: italic;
        }
        .license-link img {
          margin-right: 8px;
        }
      `,
    ];
  }
  /**
   * LitElement render
   */
  render() {
    return html`
      <meta
        about="${this.relatedResource}"
        property="cc:attributionUrl"
        content="${this.source}"
      />
      <meta
        about="${this.relatedResource}"
        property="cc:attributionName"
        typeof="oer:Text"
        content="${this.title}"
      />
      <meta
        rel="cc:license"
        href="${this.licenseLink}"
        content="License: ${this.licenseName}"
      />
      <cite
        ><a target="_blank" rel="noopener noreferrer" href="${this.source}"
          >${this.title}</a
        >
        by ${this.creator}, licensed under
        <a
          class="license-link"
          rel="noopener noreferrer"
          target="_blank"
          href="${this.licenseLink}"
          ><img
            loading="lazy"
            alt="${this.licenseName} graphic"
            src="${this.licenseImage}"
            ?hidden="${!this.licenseImage}"
            width="44px"
            height="16px"
          />${this.licenseName}</a
        >. Accessed <span class="citation-date">${this.date}</span>.</cite
      >
    `;
  }
  /**
   * convention
   */
  static get tag() {
    return "citation-element";
  }
  /**
   * HTMLElement
   */
  constructor() {
    super();
    this.scope = "sibling";
    this.source = "";
  }
  /**
   * LitElement properties changed
   */
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName == "scope") {
        this._scopeChanged(this[propName]);
      }
      if (propName == "license") {
        this._licenseUpdated(this[propName]);
      }
      if (["relatedResource", "licenseLink"].includes(propName)) {
        this._aboutLink = this._generateAboutLink(
          this.relatedResource,
          this.licenseLink
        );
      }
      if (propName == "source") {
        this._licenseLink = this._generateLicenseLink(this.source);
      }
    });
  }
  /**
   * LitElement / popular convention
   */
  static get properties() {
    return {
      ...super.properties,
      /**
       * Title of the work.
       */
      title: {
        type: String,
      },
      /**
       * License scope
       */
      scope: {
        type: String,
      },
      /**
       * How to present the citation on the interface.
       * Can be popup, footnote, or default behavior which is visible
       */
      displayMethod: {
        type: String,
        reflect: true,
        attribute: "display-method",
      },
      /**
       * Person or group that owns / created the work.
       */
      creator: {
        type: String,
      },
      /**
       * Original Source of the work in question
       */
      source: {
        type: String,
      },
      /**
       * Date the work was accessed.
       */
      date: {
        type: String,
      },
      /**
       * License name, calculated or supplied by the end user if we don't have them.
       */
      licenseName: {
        type: String,
        attribute: "license-name",
      },
      /**
       * License link for more details
       */
      licenseLink: {
        type: String,
        attribute: "license-link",
      },
      /**
       * License short hand. Options cc0,
       */
      license: {
        type: String,
      },
    };
  }
  /**
   * Generate a license link whenever we have a source
   * @param {href} source
   */
  _generateLicenseLink(source) {
    // remove existing if this is moving around
    if (this._licenseLink) {
      document.head.removeChild(this._licenseLink);
    }
    let link = document.createElement("link");
    link.setAttribute("typeof", "resource");
    link.setAttribute("rel", "license");
    link.setAttribute("src", source);

    document.head.appendChild(link);
    return link;
  }
  /**
   * Generate an about link whenever we have a related resource and license link
   * @param {uuid / id} relatedResource
   * @param {href} licenseLink
   */
  _generateAboutLink(relatedResource, licenseLink) {
    // remove existing if this is moving around
    if (this._aboutLink) {
      document.head.removeChild(this._aboutLink);
    }
    let link = document.createElement("link");
    link.setAttribute("about", relatedResource);
    link.setAttribute("property", "cc:license");
    link.setAttribute("content", licenseLink);
    document.head.appendChild(link);
    return link;
  }
  /**
   * Notice scope change.
   */
  _scopeChanged(newValue) {
    // make sure we actually have a sibling first
    if (newValue === "sibling" && this.previousElementSibling !== null) {
      // find the sibling element in the DOM and associate to it's resource ID
      // also generate a resource ID if it doesn't have one
      if (this.previousElementSibling.getAttribute("resource")) {
        this.relatedResource = this.previousElementSibling.getAttribute(
          "resource"
        );
      } else {
        let uuid = generateResourceID();
        this.relatedResource = uuid;
        this.previousElementSibling.setAttribute("resource", uuid);
      }
      // set prefix on the main element itself
      this.previousElementSibling.setAttribute(
        "prefix",
        this.getAttribute("prefix")
      );
    } else if (newValue === "parent") {
      // find the parent and associate to it's resource ID, if it doesn't have one
      // then let's make one dynamically
      if (this.parentNode.getAttribute("resource")) {
        this.relatedResource = this.parentNode.getAttribute("resource");
      } else {
        let uuid = generateResourceID();
        this.relatedResource = uuid;
        this.parentNode.setAttribute("resource", uuid);
      }
      // set prefix on the main element itself
      this.parentNode.setAttribute("prefix", this.getAttribute("prefix"));
    }
  }

  /**
   * Attached to the DOM, now fire.
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }

  /**
   * License was updated, time to update license name and link.
   */
  _licenseUpdated(newValue) {
    if (typeof newValue !== typeof undefined) {
      var list = new licenseList();
      if (typeof list[newValue] !== typeof undefined) {
        this.licenseName = list[newValue].name;
        this.licenseLink = list[newValue].link;
        this.licenseImage = list[newValue].image;
      }
    }
  }
}
window.customElements.define(CitationElement.tag, CitationElement);
export { CitationElement };

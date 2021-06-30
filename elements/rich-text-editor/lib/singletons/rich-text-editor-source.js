/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit-element/lit-element.js";

/**
 * `rich-text-editor-source`
 * a standalone rich text editor
### Styling

`<rich-text-editor-source>`  uses RichTextStyles variables, 
as well as an additional style:

Custom property | Description | Default
----------------|-------------|----------
--rich-text-editor-source-min-height | minimum height of editor | 20px
 *
 * @extends LitElement
 * @customElement
 * @element rich-text-editor-source
 * @lit-html
 * @lit-element
 * @demo ./demo/index.html demo
 * @demo ./demo/mini.html mini floating toolbar
 * @demo ./demo/full.html toolbar with breadcrumb
 * @demo ./demo/config.html custom configuration
 * @demo ./demo/rawhtml.html raw HTML
 */
class RichTextEditorSource extends LitElement {
  //styles function
  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
        :host([hidden]) {
          display: none;
        }

        :host([disabled]),
        :host([view-source]) {
          outline: none !important;
        }
        #container {
          display: flex;
          align-items: stretch;
          justify-content: space-between;
          width: 100%;
        }
        #source,
        #wysiwyg {
          margin: 0;
          padding: 0;
          min-height: var(--rich-text-editor-min-height, 20px);
          cursor: pointer;
          outline: none;
          resize: horizontal;
          overflow: auto;
          flex: 1 1 auto;
        }
        #source {
          flex: 1 1 auto;
          width: 50%;
          min-width: 300px;
        }
        #wysiwyg {
          display: block;
          margin-right: 10px;
          flex: 1 1 calc(50% - 10px);
        }
        #source:hover,
        #source:focus-within {
          outline: var(--rich-text-editor-border-width, 1px)
            var(--rich-text-editor-focus-border-style, 1px)
            var(--rich-text-editor-focus-color, blue);
        }
        ::slotted(*) {
          cursor: not-allowed;
          pointer-events: none;
        }
      `,
    ];
  }

  // render function
  render() {
    return html` <div id="container">
      <div
        id="wysiwyg"
        aria-placeholder="${this.placeholder}"
        part="wysiwyg"
        disabled
      >
        <slot></slot>
      </div>
      <code-editor
        id="source"
        font-size="13"
        language="html"
        @value-changed="${this._handleSourceChange}"
        word-wrap
        part="source"
      >
      </code-editor>
    </div>`;
  }
  static get properties() {
    return {
      ...super.properties,

      /**
       * editor's unique id
       */
      id: {
        name: "id",
        type: String,
        reflect: true,
        attribute: "id",
      },
      /**
       * don't reveal toolbar on mouseover
       */
      disabled: {
        name: "disabled",
        type: Boolean,
        attribute: "disabled",
        reflect: true,
      },
      /**
       * don't reveal toolbar on mouseover
       */
      hidden: {
        name: "hidden",
        type: Boolean,
        attribute: "hidden",
        reflect: true,
      },
      /**
       * id for editable region
       */
      __target: {
        type: Object,
      },
      /**
       * id for toolbar
       */
      __toolbar: {
        type: Object,
      },

      /**
       * code-editor for view source
       */
      __codeEditorValue: {
        type: String,
      },

      /**
       * has focus
       */
      __needsUpdate: {
        type: Boolean,
      },
    };
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "rich-text-editor-source";
  }
  constructor() {
    super();
    this.id = "";
    import("@lrnwebcomponents/code-editor/code-editor.js");
    // sets instance to current instance
    if (!window.RichTextEditorSource.instance) {
      window.RichTextEditorSource.instance = this;
      return this;
    }
  }

  firstUpdated() {
    if (super.firstUpdated) super.firstUpdated();
    this.toggle();
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    changedProperties.forEach((oldValue, propName) => {});
  }

  toggle(toolbar) {
    let code = this.shadowRoot
      ? this.shadowRoot.querySelector("#source")
      : undefined;
    if (
      !code ||
      !toolbar ||
      !toolbar.target ||
      (this.__toolbar && this.__toolbar === toolbar)
    ) {
      console.log("toggle off");
      if (this.__target) this.__target.focus();
      this.hidden = true;
      this.__toolbar = undefined;
      this.__target = undefined;
      this.disabled = true;
      this.__codeEditorValue = "";
      this.innerHTML = this.__codeEditorValue;
      document.body.append(this);
    } else {
      this.__toolbar = toolbar;
      this.__target = toolbar.target;
      this.disabled = this.__target.disabled;
      this.__target.parentNode.insertBefore(this, this.__target);
      this.__codeEditorValue = this.__toolbar.targetHTML;
      console.log("toggle on");
      this.innerHTML = this.__codeEditorValue;
      code.editorValue = this.__codeEditorValue;
      this.hidden = false;
      code.focus();
    }
  }
  /**
   * updates editor content to code-editor value
   *
   * @param {event} e code-editor's value change event
   * @memberof RichTextEditorSource
   */
  _handleSourceChange(e) {
    if (!!this.__toolbar && !!this.__target && !this.__needsUpdate) {
      this.__needsUpdate =
        !!e.detail && !!e.detail.value
          ? this.__toolbar.htmlMatchesTarget(`${e.detail.value}`)
          : true;
      let update = () => {
        this.__needsUpdate = false;
        this.__codeEditorValue = e.detail.value;
        this.innerHTML = e.detail.value;
        this.__target.innerHTML = e.detail.value;
      };
      if (this.__needsUpdate) setTimeout(update.bind(this), 300);
    }
  }
}
window.customElements.define(RichTextEditorSource.tag, RichTextEditorSource);
export { RichTextEditorSource };

// register globally so we can make sure there is only one
window.RichTextEditorSource = window.RichTextEditorSource || {};
// request if this exists. This helps invoke element existing in dom
// as well as that there is only one of them. That way we can ensure everything
// is rendered through same modal
window.RichTextEditorSource.requestAvailability = () => {
  if (!window.RichTextEditorSource.instance) {
    window.RichTextEditorSource.instance = document.createElement(
      "rich-text-editor-source"
    );
    document.body.appendChild(window.RichTextEditorSource.instance);
  }
  return window.RichTextEditorSource.instance;
};

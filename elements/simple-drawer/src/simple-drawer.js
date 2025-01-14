/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, css } from "lit";
import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";
/**
 * @deprecatedApply - required for @apply / invoking @apply css var convention
 */
import "@polymer/polymer/lib/elements/custom-style.js";

import "@polymer/app-layout/app-drawer/app-drawer.js";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
// register globally so we can make sure there is only one
window.SimpleDrawer = window.SimpleDrawer || {};
// request if this exists. This helps invoke the element existing in the dom
// as well as that there is only one of them. That way we can ensure everything
// is rendered through the same drawer
window.SimpleDrawer.requestAvailability = () => {
  if (!window.SimpleDrawer.instance) {
    window.SimpleDrawer.instance = document.createElement("simple-drawer");
    document.body.appendChild(window.SimpleDrawer.instance);
  }
  return window.SimpleDrawer.instance;
};
/**
 * `simple-drawer`
 * `a singleton drawer element`
 * @demo demo/index.html
 * @element simple-drawer
 */
class SimpleDrawer extends SimpleColors {
  /* REQUIRED FOR TOOLING DO NOT TOUCH */

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "simple-drawer";
  }
  /**
   * HTMLElement
   */
  constructor() {
    super();
    this.title = "";
    this.align = "left";
    this.opened = false;
    this.closeLabel = "Close";
    this.closeIcon = "icons:cancel";
  }
  /**
   * LitElement life cycle - ready
   */
  firstUpdated(changedProperties) {
    window.addEventListener("simple-drawer-hide", this.close.bind(this));
    window.addEventListener("simple-drawer-show", this.showEvent.bind(this));
  }
  /**
   * LitElement life cycle - properties changed callback
   */
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName == "opened") {
        this._openedChanged(this[propName], oldValue);
      }
    });
  }
  /**
   * show event call to open the drawer and display it's content
   */
  showEvent(e) {
    // if we're already opened and we get told to open again....
    // swap out the contents
    if (this.opened) {
      // wipe the slot of our drawer
      while (this.firstChild !== null) {
        this.removeChild(this.firstChild);
      }
      setTimeout(() => {
        this.show(
          e.detail.title,
          e.detail.elements,
          e.detail.invokedBy,
          e.detail.align,
          e.detail.clone
        );
      }, 100);
    } else {
      this.show(
        e.detail.title,
        e.detail.elements,
        e.detail.invokedBy,
        e.detail.align,
        e.detail.size,
        e.detail.clone
      );
    }
  }
  /**
   * Show the drawer and display the material
   */
  show(
    title,
    elements,
    invokedBy,
    align = "left",
    size = "256px",
    clone = false
  ) {
    this.invokedBy = invokedBy;
    this.title = title;
    this.align = align;
    // @todo this is a bit of a hack specific to polymer elements in app- world
    this.shadowRoot
      .querySelector("#drawer")
      .updateStyles({ "--app-drawer-width": size });
    let element;
    // append element areas into the appropriate slots
    // ensuring they are set if it wasn't previously
    let slots = ["header", "content"];
    for (var i in slots) {
      if (elements[slots[i]]) {
        if (clone) {
          element = elements[slots[i]].cloneNode(true);
        } else {
          element = elements[slots[i]];
        }
        element.setAttribute("slot", slots[i]);
        this.appendChild(element);
      }
    }
    // minor delay to help the above happen prior to opening
    setTimeout(() => {
      this.opened = true;
      // fake a resize event to make contents happy
      window.dispatchEvent(new Event("resize"));
    }, 100);
  }
  /**
   * check state and if we should clean up on close.
   * This keeps the DOM tiddy and allows animation to happen gracefully.
   */
  animationEnded(e) {
    // wipe the slot of our drawer
    this.title = "";
    while (this.firstChild !== null) {
      this.removeChild(this.firstChild);
    }
    if (this.invokedBy) {
      setTimeout(() => {
        this.invokedBy.focus();
      }, 500);
    }
  }
  /**
   * Close the drawer and do some clean up
   */
  close() {
    this.opened = false;
  }
  // event bubbling up from drawer
  __openedChanged(e) {
    this.opened = e.detail.value;
  }
  // Observer opened for changes
  _openedChanged(newValue, oldValue) {
    if (typeof newValue !== typeof undefined && !newValue) {
      this.animationEnded();
      const evt = new CustomEvent("simple-drawer-closed", {
        bubbles: true,
        cancelable: true,
        detail: {
          opened: false,
          invokedBy: this.invokedBy,
        },
      });
      this.dispatchEvent(evt);
    } else if (newValue) {
      const evt = new CustomEvent("simple-drawer-opened", {
        bubbles: true,
        cancelable: true,
        detail: {
          opened: true,
          invokedBy: this.invokedBy,
        },
      });
      this.dispatchEvent(evt);
    }
  }
  /**
   * life cycle, element is removed from the DOM
   */
  disconnectedCallback() {
    window.removeEventListener("simple-drawer-hide", this.close.bind(this));
    window.removeEventListener("simple-drawer-show", this.showEvent.bind(this));
    super.disconnectedCallback();
  }
}
window.customElements.define(SimpleDrawer.tag, SimpleDrawer);
export { SimpleDrawer };

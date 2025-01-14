import { html, css, LitElement } from "lit";
import "@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js";
import "@lrnwebcomponents/hax-body/lib/hax-toolbar-item.js";
import "@lrnwebcomponents/hax-iconset/lib/simple-hax-iconset.js";
import { HAXStore } from "@lrnwebcomponents/hax-body/lib/hax-store.js";
import {
  normalizeEventPath,
  nodeToHaxElement,
} from "@lrnwebcomponents/utils/utils.js";
import { HaxTrayDetailHeadings } from "@lrnwebcomponents/hax-body/lib/hax-ui-styles.js";
import { I18NMixin } from "@lrnwebcomponents/i18n-manager/lib/I18NMixin.js";
import { autorun, toJS } from "mobx";

/**
 * `hax-map`
 * @element hax-map
 * `Export dialog with all export options and settings provided.`
 */
class HaxMap extends I18NMixin(LitElement) {
  /**
   * LitElement constructable styles enhancement
   */
  static get styles() {
    return [
      ...HaxTrayDetailHeadings,
      css`
        :host {
          display: block;
        }
        .container {
          text-align: left;
        }
        .stats {
          display: flex;
          align-items: stretch;
          flex-wrap: wrap;
        }
        .stat {
          flex: 1 1 auto;
          text-align: center;
          border: 1px solid var(--hax-ui-border-color);
          font-weight: normal;
          font-size: var(--hax-ui-font-size-xs);
          line-height: 140%;
          padding: var(--hax-ui-spacing-sm);
        }
        .stat > * {
          display: block;
        }
        .stat *:first-child {
          font-weight: bold;
          font-size: 150%;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        ul li {
          margin: 0;
          padding: 0;
        }
        li > hax-toolbar-item {
          width: 100%;
        }
        hax-toolbar-item[data-active-item]::part(button) {
          color: var(--hax-ui-color);
          background-color: var(--hax-ui-background-color-accent);
          border-color: var(--hax-ui-color-accent);
        }
        li > hax-toolbar-item::part(button),
        li > hax-toolbar-item.heading-level-page-break::part(button),
        li > hax-toolbar-item[icon="hax:h2"].heading-level-h2::part(button) {
          width: 100%;
          margin-left: 0px;
        }
        li > hax-toolbar-item.heading-level-h2::part(button),
        li > hax-toolbar-item[icon="hax:h3"].heading-level-h3::part(button) {
          width: calc(100% - 26px);
          margin-left: 26px;
        }
        li > hax-toolbar-item.heading-level-h3::part(button),
        li > hax-toolbar-item[icon="hax:h4"].heading-level-h4::part(button) {
          width: calc(100% - calc(2 * 26px));
          margin-left: calc(2 * 26px);
        }
        li > hax-toolbar-item.heading-level-h4::part(button),
        li > hax-toolbar-item[icon="hax:h5"].heading-level-h5::part(button) {
          width: calc(100% - calc(3 * 26px));
          margin-left: calc(3 * 26px);
        }
        li > hax-toolbar-item.heading-level-h5::part(button),
        li > hax-toolbar-item[icon="hax:h6"].heading-level-h6::part(button) {
          width: calc(100% - calc(4 * 26px));
          margin-left: calc(4 * 26px);
        }
        li > hax-toolbar-item.heading-level-h6::part(button) {
          width: calc(100% - calc(5 * 26px));
          margin-left: calc(5 * 26px);
        }
      `,
    ];
  }
  constructor() {
    super();
    this.elementList = [];
    this.t = {
      contentStatistics: "Content Statistics",
      words: "Words",
      headings: "Headings",
      pageBreaks: "Page breaks",
      paragraphs: "Paragraphs",
      widgets: "Widgets",
      characters: "Characters",
      listView: "List view",
    };
    this.registerLocalization({
      context: this,
      namespace: "hax",
    });
    autorun(() => {
      this.activeNodeIndex = toJS(HAXStore.activeNodeIndex);
    });
  }
  async updateHAXMap(e) {
    let list = [];
    for (var i = 0; i < HAXStore.activeHaxBody.childNodes.length; i++) {
      const node = HAXStore.activeHaxBody.childNodes[i];
      list.push(await nodeToHaxElement(node, null));
    }
    this.calcStats(list);
    let elements = [];
    for (var i = 0; i < list.length; i++) {
      let def = HAXStore.haxSchemaFromTag(list[i].tag);
      if (def.gizmo) {
        elements.push({
          tag: list[i].tag,
          icon: def.gizmo.icon,
          name: def.gizmo.title,
        });
      } else {
        if (list[i].tag && list[i].tag.includes("-")) {
          elements.push({
            tag: list[i].tag,
            icon: "hax:templates",
            name: "Widget",
          });
        } else {
          elements.push({
            tag: list[i].tag,
            icon: "hax:paragraph",
            name: "HTML block",
          });
        }
      }
    }
    this.elementList = [...elements];
  }
  /**
   * Calculate statistics from the array of hax elements
   */
  calcStats(elements) {
    if (elements && HAXStore.activeHaxBody.innerText) {
      let counts = {
        c: HAXStore.activeHaxBody.innerText.length,
        w: parseInt(HAXStore.activeHaxBody.innerText.split(/\s+/g).length - 1),
        h: 0,
        b: 0,
        p: 0,
        e: 0,
      };
      elements.forEach((el) => {
        switch (el.tag) {
          case "blockquote":
          case "div":
          case "span":
          case "p":
          case "ul":
          case "ol":
          case "strong":
          case "em":
            counts.p++;
            break;
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            counts.h++;
            break;
          case "page-break":
            counts.b++;
            break;
          default:
            counts.e++;
            break;
        }
      });
      for (var i in counts) {
        this[`${i}Count`] = counts[i];
      }
    }
  }
  render() {
    return html`
      <h5>${this.t.contentStatistics}</h5>
      <div class="stats">
        <div class="stat">
          <span>${this.wCount}</span>
          <span>${this.t.words}</span>
        </div>
        <div class="stat">
          <span>${this.pCount}</span>
          <span>${this.t.paragraphs}</span>
        </div>
        <div class="stat">
          <span>${this.cCount}</span>
          <span>${this.t.characters}</span>
        </div>
        <div class="stat">
          <span>${this.bCount}</span>
          <span>${this.t.pageBreaks}</span>
        </div>
        <div class="stat">
          <span>${this.hCount}</span>
          <span>${this.t.headings}</span>
        </div>
        <div class="stat">
          <span>${this.eCount}</span>
          <span>${this.t.widgets}</span>
        </div>
      </div>
      <h5>${this.t.listView}</h5>
      <ul>
        ${this.indentedElements.map((element, index) => {
          return html`
            <li>
              <hax-toolbar-item
                align-horizontal="left"
                class="heading-level-${element.parent || "h1"}"
                @click="${(e) => this.goToItem(index)}"
                data-index="${index}"
                ?data-active-item="${index === this.activeNodeIndex}"
                icon="${element.icon}"
                label="${element.name}"
                show-text-label
              >
              </hax-toolbar-item>
            </li>
          `;
        })}
      </ul>
    `;
  }
  get indentedElements() {
    let prev = "h1";
    return this.elementList.map((element) => {
      let el = element;
      el.parent = prev;
      if (el.tag === "page-break") {
        el.parent = "page-break";
        prev = "page-break";
      } else if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(el.tag)) {
        el.parent = el.tag;
        prev = el.tag;
      }
      return el;
    });
  }
  goToItem(index) {
    if (index !== false) {
      // find based on index position
      let activeChild = HAXStore.activeHaxBody.children[parseInt(index)];
      HAXStore.activeNode = activeChild;
      activeChild.classList.add("blinkfocus");
      if (typeof activeChild.scrollIntoViewIfNeeded === "function") {
        activeChild.scrollIntoViewIfNeeded(true);
      } else {
        activeChild.scrollIntoView({
          behavior: "smooth",
          inline: "center",
        });
      }
      setTimeout(() => {
        activeChild.classList.remove("blinkfocus");
      }, 500);
    }
  }
  scrollInMap() {
    var target = normalizeEventPath(e)[0];
    this.goToItem(target.getAttribute("data-index"));
  }
  static get tag() {
    return "hax-map";
  }
  static get properties() {
    return {
      /**
       * Title when open.
       */
      opened: {
        type: Boolean,
      },
      elementList: {
        type: Array,
      },
      cCount: {
        type: String,
      },
      wCount: {
        type: String,
      },
      bCount: {
        type: String,
      },
      hCount: {
        type: String,
      },
      pCount: {
        type: String,
      },
      eCount: {
        type: String,
      },
      activeNodeIndex: {
        type: Number,
      },
    };
  }
}
customElements.define(HaxMap.tag, HaxMap);
export { HaxMap };

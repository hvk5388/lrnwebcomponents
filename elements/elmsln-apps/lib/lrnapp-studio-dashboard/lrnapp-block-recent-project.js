import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "@polymer/iron-ajax/iron-ajax.js";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icon-button.js";
import "@lrnwebcomponents/hax-iconset/lib/simple-hax-iconset.js";
import "@polymer/iron-list/iron-list.js";
import "@polymer/polymer/lib/elements/dom-if.js";
import "@polymer/paper-item/paper-item-shared-styles.js";
import "@lrnwebcomponents/lrnsys-button/lrnsys-button.js";
import "@lrnwebcomponents/elmsln-loading/elmsln-loading.js";
import "@lrnwebcomponents/materializecss-styles/materializecss-styles.js";
class LrnappBlockRecentProject extends PolymerElement {
  static get template() {
    return html`
      <style include="materializecss-styles paper-item-styles">
        [hidden] {
          display: none !important;
        }
        :host {
          display: block;
        }
        #loading {
          width: 100%;
          z-index: 1000;
          opacity: 0.8;
          text-align: center;
          align-content: center;
          justify-content: center;
          background-color: white;
        }
        a {
          display: block;
        }
        button {
          padding: 0;
          margin: 0;
          min-width: 1rem;
          text-transform: unset;
          background-color: transparent;
          border: none;
        }
        .project-card {
          width: 100%;
          box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);
          min-width: 15em;
          max-width: 20em;
          margin: 0 1em;
        }
        .button-contents {
          display: flex;
          align-content: center;
        }
        .assignment-row {
          border: 1px solid #000000;
          background-color: #ffffff;
        }
        .assignment-row .assignment-row-button.active {
          background-color: var(--paper-amber-50);
          font-weight: bold;
        }
        .assignment-row:hover .assignment-operations {
          display: block;
          overflow: visible;
          margin: 0.2em;
        }
        .assignment-row-button {
          width: 100%;
          justify-content: flex-start;
          height: 3em;
          text-transform: none;
        }
        .assignment-title {
          display: inline-flex;
          align-items: center;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 1em;
        }
        .status-indicator {
          border-right: 1px solid grey;
          padding: 0.5em;
          margin: 0 0.5em 0 0;
          display: inline-flex;
          line-height: 3em;
          height: 3em;
          justify-content: center;
          align-items: center;
        }
        .whole-project {
          width: 100%;
          margin: 0;
          padding: 0;
        }
      </style>
      <iron-ajax
        auto=""
        url="{{sourcePath}}"
        handle-as="json"
        last-response="{{response}}"
        on-response="handleResponse"
      ></iron-ajax>
      <div id="loading">
        <h3>Loading..</h3>
        <elmsln-loading color="grey-text" size="large"></elmsln-loading>
      </div>
      <template is="dom-if" if="[[hasProject]]">
        <a tabindex="-1" href$="[[basePath]]lrnapp-studio-kanban">
          <button class="whole-project ferpa-protect">
            <div
              id$="project-[[project.id]]"
              class="project-card grey lighten-3"
              heading="{{project.attributes.title}}"
            >
              <div class="card-content">
                <iron-list
                  items="[[_toArray(project.relationships.assignments)]]"
                  as="assignment"
                  mutable-data
                >
                  <template>
                    <div class="assignment-row" id="assignment">
                      <lrnsys-button
                        inner-class="no-left-padding"
                        class="assignment-row-button"
                        button-class="assignment-row-button"
                        id$="assignment-[[project.id]]-[[assignment.id]]"
                        hover-class="amber lighten-5"
                        href$="[[basePath]]lrnapp-studio-kanban"
                      >
                        <span class="button-contents">
                          <div
                            class$="status-indicator [[assignment.metadata.relatedSubmissions.complete.color]]"
                          >
                            <simple-icon
                              icon="[[assignment.metadata.relatedSubmissions.complete.icon]]"
                            ></simple-icon>
                          </div>
                          <div class="assignment-title">
                            [[assignment.title]]
                          </div>
                        </span>
                      </lrnsys-button>
                    </div>
                  </template>
                </iron-list>
              </div>
            </div>
          </button>
        </a>
      </template>
      <template is="dom-if" if="[[!hasProject]]">
        <lrnsys-button
          inner-class="no-left-padding"
          button-class="assignment-row-button"
          class="assignment-row-button"
          href$="[[basePath]]lrnapp-studio-kanban"
          hover-class="amber lighten-5"
        >
          <span class="button-contents">
            <div class="status-indicator">
              <simple-icon icon="assignment"></simple-icon>
            </div>
            <div class="assignment-title">Tap to start your first project!</div>
          </span>
        </lrnsys-button>
      </template>
    `;
  }
  static get tag() {
    return "lrnapp-block-recent-project";
  }

  static get properties() {
    return {
      elmslnCourse: {
        type: String,
      },
      elmslnSection: {
        type: String,
      },
      basePath: {
        type: String,
      },
      csrfToken: {
        type: String,
      },
      endPoint: {
        type: String,
      },
      sourcePath: {
        type: String,
        notify: true,
      },
      response: {
        type: Object,
        notify: true,
      },
      project: {
        type: Object,
        notify: true,
      },
      hasProject: {
        type: Boolean,
        notify: true,
        reflectToAttribute: true,
        computed: "_getHasProject(project)",
      },
    };
  }

  /**
   * Generate the correct boolean for having a project.
   */
  _getHasProject(project) {
    if (typeof project.id !== typeof undefined) {
      return true;
    }
    return false;
  }

  /**
   * Swap off the loading with project data.
   */
  handleResponse(e) {
    this.$.loading.hidden = true;
    this.project = this.response.data;
  }

  /**
   * Generate an array.
   */
  _toArray(obj) {
    if (obj == null) {
      return [];
    }
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  }
}
window.customElements.define(
  LrnappBlockRecentProject.tag,
  LrnappBlockRecentProject
);
export { LrnappBlockRecentProject };

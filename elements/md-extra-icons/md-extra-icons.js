/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 * `md-extra-icons`
 * @element md-extra-icons
 *
 * @group LRN Elements
 * @pseudoElement md-extra-icons
 * @demo demo/index.html
 */
import "@polymer/iron-icon/iron-icon.js";
import "@polymer/iron-iconset-svg/iron-iconset-svg.js";

import { html } from "@polymer/polymer/lib/utils/html-tag.js";

const template = html`
  <iron-iconset-svg name="mdextra" size="24">
    <svg>
      <defs>
        <g id="superscript">
          <path
            d="M16,7.41L11.41,12L16,16.59L14.59,18L10,13.41L5.41,18L4,16.59L8.59,12L4,7.41L5.41,6L10,10.59L14.59,6L16,7.41M21.85,9H16.97V8L17.86,7.18C18.62,6.54 19.18,6 19.56,5.55C19.93,5.11 20.12,4.7 20.13,4.32C20.14,4.04 20.05,3.8 19.86,3.62C19.68,3.43 19.39,3.34 19,3.33C18.69,3.34 18.42,3.4 18.16,3.5L17.5,3.89L17.05,2.72C17.32,2.5 17.64,2.33 18.03,2.19C18.42,2.05 18.85,2 19.32,2C20.1,2 20.7,2.2 21.1,2.61C21.5,3 21.72,3.54 21.72,4.18C21.71,4.74 21.53,5.26 21.18,5.73C20.84,6.21 20.42,6.66 19.91,7.09L19.27,7.61V7.63H21.85V9Z"
          ></path>
        </g>
        <g id="subscript">
          <path
            d="M16,7.41L11.41,12L16,16.59L14.59,18L10,13.41L5.41,18L4,16.59L8.59,12L4,7.41L5.41,6L10,10.59L14.59,6L16,7.41M21.85,21.03H16.97V20.03L17.86,19.23C18.62,18.58 19.18,18.04 19.56,17.6C19.93,17.16 20.12,16.75 20.13,16.36C20.14,16.08 20.05,15.85 19.86,15.66C19.68,15.5 19.39,15.38 19,15.38C18.69,15.38 18.42,15.44 18.16,15.56L17.5,15.94L17.05,14.77C17.32,14.56 17.64,14.38 18.03,14.24C18.42,14.1 18.85,14 19.32,14C20.1,14.04 20.7,14.25 21.1,14.66C21.5,15.07 21.72,15.59 21.72,16.23C21.71,16.79 21.53,17.31 21.18,17.78C20.84,18.25 20.42,18.7 19.91,19.14L19.27,19.66V19.68H21.85V21.03Z"
          ></path>
        </g>
        <g id="hexagon">
          <path
            d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5Z"
          ></path>
        </g>
        <g id="hexagon-multiple">
          <path
            d="M10.25,2C10.44,2 10.61,2.11 10.69,2.26L12.91,6.22L13,6.5L12.91,6.78L10.69,10.74C10.61,10.89 10.44,11 10.25,11H5.75C5.56,11 5.39,10.89 5.31,10.74L3.09,6.78L3,6.5L3.09,6.22L5.31,2.26C5.39,2.11 5.56,2 5.75,2H10.25M10.25,13C10.44,13 10.61,13.11 10.69,13.26L12.91,17.22L13,17.5L12.91,17.78L10.69,21.74C10.61,21.89 10.44,22 10.25,22H5.75C5.56,22 5.39,21.89 5.31,21.74L3.09,17.78L3,17.5L3.09,17.22L5.31,13.26C5.39,13.11 5.56,13 5.75,13H10.25M19.5,7.5C19.69,7.5 19.86,7.61 19.94,7.76L22.16,11.72L22.25,12L22.16,12.28L19.94,16.24C19.86,16.39 19.69,16.5 19.5,16.5H15C14.81,16.5 14.64,16.39 14.56,16.24L12.34,12.28L12.25,12L12.34,11.72L14.56,7.76C14.64,7.61 14.81,7.5 15,7.5H19.5Z"
          ></path>
        </g>
        <g id="hexagon-outline">
          <path
            d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5,8.09V15.91L12,19.85L19,15.91V8.09L12,4.15Z"
          ></path>
        </g>
        <g id="unlink">
          <path
            d="M2,5.27L3.28,4L20,20.72L18.73,22L14.73,18H13V16.27L9.73,13H8V11.27L5.5,8.76C4.5,9.5 3.9,10.68 3.9,12C3.9,14.26 5.74,16.1 8,16.1H11V18H8A6,6 0 0,1 2,12C2,10.16 2.83,8.5 4.14,7.41L2,5.27M16,6A6,6 0 0,1 22,12C22,14.21 20.8,16.15 19,17.19L17.6,15.77C19.07,15.15 20.1,13.7 20.1,12C20.1,9.73 18.26,7.9 16,7.9H13V6H16M8,6H11V7.9H9.72L7.82,6H8M16,11V13H14.82L12.82,11H16Z"
          ></path>
        </g>
      </defs>
    </svg>
  </iron-iconset-svg>
`;

document.head.appendChild(template.content);

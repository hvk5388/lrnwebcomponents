import { fixture, expect, html } from "@open-wc/testing";

import "../lrndesign-gallery.js";

describe("lrndesign-gallery test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(
      html` <lrndesign-gallery title="test-title"></lrndesign-gallery> `
    );
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});

/*
describe("A11y/chai axe tests", () => {
  it("lrndesign-gallery passes accessibility test", async () => {
    const el = await fixture(html` <lrndesign-gallery></lrndesign-gallery> `);
    await expect(el).to.be.accessible();
  });
  it("lrndesign-gallery passes accessibility negation", async () => {
    const el = await fixture(
      html`<lrndesign-gallery
        aria-labelledby="lrndesign-gallery"
      ></lrndesign-gallery>`
    );
    await assert.isNotAccessible(el);
  });
});

/*
// Custom properties test
describe("Custom Property Test", () => {
  it("lrndesign-gallery can instantiate a element with custom properties", async () => {
    const el = await fixture(html`<lrndesign-gallery .foo=${'bar'}></lrndesign-gallery>`);
    expect(el.foo).to.equal('bar');
  })
})
*/

/*
// Test if element is mobile responsive
describe('Test Mobile Responsiveness', () => {
    before(async () => {z   
      await setViewport({width: 375, height: 750});
    })
    it('sizes down to 360px', async () => {
      const el = await fixture(html`<lrndesign-gallery ></lrndesign-gallery>`);
      const width = getComputedStyle(el).width;
      expect(width).to.equal('360px');
    })
}) */

/*
// Test if element sizes up for desktop behavior
describe('Test Desktop Responsiveness', () => {
    before(async () => {
      await setViewport({width: 1000, height: 1000});
    })
    it('sizes up to 410px', async () => {
      const el = await fixture(html`<lrndesign-gallery></lrndesign-gallery>`);
      const width = getComputedStyle(el).width;
      expect(width).to.equal('410px');
    })
    it('hides mobile menu', async () => {
      const el await fixture(html`<lrndesign-gallery></lrndesign-gallery>`);
      const hidden = el.getAttribute('hidden');
      expect(hidden).to.equal(true);
    })
}) */

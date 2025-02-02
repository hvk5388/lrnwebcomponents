import { fixture, expect, html } from "@open-wc/testing";

import "../a11y-details.js";

describe("a11y-details test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(
      html` <a11y-details title="test-title"></a11y-details> `
    );
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});

/*
describe("A11y/chai axe tests", () => {
  it("a11y-details passes accessibility test", async () => {
    const el = await fixture(html` <a11y-details></a11y-details> `);
    await expect(el).to.be.accessible();
  });
  it("a11y-details passes accessibility negation", async () => {
    const el = await fixture(
      html`<a11y-details aria-labelledby="a11y-details"></a11y-details>`
    );
    await assert.isNotAccessible(el);
  });
});

/*
// Custom properties test
describe("Custom Property Test", () => {
  it("a11y-details can instantiate a element with custom properties", async () => {
    const el = await fixture(html`<a11y-details .foo=${'bar'}></a11y-details>`);
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
      const el = await fixture(html`<a11y-details ></a11y-details>`);
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
      const el = await fixture(html`<a11y-details></a11y-details>`);
      const width = getComputedStyle(el).width;
      expect(width).to.equal('410px');
    })
    it('hides mobile menu', async () => {
      const el await fixture(html`<a11y-details></a11y-details>`);
      const hidden = el.getAttribute('hidden');
      expect(hidden).to.equal(true);
    })
}) */

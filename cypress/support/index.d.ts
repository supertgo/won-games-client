/// <reference types="cypress" />

type ShowcaseAttributes = {
  name: string;
  highlight?: boolean
}

declare namespace Cypress {
  interface Chainable {
    /*
     * Custom command to visit google page
     * @example cy.google()
     */
    google(): Chainable<Window>;

     /*
     * Custom command to visit google page
     * @example cy.shouldRenderBanner()
     */
    shouldRenderBanner(): Chainable<Element>

     /*
     * Custom command to check showcase in page
     * @example cy.shouldRenderBanner()
     */
     shouldRenderShowcase(attr: ShowcaseAttributes): Chainable<Element>
  }
}

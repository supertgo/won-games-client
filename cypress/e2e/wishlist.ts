/// <reference path="../support/index.d.ts" />

describe('Wishlist', () => {
  it('should add and remove games from wishlist', () => {
    cy.visit('/wishlist')
    cy.signIn()

    cy.url().should('eq', `${Cypress.config().baseUrl}/wishlist`)
    cy.getByDataCy('wishlist').within(() => {
      cy.findByText(/Your wishlist is empty/i).should('exist')
      cy.findByRole('link', { name: /go back to store/i }).should('exist')
    })

    cy.shouldRenderShowcase({ name: 'You may like these games', highlight: true }).within(() => {
      cy.getByDataCy('game-card').eq(0).within(() => {
        cy.findByLabelText(/add to wishlist/i ).click()
      })
    })

    cy.getByDataCy('wishlist').within(() => {
      cy.getByDataCy('game-card').should('have.length', 1)
    })

    cy.getByDataCy('wishlist').within(() => {
      cy.getByDataCy('game-card').eq(0).within(() => {
        cy.findByLabelText(/remove from wishlist/i ).click()
      })

      cy.findByText(/Your wishlist is empty/i).should('exist')
      cy.findByRole('link', { name: /go back to store/i }).should('exist')
    })
  })
})
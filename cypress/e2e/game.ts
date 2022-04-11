/// <reference path="../support/index.d.ts" />

describe('Game Page', () => {
  it('should render game page sections', () => {
    cy.visit('/game/cyberpunk-2077')

    cy.getByDataCy("game-info").within(() => {
      cy.findByRole('heading', {name: /Cyberpunk 2077/i}).should('exist')
    })
  })
})
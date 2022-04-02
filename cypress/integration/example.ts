/// <reference path="../support/index.d.ts" />

describe('Cypress ts', () => {
  it.skip('should go to google', () => {
    cy.google();
  })
  it.skip('should change light/dark theme on willian justen site', () => {
    cy.visit('https://willianjusten.com.br')
    cy.findByTitle(/mudar o tema/i).click()
    cy.get('.light').should('exist')
    cy.findByTitle(/mudar o tema/i).click()
    cy.get('.dark').should('exist')
  })
});

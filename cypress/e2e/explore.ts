/// <reference path="../support/index.d.ts" />

import { categoriesFields, platformFields, priceFields, sortFields } from '../../src/utils/filter/fields'



describe('Explore Page',() => {
  before(() => {
    cy.visit('/games')
  })

  it('should render filters columns', () => {

    cy.findByRole('heading', {name: /sort by price/i}).should('exist')
    cy.findByRole('heading', {name: /^price/i}).should('exist')
    cy.findByRole('heading', {name: /platforms/i}).should('exist')
    cy.findByRole('heading', {name: /genres/i}).should('exist')

    cy.getFields(priceFields)
    cy.getFields(platformFields)
    cy.getFields(sortFields)
    cy.getFields(categoriesFields)
  })

  it('should show 15 games and show more games when show more is clicked', () => {
    const initialGamesNumber = 15

    cy.getByDataCy('game-card').should('have.have.length', initialGamesNumber)
    cy.findByRole('button', {name: /Show More/i}).click()
    cy.wait(1000)
    cy.getByDataCy('game-card').should('have.length.length', initialGamesNumber * 2)
  })
})
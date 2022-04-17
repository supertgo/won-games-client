/// <reference path="../support/index.d.ts" />

import { createUser } from '../support/generate'

const user = createUser()

describe('User', () => {
  it('should sign up', () => {
    cy.visit('/sign-up')
    cy.signUp(user)

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(user.username).should('exist')
  })

  it('should sign in and sign out', () => {
    cy.visit('/sign-in')
    cy.signIn()

    cy.wait(1000)
    cy.url().should('eq', `${Cypress.config().baseUrl}/`)

    cy.findByText(/tobias/i).should('exist').click()
    cy.findByRole('button', { name: /sign out/i}).click()

    cy.findByRole('link', { name: /sign in/i }).should('exist')
    cy.findByText(/tobias/i).should('not.exist')
  })

  it.only('should sign in a user and redirect to the page that it was defined previously', () => {
    cy.visit('/profile/me')

    cy.location('href').should('eq', `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/me`)
    cy.signIn()

    cy.url().should('eq', `${Cypress.config().baseUrl}/profile/me`)

    cy.findByLabelText(/username/i).should('have.value', 'tobias')
    cy.findByLabelText(/e-mail/i).should('have.value', 'tobias@gmail.com')

  })
})
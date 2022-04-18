// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Add Testing Library Commands
import '@testing-library/cypress/add-commands';

Cypress.Commands.add('google', () => cy.visit('https://google.com'))

Cypress.Commands.add('getByDataCy', (selector, ...args) => {
  return cy.get(`[data-cy="${selector}"]`, ...args)
})

Cypress.Commands.add('getFields', (fields) => {
  fields.map(({label}) => (
    cy.findByText(label).should('exist')
  ))
})

Cypress.Commands.add('addToCartByIndex', (index) => {
  cy.getByDataCy('game-card').eq(index).within(() => {
    cy.findByRole('button', { name: /add to cart/i }).click()
  })
})

Cypress.Commands.add('removeFromCartByIndex', (index) => {
  cy.getByDataCy('game-card').eq(index).within(() => {
    cy.findByRole('button', { name: /remove from cart/i }).click()
  })
})

Cypress.Commands.add('signUp', ({ email, username, password }) => {
  cy.findByPlaceholderText(/username/i).type(username)
  cy.findByPlaceholderText(/email/i).type(email)
  cy.findByPlaceholderText(/^password/i).type(password)
  cy.findByPlaceholderText(/confirm password/i).type(password)
  cy.findByRole('button', { name: /sign up now/i}).click()
})

Cypress.Commands.add('signIn', ( email = 'tobias@gmail.com', password = 'tobias' ) => {
  cy.findByPlaceholderText(/email/i).type(email)
  cy.findByPlaceholderText(/^password/i).type(password)

  cy.findByRole('button', { name: /sign in now/i}).click()
})

Cypress.Commands.add('shouldRenderBanner', () => {
  cy.get('.slick-slider').within(() => {
    cy.findByRole('heading', { name: 'The Witcher 3: Wild Hunt' })
    cy.findByRole('link', { name: /buy now/i })

    cy.get('.slick-dots > :nth-child(2) > button').click()
    cy.wait(500)

    cy.findByRole('heading', { name: /cyberpunk 2077/i })
    cy.findByRole('link', { name: /buy now/i })

  })
})

Cypress.Commands.add('shouldRenderShowcase', ({ name,  highlight = false }) => {
  cy.getByDataCy(name).within(() => {
    cy.findByRole('heading', { name }).should('exist')
    cy.getByDataCy('game-card').should('have.length.gt', 0)
    cy.getByDataCy('highlight').should(highlight ? 'exist' : 'not.exist')

    if (highlight) {
      cy.getByDataCy('highlight').within(() => {
        cy.findByRole('link').should('have.attr', 'href')
      })
    }

  })
})

Cypress.Commands.add('shouldBeGreaterThan', (number) => {
  cy
    .findByText(/^\$\d+(\.\d{1,2})?/)
    .invoke('text')
    .then($el => $el.replace('$', ''))
    .then(parseFloat)
    .should('be.gt', number)
})

Cypress.Commands.add('shouldBeLessThan', (number) => {
  cy
    .findByText(/^\$\d+(\.\d{1,2})?/)
    .invoke('text')
    .then($el => $el.replace('$', ''))
    .then(parseFloat)
    .should('be.lt', number)
})


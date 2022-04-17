/// <reference path="../support/index.d.ts" />

describe('Reset Password', () => {
  it('should show error if password does not match', () => {
    cy.visit('/reset-password?code=123456734')

    cy.findAllByPlaceholderText(/^password/i).type('123')
    cy.findAllByPlaceholderText(/confirm password/i).type('321')
    cy.findByRole('button', { name: /reset password/i }).click()

    cy.findByText(/confirm password does not match with password/i).should('exist')
  })

  it('should fill the input same password and confirm password and receive invalid code', () => {
    cy.intercept('POST', '**/auth/reset-password', (res) => {
      res.reply({
        statusCode: 400,
        body: {
          error: 'Bad Request',
          message: [
            {
              messages: [
                {
                  message: 'Incorrect code provided'
                }
              ]
            }
          ]
        }
      })
    })

    cy.visit('/reset-password?code=wrong_code')

    cy.findAllByPlaceholderText(/^password/i).type('123')
    cy.findAllByPlaceholderText(/confirm password/i).type('123')
    cy.findByRole('button', { name: /reset password/i }).click()

    cy.findByText(/Incorrect code provided/i).should('exist')
  })

  it('should redirect user with a new password to home page with user signed in', () => {
    cy.intercept('POST', '**/auth/reset-password', (res) => {
      res.reply({
        statusCode: 200,
        body: {
          user: { email: 'tobias@gmail.com' }
        }
      })
    })

    cy.intercept('POST', '**/auth/callback/credentials*', (res) => {
      res.reply({
        statusCode: 200,
        body: {
          user: { email: 'tobias@gmail.com' }
        }
      })
    })

    //next auth session
    cy.intercept('GET', '**/auth/session*', (res) => {
      res.reply({
        statusCode: 200,
        body: {
          user: { name: 'tobias',  email: 'tobias@gmail.com' }
        }
      })
    })

    cy.visit('/reset-password?code=123456734')
    cy.findAllByPlaceholderText(/^password/i).type('123')
    cy.findAllByPlaceholderText(/confirm password/i).type('123')
    cy.findByRole('button', { name: /reset password/i }).click()

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(/tobias/i).should('exist')
  })
})
/// <reference path="../support/index.d.ts" />


describe('Forgot Password', () => {
  it('should fill the input and receive a success message', () => {
    cy.intercept('POST', '**/auth/forgot-password', (res) => {
      res.reply({
        statusCode: 200,
        body: { ok: true }
      })

      expect(res.body.email).to.eq('ci@wongames.com')
    })

    cy.visit('/forgot-password')

    cy.findAllByPlaceholderText(/email/i).type('ci@wongames.com')
    cy.findByRole('button', { name: /send email/i }).click()

    cy.findByText(/You just recieved an email!/i).should('exist')
  })

  it('should fill the input with an invalid email and receive an error', () => {
    cy.intercept('POST', '**/auth/forgot-password', (res) => {
      res.reply({
        statusCode: 400,
        body: { 
          error: 'Bad Request',
          message: [
            {
              messages: [
                {
                  message: 'This email does not exist'
                }
              ]
            }
          ]
        }
      })

    })

    cy.visit('/forgot-password')

    cy.findAllByPlaceholderText(/email/i).type('invalid@wongames.com')
    cy.findByRole('button', { name: /send email/i }).click()

    cy.findByText(/This email does not exist/).should('exist')
  })
})
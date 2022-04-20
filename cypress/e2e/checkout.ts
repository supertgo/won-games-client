/// <reference path="../support/index.d.ts" />

import { createUser } from "../support/generate"

describe('Checkout', () => {
  let user: User
  describe('Free Games', () => {
    before(() => {
      user = createUser()
    })

    it('should buy free games', () => {
      cy.visit('/sign-up')

      cy.signUp(user)

      cy.wait(3000)
      cy.url().should('eq', `${Cypress.config().baseUrl}/`)

      cy.findByRole('link', { name: /explore/i }).click()
      cy.location('href').should('eq', `${Cypress.config().baseUrl}/games`)

      cy.findByText(/free/i).click()
      cy.location('href').should('contain', 'price_lte=0')

      cy.wait(2000)

      cy.addToCartByIndex(0)
      cy.addToCartByIndex(1)
      cy.addToCartByIndex(2)

      cy.findAllByLabelText(/cart items/i).first().should('have.text', 3).click()

      cy.wait(2000)

      cy.getByDataCy('cart-list').within(() => {
        cy.findAllByRole('heading').should('have.length', 3)
        cy.findByText(/buy it now/i).click()
      })

      cy.wait(3000)

      cy.findByText(/only free games, click buy and enjoy/i).should('exist')
      cy.findByRole('button', { name: /buy now/i }).click()
      
      cy.wait(3000)
      
      cy.findByRole('heading', { name: /your purchase was successful!/i })
      cy.shouldRenderShowcase({ name: 'You may like these games', highlight: true }).should('exist')
    })

    it('should show games in order page', () => {
      cy.visit('/profile/orders')
      cy.location('href').should('eq', `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/orders`)

      cy.signIn(user.email, user.password)

      cy.location('href').should('eq', `${Cypress.config().baseUrl}/profile/orders`)

      cy.getByDataCy('game-item').should('have.length', 3)
    })
  })

  describe('Paid Games', () => {
    before(() => {
      user = createUser()
    })
    
    it('should buy paid games', () => {
      cy.visit('/sign-up')

      cy.signUp(user)

      cy.wait(3000)
      cy.url().should('eq', `${Cypress.config().baseUrl}/`)

      cy.findByRole('link', { name: /explore/i }).click()
      cy.wait(3000)
      cy.location('href').should('eq', `${Cypress.config().baseUrl}/games`)

      cy.findByText(/highest to lowest/i).click()
      cy.location('href').should('contain', 'sort=price%3Adesc')

      cy.wait(2000)

      cy.addToCartByIndex(0)
      cy.addToCartByIndex(1)
      cy.addToCartByIndex(2)

      cy.findAllByLabelText(/cart items/i).first().should('have.text', 3).click()

      cy.wait(2000)

      cy.getByDataCy('cart-list').within(() => {
        cy.findAllByRole('heading').should('have.length', 3)
        cy.findByText(/buy it now/i).click()
      })

      cy.wait(3000)

      
      cy.findByRole('button', { name: /buy now/i }).should('be.disabled')

      cy.fillElementsInput('cardNumber', '4242424242424242')
      cy.fillElementsInput('cardExpiry', '1040')
      cy.fillElementsInput('cardCvc', '424')

      cy.findByRole('button', { name: /buy now/i }).click()
      cy.wait(3000)
      
      cy.findByRole('heading', { name: /your purchase was successful!/i })
      cy.shouldRenderShowcase({ name: 'You may like these games', highlight: true }).should('exist')
    })

    it('should show games in order page', () => {
      cy.visit('/profile/orders')
      cy.location('href').should('eq', `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/orders`)

      cy.signIn(user.email, user.password)

      cy.location('href').should('eq', `${Cypress.config().baseUrl}/profile/orders`)

      cy.getByDataCy('game-item').should('have.length', 3)
    })

  })
})
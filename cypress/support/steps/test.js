const {
	Before,
	After,
	Given,
	Then
} = require("cypress10-cucumber-preprocessor/steps");

Given("run test", () => {
	cy.visit('/')

    cy.contains('h1', 'Code Coverage Example - Cypress 12').should('be.visible')

    cy.contains('button', 'Start')
      .as('startBtn')
      .click()
      .should('be.disabled')

    cy.get('input[type="text"]')
      .as('textField')
      .should('be.visible')
      .type('Hello world!')

    cy.contains('p', 'Hello world!')
      .should('be.visible')

    cy.get('@textField')
      .clear()
      .type('secret')

    cy.contains('p', 'Congrats, you found it!')
      .should('be.visible')
    cy.root().contains('button', 'Reset')
      .as('resetBtn')
      .should('be.visible')

    cy.get('@textField')
      .clear()
    cy.get('@resetBtn')
      .should('not.exist')
    cy.get('@textField')
      .type('SECRET')

    cy.contains('p', 'Congrats, you found it!')
      .should('be.visible')
    cy.get('@resetBtn')
      .should('be.visible')
      .click()

    cy.get('@startBtn')
      .should('be.enabled')
    cy.get('@textField')
      .should('not.exist')
    cy.contains('p', 'Congrats, you found it!')
      .should('not.exist')
    cy.get('@resetBtn')
      .should('not.exist')
})
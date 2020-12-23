/* eslint-disable class-methods-use-this */
const el = require('./elements').ELEMENTS

class Login {
  acessarLogin() {
    cy.visit('login')
  }

  // eslint-disable-next-line class-methods-use-this
  preencherFormulario() {
    cy.get(el.inputEmail).type(Cypress.config().user.email)
    cy.get(el.inputPassword).type(Cypress.config().user.password)
  }

  submeterLogin() {
    cy.get(el.buttonLogin).click()
  }
}

export default new Login()

const faker = require('faker')
const el = require('./elements').ELEMENTS

class Articles {
  acessarFormulario() {
    cy.get(el.linkNovaPublicacao).click()
  }

  preencherFormulario() {
    cy.get(el.inputTitulo).type('Agilizei tittle')
    cy.get(el.inputDescricao).type('Cypress')
    cy.get(el.inputTexto).type(faker.lorem.paragraph())
    cy.get(el.inputTag).type('Cypress')
  }

  submeterPublicacao() {
    cy.get(el.buttonSubmit).click()
  }
}

export default new Articles()

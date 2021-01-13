import Routes from '../../routes'

const el = require('./elements').ELEMENTS

class Register {
  acessarRegister() {
    cy.visit('register')
  }

  preencherNome() {
    cy.get(el.inputName).type(faker.name.firstName() + faker.name.lastName())
  }

  // cy.get('input[ng-model*=email]').type(faker.internet.email())

  // cy.get('input[ng-model*=password]').type('TesteQA@2020')

  // cy.get('button.btn-primary').click()
}

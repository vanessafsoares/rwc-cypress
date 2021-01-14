/* eslint-disable class-methods-use-this */
import Routes from '../../routes'
const faker = require('faker')
const el = require('./elements').ELEMENTS

class Register {
  acessarCadastro() {
    cy.visit('register')
  }

  preencherNome() {
    cy.get(el.inputName).type(faker.name.firstName() + faker.name.lastName())
  }

  preencherEmail() {
    cy.get(el.inputEmail).type(faker.internet.email())
  }

  preencherSenha() {
    cy.get('input[ng-model*=password]').type('TesteQA@2020')
  }

  submitRegister() {
    cy.get('button.btn-primary').click()
  }

  verificaRegister() {
    cy.wait(`@${Routes.as.postUsers}`).then((postUsersResponse) => {
      expect(postUsersResponse.status).to.eq(200)
    })
    cy.wait(`@${Routes.as.getTags}`).then((getTagsResponse) => {
      expect(getTagsResponse.status).to.eq(200)
    })
    cy.wait(`@${Routes.as.getArticles}`).then((getArticlesResponse) => {
      expect(getArticlesResponse.status).to.eq(200)
    })
  }
}

export default new Register()

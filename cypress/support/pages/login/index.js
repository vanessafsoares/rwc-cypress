/* eslint-disable class-methods-use-this */
import Routes from '../../routes'

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

  verificaLogin() {
    cy.wait(`@${Routes.as.postLogin}`).then((postLoginResponse) => {
      expect(postLoginResponse.status).to.eq(200)
    })
    cy.wait(`@${Routes.as.getTags}`).then((getTagsResponse) => {
      expect(getTagsResponse.status).to.eq(200)
    })
    cy.wait(`@${Routes.as.getArticles}`).then((getArticlesResponse) => {
      expect(getArticlesResponse.status).to.eq(200)
    })
  }
}

export default new Login()

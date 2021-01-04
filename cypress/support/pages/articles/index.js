import Routes from '../../routes'

const faker = require('faker')
const el = require('./elements').ELEMENTS

class Articles {
  acessarFormulario() {
    cy.get(el.linkNovaPublicacao).click()
  }

  preencherFormulario() {
    cy.get(el.inputTitulo).type('Lorem tittle')
    cy.get(el.inputDescricao).type('Cypress')
    cy.get(el.inputTexto).type(faker.lorem.paragraph())
    cy.get(el.inputTag).type('Cypress')
  }

  submeterPublicacao() {
    cy.get(el.buttonSubmit).click()
  }

  verificaPublicacao() {
    cy.wait(`@${Routes.as.postArticles}`).then((postArticlesResponse) => {
      expect(postArticlesResponse.status).to.eq(200)
    })
    cy.wait(`@${Routes.as.getArticlesTitle}`).then(
      (getArticlesTitleResponse) => {
        expect(getArticlesTitleResponse.status).to.eq(200)
      },
    )
    cy.wait(`@${Routes.as.getArticlesTitleComments}`).then(
      (getArticlesTitleCommentsResponse) => {
        expect(getArticlesTitleCommentsResponse.status).to.eq(200)
      },
    )
  }
}

export default new Articles()

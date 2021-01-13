import Articles from '../support/pages/articles'
import Routes from '../support/routes'

context('Publicação', () => {
  beforeEach(() => {
    Routes.initArticles()
    cy.backgroundLogin()
    Articles.acessarFormulario()
  })
  it('Criar uma nova publicação', () => {
    Articles.preencherFormulario()
    Articles.submeterPublicacao()
    Articles.verificaPublicacao()
  })
})

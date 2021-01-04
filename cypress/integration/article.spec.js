import Articles from '../support/pages/articles'

context('Publicação', () => {
  beforeEach(() => {
    cy.backgroundLogin()
    Articles.acessarFormulario()
  })
  it('Criar uma nova publicação', () => {
    Articles.preencherFormulario()
    Articles.submeterPublicacao()
    Articles.verificaPublicacao()
  })
})

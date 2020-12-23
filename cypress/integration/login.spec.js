context('Login', () => {
  it('Realizar login com sucesso', () => {
    cy.visit('login')

    cy.get('input[ng-model*=email]').type(Cypress.config().user.email)
    cy.get('input[ng-model*=password]').type(Cypress.config().user.password)
    cy.get('button.btn-primary').click()
  })
})

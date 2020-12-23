const faker = require('faker')

context('Publicação', () => {
  beforeEach(() => {
    cy.backgroundLogin()
    cy.get('a[href*=editor]').click()
  })
  it('Criar uma nova publicação', () => {
    cy.get('input[ng-model*=tittle]').type('Agilizei tittle')

    cy.get('input[ng-model*=description]').type('Cypress')

    cy.get('textarea[ng-model*=body]').type(faker.lorem.paragraph())

    cy.get('input[ng-model*=field]').type('Cypress')

    cy.get('button.btn-primary]').click()
  })
})

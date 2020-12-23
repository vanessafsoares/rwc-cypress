const faker = require('faker')

context('Cadastro', () => {
  it('Efetuar cadastro de usuario', () => {
    cy.visit('register')

    cy.get('input[ng-model*=username]').type(
      faker.name.firstName() + faker.name.lastName(),
    )

    cy.get('input[ng-model*=email]').type(faker.internet.email())

    cy.get('input[ng-model*=password]').type('TesteQA@2020')

    cy.get('button.btn-primary').click()
  })
})

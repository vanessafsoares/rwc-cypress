// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('backgroundLogin', () => {
  cy.request({
    method: 'POST',
    url: `${Cypress.condig().apiUrl}/users/login`,
    body: {
      user: {
        email: 'agilizei-rcw@mail.com',
        password: '12345678',
      },
    },
  }).then((loginResponse) => {
    console.log(loginResponse.body)
    cy.log(loginResponse.body.user.token)
  })

  cy.visit('/', {
    onBeforeLoad: (win) => {
      win.localstorage.setItem('jwtToken', loginResponse.body.user.token)
    },
  })
})

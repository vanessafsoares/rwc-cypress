import Routes from './routes'

Cypress.Commands.add('backgroundLogin', () => {
  // PROCESSO DE LOGIN EM BACKGROUND
  // 1. realizar uma requisição do tipo POST com email e senha
  // 2. capturar o token que é recebido da nossa requisição
  // 3. usar o token recebido para salvar no localstorage
  cy.request({
    method: 'POST',
    url: `${Cypress.config().apiUrl}users/login`,
    body: {
      user: {
        email: 'winona.hagenes49@hotmail.com',
        password: 'TesteQA@2020',
      },
    },
  }).then((loginResponse) => {
    console.log(loginResponse.body)
    cy.log(loginResponse.body.user.token)

    cy.visit('/', {
      onBeforeLoad: (win) => {
        win.localStorage.setItem('jwtToken', loginResponse.body.user.token)
      },
    })
  })
})

before(() => {
  Routes.init()
})

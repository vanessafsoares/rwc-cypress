import Login from '../support/pages/login'

context('Login', () => {
  it('Realizar login com sucesso', () => {
    Login.acessarLogin()
    Login.preencherFormulario()
    Login.submeterLogin()
  })
})

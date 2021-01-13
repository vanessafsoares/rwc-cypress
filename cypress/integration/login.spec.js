import Routes from '../support/routes'
import Login from '../support/pages/login'

context('Login', () => {
  beforeEach(() => {
    Routes.initLogin()
  })
  it('Realizar login com sucesso', () => {
    Login.acessarLogin()
    Login.preencherFormulario()
    Login.submeterLogin()
    Login.verificaLogin()
  })
})

import Register from '../support/pages/register'
import Routes from '../support/routes'

context('Cadastro', () => {
  beforeEach(() => {
    Routes.initRegister()
  })
  it('Cadastro de usuário válido', () => {
    Register.acessarCadastro()
    Register.preencherNome()
    Register.preencherEmail()
    Register.preencherSenha()
    Register.submitRegister()
    Register.verificaRegister()
  })
})

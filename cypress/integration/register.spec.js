import Register from '../support/pages/register'

context('Cadastro', () => {
  it('Cadastro de usuário válido', () => {
    Register.acessarRegister()
    Register.preencherNome()
    Register.preencherEmail()
    Register.preencherSenha()
    Register.submitRegister()
  })
})

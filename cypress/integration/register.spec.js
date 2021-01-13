import Register from '../support/pages/register'

const faker = require('faker')

context('Cadastro', () => {
  it('Efetuar cadastro de usuario', () => {
    Register.acessarRegister()
    Register.preencherNome()
    Register.preencherEmail()
    Register.preencherSenha()
    Register.submitRegister()
  })
})

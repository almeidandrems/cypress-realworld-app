describe('Real World App', () => {
 
  
  //Teste de cadastro realizado com sucesso.

  it('Sing Up Success', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test="signup"]').click()
    cy.get('[name="firstName"]').type('Almeida')
    cy.get('[name="lastName"]').type('Teste')
    cy.get('[name="username"]').type('andrepra25')
    cy.get('[name="password"]').type('1234')
    cy.get('[name="confirmPassword"]').type('1234')
    cy.get('[data-test="signup-submit"]').click()
  })
 
  /*Teste de cadastro com falha, campo primeiro nome vazio,
  não é possivel reazliar teste para apresentar uma mensagem de informação invalida.
  Pois o botão sing up so ativa quando as duas senhas estao certas, estao 
  nao aparece a mensagem dizendo "tenta novamente senha invalida, ou nome do user ja existe"*/
  
  it('Sing Up Fail', () => {
    cy.visit('http://localhost:3000/')
     cy.get('[data-test="signup"]').click()
    cy.get('[name="firstName"]')
    cy.get('[name="lastName"]').type('Alves')
    cy.get('[name="username"]').type('Ricadoralves')
    cy.get('[name="password"]').type('12345')
    cy.get('[name="confirmPassword"]').type('12345')
    cy.get('#firstName-helper-text')
  })
})
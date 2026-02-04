describe('Real World App', () => {

  it('Login com Sucesso', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[name="username"]').type('andrepra')
    cy.get('[name="password"]').type('1234')
    cy.get('[type="submit"]').click()

  })

  it('Login com Falha', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[name="username"]').type('testecomfalha')
    cy.get('[name="password"]').type('aaa1234')
    cy.get('[type="submit"]').click()
    cy.get('[data-test="signin-error"]').should('be.visible')
    
  })
   

})
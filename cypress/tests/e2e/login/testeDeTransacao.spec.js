describe('Real World App', () => {
    //LOGIN
    it('Teste de Funcionalidade', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[name="username"]').type('andrepra')
        cy.get('[name="password"]').type('1234')
        cy.get('[type="submit"]').click()

    //TESTE DE REALIZAÇÃO DE TRANSAÇÃO MONETÁRIA
        cy.get('[data-test="nav-top-new-transaction"]').click()
        cy.get('[data-test="user-list-item-uBmeaz5pX"]').click()
        cy.get('[name="amount"]').type('20')
        cy.get('[name="description"]').eq(1).type('gorjeta')
        cy.get('[type="submit"]').eq(1).click()
        cy.get('[data-test="alert-bar-success"]').should('be.visible')

  })
    //LOGIN PARA REALIZAR TESTE DE FUNCIONALIDADE
    it('Teste de Funcionalidade com falha', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[name="username"]').type('andrepra')
        cy.get('[name="password"]').type('1234')
        cy.get('[data-test="signin-submit"]').click()

    /*BUG REPORT:
    O SISTEMA ESTA PERMITIDO QUE VALORES ESTAO SENDO DEPOSITADO, MESMO 
    COM A CONTA ZERADA, E NAO APRESENTA MENSAGEM INFORMANDO QUE O SALDO INSUFICIENTE */
        cy.get('[data-test="nav-top-new-transaction"]').click()
        cy.get('[data-test="users-list"]').click()
        cy.get('[name="amount"]').type('250456')
        cy.get('[name="description"]').eq(1).type('gorjeta')
        cy.get('[type="submit"]').eq(1).click()
        
  })

  
})
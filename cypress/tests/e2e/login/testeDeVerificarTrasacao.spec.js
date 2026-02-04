describe('Real World App', () => {
    //LOGIN PARA LISTA DE TRANSAÇÕES
    it('Lista de Transações', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[name="username"]').type('andrepra')
        cy.get('[name="password"]').type('1234')
        cy.get('[type="submit"]').click()
        cy.get('[data-test="nav-personal-tab"]').click()
        cy.location('pathname').should('equal', '/personal')

    })
    //LOGIN PARA LISTA DE TRANSAÇÕES VAZIA
    it('Sem Transação', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[name="username"]').type('teste1')
        cy.get('[name="password"]').type('1111')
        cy.get('[type="submit"]').click()
        cy.get('[data-test="nav-personal-tab"]').click()
        cy.location('pathname').should('equal', '/personal')
        cy.get('[data-test="empty-list-header"]').should('contain.text', 'No Transactions')

    })

})
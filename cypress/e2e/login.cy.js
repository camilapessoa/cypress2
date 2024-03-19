describe('Página de Login', () =>{
    beforeEach(()=>{
        cy.visit('')
        cy.contains('Entrar').click()
        // cy.clearAllCookies()
    })
    it('Digita email e senha corretos para efetuar o login', ()=>{
        cy.login(Cypress.env('email'), Cypress.env('senha'))
        // cy.getCookie('1P_JAR')
        // cy.location('pathname').should('equal', '/dashboard')
        
        // cy.wait(2000)
        // cy.contains('Entrar').click()
        // cy.location()
        cy.url().should('eq', 'http://localhost:3000/dashboard')
    })
})
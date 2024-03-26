Cypress.Commands.add('login', (email, senha) => {
  
        cy.visit('/login') 
        cy.get('[data-test="inputLoginEmail"]').type(email)
        cy.get('[data-test="inputLoginSenha"]').type(senha, {log:false})
        cy.get('[data-test="botaoTeste"]').should('be.visible').click()
    
   
    // cy.get('form').submit()
    // cy.get('.sc-jfvxQR').contains('Entrar')

    // cy.get('form').should('be.visible').contains('Entrar').click(913, 751, {force:true})
    // cy.get('[data-test="botaoTeste"]').should('be.visible').contains('Entrar').click()
    // cy.getCookie('')
    // cy.get('.sc-jfvxQR').find('button').click().getCookie('1P_JAR')
    // cy.get('.sc-bcXHqe').click()
    // cy.contains('Entrar').click()

   

    // options auth login

})

Cypress.Commands.add('loginAdmin', (email, senha) => {
    cy.session([email, senha], ()=>{
        cy.visit('/login') 
        cy.get('[data-test="inputLoginEmail"]').type(email)
        cy.get('[data-test="inputLoginSenha"]').type(senha, {log:false})
        cy.get('[data-test="botaoTeste"]').should('be.visible').click()
        cy.location('pathname').should('eq', '/dashboard')
    })

})

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
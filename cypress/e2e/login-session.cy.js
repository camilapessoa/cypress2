describe('Usuário logado na página de dashboard', () =>{
    beforeEach(()=>{
        cy.loginAdmin(Cypress.env('email'), Cypress.env('senha'))
    })
    it('Verifica página de redirecionamento no login com sucesso', ()=>{
        cy.visit('/dashboard')      
        cy.url().should('eq', 'http://localhost:3000/dashboard')
    })

    //precisa logar sempre pra continuar os testes. Demanda muitos recursos ou inserir no beforeEach
    it('Com o usuário logado, cadastra um especialista', ()=>{
        cy.visit('/dashboard')
        cy.url().should('eq', 'http://localhost:3000/dashboard')
        cy.contains('Cadastrar especialista').should('be.visible').click()

    })
})
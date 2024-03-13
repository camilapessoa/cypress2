describe('Página de cadastro', () => {
beforeEach(() =>{
  cy.visit('/');
  })

  it('Clica no link "Cadastra-se" e esperar redirecionar para a página de cadastro ', () => {
    cy.get('[href="/cadastro"]').click()
    cy.location('pathname').should('equal', '/cadastro')
    
              
    })

    it('Digita dados pessoais do usuário e deixa visível a área para inserção de dados técnicos', () => {
      cy.get('[href="/cadastro"]').click();
      cy.get('[data-test="inputNome"]').type('Catarina P');
      cy.get('[data-test="inputCNPJ"]').type('12598432');
      cy.get('[data-test="inputEmail"]').type('catarina@email.com');
      cy.get('[data-test="inputSenha"]').type('Senha123');
      cy.get('[data-test="inputSenhaVerificada"]').type('Senha123');
      cy.get('.sc-bcXHqe').click()
      cy.contains('h2','Agora, os dados técnicos:').should('be.visible')


      cy.get('.sc-laZRCg').should('exist').should('be.visible') //garante que existe e não está abaixo de outra classe e que está visível ao usuário
      cy.get(':nth-child(3) > .MuiStepLabel-root > .MuiStepLabel-iconContainer > .sc-hiDMwi').should('be.visible') //teste de componente, não será abordado no curso -> para saber mais
    })

})
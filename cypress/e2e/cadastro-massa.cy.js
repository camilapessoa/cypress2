describe('Página de cadastro', () => {
    beforeEach(() =>{
      cy.fixture('clinica').as('clinicaJson')
      cy.visit('/');
      })
    
      it('Clica no link "Cadastra-se" e esperar redirecionar para a página de cadastro ', () => {
        cy.get('[href="/cadastro"]').click()
        cy.location('pathname').should('equal', '/cadastro')
                          
        })

       context('Sessão de cadastro completa', ()=>{
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
      
      
          it('cadastra usuário', () =>{
            cy.get("@clinicaJson").then(clinica =>{
                cy.get('[href="/cadastro"]').click();

                cy.get('[data-test="inputNome"]').type(clinica[0].nome);//falar sobre uso em array
                cy.get('[data-test="inputCNPJ"]').type(clinica[0].cnpj);
                cy.get('[data-test="inputEmail"]').type(clinica[0].email);
                cy.get('[data-test="inputSenha"]').type(clinica[0].senha, {log: false}); //não exibir senha no log
                cy.get('[data-test="inputSenhaVerificada"]').type(clinica[0].senha);
                cy.get('.sc-bcXHqe').click()


                cy.get('[data-test="inputTelefone"]').type('9999999999');
                cy.get('[data-test="inputCEP"]').type('99999999');
                cy.get('[data-test="inputRua"]').type('Salvatori')
                cy.get('[data-test="inputNumero"]').type('999');
                cy.get('[data-test="inputComplemento"]').type('Irmãos salvatori')
                cy.get('[data-test="inputEstado"]').type('BA')
                cy.contains('button','Cadastrar').click()
                cy.location('pathname').should('equal', '/login');

            })
           
                 
          })

       })
    
    })
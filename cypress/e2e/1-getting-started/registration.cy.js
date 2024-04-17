describe('Verify the registration form', () => {
    it('registered the for successfully', () => {

        cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register')
        cy.get("#firstName").type('testuser')
        cy.get("#Text1").type('T')
        cy.get("#username").type('test_01')
        cy.get("#password").type('12345678')
        cy.get("button[type='submit']").click()
        cy.get(".ng-binding.ng-scope.alert.alert-success").should('have.text', 'Registration successful')
        //Login the page
        //cy.get("#username").type('test_01').should('be.visible').click({force:true});
        //cy.wait(2000)
        //cy.get("#password").type('12345678').should('be.visible').click({force:true});
        //cy.wait(2000)
        //cy.get('.btn-primary').should('be.visible').click({force:true});
        //Login the page
        cy.url().should("include","https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
        cy.wait(2000)
        cy.get('#username').type('test_01')
        cy.wait(2000)
        cy.get('#password').type('12345678')
        cy.wait(2000)
        cy.get('.btn-primary').click()
    })
})
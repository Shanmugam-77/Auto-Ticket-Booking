describe('Validate the date picker',()=>{
    it('select the date',()=>{
        cy.visit("https://practice.expandtesting.com/inputs")
        cy.get('#input-date').click()
        
        const date = '2024-03-12'; // Specify the desired date
    cy.get('#input-date').type(date);
        

    cy.get('#input-date').should('have.value', date);

    })
})
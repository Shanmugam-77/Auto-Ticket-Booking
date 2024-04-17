describe('My first script',()=>{
    it('Visit dynamicloading page',()=>{
        cy.visit("https://www.w3schools.com/")
        cy.get("#tnb-google-search-input").type("Python").type('{downArrow}').type('{downArrow}').type('{downArrow}').type('{enter}')
        
        })
})
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('My first script',()=>{
    it('Visit file downloading page',()=>{
        cy.visit("https://practice.expandtesting.com/dropdown")
        //choose simple dropdown
        cy.xpath("(//select[@id='dropdown'])[1]").select('Option 2')
        //select DOB
        cy.get("#elementsPerPageSelect").select(2).invoke("val").should("eq", "50")
        //select country
        cy.get("#country").select('IN').should('have.value', 'IN')
        })
})
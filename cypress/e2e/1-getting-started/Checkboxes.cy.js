describe('My first script',()=>{
    it('Visit the login page',()=>{
        cy.visit("http://the-internet.herokuapp.com/checkboxes")
       cy.get("input:nth-child(1)").check()
       cy.xpath("(//input[@type='checkbox'])[2]").uncheck()
        })
})

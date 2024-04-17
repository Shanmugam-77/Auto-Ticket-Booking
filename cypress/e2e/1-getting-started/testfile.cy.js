describe('My first script',()=>{
    it('Visit the login page',()=>{
        cy.visit("https://www.w3schools.com/")
        cy.screenshot()
        cy.get('#search2').click()
      })
})
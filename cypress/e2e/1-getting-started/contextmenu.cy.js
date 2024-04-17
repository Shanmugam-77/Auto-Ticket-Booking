describe('My first script',()=>{
    it('Visit the login page',()=>{
        cy.visit("http://the-internet.herokuapp.com/context_menu")
       cy.get("#hot-spot").rightclick()
        })
})
describe('Verify advertisement',()=>{
    it('verify to close the advertisement',()=>{
        cy.visit("http://the-internet.herokuapp.com/jqueryui/menu#")
        cy.get("#ui-id-2").trigger("mouseover")
       // cy.get(".large-4.large-centered.columns").click()
         
     }
    )
}
)
describe('Verify advertisement',()=>{
    it('verify to close the advertisement',()=>{
        cy.visit("http://the-internet.herokuapp.com/inputs")
        cy.get("input[type='number']").click().type('1')
     }
    )
}
)
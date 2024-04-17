describe('Verify advertisement',()=>{
    it('verify to close the advertisement',()=>{
        cy.visit("http://the-internet.herokuapp.com/login")
        cy.get("#username").click().type("tomsmith")
           .get("#password").click().type("SuperSecretPassword!")
           .get(".fa.fa-2x.fa-sign-in").click()
           .get(".icon-2x.icon-signout").click()
     }
    )
}
)
describe('Verify advertisement',()=>{
    it('verify to close the advertisement',()=>{
        cy.visit("http://the-internet.herokuapp.com/entry_ad")
        cy.get("div[class='modal-footer'] p").click()
        cy.get("#restart-ad").click()
        cy.get("div[class='modal-footer'] p").click()
    }
    )
}
)
describe('My first script',()=>{
    it('Visit file downloading page',()=>{
        cy.visit("http://the-internet.herokuapp.com/download")
        cy.get("a[href='download/F9E8BF9B-BD5F-4E59-A2AA-2DF5FB11D2F3.png']").click()
        })
})
describe('My first script',()=>{
    it('Visit dynamicloading page',()=>{
        cy.visit("http://the-internet.herokuapp.com/dynamic_loading")
        cy.get("a[href='/dynamic_loading/1']").click()
        cy.get("div[id='start'] button").click()
        cy.go('back')
        })
})
describe('My second script',()=>{
    it('Visit dynamicloading page',()=>{
        cy.visit("http://the-internet.herokuapp.com/dynamic_loading")
        cy.get("a[href='/dynamic_loading/2']").click()
        cy.get("div[id='start'] button").click()
        cy.go('back')
        })
})
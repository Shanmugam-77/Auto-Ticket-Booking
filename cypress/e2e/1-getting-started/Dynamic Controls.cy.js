describe('My first script',()=>{
    it('Visit dynamic control page',()=>{
        cy.visit("http://the-internet.herokuapp.com/dynamic_controls")
        cy.get("input[type='checkbox']").check()
           .get("button[onclick='swapCheckbox()']").click()
           .get("button[onclick='swapCheckbox()']").click()
        })
})
describe('My second script',()=>{
    it('Visit Enable disable page',()=>{
        cy.visit("http://the-internet.herokuapp.com/dynamic_controls")
           cy.get("button[onclick='swapInput()']").click()
           cy.get("input[type='text']").click().type('Welcome')
           cy.get("button[onclick='swapInput()']").click()
        })
})
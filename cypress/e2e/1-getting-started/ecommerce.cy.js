///<reference types="cypress-xpath" />
describe('Locating Elements',function()
{
    it('verify types of locators',function()
    {
        cy.visit("https://demo.nopcommerce.com/")
        cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch").click()
        cy.get("button[type='submit']").click()
        cy.xpath("(//button[@id='add-to-cart-button-4'])[1]").click()
        
       
        
    })
})

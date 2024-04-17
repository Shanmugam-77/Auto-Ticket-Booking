describe('My First Testcase',()=>{
    it('Validate to checkout the product from without login',()=>{
        cy.visit("https://demo.nopcommerce.com/")
        cy.get("#small-searchterms").type('Apple').type('{downArrow}').invoke('show');
        cy.wait(2000)
        cy.contains('Apple MacBook Pro 13-inch').click();
        cy.scrollTo(0, 1200) // Scroll the window 1200px down
        cy.get("#product_enteredQuantity_4").clear().type(2);
        cy.get("#add-to-cart-button-4").click();
        cy.scrollTo('top');
        cy.get('.cart-label').click();
        cy.scrollTo(0, 800);
        cy.xpath("//select[@id='checkout_attribute_1']").select("Yes [+$10.00]");
        cy.get("#termsofservice").check();
        cy.get("#checkout").click();
        })
})

describe('My Second Testcase',()=>{
    it('Validate to checkout the product for login the user',()=>{
        cy.visit("https://demo.nopcommerce.com/")
        cy.get(".ico-login").click();

    })
})

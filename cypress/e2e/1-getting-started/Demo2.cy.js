describe('Verify to add the images',()=>{
    it('add the images in the website',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.get(".oxd-icon.bi-caret-down-fill.oxd-select-text--arrow").click()
        


        //cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
        //cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
        

        


    })
})
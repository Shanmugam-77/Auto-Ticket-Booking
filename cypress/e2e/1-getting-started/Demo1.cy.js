describe('Verify to add the images',()=>{
    it('add the images in the website',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
cy.get("input[placeholder='Username']").type("Admin")
cy.get("input[placeholder='Password']").type("admin123")
cy.get("button[type='submit']").click()
cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click()
cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click()
cy.get("input[placeholder='First Name']").type('test')
cy.get("input[placeholder='Last Name']").type("T")
cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('123')
cy.get("input[type=file]").selectFile("D:\\Automation Testing\\cypress\\cypress\\fixtures\\test.png",{force:true})
//cy.get("button[class='oxd-icon-button oxd-icon-button--solid-main employee-image-action']").click()
//cy.get("input[type=file]")
    })
})
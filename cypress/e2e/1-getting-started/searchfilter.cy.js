describe('My serach', () => {
    it('Visit dynamicloading page', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.xpath("(//button[normalize-space()='Login'])[1]").click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.get("input[placeholder='Type for hints...']").type('Raghu').wait(3000).type('{downArrow}').type('{enter}');
    })
})
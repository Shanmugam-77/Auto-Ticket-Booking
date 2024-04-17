

describe('create the custom commands', () => {
    it('Login the test', () => {
        cy.login('admin', 'admin123')//valid 
        cy.title().should('be.equal', 'OrangeHRM')

        cy.login('admin', 'admin123')//invalid title
        cy.title().should('not.be.equal', 'OrangdeHRM')

    })
    it('Add user', () => {
        cy.login('admin','admin123')

    })
    it('Edit user', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('[placeholder=Username]').type("admin")
        cy.get('[placeholder=Password]').type('admin123')
        cy.get('[type=submit]').click()
    })
    it('Delete user', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('[placeholder=Username]').type("admin")
        cy.get('[placeholder=Password]').type('admin123')
        cy.get('[type=submit]').click()
    })
})
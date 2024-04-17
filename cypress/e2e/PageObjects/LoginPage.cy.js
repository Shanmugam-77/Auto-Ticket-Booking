Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

class LoginPage {

    visit() {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }

    fillUsername(value) {

        const field = cy.get('[placeholder=Username]')
        field.clear()
        field.type(value)

        return this
    }

    fillPassword(value) {

        const field = cy.get('[placeholder=Password]')
        field.clear()
        field.type(value)

        return this
    }


    submit() {
        const button = cy.get('[type=submit]')
        button.click()
    }

    Logout() {

        const button = cy.get('.oxd-userdropdown-tab')
        button.click()
        cy.wait(2000)
        cy.log('waiting')
        const button1 = cy.xpath('(//a[normalize-space()="Logout"])[1]')
        button1.click()
    }

    loginFun(username,password){
        this.visit()
        this.fillUsername(username)
        this.fillPassword(password)
        this.submit()
    }


}

export default LoginPage


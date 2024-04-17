///<reference types="Cypress" />

import LoginPage from '../PageObjects/LoginPage.cy'


describe('validate login cases', () => {



    it('Login test', () => {
    const lp=new LoginPage
    lp.visit()
    lp.fillUsername('Admin')
    lp.fillPassword('admin123')
    lp.submit()
    cy.log("sumbit done")
    lp.Logout()






    })
})
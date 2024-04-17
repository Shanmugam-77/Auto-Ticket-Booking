
// import { add } from "cypress/types/jquery"

//import { find } from "cypress/types/lodash";
Cypress.on('uncaught:exception', (err, runnable) => {
    // Prevent Cypress from failing the test
    return false;
  });
  
describe('MyTestSuite', () => {
    it('Datadriventesting', () => {
        
        cy.fixture('OrangeHRM2').then((data) => {
            // find
            //data.forEach((_userdata) => {
            data.forEach((userdata) => {

                cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

                cy.get("input[placeholder='Username']").type(userdata.username);
                cy.get("input[placeholder='Password']").type(userdata.password);
                cy.get("button[type='submit']").click()

                if (userdata.username == 'Admin' && userdata.password == 'admin123') {
                    cy.xpath("(//h6[normalize-space()='Dashboard'])[1]").should('have.text', 'Dashboard')

                    cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click()//logout
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()//logout
                }
                else {
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('have.text', userdata.expected)
                }
            })
        })
    })
})
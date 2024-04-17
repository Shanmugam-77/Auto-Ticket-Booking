Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })



/*describe('My first script',()=>{
    it('Visit the login page',()=>{
        cy.visit("https://the-internet.herokuapp.com/")
        cy.scrollTo(0,400)
        cy.get(':nth-child(18) > a').click()
        cy.get('#file-upload').attachFile('test.png')
        cy.get('#file-submit').click()
        cy.get('h3').should('have.text','File Uploaded!')
      })
})*/

describe('My first script',()=>{
    it('Visit the login page',()=>{
        cy.visit("https://demo.automationtesting.in/Register.html")
        cy.scrollTo('bottom')
        cy.get('#imagesrc').attachFile('test.png')
        cy.wait(2000)
        cy.go('back')
        cy.wait(2000)
        cy.reload()
        
      })
})
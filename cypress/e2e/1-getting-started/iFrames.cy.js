Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Handling Frames',()=>{
    it('Visit the page',()=>{
        cy.visit("http://the-internet.herokuapp.com/iframe")

      cy.get("#mce_0_ifr")
        /*.its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)*/
      

          })
        })


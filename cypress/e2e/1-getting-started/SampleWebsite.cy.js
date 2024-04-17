Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('My first script',()=>{
  it('Sign up page',()=>{
      /*cy.visit("https://phptravels.net/")
      cy.get(".m-0.text-dark").click()
      cy.get("body > header:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)").click()
      cy.xpath("(//input[@id='firstname'])[1]").click({force:true}).type("Shanmugam")
      cy.get("#last_name").click({force:true}).type("S")
      cy.get("#phone").click({force:true}).type('9942639919')
      cy.get("#user_email").click({force:true}).type("test01@gmail.com")
      cy.get("#password").click({force:true}).type("12345678")
      cy.get("#submitBTN").click({force:true})*/
      cy.visit("https://react-shopping-cart-67954.firebaseapp.com/")
    })
      
  })
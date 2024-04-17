describe('Verify web page',()=>{
    it('verify to find the elements in table',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/").click
        cy.scrollTo(0, 1100)
        cy.get("body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(3)").should('have.text','Senium');
         });
           
           
  });
    
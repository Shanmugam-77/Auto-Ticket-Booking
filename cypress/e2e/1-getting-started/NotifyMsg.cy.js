describe('Verify advertisement',()=>{
    it('verify to moving left and right slider',()=>{
        cy.visit("http://the-internet.herokuapp.com/notification_message_rendered")
           cy.get("a[href='/notification_message']").click()
           cy.get("img[alt='Fork me on GitHub']").click()
         });
           
           
  });
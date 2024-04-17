describe('Verify advertisement',()=>{
    it('verify to moving left and right slider',()=>{
        cy.visit("http://the-internet.herokuapp.com/horizontal_slider")
        
           cy.get("input[value='0']").as('range').invoke('val', 3).trigger('change')

           
         });
           
           
  });
        
           
    

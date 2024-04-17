describe('Drag and Drop',()=>{
    it('Drag A element to B',()=>{
        cy.visit("http://the-internet.herokuapp.com/drag_and_drop")
        const dataTransfer = new DataTransfer();
       cy.get("#column-a").trigger('dragstart',{
       dataTransfer
       }
       );
       cy.get("#column-b").trigger('drop',{
        dataTransfer
       }
       )
        })
})
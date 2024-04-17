describe('Add and Remove the elements',()=>{
    it('Visit the page',()=>{
        cy.visit("http://the-internet.herokuapp.com/add_remove_elements/")
        cy.get("button[onclick='addElement()']").click()
        cy.get(".added-manually").click()


          })
        })
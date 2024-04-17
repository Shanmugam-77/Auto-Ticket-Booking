describe('verify the mouse hovering',()=>{

    it('verify to hover the mouse hover',()=>{
        cy.visit("http://the-internet.herokuapp.com/hovers")

        cy.xpath("a[href='/users/1']").trigger('mouseover')
        
})
}

)

describe('My test suite',()=>{
    it('Capture screenshots and videos',()=>{
        cy.visit("https://eoxys.ai/#/website")
        cy.screenshot('Homepage')
        cy.get("img[alt='Eoxys']").screenshot('Logo')


//Automatically capture screenshot and video on failure
cy.scrollTo(0, 300)
cy.get("section[id='approach'] h2[class='MuiTypography-root MuiTypography-h2 css-1p2wgwg']").should('have.text','Our Aproach')

    })
})


   
describe('My serach', () => {
    it('Visit dynamicloading page', () => {
        cy.visit("http://130.198.92.24/heaterdb/")
        cy.get('#inputEmail3').type('ajithkr0214@gmail.com')
        cy.get('#inputPassword3').type('eoxys@123')
        cy.get('#loginForm > .btn').click()
//goto profile
cy.get(':nth-child(2) > .nav-link').click()
cy.get('.text-right > .btn').click()
cy.scrollTo(300,0)
//cy.get('img.rounded-circle').click({ multiple: true });
cy.get('div.navbar-collapse-header.d-md-none').invoke('removeAttr', 'style');

// cy.get('img[alt="profile pic"].rounded-circle.img-style-min').wait(30000).click()
cy.get('input[type=file]').attachFile('test.png', { force: true })

cy.get('.text-right > .btn').click()
cy.xpath("(//div[@role='alertdialog'])[1]").should('have.text','User Details Updated Successfully')




//cy.get('#toast-container').should('contain', /User Details Updated Successfully/);


//cy.get('#toast-container').should('have.text','User Details Updated Successfully')

//cy.get("#toast-container").each((event)=> { 
    //console.log("eventsss",event)
})

//cy.xpath("//form[@class='ng-untouched ng-pristine ng-valid']").should('have.text','User Details Updated Successfully')
//cy.contains('.toast-message', 'User Details Updated Successfully', { timeout: 10000 }).should('be.visible');

//cy.get('.text-right > .btn').click()
//cy.get('.user-message', { timeout: 10000 }).should('exist');
//cy.contains('.user-message', 'User Details Updated Successfully').should('be.visible');
//cy.get('.user-message', { timeout: 5000 }).should('be.visible');
//cy.wait(3000)
//cy.get('.hidden').click({ force: true })
//cy.get('#hiddenElement').should('be.visible').and('contain', 'User Details Updated Successfully');

//cy.get('input[type=file]').selectFile('cypress/cypress/fixtures/test.png', { force: true })
//cy.get(".btn.card-button-size.float-right.text-center.ng-star-inserted").click()
//cy.xpath("//img[contains(@class, 'rounded-circle')]").click();

//cy.get('img.rounded-circle').click();
//cy.get(".rounded-circle img-style-min ng-star-inserted").click()
//cy.xpath("//img[@alt='profile pic']").click()
//cy.get("img[alt='profile pic']").attachFile('test.png')

    })

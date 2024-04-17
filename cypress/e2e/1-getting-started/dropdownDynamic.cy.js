describe('valaidate the dynamic dropdown',()=>{
it('add dropdown list',()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[placeholder='Username']").type("Admin")
    cy.get("input[placeholder='Password']").type("admin123")
    cy.get("button[type='submit']").click()
//click recruitment
cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(5) > a:nth-child(1) > span:nth-child(2)").click()
//click vacancy
cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
//click add vacancy
cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click()
//vacancy name
cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)").type('Tester')
//click job title

//cy.get('.oxd-select-text--after > .oxd-icon').click()
  //.wait(5000)
  cy.get('.oxd-select-text-input').click();
  cy.wait(500)
  cy.get(".oxd-select-dropdown").contains('Automation tester').click({force:true});
  //cy.xpath("(//div[@class='oxd-select-text oxd-select-text--active'])[1]").contains("Automation tester")
  //cy.get(".oxd-select-dropdown").contains('Automation tester')

//cy.get(".oxd-select-text-input").click();
//Wait for the dropdown arrow to appear
//cy.get('.oxd-icon.bi-caret-down-fill', { timeout: 5000 }).should('be.visible').click();

// Click on the option with text "Automation Tester"
//cy.contains('.oxd-select-text-option', 'Automation Tester').click();


//cy.get('.oxd-select-text-input').contains('Automation Tester').click()
//cy.xpath("(//div[@class='oxd-select-text-input'])[1]").click()
})
})
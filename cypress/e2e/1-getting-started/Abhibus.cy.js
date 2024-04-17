Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe('Validate the booking tickets', () => {

    it("Select seats and add book tickets", () => {
        cy.visit("https://www.abhibus.com/")

        cy.get("input[placeholder='From Station']").click()
        //cy.get('#search-from > .auto-complete > [style="flex-flow: wrap; place-content: flex-start; align-items: normal;"] > .text-input > .container > :nth-child(2) > input').click()
        cy.get("body > main:nth-child(21) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)").click()
        cy.get("li.collection-item.auto-complete-list-item[data-id='Bangalore']").click() // choose bangalore
        //choose destination

        cy.get("body > main:nth-child(21) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)").type('karu')
        cy.get(".auto-complete-drop-down").scrollIntoView().should('be.visible');
        cy.get(".auto-complete-drop-down").scrollIntoView().contains("Karur").click()
        //select Journey Date

        cy.get('input[placeholder="Onward Journey Date"]').click(); // Click on the input field
        cy.get(".container.date").contains('25').click(); //search list
        cy.get('#search-button > .btn').click()

        //click show seats button
        cy.get("div[id='service-operator-select-seat-1943148523'] button[class='btn bus-info-btn filled primary sm inactive button']").scrollIntoView().click()

        //select Upper seats
cy.xpath("(//span[normalize-space()='U13'])[1]").click()

//select Lower seats
cy.xpath("(//span[normalize-space()='L11'])[1]").click()

cy.contains("U7").click()


//check seat no's
cy.xpath("(//span[normalize-space()='L11,U7,U13'])[1]")
  .invoke('text')
  .should('eq', 'L11,U7,U13');

  // check fare
  cy.get('#seating-selected-seat-details > :nth-child(2) > .text-primary').contains('3400')

 /* .invoke('text')
  .then((text) => {
    const normalizedExpected = 'Base Fare : 3400'.replace(/\s/g, ''); // Remove all whitespace
    const normalizedActual = text.replace(/\s/g, ''); // Remove all whitespace from actual text
    cy.log(`Normalized Expected: '${normalizedExpected}'`);
    cy.log(`Normalized Actual: '${normalizedActual}'`);
    expect(normalizedActual).to.equal(normalizedExpected);
  })*/
//check boarding point
cy.get(':nth-child(1) > .s10 > .container > .primary').click()
//select continue button
cy.get('.btn-shake > :nth-child(2)').click()
    })

  //check fare
//cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span:nth-child(2)').should('be.equal', '3400')

    });



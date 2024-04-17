describe('Validate to Add the "New Device" from the home device categoryt',()=>{
    it('Add the New device',()=>{
        cy.visit("http://192.168.0.150:5555/")//vist the URL page
        cy.get("#navbarToggler").click();//click nav bar
        cy.contains('Home').click();
        cy.scrollTo(0, 250);
        cy.get("#navbarToggler").click();
        cy.scrollTo(0, 450);
        cy.xpath("//span[normalize-space()='New Device']").click();
        cy.wait(2000)
        cy.get("#mac_id").click().type('9ab87cd65e04');
        cy.get('#nickname').type('Dev S6D4');
        cy.get('#position').select('S6D4');
        cy.get("button[type='submit']").click();
        })
})

describe('Validate to check the completed experiment data from the experiment category.',()=>{
    it('Check added experiment data',()=>{
        cy.visit("http://192.168.0.150:5555/")
        cy.get("#navbarToggler").click();//click nav bar
        cy.contains('Experiments').click();
        cy.get("#navbarToggler").click();
        cy.get("tr[class='MuiTableRow-root cursor-pointer bg-pinkcrayola css-971r4v'] td:nth-child(3)").click();
        cy.wait(2000)
        cy.xpath("//td[normalize-space()='newap']").click();
        cy.scrollTo(300, 0)
        cy.xpath("//td[normalize-space()='28dectest2mos']").click();
        cy.scrollTo(0, 320)
    })
    
})

describe('Validate the "Export Data" from the Data Table category',()=>{
  it('Download the export data',()=>{
  cy.visit('http://192.168.0.150:5555/')
  cy.get("#navbarToggler").click();//click nav bar
  cy.contains('Experiments').click();
  cy.scrollTo(0,1100)
  cy.get("#navbarToggler").click();
  cy.get("li:nth-child(3) a:nth-child(1)").click();//goto data table button
  cy.xpath("//button[@type='button']").click();
})  

})
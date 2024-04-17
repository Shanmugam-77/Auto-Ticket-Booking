Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('My first script', () => {
    //Direct Access
    it.only('Fixtures demo test', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        //cy.fixture('OrangeHRM').then( (data1)=>{
        cy.get("input[placeholder='Username']").type('Admin');
        cy.get("input[placeholder='Password']").type("admin123");
        cy.get("button[type='submit']").click();
        //after login
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > span:nth-child(2)").click();
        //cy.get("button[class='oxd-icon-button oxd-icon-button--solid-main employee-image-action']").click();
        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.xpath("//button[contains(@class, 'oxd-icon-button')]/i[contains(@class, 'bi-plus')]").click();
        cy.get('input[type=file]').selectFile('cypress/cypress/fixtures/test.png', { force: true })
        cy.get()
        // cy.get("oxd-icon bi-plus").click();
        
        //cy.get('div.container button.oxd-icon-button', { timeout: 10000 }).should('be.visible');
        
        //cy.get('.oxd-file-div > .oxd-icon-button',{ timeout: 10000}).should('be.visible'); 
        
        
        
        //cy.get('div.container button.oxd-icon-button').click(); // Example of a more specific selector
        
       
       
        // cy.get('button.oxd-icon-button').eq(0).click(); // Clicks the first matched element

        // Use cy.get() to select the button element by its class name
       //cy.get('button.oxd-icon-button').click({ multiple: true });

        //cy.get('button.oxd-icon-button').click();


    })

})





    //   cy.xpath('//input[@type='file']').attachFile('test.png');
    // cy.xpath('//input[@type=\'file\']').attachFile('test.png');;
    // cy.get('input[type="file"]').invoke('show').attachFile('test.png');

    // cy.get('input[type="file"]').click({ force: true }).attachFile('test.png');
    
    //cy.get('.orangehrm-employee-image > .oxd-input-group > :nth-child(2)').click();

    // cy.get('input[type="file"]').click({ force: true }).attachFile('test.png');
    // cy.get('.oxd-file-div > .oxd-icon-button').click();
    //cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Shanmugam')
    //cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('S')
    //cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(107)
    // cy.get('input[type="file"]').invoke('show').attachFile('test.png'); 
    
    



    //cy.xpath("(//img[@class='employee-image'])[1]").click()
    //cy.get('.oxd-file-div > .oxd-icon-button').invoke('show');
    //cy.get('[data-highlight-hitbox="true"]')
    //cy.get('.oxd-file-div > .oxd-icon-button').dblclick();

    // cy.get('.oxd-file-div > .oxd-icon-button').click()
    /*cy.get('.oxd-file-div > .oxd-icon-button').click().then(() => {
        cy.log('Button clicked successfully');
    })*/
    //cy.get('.oxd-button--secondary').click()






   
// describe('My first script', () => {
//     //Direct Access
//     it.only('Fixtures demo test', () => {
//         cy.visit("https://tus.io/demo");
//         cy.scrollTo(0, 500)
//         cy.xpath("(//input[@id='P0-0'])[1]").attachFile('test.png')

//         //cy.fixture('OrangeHRM').then( (data1)=>{
       
//         //select image
//         //cy.get('.employee-image').attachFile('test.png');
//         //const imagefile = 'test.png';
//         //cy.get('.oxd-icon.bi-plus').attachFile(imagefile);
//         // programmatically upload the logo



//     })

// })



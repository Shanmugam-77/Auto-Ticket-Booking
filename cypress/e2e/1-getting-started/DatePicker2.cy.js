describe('Validate the date picker', () => {
    it('Verify the date month year', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.get("input[placeholder='First Name']").type('tester')
        cy.get("input[placeholder='Last Name']").type('T')
        cy.get(".oxd-select-text-input").click()
        cy.get(".oxd-select-dropdown").contains('Java Developer').click()
        cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('testing01@gmail.com')
        cy.get('input[type=file]').selectFile('cypress\\cypress\\fixtures\\tetsts.txt', { force: true })
        cy.get("input[placeholder='yyyy-dd-mm']").click()

        //month dropdown opened
        //open dropdown
        cy.get(".oxd-calendar-selector-month-selected").click()
        cy.get(".oxd-calendar-dropdown").click()
        //select month
        cy.get(".oxd-calendar-dropdown--option").contains('April').click()
        //open year list 
        cy.get(".oxd-calendar-selector-year").click()
        //select year 
        cy.get(".oxd-calendar-dropdown--option").contains('2023').click()
            //choose date
            cy.get(".oxd-calendar-date-wrapper").click
            
            cy.get(".oxd-calendar-date").contains('7').click()
        
        //cy.get("oxd-icon-button").click()
        //cy.get(".oxd-icon bi-chevron-left").click()
        //cy.contains('.oxd-calendar-selector-month', 'April').click();
        //.trigger('mouseover')
        //cy.contains('.oxd-calendar-selector-month', 'April').click();

        //cy.get(".oxd-date-input-calendar").


    })
})
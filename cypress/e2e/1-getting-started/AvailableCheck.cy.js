Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('Automativally to find the available seat in bus', () => {
    it('validate seats check', () => {
        cy.visit("https://www.abhibus.com/")
        cy.get("body > main:nth-child(21) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)").type('Coim')        //cy.get(".auto-complete-drop-down").contains("Coimbatore").click()
        cy.get(".auto-complete-drop-down ").contains('Coimbatore').click()

        cy.get('#search-to > .auto-complete > [style="flex-flow: wrap; place-content: flex-start; align-items: normal;"] > .text-input > .container > :nth-child(2) > input').type('koc')
        cy.get(".auto-complete-drop-down ").contains('Kochi').click()

        //choose date
        cy.get("input[placeholder='Onward Journey Date']").click()
        cy.get(".container.date").contains('7').click()
//search bus
       cy.get(".btn.btn-search.filled.primary.lg.inactive.button").click()

//selct filtrer

cy.get('.mobile-filters > .scrollable-container > :nth-child(4)').click()

        //select bus  or show seats
        cy.get('#service-operator-select-seat-1942584772 > .btn').click()
        //select bus
       // cy.get('#service-operator-select-seat-1950360824 > .btn').click()



        

// // Wait for the seat container to become visible and interactable
// cy.get('#seat-layout-container').should('be.visible').click();

// // Wait for the seat layout to load
// cy.get('#seat-layout-details').should('be.visible');

// // Find and click on available seats

// // Wait for the seat container to become visible and interactable
// cy.get('#seat-layout-container', { timeout: 10000 }).should('be.visible').click();

// // Wait for available seats to be present
// cy.xpath("(//a[contains(@class,'outlined tertiary sm inactive button')])[3]").click()

// cy.get('#service-cards-container > *:first-child > :nth-child(2) button.seat svg[fill="none"] rect[fill="white"]').then($seats => {
//     if ($seats.length > 0) {
//         cy.log("Available count --> ", $seats.length);
//         for (let i = 0; i < $seats.length; i++) {
//             cy.wrap($seats[i]).click({force:true}); // Click on each seat

//             break;
//         }
//     } else {
//         cy.log('No available seats found.');
//     }
// });


const availableSeats = [];

cy.get('#service-cards-container > *:first-child > :nth-child(2) button.seat svg[fill="none"]').each($svg => {
    const rectFill = $svg.find('rect').attr('fill');
    const isAvailable = rectFill === 'white' || rectFill === '#FFFFFF'; // Add additional checks if necessary
    if (isAvailable) {
        availableSeats.push($svg); // Store the available seat
    }
}).then(() => {
    if (availableSeats.length =2 ) {
        cy.log("Available count --> ", availableSeats.length);
        availableSeats.forEach($seat => {
            cy.wrap($seat).click({force:true}); // Click on each available seat
        });
    } else {
        cy.log('No available seats found.');
    }
});

//cy.get('#seat-layout-details svg rect[fill="#D8F2E2"][stroke="#3DC070"]').first().click({ force: true });

        //check the available seats automatically    
        // Click on the seat layout container to ensure it's loaded
        //cy.get(".container")
        //cy.get('#seat-layout-container').click();

        // Verify seat table is visible
        // Wait for the seat layout container to become visible
        //cy.get('#seat-layout-container', { timeout: 10000 }).should('be.visible').click({force: true});

        // Perform further actions after clicking on the seat layout container

        // Find the button element with the class 'seat' that represents an available seat
        //cy.get('.Tooltip-Wrapper .seat:not([disabled])').first().click({force: true});

        //find seat
        //cy.get('#seat-layout-details svg > rect[fill="white"][stroke="##52B2FF"]').first().click();
        //cy.get('#seat-layout-details svg rect[fill="#D8F2E2 ,white "][stroke="#3DC070, #3DC070"]').first().click({force:true});
        //cy.get('#seat-layout-details svg rect[fill="#D8F2E2"][stroke="#3DC070"]').first().click({ force: true });

        // Select the seat element based on its attributes


    })



})



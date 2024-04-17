


describe('My first script',()=>{
//Direct Access
    /*it.only('Fixtures demo test',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.fixture('OrangeHRM').then( (data)=>{
        
            cy.get("input[placeholder='Username']").type(data.username);
            cy.get("input[placeholder='Password']").type(data.password);
            cy.get("button[type='submit']").click()
            //verify text after login
            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',data.expected);
           

        })
        
     
        })*/

        //Access through Hook -for multiple it blocks
        let userdata;
       before( ()=>{
        cy.fixture('OrangeHRM').then((data)=>{
            userdata=data;
        })
       })
       it('Fixtures demo test',()=>{
        
       })
    })
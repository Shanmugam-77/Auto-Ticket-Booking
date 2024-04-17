/*describe('My first script',()=>{
            it('Visit the login page',()=>{
                cy.visit("http://the-internet.herokuapp.com/dropdown")
                cy.xpath("(//select[@id='dropdown'])[1]").select('Option 2')
                })
        })*/
        
describe('Find search filters',()=>{
    it('find dynamic name as user types',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
    })
})
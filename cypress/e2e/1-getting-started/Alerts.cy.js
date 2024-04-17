/*describe('My first script',()=>{
    it('Verify the Javascript alerts',()=>{
        cy.visit("http://the-internet.herokuapp.com/javascript_alerts")
        
        cy.get("button[onclick='jsPrompt()']").click().type('test')
        
})
})*/

//confirmation alerts
describe('verify the alert mesg',()=>{
    it('validate the alert box',()=>{
        cy.visit("https://www.globalsqa.com/angularJs-protractor/Multiform/#/form/payment")
        cy.get('button[type=submit]').click()
        cy.on('window:confirm',(str)=>
        {
            expect(str).to.equal('Ok')
        }
        
        )
    })
})
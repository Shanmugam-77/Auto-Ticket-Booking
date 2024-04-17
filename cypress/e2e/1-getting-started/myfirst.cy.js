describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('https://www.eoxys.ai')
      cy.xpath("//span[normalize-space()='Contact us']").click()
      cy.wait(2000)
      cy.xpath("//button[@aria-label='Scroll to top']//*[name()='svg']").click()
    })
  })
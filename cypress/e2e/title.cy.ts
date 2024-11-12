describe('', () => {
  beforeEach(()=>{
    cy.visit('/home') //baseUrl + address
  })
  it('Verify title', () => {
    cy.title().should('eq', 'UI Test Automation Playground')
  });

  it('Verify title', () => {
    cy.title().then(element=>{ //element is jquery parameter
      cy.log(element) //print out element
      expect(element).to.eq("UI Test Automation Playground") //expect = chai assertion
      cy.wrap(element).should('eq', 'UI Test Automation Playground') //should = cypress assertion (wrap is needed to work with jquery parameter)
    })
  });
});

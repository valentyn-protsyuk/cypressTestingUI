describe('ENV', () => {
    it('stage', () => {
        cy.log(Cypress.env('stage')); //access env variables anywhere with Cypress.env('varName')
    });
});
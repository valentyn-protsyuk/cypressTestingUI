describe('CLICK', () => {
    beforeEach(() => {
        cy.visit('/click')
    });
    it('debug click', () => {
        cy.get('#badButton').debug().click();
    });
});
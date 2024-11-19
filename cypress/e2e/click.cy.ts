describe('CLICK', () => {
    beforeEach(() => {
        cy.visit('/click')
    });
    it.skip('debug click', () => {
        cy.get('#badButton').debug().click();
    });

    it('click with pause', () => {
        cy.pause()
        cy.get('#badButton').click();
        cy.pause()
        cy.get('#badButton').should('have.css','background-color', 'rgb(40, 167, 69)')
    });

});
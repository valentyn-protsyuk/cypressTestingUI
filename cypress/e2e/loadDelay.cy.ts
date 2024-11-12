describe('LOAD DELAY', () => {

    it('Delay Emulation positive', () => {
        cy.visit('/');
        cy.get('[href="/loaddelay"]',{timeout:16_000}).click(); //works because delay is set to 16 sec
        cy.get('.btn.btn-primary').should('be.visible').and('exist');
    });
});
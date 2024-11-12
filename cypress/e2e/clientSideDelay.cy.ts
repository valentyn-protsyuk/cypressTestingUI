describe('CLIENT SIDE DELAY', () => {
    it('Delay Emulation positive', () => {
        cy.visit('/clientdelay');
        cy.get('#ajaxButton').should('be.visible').and('exist').click();
        cy.get('#spinner').should('be.visible');
        cy.get(".bg-success", {timeout: 16_000}).should("have.text", "Data calculated on the client side.");
    });
});
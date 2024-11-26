describe('search bar functionality', () => {
  
  /* ==== Test Created with Cypress Studio ==== */
  it('search bar functionality', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/Games');
    cy.get('.input').clear('m');
    cy.get('.input').type('monopoly');
    cy.get('.w-49 > .btn-secondary').click();
    cy.get('.input').clear('s');
    cy.get('.input').type('scrabble');
    cy.get('.w-49 > .btn-secondary').click();
    /* ==== End Cypress Studio ==== */
  });
})
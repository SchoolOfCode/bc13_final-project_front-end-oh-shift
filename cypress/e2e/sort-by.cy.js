describe('sort functionality testing', () => {
  it('being able to sort', () => {
    cy.visit('http://localhost:3000')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Sort functionality testing', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000');
    cy.get('.btn > a').click();
    cy.get('#sort-by-dropdown > .btn').click();
    cy.get('#sort-by-dropdown > .dropdown-content > :nth-child(1)').click();
    cy.get('.dropdown-content > :nth-child(3)').click();
    cy.get('#sort-by-dropdown > .dropdown-content > :nth-child(2)').click();
    cy.get('.dropdown-content > :nth-child(4)').click();
    cy.get('.dropdown-content > :nth-child(5)').click();
    cy.get('.flex.w-96').click();
    /* ==== End Cypress Studio ==== */
  });
})
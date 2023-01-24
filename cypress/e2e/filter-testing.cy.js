describe("Filtering Usability Testing", () => {
  /* ==== Test Created with Cypress Studio ==== */
  it("Starting Search and adding values", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("http://localhost:3000");
    cy.get(".btn > a").click();
    cy.get(
      '[style="display: flex; flex-direction: row; justify-content: space-between;"] > label.btn'
    ).click();
    // cy.get("#my-drawer").check();
    cy.get(
      "#No\\.\\ of\\ Players > .css-13cymwt-control > .css-1hb7zxy-IndicatorsContainer > .css-1xc3v61-indicatorContainer"
    ).click();
    cy.get("#react-select-3-option-2").click();
    cy.get(
      "#Difficulty > .css-13cymwt-control > .css-1hb7zxy-IndicatorsContainer > .css-1xc3v61-indicatorContainer > .css-tj5bde-Svg"
    ).click();
    cy.get("#react-select-5-option-2").click();
    cy.get(
      '[style="display: flex; justify-content: center; padding-top: 6rem;"] > .btn'
    ).click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Filter search with no returns', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000');
    cy.get('.btn > a').click();
    cy.get('[style="display: flex; flex-direction: row; justify-content: space-between;"] > label.btn').click();
    cy.get('#No\\.\\ of\\ Players > .css-13cymwt-control > .css-1hb7zxy-IndicatorsContainer > .css-1xc3v61-indicatorContainer > .css-tj5bde-Svg').click();
    cy.get('#react-select-3-option-10').click();
    cy.get('#Difficulty > .css-13cymwt-control > .css-1fdsijx-ValueContainer > .css-qbdosj-Input').click();
    cy.get('#react-select-5-option-3').click();
    cy.get('#Genre').click();
    cy.get('#react-select-11-option-7').click();
    cy.get('[style="display: flex; justify-content: center; padding-top: 6rem;"] > .btn').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Dark mode working on hompage and games page', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000');
    cy.get('.fill-primary').click();
    cy.get('.swap > input').check();
    cy.get('.swap-off').click();
    cy.get('.swap > input').uncheck();
    cy.get('.viewGames > .btn').click();
    cy.get('.fill-primary').click();
    cy.get('.swap > input').check();
    cy.get('.btn > a').click();
    cy.get('.fill-primary > path').click();
    cy.get('.swap > input').check();
    cy.get('.swap-off').click();
    cy.get('.swap > input').uncheck();
    /* ==== End Cypress Studio ==== */
  });
});

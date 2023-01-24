describe("Navigating Pages", () => {
  it("Loads Home Page", () => {
    cy.visit("http://localhost:3000");
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("Navigate to Games Page/ Return to Home Page", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("http://localhost:3000");
    cy.get(".h-5").click();
    cy.get(".menu > :nth-child(2) > a").click();
    cy.get(".navbar-center > a > svg").click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Filter test with no returns', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000');
    cy.get('.btn > a').click();
    cy.get('[style="display: flex; flex-direction: row; justify-content: space-between;"] > label.btn').click();
    cy.get('#No\\.\\ of\\ Players > .css-13cymwt-control > .css-1hb7zxy-IndicatorsContainer > .css-1xc3v61-indicatorContainer > .css-tj5bde-Svg').click();
    cy.get('#react-select-3-option-10').click();
    cy.get('#Age > .css-13cymwt-control > .css-1hb7zxy-IndicatorsContainer > .css-1xc3v61-indicatorContainer').click();
    cy.get('#react-select-7-option-4').click();
    cy.get('#Duration > .css-13cymwt-control > .css-1hb7zxy-IndicatorsContainer > .css-1xc3v61-indicatorContainer').click();
    cy.get('#react-select-9-option-6').click();
    cy.get('[style="display: flex; justify-content: center; padding-top: 6rem;"] > .btn').click();
    cy.get('[style="display: flex; flex-direction: row; justify-content: space-between;"] > label.btn').click();
    cy.get(':nth-child(5) > #dropdown').click();
    cy.get('#Difficulty > .css-13cymwt-control > .css-1hb7zxy-IndicatorsContainer > .css-1xc3v61-indicatorContainer > .css-tj5bde-Svg > path').click();
    cy.get('#react-select-5-option-3').click();
    cy.get('[style="display: flex; justify-content: center; padding-top: 6rem;"] > .btn').click();
    /* ==== End Cypress Studio ==== */
  });
});

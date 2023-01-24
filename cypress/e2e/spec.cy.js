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
});

describe("Filtering Usability Testing", () => {
  // it("Navigates to games page, opens filter bar and sorts list based on filter values", () => {
  //   cy.visit("http://localhost:3000");
  //   /* ==== Generated with Cypress Studio ==== */
  //   cy.get(".btn > a").click();
  //   cy.get(
  //     '[style="display: flex; flex-direction: row; justify-content: space-between;"] > label.btn'
  //   ).click();
  //   cy.get("#my-drawer").check();
  //   cy.get(
  //     "#No\\.\\ of\\ Players > .css-13cymwt-control > .css-1hb7zxy-IndicatorsContainer > .css-1xc3v61-indicatorContainer > .css-tj5bde-Svg"
  //   ).click();
  //   cy.get("#react-select-3-option-3").click();
  //   cy.get(
  //     "#Difficulty > .css-13cymwt-control > .css-1hb7zxy-IndicatorsContainer > .css-1xc3v61-indicatorContainer > .css-tj5bde-Svg"
  //   ).click();
  //   cy.get("#react-select-5-option-2").click();
  //   cy.get(
  //     '[style="display: flex; justify-content: center; padding-top: 6rem;"] > .btn'
  //   ).click();
  //   cy.get(":nth-child(1) > .Tabs_tabs__v94tF > :nth-child(1)").click();
  //   cy.get(":nth-child(1) > .Tabs_tabs__v94tF > :nth-child(2)").click();
  //   cy.get(":nth-child(1) > .Tabs_tabs__v94tF > :nth-child(3)").click();
  //   /* ==== End Cypress Studio ==== */
  // });

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
});

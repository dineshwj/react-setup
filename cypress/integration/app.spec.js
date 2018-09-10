describe("Vist the application home page", () => {
  it("should vist the app", () => {
    cy.visit("http://localhost:3000/");
    cy.get("button.home_button").click();
    cy.get("h1").should("have", "Welcome to RBS Travel Home");
  });
});

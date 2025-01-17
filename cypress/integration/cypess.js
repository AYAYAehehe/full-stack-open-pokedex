describe("Pokedex", function () {
  beforeEach(function () {
    cy.visit("http://localhost:8080");
  });

  it("front page can be opened", function () {
    cy.contains("ivysaur");
    cy.contains(
      "Pokémon and Pokémon character names are trademarks of Nintendo."
    );
  });

  it("Can visit Ivysaur's page", function () {
    cy.contains("ivysaur").click();
    cy.contains("ivysaur");
    cy.contains("overgrow");
  });
});

describe("Rick and Morty app", () => {
  it("shows the home page attention-getter", () => {
    cy.visit("/");
    cy.contains("Watch Rick and Morty");
  });

  it("navigates to the About page and shows the show info", () => {
    cy.visit("/");
    cy.contains("About").click();
    cy.contains("adult animated science-fiction sitcom");
  });

  it("renders character cards on the Characters page", () => {
    cy.visit("characters");
    cy.contains("Rick Sanchez");
  });

  it("moves to the next page of characters", () => {
    cy.visit("characters");
    cy.contains("Page 1 of");
    cy.contains("button", "Next").click();
    cy.contains("Page 2 of");
  });

  it("goes back to the previous page of characters", () => {
    cy.visit("characters");
    cy.contains("button", "Next").click(); // go forward to Page 2
    cy.contains("Page 2 of");
    cy.contains("button", "Previous").click(); // now go back
    cy.contains("Page 1 of");
  });

  it("shows NotFound for an unknown URL", () => {
    cy.visit("/banana");
    cy.contains("404");
  });

  it("opens a character's detail page when its card is clicked", () => {
    cy.visit("characters");
    cy.contains("Rick Sanchez").click();
    cy.url().should("include", "/characters/1");
    cy.contains("Last known location");
    cy.contains("button", "Back to Characters");
  });

  // --- This test keeps failing, I assume because of how fast it searching,
  // --- automatically starting with the first letter.
  // --- I tried slowing down the search speed to try to fix it, but that didn't work.
  // --- So I added a search button and a const searchInput
  it("filters the characters with the search box", () => {
    cy.visit("characters");
    cy.contains("Rick Sanchez"); //  wait for the initial load to settle
    cy.get("input").type("Morty");
    cy.contains("button", "Search").click();
    cy.contains("Morty Smith");
    cy.contains("Rick Sanchez").should("not.exist");
  });

  it("adds a character to favorites from its card", () => {
    cy.visit("characters");
    cy.contains("Rick Sanchez"); // wait for the initial load to settle
    cy.contains(".character-card", "Rick Sanchez")
      .contains("button", "Add favorite")
      .click();
    cy.contains(".character-card", "Rick Sanchez").contains(
      "button",
      "Remove favorite",
    ); // the button flipped
  });

  it("shows favorited characters on the Favorites page", () => {
    cy.visit("characters");
    cy.contains("Rick Sanchez");
    cy.contains(".character-card", "Rick Sanchez")
      .contains("button", "Add favorite")
      .click();
    cy.contains("Favorites").click(); // navbar link
    cy.url().should("include", "/favorites");
    cy.contains("Rick Sanchez");
  });

  it("removes a character from the Favorites page", () => {
    cy.visit("characters");
    cy.contains("Rick Sanchez");
    cy.contains(".character-card", "Rick Sanchez")
      .contains("button", "Add favorite")
      .click();
    cy.contains("Favorites").click();
    cy.contains("Rick Sanchez"); // it's there
    cy.contains(".character-card", "Rick Sanchez")
      .contains("button", "Remove favorite")
      .click();
    cy.contains("Rick Sanchez").should("not.exist"); // gone
  });

  it("allows no more than 4 favorites", () => {
    cy.visit("characters");
    cy.contains("Rick Sanchez");
    ["Rick Sanchez", "Morty Smith", "Summer Smith", "Beth Smith"].forEach(
      (name) => {
        cy.contains(".character-card", name)
          .contains("button", "Add favorite")
          .click();
      },
    );
    // a 5th, un-favorited character's Add button is now disabled
    cy.contains(".character-card", "Jerry Smith")
      .contains("button", "Add favorite")
      .should("be.disabled");
  });
});

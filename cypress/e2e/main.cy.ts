/// <reference types="cypress" />

describe("main", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[data-cy="start-ctrl"]').then((input) => {
      expect(input.val()).equals("0");
    });
    cy.get('[data-cy="step-ctrl"]').then((input) => {
      expect(input.val()).equals("1");
    });
    cy.get('[data-cy="count-btn"]');
    cy.get('[data-cy="count-span"]').then((span) => {
      expect(span.text().trim()).equals("0");
    });
  });

  it("updates count on click", () => {
    cy.get('[data-cy="start-ctrl"]').then((input) => {
      expect(input.val()).equals("0");
    });
    cy.get('[data-cy="step-ctrl"]').then((input) => {
      expect(input.val()).equals("1");
    });
    cy.get('[data-cy="count-btn"]')
      .click()
      .then((btn) => {
        expect(btn.text().trim()).equals("1");
      });
  });

  it("updates count on second click", () => {
    cy.get('[data-cy="start-ctrl"]').then((input) => {
      expect(input.val()).equals("0");
    });
    cy.get('[data-cy="step-ctrl"]').then((input) => {
      expect(input.val()).equals("1");
    });
    cy.get('[data-cy="count-btn"]')
      .click()
      .then((btn) => {
        expect(btn.text().trim()).equals("1");
      })
      .click()
      .then((btn) => {
        expect(btn.text().trim()).equals("2");
      });
  });
});

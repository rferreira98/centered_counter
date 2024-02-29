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
    cy.get('[data-cy="start-ctrl"]');
    cy.get('[data-cy="step-ctrl"]');
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

  it("resets counter on change step", () => {
    cy.get('[data-cy="start-ctrl"]');
    cy.get('[data-cy="step-ctrl"]');
    cy.get('[data-cy="count-btn"]')
      .click()
      .then((btn) => {
        expect(btn.text().trim()).equals("1");
      });

    cy.get('[data-cy="step-ctrl"]').type("2");
    cy.get("body").click(0, 0);
    cy.get('[data-cy="count-btn"]').then((btn) => {
      expect(btn.text().trim()).equals("0");
    });
  });

  it.only("resets counter on change start", () => {
    cy.get('[data-cy="start-ctrl"]');
    cy.get('[data-cy="step-ctrl"]');
    cy.get('[data-cy="count-btn"]')
      .click()
      .then((btn) => {
        expect(btn.text().trim()).equals("1");
      });

    cy.get('[data-cy="start-ctrl"]').type("2");
    cy.get("body").click(0, 0);
    cy.get('[data-cy="count-btn"]').then((btn) => {
      expect(btn.text().trim()).equals("2");
    });
  });

  it("resets counter on change step and updates counter with updated step", () => {
    cy.get('[data-cy="start-ctrl"]');
    cy.get('[data-cy="step-ctrl"]');
    cy.get('[data-cy="count-btn"]')
      .click()
      .then((btn) => {
        expect(btn.text().trim()).equals("1");
      });

    cy.get('[data-cy="step-ctrl"]').type("2");
    cy.get("body").click(0, 0);
    cy.get('[data-cy="count-btn"]')
      .then((btn) => {
        expect(btn.text().trim()).equals("0");
      })
      .click()
      .then((btn) => {
        expect(btn.text().trim()).equals("12");
      });
  });

  it("resets counter on change step and updates counter with updated step on second click", () => {
    cy.get('[data-cy="start-ctrl"]');
    cy.get('[data-cy="step-ctrl"]');
    cy.get('[data-cy="count-btn"]')
      .click()
      .then((btn) => {
        expect(btn.text().trim()).equals("1");
      });

    cy.get('[data-cy="step-ctrl"]').type("2");
    cy.get("body").click(0, 0);
    cy.get('[data-cy="count-btn"]')
      .then((btn) => {
        expect(btn.text().trim()).equals("0");
      })
      .click()
      .then((btn) => {
        expect(btn.text().trim()).equals("12");
      })
      .click()
      .then((btn) => {
        expect(btn.text().trim()).equals("24");
      });
  });

  it("resets counter on change start and updates counter with updated step", () => {
    cy.get('[data-cy="start-ctrl"]');
    cy.get('[data-cy="step-ctrl"]');
    cy.get('[data-cy="count-btn"]')
      .click()
      .then((btn) => {
        expect(btn.text().trim()).equals("1");
      });

    cy.get('[data-cy="start-ctrl"]').type("2");
    cy.get("body").click(0, 0);
    cy.get('[data-cy="count-btn"]')
      .then((btn) => {
        expect(btn.text().trim()).equals("2");
      })
      .click()
      .then((btn) => {
        expect(btn.text().trim()).equals("3");
      });
  });

  it("resets counter on change start and updates counter with updated step on second click", () => {
    cy.get('[data-cy="start-ctrl"]');
    cy.get('[data-cy="step-ctrl"]');
    cy.get('[data-cy="count-btn"]')
      .click()
      .then((btn) => {
        expect(btn.text().trim()).equals("1");
      });

    cy.get('[data-cy="start-ctrl"]').type("2");
    cy.get("body").click(0, 0);
    cy.get('[data-cy="count-btn"]')
      .then((btn) => {
        expect(btn.text().trim()).equals("2");
      })
      .click()
      .then((btn) => {
        expect(btn.text().trim()).equals("3");
      })
      .click()
      .then((btn) => {
        expect(btn.text().trim()).equals("4");
      });
  });
});

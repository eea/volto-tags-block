import { slateBeforeEach, slateAfterEach } from '../support/e2e';

describe('Tags Block: View Mode Tests', () => {
  beforeEach(slateBeforeEach);
  afterEach(slateAfterEach);

  it('Tags Block: Add and save', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Tags View Test');
    cy.get('.documentFirstHeading').contains('Tags View Test');

    cy.getSlate().click();

    // Add tags block
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get('.blocks-chooser .title').contains('Common').click({ force: true });
    cy.get('.content.active.common .button')
      .contains('Tags')
      .click({ force: true });

    // Add tag
    cy.get('.button').contains('Add Tag item').click();
    cy.get('#field-category-0-items-0').type('tag one');

    // Save
    cy.get('#toolbar-save').click();
    cy.contains('Tags View Test');
  });

  it('Tags Block: Multiple tags', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Tags Multiple');

    cy.getSlate().click();

    // Add tags block
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get('.blocks-chooser .title').contains('Common').click({ force: true });
    cy.get('.content.active.common .button')
      .contains('Tags')
      .click({ force: true });

    // Add first tag
    cy.get('.button').contains('Add Tag item').click();
    cy.get('#field-category-0-items-0').type('Alpha');

    // Add second tag
    cy.get('.button').contains('Add Tag item').click();
    cy.get('#field-category-0-items-1').type('Beta');

    // Add title
    cy.get('textarea#field-title').type('Tag Collection');

    // Save
    cy.get('#toolbar-save').click();
    cy.contains('Tags Multiple');
  });
});
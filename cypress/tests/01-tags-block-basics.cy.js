import { slateBeforeEach, slateAfterEach } from '../support/e2e';

describe('Blocks Tests', () => {
  beforeEach(slateBeforeEach);
  afterEach(slateAfterEach);

  it('Add Block: Tag', () => {
    // Change page title
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Volto Tags Block Demo');

    cy.get('.documentFirstHeading').contains('Volto Tags Block Demo');

    cy.getSlate().click();

    // Add block
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get('.blocks-chooser .title').contains('Common').click({ force: true });
    cy.get('.content.active.common .button')
      .contains('Tags')
      .click({ force: true });

    // Add tag
    cy.get('.button').contains('Add Tag item').click();
    cy.get('#field-category-0-items-0').type('test 1');
    cy.get('#field-href-1-items-0').type('/cypress/my-page/page-1');

    cy.get('.button').contains('Add Tag item').click();
    cy.get('#field-category-0-items-1').type('test 2');
    cy.get('#field-href-1-items-1').type('/cypress/my-page/page-1');
    cy.get('label[for="field-openLinkInNewTab-2-items-1"]').click();

    cy.get('textarea#field-title').type('Tags Demo');

    // Save
    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    // then the page view should contain our changes
    cy.contains('Volto Tags Block Demo');
    cy.get('.tags');
    cy.get('.tags-title').contains('Tags Demo');
    cy.get('.tags .tags-content .tag').contains('test 1');
    cy.get('.tags .tags-content .tag').contains('test 2');
    cy.get('.tags .tags-content a[target="_blank"]').contains('test 2');

    cy.createContent({
      contentType: 'Document',
      contentId: 'page-1',
      contentTitle: 'Page 1',
      path: 'cypress/my-page',
    });

    cy.visit('cypress/my-page/page-1');
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page/page-1');

    cy.visit('cypress/my-page');
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    cy.get('.tags .tags-content .tag').contains('test 1').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page/page-1');

    cy.contains('Page 1');
  });
});

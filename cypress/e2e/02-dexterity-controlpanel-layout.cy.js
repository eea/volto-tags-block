import { slateLayoutBeforeEach, slateLayoutAfterEach } from '../support/e2e';

describe('ControlPanel: Dexterity Content-Types Layout', () => {
  beforeEach(slateLayoutBeforeEach);
  afterEach(slateLayoutAfterEach);

  it('Edit Blocks Layout for Book', () => {
    cy.visit('/controlpanel/dexterity-types');
    cy.waitForResourceToLoad('@navigation');
    cy.waitForResourceToLoad('@breadcrumbs');
    cy.waitForResourceToLoad('@actions');
    cy.waitForResourceToLoad('@types');

    cy.get('a[href="/controlpanel/dexterity-types/book"]').should(
      'have.text',
      'book',
    );

    cy.visit('/controlpanel/dexterity-types/book/layout');
    cy.get('#page-controlpanel-layout').contains(
      'Can not edit Layout for book',
    );
    cy.get('#page-controlpanel-layout button').click();

    // Wait a bit for draftjs to load, without this the title block
    // custom placeholder is missing and cypress gives a timeout error
    cy.wait(1000);
    cy.get('input[id="field-placeholder"]').type('Book title');
    cy.get('label[for="field-required"]').click();
    cy.get('label[for="field-fixed"]').click();

    cy.getSlate().click();

    cy.get('.ui.basic.icon.button.block-add-button:visible').click();
    cy.get('.blocks-chooser .title').contains('Common').click();
    cy.get('.content.active.common .button.tags_block')
      .contains('Tags')
      .click({ force: true });

    cy.get('#toolbar-save').click();

    cy.visit('/cypress');
    cy.waitForResourceToLoad('@navigation');
    cy.waitForResourceToLoad('@breadcrumbs');
    cy.waitForResourceToLoad('@actions');
    cy.waitForResourceToLoad('@types');

    cy.get('button[class="add"]').click();
    cy.get('#toolbar-add-book').click();
    cy.get('.block.title').contains('Book title');

    // Change book title
    cy.clearSlateTitle();
    cy.getSlateTitle().type('My First Book');

    cy.get('.tags_block div[role="presentation"]').click();
    cy.get('.add-item-button-wrapper .button').click();
    cy.get('.accordion .inline.field #field-category-0-items-0').click().type('My first tag');
    cy.get('.add-item-button-wrapper .button').click();
    cy.get('.accordion .inline.field #field-category-0-items-1').click().type('My second tag');

    cy.get('#toolbar-save').click();
    cy.get('.documentFirstHeading').contains('My First Book');
    cy.get('.tags_block').contains('My first tag');
    cy.get('.tags_block').contains('My second tag');
  });
});

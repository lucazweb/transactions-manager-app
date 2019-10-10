describe('Transactions Form type test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/new-transaction')
  });

  it('Type in description field', () => {
    cy.get('[data-test="description"]')
      .type('Café Starbucks').should('have.value', 'Café Starbucks')
  });

  it('Type in value field', () => {
    cy.get('[data-test="value"]')
      .type('5.9').should('have.value', '5.9')
  });

  it('Category field default value', () => {
    cy.get('[data-test="category"]')
      .should('have.value', 'Crédito')
  });

  it('Changes category value', () => {
    cy.get('[data-test="category"]')
      .click({force: true})
      .should('have.value', 'Débito')
  });

  it('Save and remove transaction flow', () => {
    cy.get('[data-test="description"]')
      .type('Café Starbucks').should('have.value', 'Café Starbucks');

    cy.get('[data-test="value"]')
      .type('5.9').should('have.value', '5.9')

    cy.get('[data-test="category"]')
      .should('have.value', 'Crédito')   

    cy.get('[data-test="category"]')
      .click({force: true})
      .should('have.value', 'Débito')         
      
    cy.get('[data-test="savebtn"]')
      .click();

    cy.contains('Lista de transações');

    // Cleaning flow test
    cy.get('.title').contains('Café Starbucks')
      .click();

    cy.contains('Remover transação');

    cy.get('.btn-remove-transaction')
      .click();
  });
})

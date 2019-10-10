describe('Sidebar navigation', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });
  
  it('Navigate to new-transactions view', () => {
    cy.get('[data-test="newtransaction"]')
      .click();

    cy.contains('Cadastre uma transação');
    
    cy.get('[data-test="dashboard"]')
      .click();

    cy.contains('Começar');
  })


});

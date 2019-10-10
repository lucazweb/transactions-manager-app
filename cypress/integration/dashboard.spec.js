describe('Transactions Form type test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('Visit application without transactions', () => {
    cy.contains('Começar');
    cy.get('[data-test="startbtn"]').click();
    cy.contains('Cadastre uma transação');
  });

});

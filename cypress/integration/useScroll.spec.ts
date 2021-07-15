describe('useScroll hook', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
  });
  it('initial render', () => {
    cy.get('[data-testid=state-scrolling]')
      .invoke('text')
      .should('match', /false/)
      .get('[data-testid=state-scrollTop]')
      .invoke('text')
      .should('match', /false/)
      .get('[data-testid=state-scrollBottom]')
      .invoke('text')
      .should('match', /false/);
  });
  it('scrolling to bottom', () => {
    cy.scrollTo(0, 200)
      .get('[data-testid=state-scrolling]')
      .invoke('text')
      .should('match', /true/)
      .get('[data-testid=state-scrollBottom]')
      .invoke('text')
      .should('match', /true/)
      .get('[data-testid=state-scrollTop]')
      .invoke('text')
      .should('match', /false/);
  });
  it('scrolling to bottom then top', () => {
    cy.scrollTo(0, 200)
      .scrollTo(0, -200)
      .get('[data-testid=state-scrolling]')
      .invoke('text')
      .should('match', /false/)
      .get('[data-testid=state-scrollBottom]')
      .invoke('text')
      .should('match', /false/)
      .get('[data-testid=state-scrollTop]')
      .invoke('text')
      .should('match', /true/);
  });
});

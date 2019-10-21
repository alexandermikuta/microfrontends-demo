import { getGreeting } from '../support/app.po';

describe('microfrontend1', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to microfrontend1!');
  });
});

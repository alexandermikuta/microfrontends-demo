import { getGreeting } from '../support/app.po';

describe('microfrontend2', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to microfrontend2!');
  });
});

import '@testing-library/cypress/add-commands';
import { queries, Matcher } from '@testing-library/dom';

Cypress.Commands.add(
  'login', 
  (email, password) => {
    cy.get('#g_email').type(email)
    cy.get('#g_password').type(password)
    cy.get('#g_send').click()
  })
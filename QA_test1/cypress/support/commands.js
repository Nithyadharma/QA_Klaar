// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//add reference:/// <reference types=”cypress-xpath” />

Cypress.Commands.add('login',(emailid,password)  =>
{
    cy.session([emailid,password], ( ) => {

    cy.visit("https://dev.klaarhq.com")
    cy.get('[data-cy="login-with-klaar-button"] ').click()
    cy.get('[data-cy="login-email-text-field"]').type(emailid);
    cy.get('[data-cy="login-password-text-field"]').type(password);
    cy.get('[data-cy="login-submit-button"]').click();
    cy.wait(5000);

    })
    

})


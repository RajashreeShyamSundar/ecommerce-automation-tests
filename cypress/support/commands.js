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
// This is a parent command for logging in a user 
Cypress.Commands.add('login', (email, password) => {
    cy.visit(Cypress.env('url'));
    cy.get('a[href="/login"]').contains('Signup / Login').click();
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(password);
    cy.get('[data-qa="login-button"]').click();
  });
 
// This command completes the card payment process and checks for success 
Cypress.Commands.add('completeCardPayment', (name, cardNumber, cvc, expiryMonth, expiryYear) => {
    cy.get('[data-qa="name-on-card"]').type(name);
    cy.get('[data-qa="card-number"]').type(cardNumber);
    cy.get('[data-qa="cvc"]').type(cvc);
    cy.get('[data-qa="expiry-month"]').type(expiryMonth);
    cy.get('[data-qa="expiry-year"]').type(expiryYear);
    cy.get('[data-qa="pay-button"]').click();
    cy.get('[data-qa="order-placed"] > b').should('be.visible').and('contain.text', 'Order Placed!');
    cy.get('[data-qa="continue-button"]').click();
  });  
// This command adds a product to the cart by searching for it 
  Cypress.Commands.add('addToCart', (productName) => {
    cy.get('a[href="/products"]').click()
                  cy.get('#search_product').type(productName)
                  cy.get('#submit_search')
                        .scrollIntoView()
                        .click();
                  cy.screenshot('order-placed-successfully')
                  cy.get('.productinfo > .btn').click(); // Add to card
                  
  });



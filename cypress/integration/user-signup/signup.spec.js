describe('Signup new user', function () {
  
  it('should signup a new user', function () {

    cy.visit(Cypress.env('url'));
    cy.get('a[href="/login"]').contains('Signup / Login').click()
    cy.fixture('loginData').then((data) => {
      const randomEmail = Math.random().toString(36).substring(2, 15) + "@gmail.com"        // Assertion for Email Address already exist! need to be created
      //const name = data.firstname;
      cy.get('[data-qa="signup-name"]').type("john")
      cy.get('[data-qa="signup-email"]').type(randomEmail)
      cy.get('[data-qa="signup-button"]').click()
      cy.wait(1000)
      cy.url().should('include', '/signup');

      // Fill in signup form with valid input

      const email = data.email;
      const password = data.password;

      cy.get('#id_gender2').check()
      cy.get('[data-qa="password"]').type("abc1!")
      cy.get('[data-qa="days"]').select(1)
      cy.get('[data-qa="months"]').select(10)
      cy.get('[data-qa="years"]').select('1990')
      cy.get('#newsletter').check()
      cy.get('#optin').check()

      cy.get('[data-qa="first_name"]').type("Pinky")
      cy.get('[data-qa="last_name"]').type("Tinky")
      cy.get('[data-qa="company"]').type("E shop")
      cy.get('[data-qa="address"]').type("north new st, E shop, 1988")
      cy.get('[data-qa="state"]').type("chennai")
      cy.get('[data-qa="city"]').type("Tamil Nadu")
      cy.get('[data-qa="zipcode"]').type("1988")
      cy.get('[data-qa="mobile_number"]').type("98765432")
      cy.get('[data-qa="create-account"]').click()
      cy.get('b').should('contain.text', 'Account Created!');   //Assertion to check if the account was created successfully
      cy.screenshot('account-created-successfully')
    })
  })
})
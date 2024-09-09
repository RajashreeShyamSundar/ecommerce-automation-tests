describe('Single Product Order Purchase', function () {
  it('should successfully purchase a single product', function () {

    // Log in using credentials from fixture
    cy.fixture('loginData').then((data) => {
      const email = data.email;
      const password = data.password;

      // Use custom command to perform login
      cy.login(email, password);

      // Search for a product and proceed with purchase
      cy.get('a[href="/products"]').click()
      cy.get('#search_product').type("Frozen Tops For Kids")
      cy.get('#submit_search').click()
      cy.contains('a', 'View Product').click()
      cy.contains('button', 'Add to cart').click()
      cy.get('.modal-content').contains('View Cart').click()
      cy.get('.btn.check_out').contains('Proceed To Checkout').click()
      cy.get('.btn.check_out').contains('Place Order').click()

      // Complete payment using custom command
      cy.completeCardPayment("pinky", "1234 4321 6666 4444", "111", "06", "2006");
    })
  })
})


   

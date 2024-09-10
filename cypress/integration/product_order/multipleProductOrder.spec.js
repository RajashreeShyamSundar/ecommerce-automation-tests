describe('Multiple Product Order Purchase', function () {
    it('should successfully purchase a multiple product', function () {
  
      // Log in using credentials from fixture
      cy.fixture('loginData').then((data) => {
        const email = data.email;
        const password = data.password;
  
        // Use custom command to perform login
        cy.login(email, password);
  
        // Add 3 products to the cart and proceed with purchase
        cy.addToCart("Beautiful Peacock Blue Cotton Linen Saree")
        cy.addToCart("Sleeveless Dress")
        cy.addToCart("Pure Cotton V-Neck T-Shirt")
        cy.contains('a', 'Cart').click();
        cy.get('.btn.check_out').contains('Proceed To Checkout').click()
        cy.get('.btn.check_out').contains('Place Order').click()
  
        // Complete the payment using a custom command and assert that the "Order Placed!" message is displayed
        cy.completeCardPayment("pinky", "1234 4321 6666 4444", "111", "06", "2006");
      })
    })
  })
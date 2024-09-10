describe('Write a Review for a Product', function () {
    it('should allow writing a review for a product which costs Rs. 478', function () {

        // Use custom command to perform login

        cy.fixture('loginData').then((data) => {
            const email = data.email;

            // Visit the website using the URL from environment variables
            cy.visit(Cypress.env('url'));

            // Use custom command to perform login
            const randomEmail = Math.random().toString(36).substring(2, 15) + "@gmail.com"
            
            // Iterate through the products listed on the page
            cy.get('.features_items .col-sm-4').each(($product) => {
                // Extract the price text and convert to number
                const priceText = $product.find('.productinfo h2').text();
                const price = parseInt(priceText.replace('Rs. ', '').trim(), 10);
          
                // Check if the price matches Rs. 478
                if (price === 478) {
                  cy.wrap($product).contains('a', 'View Product').click()
                  cy.url().should('include', '/product_details/'); 
                }
              });

            // Fill in the review form with the provided data
            cy.get('#name').type("pinky")
            cy.get('#email').type(email)
            cy.get('#review').type("The product is good quality")

            // Submit the review
            cy.get('#button-review').click()

            // Assertion to check if the success notification appears after submitting the review
            cy.contains('Thank you for your review.').should('be.visible'); 

        })
    })
})



describe('Write a Review for a Product', function () {
    it('should allow writing a review for a product which costs Rs. 478', function () {

        //Login

        cy.fixture('loginData').then((data) => {
            const email = data.email;

            // 4. Review Sleeves Top and Short - Blue & Pink
            cy.visit(Cypress.env('url'));
            const randomEmail = Math.random().toString(36).substring(2, 15) + "@gmail.com"

            cy.get('.features_items .col-sm-4').each(($product) => {
                // Extract the price text and convert to number
                const priceText = $product.find('.productinfo h2').text();
                const price = parseInt(priceText.replace('Rs. ', '').trim(), 10);
          
                // Check if the price matches Rs. 478
                if (price === 478) {
                  cy.wrap($product).contains('a', 'View Product').click()
                  cy.url().should('include', '/product_details/'); // Check URL includes product details
                }
              });

            cy.get('#name').type("pinky")
            cy.get('#email').type(email)
            cy.get('#review').type("The product is good quality")
            cy.get('#button-review').click()
            cy.contains('Thank you for your review.').should('be.visible'); //Assertion to check review submited and success notification appears.

        })
    })
})



describe('Eshopping', function () {
    it('Filters Men\'s Jeans and Confirms 3 Products are Displayed', function () {

        // Use custom command to perform login

        cy.fixture('loginData').then((data) => {
            const email = data.email;
            const password = data.password;

            // Visit the homepage
            cy.visit(Cypress.env('url'));

            // Use custom command to perform login
            cy.login(email, password);
        })

        // Filter men's jeans

        // Navigate to the 'Products' page
        cy.get('a[href="/products"]').click()
        cy.get('#accordian').within(() => {
            cy.contains('a', 'Men').click()
        })
        cy.get('#Men > .panel-body > ul').contains('Jeans').click()
        cy.get('.features_items').should('be.visible');

        // Assertion: Confirm exactly 3 products are displayed
        cy.get('.features_items .single-products').should('have.length', 3);
        cy.get('.features_items .single-products').each(($el) => {
            cy.wrap($el).should('contain.text', 'Jeans');
        })
    })
})
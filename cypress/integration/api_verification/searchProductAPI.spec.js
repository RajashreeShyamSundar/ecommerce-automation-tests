describe('Search Product API', function () {
    const apiUrl = Cypress.env('url') + 'api/searchProduct';
  
    it('should return a successful response with status 200', function () {
      cy.request({
        method: 'POST',
        url: apiUrl,
        form: true,
        body: {
          'Content-Type': 'application/json',
          'search_product': 'Sleeveless'
        },
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        // Check the status code
        expect(response.status).to.eq(200);
  
        const responseBody = JSON.parse(response.body);
        // Assert that the response body has the correct structure
        expect(responseBody).to.have.property('responseCode', 200);
        expect(responseBody).to.have.property('products').that.is.an('array').with.length.greaterThan(0);
  
      });
    });
  });
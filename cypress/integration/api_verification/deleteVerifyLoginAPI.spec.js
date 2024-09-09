describe('Verify Login API Tests', function () {

    it('should return 405 Method Not Allowed for DELETE request', function () {
      cy.request({
        method: 'DELETE',
        url: Cypress.env('url') + 'api/verifyLogin',
        failOnStatusCode: false 
      }).then((response) => {
        // Assert that the response status code is 405
        expect(response.status).to.eq(200);
  
        // Assert that the response body contains the expected message
        const responseBody = JSON.parse(response.body);
  
        // Assert that the parsed response body has the correct properties
        expect(responseBody).to.have.property('responseCode', 405);
        expect(responseBody).to.have.property('message', 'This request method is not supported.');
  
      });
    });
  
  });
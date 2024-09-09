describe('Update Account API Tests', function () {

    it('should successfully update user account details', function () {
      // Define the request payload
      const requestBody = {
        name: 'John Doe',
        email: "Raji@mail",
        password: "123",
        title: 'Mr',
        birth_date: '15',
        birth_month: '08',
        birth_year: '1985',
        firstname: 'John',
        lastname: 'Doe',
        company: 'Tech Corp',
        address1: '123 Tech Lane',
        address2: 'Suite 456',
        country: 'United States',
        zipcode: '90210',
        state: 'California',
        city: 'Beverly Hills',
        mobile_number: '555-1234'
      };
  
  
      cy.request({
        method: 'PUT',
        url: Cypress.env('url') + 'api/updateAccount',
        form: true, 
        body: requestBody,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        // Assert that the response status code is 200
        expect(response.status).to.eq(200);
        const responseBody = JSON.parse(response.body);
  
        // Assert that the response message is 'User updated!'
        expect(responseBody).to.have.property('message', 'User updated!');
      });
    });
  
  });
  
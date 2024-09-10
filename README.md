# Ecommerce Automation Tests

## Description
This repository contains an automated test suite for an e-commerce website using Cypress. The tests cover:

- User signup functionality
- Single product ordering
- Multiple product ordering
- Product filtering
- Writing product reviews
- API validation for search, delete, and update operations

## Setup Instructions

1. **Clone the Repository**

   git clone https://github.com/RajashreeShyamSundar/ecommerce-automation-tests.git
   cd ecommerce-automation-tests

2. **Install Dependencies**

    npm install
	
3. **Install Mochawesome Reporter**

	Install the cypress-mochawesome-reporter dependency to enable enhanced reporting for your Cypress tests:
	npm install --save-dev cypress-mochawesome-reporter

4. **Run Tests**

    Open Cypress Test Runner:
    npx cypress open
	
	Run tests in headless mode:
	npx cypress run





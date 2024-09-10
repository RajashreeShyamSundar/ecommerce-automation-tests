const { defineConfig } = require("cypress");
async function setupNodeEvents(on, config) {

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

// Export the Cypress configuration
module.exports = defineConfig({
  // Set the default timeout for Cypress commands
  defaultCommandTimeout: 6000,
  // Configure the reporter for test results
  reporter: 'cypress-mochawesome-reporter',
  // Options for the Cypress Mochawesome Reporter
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: true,
    html: true,
    json: true,
    screenshotsFolder: 'cypress/screenshots',
    reportFilename: 'report',
  },

// Environment variables
  env: {
    url: "https://www.automationexercise.com/",
  },

  // End-to-end testing configuration
  e2e: {
    setupNodeEvents(on, config) {
     // Configure the Mochawesome Reporter plugin
      require('cypress-mochawesome-reporter/plugin')(on);
    },  
    
  // Pattern to locate test files  
  specPattern: 'cypress/integration/**/*.spec.js',
  },
});

const { defineConfig } = require("cypress");
async function setupNodeEvents(on, config) {

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
module.exports = defineConfig({
  defaultCommandTimeout: 6000,

  env: {
    url: "https://www.automationexercise.com/",
  },

  projectId: "s3xo43",

  e2e: {
  setupNodeEvents,    
  specPattern: 'cypress/integration/**/*.spec.js',
  },
});

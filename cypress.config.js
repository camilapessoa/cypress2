/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    // defaultCommandTimeout: 60000,
        setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://192.168.15.48:3000/',
    video: true,
      reporter: 'mochawesome',
      reporterOptions: {
        reportDir: 'cypress/results',
        overwrite: false,
        html: true,
        json: false,
        timestamp: "mmddyyyy_HHMMss" 
    },
    projectId: "yfnfzp"
    
  }
});

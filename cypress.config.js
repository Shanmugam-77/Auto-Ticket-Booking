const { defineConfig } = require("cypress");
let currentDate = new Date();

// Extract day, month, and year components
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1; // Month is zero-based, so we add 1
let year = currentDate.getFullYear();

// Add leading zeros if necessary
day = day < 10 ? '0' + day : day;
month = month < 10 ? '0' + month : month;

// Create the formatted date string
let formattedDate = day + '-' + month + '-' + year;

let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

// Add leading zeros if necessary
hours = hours < 10 ? '0' + hours : hours;
minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;

// Create the formatted time string
let formattedTime = hours + '_' + minutes + '_' + seconds;
console.log(formattedTime); 
module.exports = defineConfig({
  projectId: 'hhnty6',
  
  reporter: 'cypress-mochawesome-reporter', //for HTML reports
  reporterOptions: {

    reportDir: `cypress/results/${formattedDate}/${formattedTime}/`,
    overwrite: false,
    html: true,
    json: false,
  },

  e2e: {
    
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    
      // Video configuration
      video: true,
      //Cypress clears any existing videos before a cypress run. If you do not want to clear your videos folder before a run, you can set trashAssetsBeforeRuns to false.
      trashAssetsBeforeRuns: false
      


      
  },
})

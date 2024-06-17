# cypress
install node
set file path
install vs code
install extension git codespaces
clone repositery
install cypress
open by npx cypress open
selct file path to upload the file for DL
use // insted of / for windows whre the file path is definedin the code for DL
make change in cypess.config.js use the code below
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/integration/*.js'
  },
  
});



describe('Patient Portal Tests', () => {

    beforeEach(() => {
      // Visit the application URL before any tests start
      cy.visit('https://upfrontdev2.patientbondcloud.com/virtual-care/home');
      // Optionally, add assertions or waits for specific elements to ensure the page is loaded
      cy.wait(35000); 
    });


    it('Clicks on the login and fills out the form', () => {
        cy.get('#inputCellNumber').type("9922292999");
        cy.get('#inputPassword').type("Pankaj@34");
        cy.get('.blue-theme-btn').click();
        cy.wait(35000);
       
        cy.get('.profileDetailContainer > .ng-binding').invoke('text').then((text) => {
          // Log the actual text to the Cypress console for verification
          console.log(text);
     
          // Split the text into lines and trim each line to remove any extra whitespace
          const lines = text.trim().split('\n').map(line => line.trim());
     
          // Assert that each line contains part of the expected text
          expect(lines).to.include.members(['Welcome', 'Brayan', 'Fury']);
          
          cy.get(':nth-child(4) > .ng-binding').click({ multiple: true });
          cy.get('[ng-click="setActiveList(\'driver-license\')"] > a > h4').click();
          cy.wait(3000);
          cy.get('[style="text-align: right;"] > .btn').click();
          cy.get('#focus').type("98765432");
          cy.wait(3000);          

          cy.get('[style="width: 42%; height: 35px; color: black; font-weight: 500;"] > .ui-select-match > .btn-default').click();
          cy.get('#ui-select-choices-row-2-4 > .ui-select-choices-row-inner').click();

          cy.get('.ui-select-container.ng-empty > .ui-select-match > .btn-default').click();
          cy.get('#ui-select-choices-row-3-4 > .ui-select-choices-row-inner').click();
          cy.get('.virtual-care').type("2031");

          cy.get(':nth-child(1) > .m-t-md > div > .custom-file-input').selectFile("C:\\Users\\Pankaj\\cypressAutomation\\cypress\\download_dl.jpeg");
          cy.wait(3000); 
          
          cy.get(':nth-child(2) > .m-t-md > div > .custom-file-input').selectFile("C:\\Users\\Pankaj\\cypressAutomation\\cypress\\download_dl.jpeg");
          cy.wait(3000); 
          cy.get('.btn-primary').click();
        });
      



     
     



});
});
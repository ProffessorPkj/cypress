/// <reference types="cypress" />
describe('Patient Portal Tests', () => {

    beforeEach(() => {
      // Visit the application URL before any tests start
      cy.visit('https://upfrontdev2.patientbondcloud.com/virtual-care/home');
      // Optionally, add assertions or waits for specific elements to ensure the page is loaded
      cy.wait(35000); 
    });
  
    it('Clicks on the registration link and fills out the form', () => {
      // Click on the registration link using the specified CSS selector
      cy.get('a > .btn', { timeout: 15000 }).should('be.visible'); // Example assertion
      cy.get('a > .btn',{ timeout: 15000 }).click();
      cy.wait(15000); 
      // Fill out the registration form
      cy.get('input[placeholder="First Name *"]').type("Brayan"); // First Name
      cy.get(':nth-child(2) > .form-control').type("Fury"); // Last Name
      cy.get(':nth-child(3) > .form-control').type("9922292999"); // Phone Number
      cy.get(':nth-child(4) > .form-control').type("electro@yopmail.com"); // Email Address
     
      // Select 'Male' from the dropdown
      cy.get('.gender-drop-down > .form-control').select('Male');
      cy.get('select[placeholder="Birth date: Month"]').select('January');
      cy.wait(3000);
      cy.get('select[placeholder="Month"]').select('11');
       cy.get('.input-group > .ng-pristine').type("2001");
       cy.get(':nth-child(7) > .form-control').type("Pankaj@34");
       cy.get('div[style="margin-bottom: 0px;"] > .form-control').type("Pankaj@34");
       cy.get('.login-reg-fields-cntn > .blue-theme-btn').click();
       
       
    });


        it('Clicks on the login and fills out the form', () => {
            cy.get('#inputCellNumber').type("9922292999");
            cy.get('#inputPassword').type("Pankaj@34");
            cy.get('.blue-theme-btn').click();
            cy.wait(35000);
            cy.get('.profileDetailContainer > .ng-binding').should('contain', 'Brayan Fury');

    });
     
     });
        
  
import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given(`I visit the {string} page`, (url) => {
  cy.visit(url);
});

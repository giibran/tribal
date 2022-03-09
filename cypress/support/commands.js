import job_openings_page from '../page_definition/job_openings.js';
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('filterJobBy', (department, office, num_result) => {
    cy.get(job_openings_page.department_select).click()
    cy.get('[id="select2-drop"]')
    .find('[class="select2-result-label"]')
    .contains(department)
    .click()
    cy.get(job_openings_page.office_select).click()
    cy.get('[id="select2-drop"]')
    .find('[class="select2-result-label"]')
    .contains(office)
    .click()
    cy.get(job_openings_page.job_counter).should('contain', num_result)
    cy.get(job_openings_page.job_container)
    .filter(':visible')
    .should('have.length', num_result)
})
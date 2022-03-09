import job_openings_page from '../page_definition/job_openings.js';
describe('Single test', () => {
    beforeEach(() => {
      cy.visit('https://boards.greenhouse.io/tribalcredit')
    })

    it('search Senior QA Engineer when filter by engineering and mexico', () => {
        cy.url().should('eq', 'https://boards.greenhouse.io/tribalcredit')
        cy.get(job_openings_page.logo).should('exist')
        cy.get(job_openings_page.department_select).click()
        cy.get('[id="select2-drop"]')
            .find('[class="select2-result-label"]')
            .contains('Engineering')
            .click()
        cy.get(job_openings_page.office_select).click()
        cy.get('[id="select2-drop"]')
            .find('[class="select2-result-label"]')
            .contains('Mexico')
            .click()
        cy.get(job_openings_page.job_container)
            .filter(':visible')
            .contains('Sr. QA Engineer')
            .should('exist')
    })

  })

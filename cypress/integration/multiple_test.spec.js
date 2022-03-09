describe('Multiple test', () => {
    beforeEach(() => {
      cy.visit('https://boards.greenhouse.io/tribalcredit')
    })

    it('filter by department and office and verify the results lenght', () => {
        cy.filterJobBy('Blockchain', 'All Offices', 2)
        cy.filterJobBy('Communications and Culture', 'All Offices', 1)
        cy.filterJobBy('Communications and Culture', 'Brazil', 0)
        cy.filterJobBy('Sales and Business Development', 'All Offices', 11)
        cy.filterJobBy('Sales and Business Development', 'Brazil', 2)
        cy.filterJobBy('Sales and Business Development', 'Perú', 3)
        cy.filterJobBy('Sales and Business Development', 'Egypt', 0)
        cy.filterJobBy('Marketing', 'All Offices', 3)
        cy.filterJobBy('Marketing', 'Mexico', 1)
    })

  })

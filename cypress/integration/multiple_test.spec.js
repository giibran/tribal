describe('Multiple test', () => {
    beforeEach(() => {
      cy.visit('https://boards.greenhouse.io/tribalcredit')
    })

    it('filter by department and office and verify the results lenght', () => {
        cy.searchBy('Blockchain', 'All Offices', 2)
        cy.searchBy('Communications and Culture', 'All Offices', 1)
        cy.searchBy('Communications and Culture', 'Brazil', 0)
        cy.searchBy('Sales and Business Development', 'All Offices', 11)
        cy.searchBy('Sales and Business Development', 'Brazil', 2)
        cy.searchBy('Sales and Business Development', 'Perú', 3)
        cy.searchBy('Sales and Business Development', 'Egypt', 0)
        cy.searchBy('Marketing', 'All Offices', 4)
        cy.searchBy('Marketing', 'Mexico', 1)
    })

  })

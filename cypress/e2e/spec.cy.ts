describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // // Find a link with an href attribute containing "about" and click it
    // cy.get('a[href*="about"]').click({ multiple: true })

    // // The new url should include "/about"
    // cy.url().should('include', '/about')

    // The new page should contain an h2 with "About page"
    cy.get('h2').contains('Currently looking for Freelance or Part Time Opportunities')
  })
})
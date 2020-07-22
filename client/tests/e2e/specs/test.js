// https://docs.cypress.io/api/introduction/api.html

describe('App loads', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('p', 'Welcome')
  })
})

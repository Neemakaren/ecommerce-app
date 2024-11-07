describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('passes', () => {
    cy.get('[data-test="spec header"]').should('contain.text', 'Executively')
  })
 
  it('correct li', () => {
    cy.get('[data-test="this header"]').should('contain.text', 'Home')
  })
  // it('cart works correctly', () => {
  //   // cy.get('[data-test="show modal"]').should('be.visible')

    
  //   cy.contains('Cart').should('not.be.visible')
  //   cy.get('[data-test="cart"]').click()
  //   cy.contains('Cart').should('be.visible')
  //   // cy.getDataTest('accordion-item-1').within(() => cy.get('[role=button]').click())
  //   // cy.contains('Your tests will exist in a describe block').should('be.visible')
  //   // cy.getDataTest('accordion-item-1').within(() => cy.get('[role=button]').click())
  //   // cy.contains('Your tests will exist in a describe block').should('not.be.visible')
  // })

  it('Modal Popup', () => {
    cy.get('[data-test="show modal"]').click()
    cy.contains('Cart').should('be.visible')
    cy.contains('Close').should('be.visible')
    // cy.get('[data-test="cart close"]').click()
    // const txt = "close"
    // cy.contains('close', txt).should('not.be.visible')
    // cy.get('[data-test="cart close"]').within(() => cy.get('[role=button]').click())
    // cy.contains('Cart').should('not.be.visible')
    // cy.get('[data-test="cart"]').should('not.be.visible')
  })


  // it("GET API testing Using Cypress API Plugin", () => {
  //   cy.request("GET", "https://dummyjson.com/products?limit=100").should((response) => {
  //     expect(response.status).to.eq(200);
  //   });
  // });
})
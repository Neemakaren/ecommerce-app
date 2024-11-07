// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('http://localhost:5173/categories')
//   })
// })

describe("categories Page", () => {
  // it("GET API testing Using Cypress API Plugin", () => {
  //   cy.request("GET", "https://dummyjson.com/products?limit=100").should((response) => {
  //     expect(response.status).to.eq(200);
  //   });
  // });

  it("displays 10 products on the categories page", () => {
    // cy.visit("/categories")
    // cy.get('[data-test="product-tag"]').should('be.visible')
    // cy.contains('All Categories').should('be.visible')
    // cy.contains(`${product.title}`).should('be.visible')
     /* Verify the number of categories on the page */
     cy.visit('/categories')
    //  cy.get('[data-test="product-tag"]').find('>div').should('have.length', 1)
     cy.get('[data-test^="product-tag"]').should('have.length', 10)
     /* Verify the number of top products on the page */
    //  cy.get('.swiper-wrapper').eq(1).find('>div').should('have.length', 10)
  })

 
})
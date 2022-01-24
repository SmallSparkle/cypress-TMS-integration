export class BookNowPage{
  constructor() {}

  fillPersonalDetails(firstName, lastName) {
    cy.contains('First Name').type(firstName);
    cy.contains('Last Name').type(lastName);
    cy.get('[placeholder="Enter email address "]').click().type(`${firstName}.${lastName}@tourradar.com`);
    cy.contains('Phone Number *').type('234234234243234');
    cy.get('#t7-1').select('23');
    cy.get('#t7-1-month').select('May');
    cy.get('#t7-1-year').select('1988');
  };

  openBookNowPage(id) {
  cy.visit('/book-now/' + id + '?type=book');
  }

  openBookNowPageWithData(id, tourDate){
    cy.visit('/book-now/'+id + '?date=' + tourDate + '&type=book');
  }
  
  checkPageContainsLogo() {
    cy.get('header')
      // TourRadar logo
      .find('svg')
      .should('have.length', 1);
  }
  
  checkPageContainsAgentInfobox() {
      // TR marketing text
      cy.get('.agent-infobox-item ').contains('Book as Travel Agent');
  }
  
  checkPageContainsCSPhone() {
      // CS telephone number linked via tel:
      cy.get('a').should('have.attr', 'href').should('contain', 'tel:');
  }
  
  checkHelpPoup() {
    // Assert that once clicking on the help link we see a popup
    cy.contains('Help').click();
    cy.get('.popup-help').contains('Q&As')
    cy.get('.popup-help').contains('24/7 Customer Support')
    cy.get('.popup-help').contains('Call us +43 720 116651')
  }
  
  checkPayPal() {
    cy.contains('Pay with PayPal').click();
    cy.contains('Click here to sign into your PayPal Account:');
    cy.get('#paypal-container img').should('be.visible');
  }

  selectNationality(nationality) {
    cy.findByRole('combobox', {
      name: 'Nationality *'
    }).select(nationality);
  };

  selectGender() {
    cy.contains('Male').click();
  };

  selectRoom(typOfRoom, countTravallers) {
      // Room selection
      cy.get('[data-value="' + typOfRoom + '"]').select(countTravallers);
  }

  checkAcceptTandC() {
    // Test T&C confirmation
    cy.get('#terms-agree').should('not.be.checked');
    cy.get('#terms-agree + .checkbox-sign').click();
    cy.get('#terms-agree').should('be.checked');
  };

}
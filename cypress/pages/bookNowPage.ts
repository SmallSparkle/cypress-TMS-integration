export class BookNowPage{
  constructor() {}

  fillPersonalDetails(firstName, lastName) {
  cy.allure().step('Fill personal details', true);
    cy.allure().logStep('set last name')
    cy.contains('First Name').type(firstName);

    cy.allure().logStep('set first name') 
    cy.contains('Last Name').type(lastName);

    cy.allure().logStep('set email')  
    cy.get('[placeholder="Enter email address "]').click().type(`${firstName}.${lastName}@tourradar.com`);
    
    cy.allure().logStep('set phone number')
    cy.contains('Phone Number *').type('234234234243234');

    cy.allure().logStep('set birth day')
    cy.get('#t7-1').select('23');
    
    cy.allure().logStep('set birth month')
    cy.get('#t7-1-month').select('May');

    cy.allure().logStep('set birth year')
    cy.get('#t7-1-year').select('1988');
  };

  openBookNowPage(id) {
    cy.allure().logStep('Open BookNow page')
    cy.visit('/book-now/' + id + '?type=book');
  }

  openBookNowPageWithData(id, tourDate){
    cy.allure().logStep('Open BookNow page')
    cy.visit('/book-now/'+id + '?date=' + tourDate + '&type=book');
  }

  selectNationality(nationality) {
    cy.allure().logStep('Select nationality')

    cy.findByRole('combobox', {
      name: 'Nationality *'
    }).select(nationality);
  };

  selectGender() {
    cy.allure().logStep('Select gender')

    cy.contains('Male').click();
  };

  selectRoom(typOfRoom, countTravallers) {
      cy.allure().logStep('Selection room')
      
      cy.get('[data-value="' + typOfRoom + '"]').select(countTravallers);
  }
  
  checkPageContainsLogo() {
    cy.allure().logStep('Chek TourRadar logo is presen')
    cy.get('header')
      .find('svg')
      .should('have.length', 1);
  }
  
  checkPageContainsAgentInfobox() {
      cy.allure().logStep('TR marketing text is displayed')
      cy.get('.agent-infobox-item ').contains('Book as Travel Agent');
  }
  
  checkPageContainsCSPhone() {
      cy.allure().logStep('CS telephone number linked via tel:')
      cy.get('a').should('have.attr', 'href').should('contain', 'tel:');
  }
  
  checkHelpPoup() {
    cy.allure().step('Assert that once clicking on the help link we see a popup', true)

    cy.allure().logStep('chek page contains Help button')
    cy.contains('Help').click();

    cy.allure().logStep('Q&As is displayed')
    cy.get('.popup-help').contains('Q&As')

    cy.allure().logStep('24/7 Customer Support is displayed')
    cy.get('.popup-help').contains('24/7 Customer Support')

    cy.allure().logStep('fone is displayed')
    cy.get('.popup-help').contains('Call us +43 720 116651')
  }
  
  checkPayPal() {
    cy.allure().logStep('Check PayPal is present')
    cy.contains('Pay with PayPal').click();
    cy.contains('Click here to sign into your PayPal Account:');
    cy.get('#paypal-container img').should('be.visible');
  }

  checkAcceptTandC() {
    cy.allure().logStep('Check T&C confirmation')

    cy.get('#terms-agree').should('not.be.checked');
    cy.get('#terms-agree + .checkbox-sign').click();
    cy.get('#terms-agree').should('be.checked');
  };

}
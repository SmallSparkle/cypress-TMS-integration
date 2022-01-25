import { BookNowPage } from "../pages/bookNowPage";

// import { subYears, addMonths, format, addYears } from 'date-fns';

const bookNowPage = new BookNowPage();
const faker = require('@faker-js/faker');

const firstName = faker.name
                        .firstName()
                        .toLowerCase();
const lastName = faker.name
                        .lastName()
                        .toLowerCase();


it('Check for existence of important blocks on BookNow page', () => {
  cy.allure()
  .epic('Booking')
  .feature('Some feature')
  .owner('Anastasiia Bespalova')
  .severity('critical')
  .tag('web', 'login')
  
  bookNowPage.openBookNowPage('28322')
  bookNowPage.checkPageContainsLogo()
  bookNowPage.checkPageContainsAgentInfobox()
  bookNowPage.checkPageContainsCSPhone()
  bookNowPage.checkHelpPoup()
  });

  it('BNP: Chek that Paypal payment option is available', () => {
    cy.allure()
    .epic('Booking')
    .feature('Some feature 2')
    .owner('Diogo Nuno Martins Lopes')
    .severity('critical')
    .tag('web', 'login')

    bookNowPage.openBookNowPageWithData('266', '12.02.2030')
    bookNowPage.checkPayPal()
  });

  it('BNP: Instant booking, accommodation, deposit', () => {
    bookNowPage.openBookNowPageWithData('219085', '30.09.2021')
    bookNowPage.fillPersonalDetails(firstName, lastName);
    bookNowPage.selectGender();
    bookNowPage.selectNationality('Austria');
    bookNowPage.selectRoom('Double room', '1 traveller')
    bookNowPage.checkAcceptTandC();
  });
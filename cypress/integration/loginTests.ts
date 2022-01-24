
beforeEach(function() {
    cy.viewport(1024, 900)
});

it('Login with incorrect data', ()=> {
    cy.visit('/login')
    cy.login('email@gmail.at', 'password')
    cy.get('#message-sign-in').contains('Wrong login data.')
})
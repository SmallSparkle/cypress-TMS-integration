
beforeEach(function() {
    cy.viewport(1024, 900)
});

it('Login with incorrect data', ()=> {
    cy.allure()
        .testID('#6922')
        .owner('Anastasiia Bespalova')
        .severity('critical')
        .tag('web', 'login')

    cy.visit('/login')
    cy.login('email@gmail.at', 'password')
    cy.get('#message-sign-in').contains('Wrong login data.')
})
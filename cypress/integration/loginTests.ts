
beforeEach(function() {
    cy.viewport(1024, 900)
});

it('Login with incorrect data', async ()=> {
    cy.allure()
        .tms('Zephir', 'https://extms.atlassian.net/projects/TEST?selectedItem=com.atlassian.plugins.atlassian-connect-plugin:com.kanoah.test-manager__main-project-page#!/testCase/TEST-T1')
        .issue('Ticket_1', 'https://extms.atlassian.net/jira/software/projects/TEST/boards/1?selectedIssue=TEST-3')
        .testID('#6922')
        .owner('Anastasiia Bespalova')
        .severity('critical')
        .tag('web', 'login')

    cy.visit('/login')
    cy.login('email@gmail.at', 'password')
    cy.get('#message-sign-in').contains('Wrong login data.')
})
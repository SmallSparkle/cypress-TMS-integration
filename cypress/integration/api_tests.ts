describe('TODO api testing', () => {
    let todoItem;
    it('GET main page', () => {
        cy.request('/').as('Request');
        cy.get('@Request').then(todos => {
            expect(todos.status).to.eq(200);
    });
 })
})
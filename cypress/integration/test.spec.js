describe('Pizza App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.get('#order-pizza').click();
    })

    const textInput = () => cy.get('input[name=name]');
    const sizeInput = () => cy.get('select');
    const sauceInput = () => cy.get('input[type="radio"]');
    const toppingsInput = () => cy.get('input[name=topping]');
    const noteInput = () => cy.get('input[name=note]');

    //elements exist
    it('required elements exist', () => {
        textInput().should('exist');
        sizeInput().should('exist');
        sauceInput().should('exist');
        toppingsInput().should('exist');
        noteInput().should('exist');
    })

    describe('input fields are usable', () => {
        it('text inputs accept type', () => {
            textInput()
                .should('include', '')
                .type('nameOfCustomer')
                .should('include', 'nameOfCustomer')

            noteInput()
                .should('include', '')
                .type('a special request made by the customer.')
                .should('include', 'a special request made by the customer.')
        })
    })



}) //END OF TEST
describe('Pizza App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.get('#order-pizza').click();
    })

    const textInput = () => cy.get('input[name=name]');
    const sizeInput = () => cy.get('select');
    const sauceInput = () => cy.get('input[type="radio"]');
    const toppingsInput = () => cy.get('input[name=topping]');
    const noteInput = () => cy.get('textarea[name=note]');
    const submitBtn = () => cy.get(`button[id='submitBtn']`)

    //elements exist
    it('required elements exist', () => {
        textInput().should('exist');
        sizeInput().should('exist');
        sauceInput().should('exist');
        toppingsInput().should('exist');
        noteInput().should('exist');
        submitBtn().should('exist');
    })

    describe('input fields are usable', () => {
        it('text inputs accept type', () => {
            textInput()
                .should('have.value', '')
                .type('nameOfCustomer')
                .should('have.value', 'nameOfCustomer')

            noteInput()
                .should('have.value', '')
                .type('a special request made by the customer.')
                .should('have.value', 'a special request made by the customer.')
        })

        it('dropdown input is functional', () => {
            sizeInput()
                .select('Small')
                .should('have.value', 'sm')

            sizeInput()
                .select('Medium')
                .should('have.value', 'md')

            sizeInput()
                .select('Large')
                .should('have.value', 'lg')            
        })

        it('radio buttons are clickable', () => {
            sauceInput()
                .check()
        })

        it('checkbox fields are operational', () => {
            toppingsInput()
                .check()
        })
    })

    describe('entire form is functioning', () => {
        it('submit button is disabled', () => {
            submitBtn()
                .should('be.disabled')
        })

        it('entire form accepts input', () => {
            textInput()
                .should('have.value', '')
                .type('nameOfCustomer')
                .should('have.value', 'nameOfCustomer')

            sizeInput()
                .select('Medium')
                .should('have.value', 'md')

            sauceInput()
                .first()
                .check()

            toppingsInput()
                .check()

            noteInput()
                .should('have.value', '')
                .type('a special request made by the customer.')
                .should('have.value', 'a special request made by the customer.')

            submitBtn()
                .should('be.enabled')
                .click()
                
        })

    })


}) //END OF TEST
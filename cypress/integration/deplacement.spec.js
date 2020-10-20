describe('Tests attestations derogatoire', () => {

    it('Cas nominal', () => {
        cy.visit('https://media.interieur.gouv.fr/attestation-couvre-feu-covid-19/')
        cy.url().should('contain', 'attestation')
        cy.get('#field-firstname').type('Ouskat').should('have.value', 'Ouskat')
        cy.get('#field-lastname').type('Castex').should('have.value', 'Castex')
        cy.get('#field-birthday').type('16/01/1992')
        cy.get('#field-lieunaissance').type('Paris')
        cy.get('#field-address').type('433 rue du croissant')
        cy.get('#field-town').type('Paris')
        cy.get('#field-zipcode').type('78190')
        cy.get('#field-datesortie').type('2020-10-20')
        cy.get('#field-heuresortie').type('21:00')
        //cy.get('#radio-travail').check()
        cy.get('#radio-sante').check().should('be.checked')

        //cy.contains('Générer mon attestation').click()
        cy.get('#generate-btn').click()

        cy.get('#snackbar').should('be.visible')
    })

})
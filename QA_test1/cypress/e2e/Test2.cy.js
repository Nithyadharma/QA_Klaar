/// <reference types = "cypress"/>

Cypress.config('defaultCommandTimeout', 10000);
Cypress.config('viewportWidth',1200) ;
Cypress.config('viewportHeight',1200) ;
describe('QA_Test2.1',function()     {

    beforeEach(function() {
                
        cy.login('deepa.nayak@gamma.klaar.team','Klaar2021');        
        
    })      
    

    it( 'User List page', ()=> {
    
        
        cy.visit("https://dev.klaarhq.com")
        cy.get('[data-cy="settings-nav-menu-button"]').click();
        //Landing on UserList page
        cy.get('[data-cy="workspace-settings-nav-menu-button"] > .ant-menu-submenu > .ant-menu > ul.ng-star-inserted > :nth-child(3) > [data-cy="submenu-button"]').click()
        
        //Verifying all users tab
        cy.get('.ant-tabs-tab-active > .ant-tabs-tab-btn').contains('All Users').click();

  
        //Adding new user
        let username = 'Randy6'
        cy.get('[data-cy="settings-user-list-add-user-button"]').click();
        cy.get('[data-cy="settings-user-list-add-single-user-button"]').click();

        cy.get('[data-cy="settings-add-user-full-name-text-field"]').type(username)
        cy.get('[data-cy="settings-add-user-email-text-field"]').type('Randy6user@gamma.test')
        cy.get('[data-cy="settings-add-user-select-department-dropdown-area"] > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input').click()
        cy.contains('Human Resource').click({force: true})
        cy.get('[data-cy="settings-add-user-select-title-dropdown-area"] > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input').click()
        cy.get(':nth-child(1) > .ant-select-item-option-content').click()        
        cy.get('[data-cy="settings-add-user-select-manager-dropdown-area"] > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input').click()
        cy.get('[title="Akshay (akshat@xyx.com)"] > .ant-select-item-option-content').click()
        cy.get('[data-cy="settings-add-user-select-hrbp-dropdown-area"] > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input').click()
        cy.get('[title="Akshay (akshat@xyx.com)"] > .ant-select-item-option-content').click()
        
        
        cy.get('[data-cy="settings-add-user-id-text-field"]').type(username)
        cy.get('[data-cy="settings-add-user-location-text-field"]').type('Bangalore')
        cy.get('[data-cy="modal-submit-button"]').click()
        cy.wait(2000);
        
        //Verifying the landing page after adding user is edit page
        
        cy.get('[data-cy="page-heading-field"]').should('have.text','Edit User')
        cy.get('.ant-btn > .anticon').click()
        cy.wait(1000)

       //Returning to all user page
       cy.get('[data-cy="workspace-settings-nav-menu-button"] > .ant-menu-submenu > .ant-menu > ul.ng-star-inserted > :nth-child(3) > [data-cy="submenu-button"]').click()
       cy.contains('User List')
       cy.get('[data-cy="user-list-search-text-field"]').type(username)
       cy.contains(username).should('exist'); 

    })
})
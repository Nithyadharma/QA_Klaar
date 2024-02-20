/// <reference types = "cypress"/>


Cypress.config('defaultCommandTimeout', 10000);
Cypress.config('viewportWidth',1200) ;
Cypress.config('viewportHeight',1200) ;
describe('QA_Test3',function()     {

    
    beforeEach(function() {
                
        cy.login('deepa.nayak@gamma.klaar.team','Klaar2021');        
        
    })

    let doj = 'Data of joining1'
    let lis = 'Loc1'
    it( 'User Custom fields page', ()=> {
    
        //Landing on UserList page and Custom field menu
        cy.visit("https://dev.klaarhq.com")
        cy.get('[data-cy="settings-nav-menu-button"]').click();
        cy.get('[data-cy="workspace-settings-nav-menu-button"] > .ant-menu-submenu > .ant-menu > ul.ng-star-inserted > :nth-child(3) > [data-cy="submenu-button"]').click()
        cy.get(':nth-child(3) > .ant-tabs-tab-btn').contains('Custom Fields').click();

        //Adding new custom field - Date

        cy.get('.ant-btn-primary').click()
        cy.get('.ant-select-selection-search-input').click()
        cy.get('[title="Date"] >.ant-select-item-option-content').click()
        cy.get(':nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content >').type(doj)
        
        cy.get('[data-cy="modal-submit-button"]').click()
        cy.wait(2000) 

        //Adding new custom field - List

        cy.get('.ant-btn-primary').click()
        cy.get('.ant-select-selection-search-input').click()
        cy.get('[title="List"] >.ant-select-item-option-content').click()
        cy.get(':nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content >').type(lis)
        cy.get('.tw-w-40').type('Bang')
        cy.get('.ant-row > .tw-justify-end > .ant-btn').click()
        cy.get(':nth-child(1) > .tw-flex > .tw-w-40').type('Delhi')
        cy.get('.ant-row > .tw-justify-end > .ant-btn').click()
        cy.get(':nth-child(1) > .tw-flex > .tw-w-40').type('Mumbai')
        cy.get('[data-cy="modal-submit-button"]').click()      
        cy.wait(2000)
        
    }) 

    it( 'Checking added custom fields are visible in user details', ()=> {
    
        //Finding the added custom field is visible for user
        cy.visit("https://dev.klaarhq.com")        
        cy.get('[data-cy="settings-nav-menu-button"]').click();
        cy.get('[data-cy="workspace-settings-nav-menu-button"] > .ant-menu-submenu > .ant-menu > ul.ng-star-inserted > :nth-child(3) > [data-cy="submenu-button"]').click()
        cy.wait(1000)
        cy.get('[data-cy="page-heading-field"]').should('have.text','User List')
        cy.get(':nth-child(1) > [data-cy="user-list-user-email-field"] > .tw-flex.ng-star-inserted').click()
        cy.get('[data-cy="page-heading-field"]').should('have.text','Edit User')

        cy.get(':nth-child(2) > .ant-tabs-tab-btn').click()
        cy.contains(lis).should('exist')
        
    }); 
          
         
    
    it( 'Deactivate / Activate an existing custom field', ()=> {
    
        //Making the custom field activate/Deactivate using toggle button
        cy.visit("https://dev.klaarhq.com")
        cy.get('[data-cy="settings-nav-menu-button"]').click();

        cy.get('[data-cy="workspace-settings-nav-menu-button"] > .ant-menu-submenu > .ant-menu > ul.ng-star-inserted > :nth-child(3) > [data-cy="submenu-button"]').click()
        cy.get(':nth-child(3) > .ant-tabs-tab-btn').contains('Custom Fields').click();

        cy.contains('tr',doj)
        .find('td:nth-child(3) > [data-cy="settings-user-fields-custom-field-switch-button"] > .ant-switch').click()
        
      
        //Checking whether the deactivated custom field not visible in company detail page
        cy.get('[data-cy="settings-nav-menu-button"]').click();
        cy.get('[data-cy="workspace-settings-nav-menu-button"] > .ant-menu-submenu > .ant-menu > ul.ng-star-inserted > :nth-child(3) > [data-cy="submenu-button"]').click()
        cy.wait(1000)
        cy.get('[data-cy="page-heading-field"]').should('have.text','User List')
        cy.get(':nth-child(1) > [data-cy="user-list-user-email-field"] > .tw-flex.ng-star-inserted').click()
        cy.get('[data-cy="page-heading-field"]').should('have.text','Edit User')
        cy.get(':nth-child(2) > .ant-tabs-tab-btn').click()
        cy.contains(doj).should('not.exist');          
          
    })   

    it( 'Deleting a custom field', ()=> {
    
        //Deleting a custom field 
        cy.visit("https://dev.klaarhq.com")
        cy.get('[data-cy="settings-nav-menu-button"]').click();

        cy.get('[data-cy="workspace-settings-nav-menu-button"] > .ant-menu-submenu > .ant-menu > ul.ng-star-inserted > :nth-child(3) > [data-cy="submenu-button"]').click()
        cy.get(':nth-child(3) > .ant-tabs-tab-btn').contains('Custom Fields').click();

        cy.contains('tr',lis)
        .find('td:nth-child(4) > .ant-row > [nztooltiptitle="Delete Field"] > .anticon > svg').click()
        cy.contains('tr',doj)
        .find('td:nth-child(4) > .ant-row > [nztooltiptitle="Delete Field"] > .anticon > svg').click()
        
        //Checking whether the deleted custom field not visible in company detail page
        cy.get('[data-cy="settings-nav-menu-button"]').click();
        cy.get('[data-cy="workspace-settings-nav-menu-button"] > .ant-menu-submenu > .ant-menu > ul.ng-star-inserted > :nth-child(3) > [data-cy="submenu-button"]').click()
        cy.wait(1000)
        cy.get('[data-cy="page-heading-field"]').should('have.text','User List')
        cy.get(':nth-child(1) > [data-cy="user-list-user-email-field"] > .tw-flex.ng-star-inserted').click()
        cy.get('[data-cy="page-heading-field"]').should('have.text','Edit User')
        cy.get(':nth-child(2) > .ant-tabs-tab-btn').click()
        cy.contains(lis).should('not.exist');          
          
    })  
})
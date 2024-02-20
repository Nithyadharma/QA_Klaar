
/// <reference types = "cypress"/>

Cypress.config('defaultCommandTimeout', 10000);
Cypress.config('viewportWidth',1200) ;
Cypress.config('viewportHeight',1200) ;
describe('QA_Test1.1',function()     {

    beforeEach(function(){
        cy.visit("https://dev.klaarhq.com")
        cy.get('[data-cy="login-with-klaar-button"] > .tw-flex-col').click()
        })

     it ('Login with correct credientials', ()=> {  

        //verifying Login with correct Email and password        
        cy.get('[data-cy="login-email-text-field"]').type('deepa.nayak@gamma.klaar.team');
        cy.get('[data-cy="login-password-text-field"]').type('Klaar2021');
        cy.get('[data-cy="login-submit-button"]').click();
        cy.wait(3000);
        cy.get('.user-name').click();
        cy.get('[data-cy="logout-button"] > .tw-justify-self-start').click();
        })

    it ('Login with incorrect credientials', ()=> {  
        
        //Verifying login with incorrect Email and password
        
        cy.get('[data-cy="login-email-text-field"]').type('deepa.nay@gam.klaar.team');
        cy.get('[data-cy="login-password-text-field"]').type('Klar2021');
        cy.get('[data-cy="login-submit-button"]').click();
        cy.wait(3000);           
        cy.contains('Sorry');
        }) 


    it ('Checking the Workspace setting page', ()=> {

        //Navigating to workspace setting page and verifying it
        cy.login('deepa.nayak@gamma.klaar.team','Klaar2021');
        cy.visit("https://dev.klaarhq.com")
        cy.get('[data-cy="settings-nav-menu-button"]').click();
        cy.get('[data-cy="workspace-settings-heading"]').contains("Workspace Settings");
        })
}) 

describe('QA_Test1.2',function()     {

    
    beforeEach(function() {
                
        cy.login('deepa.nayak@gamma.klaar.team','Klaar2021');        
    })

    
     it( 'Simple functional testing of workspace setting page', ()=> {
    
        let name1 = 'Klaar345'
        //Checking if the workspace name is editable   
        cy.visit("https://dev.klaarhq.com")
        cy.get('[data-cy="settings-nav-menu-button"]').click();
        cy.get('[data-cy="workspace-settings-heading"]').contains("Workspace Settings");  
        cy.get('[data-cy="settings-workspace-name-field"]').clear();
        cy.get('[data-cy="settings-workspace-name-field"]').type(name1);
        cy.get('[data-cy="settings-workspace-save-changes-button"]').click();        
        
        //Checking if a new Organization head name can be added
        cy.wait(20000);
        cy.get('[data-cy="settings-nav-menu-button"]').click();
        cy.get('.ant-select-selector').click()
        .get('.ant-select-item-option-active > .ant-select-item-option-content > [data-cy="settings-organization-list-dropdown-name-field"] > .main')
        .first().click();
        cy.get('[data-cy="settings-organization-save-button"] ').click(); 
        cy.wait(5000); 
        }) 

    it( 'Adding workspace logo', ()=> {
    
        //Adding a workspace logo in workspace setting page
        cy.visit("https://dev.klaarhq.com")
        cy.get('[data-cy="settings-nav-menu-button"]').click();
        cy.get('[data-cy="workspace-settings-heading"]').contains("Workspace Settings");
        cy.get('.uploadCard > .ant-card-body').invoke('text').then((text) => {
            if (text.includes('Choose File')) {
              
                cy.get('[data-cy="settings-choose-workspace-logo-button"]').click()        
                cy.get('.ant-upload-drag > .ant-upload').selectFile('cypress/fixtures/Logo.png' , { action: "drag-drop" , })
                cy.get('[data-cy="settings-workspace-logo-save-upload-button"]').click()
            } 
        })
    });

    it( 'Editing workspace logo', ()=> {
        
        //Editing workspace logo by changing already existing one by replacing another logo in workspace setting page
        cy.visit("https://dev.klaarhq.com")
        cy.get('[data-cy="settings-nav-menu-button"]').click();
        cy.get('[data-cy="workspace-settings-heading"]').contains("Workspace Settings");
        cy.get('[data-cy="settings-workspace-logo-edit-button"]').click()
        cy.get('.ant-upload-drag > .ant-upload').selectFile('cypress/fixtures/Nila2.png' , { action: "drag-drop" , })
        cy.get('[data-cy="settings-workspace-logo-save-upload-button"]').click()
            
                
        
    })
    it( 'Deleting workspace logo', ()=> {
        
        //Deleting the workspace logo
        cy.visit("https://dev.klaarhq.com")
        cy.get('[data-cy="settings-nav-menu-button"]').click();
        cy.get('[data-cy="workspace-settings-heading"]').contains("Workspace Settings");
        cy.get('[data-cy="settings-workspace-logo-delete-button"]').click()
        cy.get('[data-cy="settings-workspace-logo-confirm-delete-button"]').click()
            
    
    })
})

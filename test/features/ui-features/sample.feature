@UILogin @WebStudio
Feature: Login 2


Scenario: Login 2
Given I login in to Web Studio
  And I set the text 'ABCD' in SearchText on WelcomeView  
  And I click 'Search' on WelcomeView
  And I click 'Edit' on WelcomeView 
  And I click 'StartEdit' on WelcomeView


Scenario: Login 3
Given I login in to Web Studio
  And I set the text 'ABCD' in SearchText on WelcomeView  
  And I click 'Search' on WelcomeView
  And I click 'Edit' on WelcomeView 
  And I click 'StartEdit' on WelcomeView
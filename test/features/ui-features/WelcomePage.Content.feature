 @UILogin @ApiClient @UIPOC
Feature: IC-150920 and IC-150921
Test Case Description: [CXS][Welcome Page][Content] The contents of the root folder should be displayed in the Table View
Test Case Description: [CXS][Welcome Page][Content] The contents of a subfolder should be displayed in the Table View

@IC-150920
Scenario: The contents of the root folder should be displayed in the Table View
Given I login in to Web Studio  
Then I should see in WebStudio the following values displayed
    | TYPE   | NAME          |
    | folder | AG_Scripts    |
    | folder | ATest01       |
    | folder | claudio       |
    | folder | Michael       |
    | folder | Oscar         |
    | folder | Test AA1      |
    | call   | anotate       |
    | chat   | Chat          |
    | digital| DigitalScript |
    | email  | EMail         |
When I send a GET request to "/InContactAPI/services/v21.0/script-folders" url
Then I should see the following data from API response into "scriptList" field
    | Fields     | Values        |
    | scriptName | AG_Scripts    |
    | scriptName | ATest01       |
    | scriptName | claudio       |
    | scriptName | Michael       |
    | scriptName | Oscar         |
    | scriptName | Test AA1      |
    | scriptName | anotate       |
    | scriptName | Chat          |
    | scriptName | DigitalScript |
    | scriptName | EMail         |

@IC-150921
Scenario: The contents of a subfolder should be displayed in the Table View
Given I login in to Web Studio   
When I navigate in WebStudio to AG_Scripts
Then I should see in WebStudio the following values displayed
    | TYPE | NAME            |
    | na   | Basic_Script    |
    | call | IB_Phone_Script |
When I send a GET request to "/InContactAPI/services/v21.0/script-folders" with params        
    | folder | AG_Scripts |
    | top    | 20         |    
Then I should see the following data from API response into "scriptList" field
    | Fields        | Values                      |    
    | scriptName    | AG_Scripts\\IB_Phone_Script |    
    | scriptName    | AG_Scripts\\Basic_Script    |


Scenario: The contents of a subfolder ATtest02 should be displayed in the Table View 
Given I login in to Web Studio   
When I navigate in WebStudio to ATest01 > ATest02 
Then I should see in WebStudio the following values displayed
    | TYPE | NAME    |
    | sms  | ATest03 |   
When I send a GET request to "/InContactAPI/services/v21.0/script-folders" with params        
    | folder | ATest01\ATest02 |
    | top    | 20              |
Then I should see the following data from API response into "scriptList" field
    | Fields     | Values                    |
    | scriptName | ATest01\\ATest02\\ATest03 |   






@ApiClient @APIPOC
Feature: POST Actions API request


Scenario: Search Actions POST
Given I send a POST request to "/InContactAPI/services/v22.0/actions/search" with the following json body
"""
    {
        "ids": [    
            "BBE8C48D-514F-45A0-ADC7-0CC611DD2FB5",
            "536B7FED-C1C6-4CE9-969B-D9C372E5C89F",
            "76B6972A-AEE1-420A-84F7-6C7980C2F841"
            ]
    }
"""
Then I validate the response status code is "200"


Scenario: Agents GET
Given I send a GET request to "/InContactAPI/services/v21.0/agents" url
Then I validate the response status code is "200"




import { GetElement } from "./base.steps";
import { Given, Then, When } from '@cucumber/cucumber';
import { DriverManager } from "../../../core/driver/DriverManager";
import { Table } from "../../../core/elements/table";
import { assert, expect } from "chai";
import { IConfig } from "../../../core/interfaces/IConfig";
import { RequestManager } from "../../../api-core/core/RequestManager";

let config: IConfig = require('../../../playwright.config.json');

Given('I login in to Web Studio', async function () {
    console.log("*********** I LOGIN");   
    //Set Credentials
    await GetElement('Username', 'LoginView').setText(config.username);
    await GetElement('Next', 'LoginView').click();
    await GetElement('Password', 'LoginView').setText(config.password);
    await GetElement('SignIn', 'LoginView').click();
    await DriverManager.getInstance().waitForElement(await GetElement('Admin', 'CXOneView').locator);

    // Go to WebStudio
    await GetElement('Launcher', 'CXOneView').click();
    await GetElement('LaunchWebStudio', 'CXOneView').click();

    await DriverManager.getInstance().switchWindow();

    // LOCAL EXECUTION
    // const token = "TOKEN";

    // await GetElement('token', 'HomeView').setText(token);
    // await GetElement('landingOption', 'HomeView').select("acd");
    // await GetElement('manualAuthentication', 'HomeView').click();
});

Given(/I navigate in WebStudio to((.+)|( > (.+))*)/, async function (options: string) {
    const table = new Table("WebStudioTable", "");
    await table.navigateTo(options.split(" > "));    
});

Then('I should see in WebStudio the following values displayed', async function (data) {    
    const rows =  await data.hashes();    
    const table = new Table("WebStudioTable", "");
    const expectedValue = await table.validateCells(rows); 
    
    assert.isTrue(expectedValue);
  });

  Then('I compare the items displayed based by GET Script-Folders API with the following params', async function (dataTable) {
    const params = dataTable.rowsHash();

    //GET API Script-Folders
    const response = await RequestManager.Get("/InContactAPI/services/v21.0/script-folders", params);

    // Create a List of the Script information from API response
    const bodyResponse = JSON.parse(JSON.stringify(response.data));    
    const scripts = bodyResponse["scriptList"];

    let apiScripts = [];

    for (const script of scripts) {
        apiScripts.push({ 
            TYPE: (script["isFolder"]) ? "folder": script["mediaTypeName"],
            NAME: script["scriptName"].replace(/(?:(?:.+)\\)/g, "")
        });
    }

    //Validate items from API in UI
    const table = new Table("WebStudioTable", "");
    const expectedValue = await table.validateCells(apiScripts); 
    assert.isTrue(expectedValue);
  });

Given(/I set the text '([\w]+?)' in ([\w]+)(?: on (\w+))*/, async function (inputText: string,element: string, view: string) {
    console.log("*********** I SET Text") ;   
    await GetElement(element, view).setText(inputText);
});

Given(/I click '([\w]+?)'(?: on (\w+))*/, async function (element: string, view: string) {
    console.log("*********** I CLICK");    
    await GetElement(element, view).click();
});


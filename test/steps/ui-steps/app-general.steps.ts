import { Given } from "@cucumber/cucumber";
// import { DriverManager } from "@uielement/driver/driver-manager";
// import { Config } from "@uielement/interfaces/structures/config.structure";
import { DriverManager } from "../../../src/ui-core/driver/driver-manager";
import { Config } from "../../../src/ui-core/interfaces/structures/config.structure";
import { GetElement } from "./base-hooks.steps";

let config: Config = require('../../../playwright.config.json');

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
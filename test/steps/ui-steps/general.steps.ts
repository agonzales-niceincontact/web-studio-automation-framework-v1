import { GetElement } from "./base-hooks.steps";
import { Given, Then, When } from '@cucumber/cucumber';
import { Table } from "../../../src/ui-core/elements/table.element";

Given(/I navigate in WebStudio to((.+)|( > (.+))*)/, async function (options: string) {
    const table = new Table("WebStudioTable", "");
    await table.navigateTo(options.split(" > "));    
});

Given(/I set the text '([\w]+?)' in ([\w]+)(?: on (\w+))*/, async function (inputText: string,element: string, view: string) {
    console.log("*********** I SET Text") ;   
    await GetElement(element, view).setText(inputText);
});

Given(/I click '([\w]+?)'(?: on (\w+))*/, async function (element: string, view: string) {
    console.log("*********** I CLICK");    
    await GetElement(element, view).click();
});


import { GetElement } from "./base.steps";

const assert = require('assert');
import { Given, When, Then } from '@cucumber/cucumber';

Given('I login in to Web Studio', async function () {
    console.log("*********** I LOGIN");
    // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpY0JVSWQiOjQwOCwibmFtZSI6ImFyaWVsLmdvbnphbGVzQGRvODYuY29tIiwiaXNzIjoiYXBpLWRvODYuZGV2Lm5pY2UtaW5jb250YWN0LmNvbSIsInN1YiI6InVzZXI6MTA0MSIsImF1ZCI6ImludGVybmFsQGluQ29udGFjdCBJbmMuIiwiZXhwIjoxNjM0MTM2MDM1LCJpYXQiOjE2MzQxMzI0MzYsImljU2NvcGUiOiIxLDIsNCw1LDcsOCIsImljQ2x1c3RlcklkIjoiRE84NiIsImljQWdlbnRJZCI6MTA0MSwiaWNTUElkIjo3LCJnaXZlbl9uYW1lIjoiQXJpZWwiLCJmYW1pbHlfbmFtZSI6IkdvbnphbGVzIiwibmJmIjoxNjM0MTMyNDM1fQ.JFlpHF9C72hldddF_nWPknsz064FxklcE6Is_GxB1IFaXfNuOKUJYNo-7yB_gtFkw-Lu6vKulz4JTIE-ehT1CUtHJ3svuJO4Xo2RUlaKwm55F36HBi7cqNeU4F-4TNY4Z81LRXuzpC4J_TaoenMHTNxOv25-2jX3PLZK_-byi2vxnwwaGaCic2LDXzCRabmO6eXzWnPxJ62BuUUrgTP912-cfCv2JZGl6HHgWlUHvQOHgqIz7HGF0kE_PY9NZRVBeqddCxI3ugmJBwCv2cFFoB-6ZfY6sTjNKxRTitj5AHjRcQqPPaR4mnct542Jzij8tc9luWKjX76uoe4z7R989Q';
    
    // await GetElement('token', 'HomeView').setText(token);
    // await GetElement('landingOption', 'HomeView').select("acd");
    // await GetElement('manualAuthentication', 'HomeView').click();
});

Given(/I set the text '([\w]+?)' in ([\w]+)(?: on (\w+))*/, async function (inputText: string,element: string, view: string) {
    console.log("*********** I SET Text")    
    await GetElement(element, view).setText(inputText);
});

Given(/I click '([\w]+?)'(?: on (\w+))*/, async function (element: string, view: string) {
    console.log("*********** I CLICK");    
    await GetElement(element, view).click();
});


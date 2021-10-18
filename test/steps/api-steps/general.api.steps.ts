import { Given, When, Then } from '@cucumber/cucumber';
const assert = require('assert');

import { RequestManager } from "../../../api-core/core/RequestManager";


let response: any;

Given(/I send a GET request to "(.+)" url/, {timeout: 3 * 5000}, async function (urlRequest: string) {
    console.log("*********** GET API Request");
    response = await RequestManager.Get(urlRequest);    
});

Given(/I send a POST request to "(.+)" with the following json body/, {timeout: 3 * 5000}, async function (urlRequest: string, bodyRequest: string) {
    console.log("*********** POST API Request");
    const body = await JSON.parse(bodyRequest);
    response = await RequestManager.Post(urlRequest, body);    
});


Then(/I validate the response status code is "([\d]{3})"/, async function (statusCode: string) {
    console.log("*********** VALIDATE STATUS CODE");
    await assert.strictEqual(response.status, Number(statusCode));
});

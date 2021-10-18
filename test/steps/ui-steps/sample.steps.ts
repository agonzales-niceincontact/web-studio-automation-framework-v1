import { Given, When, Then } from '@cucumber/cucumber';
const assert = require('assert');

let today: string = '';
let actualAnswer: string = '';


function isItFriday(today: string): string {
    if (today === "Friday") {
        return "TGIF";
    } else {
        return "Nope";
    }
}

Given('today is {string}', function (givenDay: string) {
    
    today = givenDay;
});

When('I ask whether it\'s Friday yet', function () {
    actualAnswer = isItFriday(today);
});

Then('I should be told {string}', function (expectedAnswer: string) {
    assert.strictEqual(actualAnswer, expectedAnswer);
});
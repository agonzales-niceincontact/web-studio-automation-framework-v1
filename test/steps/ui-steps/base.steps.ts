import { DriverManager } from "../../../core/driver/DriverManager";
import { ElementManager } from "../../../core/pages/ElementManager";

import { After, Before } from '@cucumber/cucumber';

var {setDefaultTimeout} = require('@cucumber/cucumber');

setDefaultTimeout(60 * 1000);

let driver: DriverManager;

Before({tags: '@UILogin'}, async function () {
  console.log("Launch Browser");
  driver = DriverManager.getInstance(); 
  await driver.Start();    
});

After({tags: '@UILogin'}, async function() {
  console.log("Close Browser");
    await driver.Close();    
});

export function GetElement(elementName: string, ViewName: string) {
  const elem = new ElementManager();
  return elem.getElement(elementName, ViewName);
}
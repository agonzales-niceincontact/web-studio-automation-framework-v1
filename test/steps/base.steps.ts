import { DriverManager } from "../../core/driver/DriverManager";
import { ElementManager } from "../../core/pages/ElementManager";

const {After, Before, AfterAll } = require('@cucumber/cucumber');

let driver: DriverManager;

Before({tags: '@login'}, async function () {
  console.log("Launch Browser");
  driver = DriverManager.getInstance(); 
  await driver.Start();    
});

After({tags: '@logout'}, async function() {
  console.log("Close Browser");
    await driver.Close();    
});


export function GetElement(elementName: string, ViewName: string) {
  const elem = new ElementManager();
  return elem.getElement(elementName, ViewName);
}

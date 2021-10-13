// import { after, before, binding, given, ScenarioInfo, then, when} from 'cucumber-tsflow';
// import { DriverManager } from '../../core/driver/DriverManager';
// import { ElementManager } from '../../core/pages/ElementManager';

// @binding()
// export class BaseSteps {

// driver: DriverManager;
// // viewName: string = "";
// // let validator =  new DriverManager()

// constructor(){
//     this.driver = DriverManager.getInstance(); 
//     // this.driver.Start();    
// }

// protected GetElement(elementName: string, ViewName: string) {
//   const elem = new ElementManager();
//   return elem.getElement(elementName, ViewName);
// }

// @before()
// public InitDriver() {
//     console.log("***** START DRIVER ******");  
//     this.driver.Start(); 
//   }     

// @after()
// public closeScneario() {
//     console.log("***** END DRIVER ******"); 
//     // this.driver.Close();
//     // setTimeout(() => {
//     //   this.driver.Close();
//     // }, 10000);    
//   }
// }

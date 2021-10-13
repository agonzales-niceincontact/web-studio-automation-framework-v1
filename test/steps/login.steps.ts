// import { binding, given, then, when} from 'cucumber-tsflow';
// import { assert } from 'chai';
// import { BaseSteps } from './base.steps';
// import { Button } from '../../core/elements/button';
// import { ElementManager } from '../../core/pages/ElementManager';

// @binding()
// export class LoginSteps extends BaseSteps{
//   constructor(){
//     super();
//   }

//   @given(/I login in to Web Studio/)
//   public async ILogiintoWebStudio() {
//     console.log("*********** I LOGIN");
//     // await elem.getElement("SearchName", "WelcomeView").click();  
//     // this.GetElement("SearchName", "WelcomeView").click();
//   }

  
//   @given(/I click '([\w]+?)'(?: on (\w+))*/)
//   public async IClickElement(element: string, view: string) {
//     console.log("*********** I CLICK");
//     // (await this.driver.getPage()).fill('input[name="search"]', ' ALALA');    
//     // this.GetElement("SearchText", "WelcomeView").setText("ALALA");
//     this.GetElement(element, view).click();
//   }

//   @when(/I set the text '([\w]+?)' in ([\w]+)(?: on (\w+))*/)
//   public async ISetTextInElement(inputText: string,element: string, view: string) {
//     console.log("+++++++++++ I SET TEXT");
//     // (await this.driver.getPage()).fill('input[name="search"]', 'Bob Marley'); 
//     this.GetElement(element, view).setText(inputText);    
//   }
// }
import { ElementType } from "../enums/element-type.enum";
import { ButtonActions } from "../interfaces/element-actions/button.actions";
import { BaseElement } from "./base.element";

export class Button extends BaseElement implements ButtonActions {       
    
    constructor(name: string, locator: string) {        
        super(name, locator, ElementType.Button);        
    }

    async click(): Promise<void> {
       await (await this.driver.getPage()).click(this.locator);
    }
}

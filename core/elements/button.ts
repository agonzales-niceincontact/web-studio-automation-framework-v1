import { ElementType } from "../enums/elementType";
import { IButton } from "../interfaces/IButton";
import { BaseElement } from "./baseelement";

export class Button extends BaseElement implements IButton {       
    
    constructor(name: string, locator: string) {        
        super(name, locator, ElementType.Button);        
    }

    async click(): Promise<void> {
       await (await this.driver.getPage()).click(this.locator);
    }
}


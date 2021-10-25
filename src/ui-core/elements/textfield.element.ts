import { ElementType } from "../enums/element-type.enum";
import { TextfieldActions } from "../interfaces/element-actions/textfield.actions";
import { BaseElement } from "./base.element";

export class TextField extends BaseElement implements TextfieldActions {         

    constructor(name: string, locator: string) {        
        super(name, locator, ElementType.TextField);        
    }

    async setText(inputText: string): Promise<void> {          
        await (await this.driver.getPage()).fill(this.locator, inputText);
    }

    getText(): string {
        throw new Error("Method not implemented.");
    }
}

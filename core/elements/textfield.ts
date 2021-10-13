import { ElementType } from "../enums/elementType";
import { ITextfield } from "../interfaces/ITextField";
import { BaseElement } from "./baseelement";

export class TextField extends BaseElement implements ITextfield {         

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



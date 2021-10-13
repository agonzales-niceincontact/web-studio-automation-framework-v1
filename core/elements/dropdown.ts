import { ElementType } from "../enums/elementType";
import { IDropdown } from "../interfaces/IDropdown";
import { BaseElement } from "./baseelement";

export class Dropdown extends BaseElement implements IDropdown {       
    
    constructor(name: string, locator: string) {        
        super(name, locator, ElementType.Dropdown);        
    }

    async select(option: string): Promise<void> {
        await (await this.driver.getPage()).selectOption(this.locator, option);
    }
}
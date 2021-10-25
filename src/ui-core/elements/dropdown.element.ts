import { ElementType } from "../enums/element-type.enum";
import { DropdownActions } from "../interfaces/element-actions/dropdown.actions";
import { BaseElement } from "./base.element";

export class Dropdown extends BaseElement implements DropdownActions {       
    
    constructor(name: string, locator: string) {        
        super(name, locator, ElementType.Dropdown);        
    }

    async select(option: string): Promise<void> {
        await (await this.driver.getPage()).selectOption(this.locator, option);
    }
}

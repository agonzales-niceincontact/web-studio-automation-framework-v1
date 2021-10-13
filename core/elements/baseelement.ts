import { DriverManager } from "../driver/DriverManager";
import { ElementType } from "../enums/elementType";
import { IButton } from "../interfaces/IButton";
import { IDropdown } from "../interfaces/IDropdown";
import { ITextfield } from "../interfaces/ITextField";

export class BaseElement implements IButton, ITextfield, IDropdown{
    name: string;
    locator: string;
    elementType: ElementType;
    driver: DriverManager;

    constructor(name: string, locator: string, elementType: ElementType) {    
        this.name = name;
        this.locator = locator;
        this.elementType = elementType;
        this.driver = DriverManager.getInstance();
    }

    //Dropdown Methods
    select(option: string): void {
        throw new Error("Method not implemented.");
    }

    //Textfield Methods
    setText(inputText: string): void {
        throw new Error("Method not implemented.");
    }
    
    getText(): string {
        throw new Error("Method not implemented.");
    }

    //Button Methods
    click(): void {
        throw new Error("Method not implemented.");
    }
}

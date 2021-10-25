import { DriverManager } from "../driver/driver-manager";
import { ElementType } from "../enums/element-type.enum";

export class BaseElement{
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
}

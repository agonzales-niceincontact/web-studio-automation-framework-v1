import { ElementType } from "../enums/element-type.enum";
import { ElementStructure } from "../interfaces/structures/element.structure";
import { Page } from "../interfaces/page";

export class HomePage implements Page {
    
    token: ElementStructure = {
        name: "token",
        locator: '//textarea',
        locatorType: ElementType.TextField
    }

    landing_select: ElementStructure = {
        name: "landingOption",
        locator: '//select',
        locatorType: ElementType.Dropdown
    }

    manual_authentication: ElementStructure = {
        name: "manualAuthentication",
        locator: '//button',
        locatorType: ElementType.Button
    }
}




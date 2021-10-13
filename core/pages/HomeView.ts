import { ElementType } from "../enums/elementType";
import { UIElementStructure } from "../interfaces/ui-element-structure";
import { IView } from "./IView";

export class HomeView implements IView {
    
    token: UIElementStructure = {
        name: "token",
        locator: '//textarea',
        locatorType: ElementType.TextField
    }

    landing_select: UIElementStructure = {
        name: "landingOption",
        locator: '//select',
        locatorType: ElementType.Dropdown
    }

    manual_authentication: UIElementStructure = {
        name: "manualAuthentication",
        locator: '//button',
        locatorType: ElementType.Button
    }
}




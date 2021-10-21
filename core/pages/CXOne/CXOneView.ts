import { ElementType } from "../../enums/elementType"
import { UIElementStructure } from "../../interfaces/ui-element-structure"
import { IView } from "../IView"

export class CXOneView implements IView {
    
    launcher: UIElementStructure = {
        name: "Launcher",
        locator: '#launcher',
        locatorType: ElementType.Button
    }

    launchWebStudio: UIElementStructure = {
        name: "LaunchWebStudio",
        locator: '#webStudio',
        locatorType: ElementType.Button
    }

    adminTab: UIElementStructure = {
        name: "Admin",
        locator: '#module-picker-link',
        locatorType: ElementType.Button
    }
}

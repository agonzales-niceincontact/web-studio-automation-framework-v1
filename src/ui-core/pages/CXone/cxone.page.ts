import { ElementType } from "../../enums/element-type.enum"
import { ElementStructure } from "../../interfaces/structures/element.structure"
import { Page } from "../../interfaces/page"

export class CXonePage implements Page {
    
    launcher: ElementStructure = {
        name: "Launcher",
        locator: '#launcher',
        locatorType: ElementType.Button
    }

    launchWebStudio: ElementStructure = {
        name: "LaunchWebStudio",
        locator: '#webStudio',
        locatorType: ElementType.Button
    }

    adminTab: ElementStructure = {
        name: "Admin",
        locator: '#module-picker-link',
        locatorType: ElementType.Button
    }
}

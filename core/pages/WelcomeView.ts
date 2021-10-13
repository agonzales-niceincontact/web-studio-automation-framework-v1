import { ElementType } from "../enums/elementType";
import { UIElementStructure } from "../interfaces/ui-element-structure";
import { IView } from "./IView";

export class WelcomeView implements IView {
    

    //Wiki Locator Proofs
    search: UIElementStructure = {
        name: "Search",
        locator: '#search-form > fieldset > button > i',
        locatorType: ElementType.Button
    }

    wikiButton: UIElementStructure = {
        name: "Edit",
        locator: '#ca-edit > a',
        locatorType: ElementType.Button
    }

    searchText: UIElementStructure = {
        name: "SearchText",
        locator: 'input[name="search"]',
        locatorType: ElementType.TextField
    }

    editing: UIElementStructure = {
        name: "StartEdit",
        locator: 'body > div.oo-ui-windowManager.oo-ui-windowManager-modal.oo-ui-windowManager-floating > div > div.oo-ui-window-frame > div.oo-ui-window-content.oo-ui-dialog-content.oo-ui-messageDialog-content.oo-ui-window-content-setup.oo-ui-window-content-ready > div.oo-ui-window-foot > div > span.oo-ui-widget.oo-ui-widget-enabled.oo-ui-buttonElement.oo-ui-labelElement.oo-ui-flaggedElement-progressive.oo-ui-flaggedElement-primary.oo-ui-buttonWidget.oo-ui-actionWidget.oo-ui-buttonElement-framed > a',
        locatorType: ElementType.Button
    }
}




import { ElementType } from "../enums/element-type.enum";
import { ElementStructure } from "../interfaces/structures/element.structure";
import { Page } from "../interfaces/page";

export class WelcomePage implements Page {
    

    //Wiki Locator Proofs
    search: ElementStructure = {
        name: "Search",
        locator: '#search-form > fieldset > button > i',
        locatorType: ElementType.Button
    }

    wikiButton: ElementStructure = {
        name: "Edit",
        locator: '#ca-edit > a',
        locatorType: ElementType.Button
    }

    searchText: ElementStructure = {
        name: "SearchText",
        locator: 'input[name="search"]',
        locatorType: ElementType.TextField
    }

    editing: ElementStructure = {
        name: "StartEdit",
        locator: 'body > div.oo-ui-windowManager.oo-ui-windowManager-modal.oo-ui-windowManager-floating > div > div.oo-ui-window-frame > div.oo-ui-window-content.oo-ui-dialog-content.oo-ui-messageDialog-content.oo-ui-window-content-setup.oo-ui-window-content-ready > div.oo-ui-window-foot > div > span.oo-ui-widget.oo-ui-widget-enabled.oo-ui-buttonElement.oo-ui-labelElement.oo-ui-flaggedElement-progressive.oo-ui-flaggedElement-primary.oo-ui-buttonWidget.oo-ui-actionWidget.oo-ui-buttonElement-framed > a',
        locatorType: ElementType.Button
    }
}




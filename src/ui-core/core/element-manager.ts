import { ElementFactory } from "./element-factory";
import { ElementType } from "../enums/element-type.enum";
import { CXonePage } from "../pages/CXone/cxone.page";
import { LoginPage } from "../pages/CXone/login.page";
import { HomePage } from "../pages/home.page";
import { Page } from "../interfaces/page";
import { WelcomePage } from "../pages/welcome.page";
import { ElementStructure } from "../interfaces/structures/element.structure";

export class ElementManager {
    private _views: { [id: string] : Page; } = {} ;

    constructor() {
        this._views["WelcomeView"] = new WelcomePage();
        this._views["HomeView"] = new HomePage();
        this._views["CXOneView"] = new CXonePage();
        this._views["LoginView"] = new LoginPage();
    }

    private getView (viewName: string): Page {
        return this._views[viewName];
    }

    private getElementData(view: Page, locatorName: string): ElementStructure {
        let elem: ElementStructure = {
            name: "",
            locator: "",
            locatorType: ElementType.Default
        };

        const page = Object.create(view);
        Object.getOwnPropertyNames(view).forEach(element => {

            if (page[element].name === locatorName) {
                elem = page[element];                            
            }
            
        });               
        return elem;
    }    
    getElement(elementName: string, viewName: string): any {

        //Get View Object
        const view: Page = this.getView(viewName);

        //Get Element Object, Obtain the property        
        const element = this.getElementData(view, elementName);
        
        return  ElementFactory.getElementTypeObject(element);
    }
}

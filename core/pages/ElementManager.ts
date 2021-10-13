import { BaseElement } from "../elements/baseelement";
import { ElementFactory } from "../elements/elementfactory";
import { ElementType } from "../enums/elementType";
import { UIElementStructure } from "../interfaces/ui-element-structure";
import { HomeView } from "./homeview";
import { IView } from "./IView";
import { WelcomeView } from "./WelcomeView";

export class ElementManager {
    private _views: { [id: string] : IView; } = {} ;

    constructor() {
        this._views["WelcomeView"] = new WelcomeView();
        this._views["HomeView"] = new HomeView();
    }

    private getView (viewName: string): IView {
        return this._views[viewName];
    }

    private getElementData(view: IView, locatorName: string): UIElementStructure {
        let elem: UIElementStructure = {
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
    getElement(elementName: string, viewName: string): BaseElement {

        //Get View Object
        const view: IView = this.getView(viewName);

        //Get Element Object
        //Obtain the property
        const element = this.getElementData(view, elementName);
        // console.log("***************************");
        // console.log(element);
        // console.log("***************************");
        
        return ElementFactory.getElementTypeObject(element);
    }
}

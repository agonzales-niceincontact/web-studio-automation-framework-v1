import { ElementType } from "../enums/elementType";
import { UIElementStructure } from "../interfaces/ui-element-structure";
import { BaseElement } from "./baseelement";
import { Button } from "./button";
import { Dropdown } from "./dropdown";
import { TextField } from "./textfield";

export class  ElementFactory {

    static getElementTypeObject(element: UIElementStructure): BaseElement {        
        switch(element.locatorType) {
            case ElementType.Button:
                return new Button(element.name, element.locator);
                                              
            case ElementType.TextField:
                return new TextField(element.name, element.locator); 

            case ElementType.Dropdown:
                return new Dropdown(element.name, element.locator); 
                
            default: {
                // Element does not exists
                return new BaseElement(element.name, element.locator, element.locatorType);                                
            }
        }
    }
}

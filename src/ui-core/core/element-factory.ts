import { ElementType } from "../enums/element-type.enum";
import { BaseElement } from "../elements/base.element";
import { Button } from "../elements/button.element";
import { Dropdown } from "../elements/dropdown.element";
import { TextField } from "../elements/textfield.element";
import { ElementStructure } from "../interfaces/structures/element.structure";

export class  ElementFactory {

    static getElementTypeObject(element: ElementStructure): any {        
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

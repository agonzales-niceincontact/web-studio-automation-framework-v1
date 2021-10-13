import { ElementType } from "../enums/elementType";

export interface UIElementStructure {
    name: string;
    locator: string;
    locatorType: ElementType;
}
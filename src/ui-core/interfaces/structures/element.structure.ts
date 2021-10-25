import { ElementType } from "../../enums/element-type.enum";

export interface ElementStructure {
    name: string;
    locator: string;
    locatorType: ElementType;
}
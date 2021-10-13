import { IElement } from "./IElement";

export interface IDropdown extends IElement {
    select(option: string): void;
}
import { BaseElement } from "./base-element";

export interface DropdownActions extends BaseElement {
    select(option: string): void;
}
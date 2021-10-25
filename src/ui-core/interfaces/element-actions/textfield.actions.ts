import { BaseElement } from "./base-element";

export interface TextfieldActions extends BaseElement {
    setText(inputText: string): void;
    getText(): string;
}
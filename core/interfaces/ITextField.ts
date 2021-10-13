import { IElement } from "./IElement";

export interface ITextfield extends IElement {
    setText(inputText: string): void;
    getText(): string;
}
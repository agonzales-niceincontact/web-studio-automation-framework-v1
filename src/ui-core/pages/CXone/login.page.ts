import { ElementType } from "../../enums/element-type.enum"
import { ElementStructure } from "../../interfaces/structures/element.structure"
import { Page } from "../../interfaces/page"

export class LoginPage implements Page {
    
    username: ElementStructure = {
        name: "Username",
        locator: '#emailFieldNext',
        locatorType: ElementType.TextField
    }
    
    next: ElementStructure = {
        name: "Next",
        locator: '#nextBtn',
        locatorType: ElementType.Button
    }

    password: ElementStructure = {
        name: "Password",
        locator: '#mfaPassField',
        locatorType: ElementType.TextField
    }   
    
    signIn: ElementStructure = {
        name: "SignIn",
        locator: '#mfaLoginBtn',
        locatorType: ElementType.Button
    }     
}

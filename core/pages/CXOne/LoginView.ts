import { ElementType } from "../../enums/elementType"
import { UIElementStructure } from "../../interfaces/ui-element-structure"
import { IView } from "../IView"

export class LoginView implements IView {
    
    username: UIElementStructure = {
        name: "Username",
        locator: '#emailFieldNext',
        locatorType: ElementType.TextField
    }
    
    next: UIElementStructure = {
        name: "Next",
        locator: '#nextBtn',
        locatorType: ElementType.Button
    }

    password: UIElementStructure = {
        name: "Password",
        locator: '#mfaPassField',
        locatorType: ElementType.TextField
    }   
    
    signIn: UIElementStructure = {
        name: "SignIn",
        locator: '#mfaLoginBtn',
        locatorType: ElementType.Button
    }     
}

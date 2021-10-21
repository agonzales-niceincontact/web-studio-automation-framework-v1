import { DriverManager } from "../driver/DriverManager";

export class MouseActions {    
    
    
    static async doubleClick(element: string): Promise<void> {        
        await (await DriverManager.getInstance().getPage()).waitForSelector(element);  
        await (await DriverManager.getInstance().getPage()).click(element);
        await (await DriverManager.getInstance().getPage()).dblclick(element);                    
    }
}

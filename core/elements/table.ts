import { DriverManager } from "../driver/DriverManager";
import { ElementType } from "../enums/elementType";
import { BaseElement } from "./baseelement";
import { MouseActions } from "./mouseActions";
import { expect } from '@playwright/test';

export class Table extends BaseElement {   
    private cellElementByName = "//div[text() = '{CELL_NAME}']";   
    private cellElementByType = "//div[text() = '{CELL_NAME}']/preceding::div[1]/*/*/span[@id='mediatype-{CELL_TYPE}']";
    
    constructor(name: string, locator: string) {        
        super(name, locator, ElementType.Table);        
    }

    async navigateTo(options: string[]) {        
        for (const element of options) {
            const cell = await this.cellElementByName.replace("{CELL_NAME}", element.trim());            
            await MouseActions.doubleClick(cell);
        }
    }

    async validateCells(rows: any[]): Promise<Boolean> {        
        for (const row of rows) {            
            //Map the locators based on the row data            
            const elementTypeLocator = this.cellElementByType.replace("{CELL_NAME}", row.NAME).replace("{CELL_TYPE}", row.TYPE);
            const elementNameLocator = this.cellElementByName.replace("{CELL_NAME}", row.NAME);
            
            //Wait for Selector
            await (await DriverManager.getInstance().getPage()).waitForSelector(elementTypeLocator);

            const elementType = (await DriverManager.getInstance().getPage()).locator(elementTypeLocator);
            const elementName = (await DriverManager.getInstance().getPage()).locator(elementNameLocator);

            // Verify if both elements are Visible
            if (!(await elementName.isVisible() && await elementType.isVisible())){
                return false;
            }
        };
        return true;
    }
}

// import * as driver from 'playwright';
import { BrowserType, chromium, Page, Browser, firefox } from 'playwright';
import { IConfig } from '../interfaces/IConfig';
import { IDriverManager } from './IDriverManager';

let config: IConfig = require('../../playwright.config.json');

export class DriverManager implements IDriverManager{

    private _browser: BrowserType;
    private _browserDriver!: Promise<Browser>;
    private _page: Promise<Page> | Page;
    static instance: DriverManager;
    private _isBrowserClosed: boolean = false;
    

    private constructor ()
    {
        // Obtain Browser
        this._browser = this.getBrowser(config.browser);

        this._browserDriver = this.initBrowser(this._browser);
         
        this._page = this.initPage(this._browserDriver);

    }    

    private async initPage(browser: Promise<Browser>): Promise<Page> {
        const context = (await browser).newContext();  
        return (await context).newPage();
    }

    private async initBrowser(browser: BrowserType): Promise<Browser> {       
        const brow = await browser.launch({
            headless: config.playwrightInputs.headless,
            slowMo: config.playwrightInputs.slowMo     
        });
        return brow;
    }

    private getBrowser(browserInput: string): BrowserType{
        switch(browserInput) {
            case "chrome": {
                return chromium;
            }
            case "firefox": {
                return firefox;
            }
            default: {
                console.log("Invalid Browser Input")
                return chromium
            }
        }     
    }

    async Start(): Promise<void> {        

        if (this._isBrowserClosed) {
            this._browserDriver = this.initBrowser(this._browser);         
            this._page = this.initPage(this._browserDriver);
            this._isBrowserClosed = false;
        }        
        (await this.getPage()).goto(config.url); 
        // (await this.getPage()).setViewportSize({ width: 1920, height: 1080 });       
    }

    async Close(): Promise<void> {
        // (await this.getPage()).close();
        await (await this._browserDriver).close(); 
        this._isBrowserClosed = true;                              
    }

    async getPage(): Promise<Page> {        
        return await this._page;
    }

    async getBrowserVar() {
        return await this._browserDriver;
    }

    async waitForElement(element: string) {
        // await (await this.getPage()).waitForTimeout(5000);
        await (await this.getPage()).waitForSelector(element, {state:"visible"});
    }

    async switchWindow() {
       //Switch to window
        const [page1] = await Promise.all([
            await (await this.getPage()).waitForEvent('popup'),
          ]);
        await page1.waitForLoadState();
        this._page = page1;

        const currentUrl = (await this.getPage()).url();
        console.log("**************************** Switch to: " + currentUrl + "**************************** ");

    }

    static getInstance(): DriverManager {
        
        if(!DriverManager.instance) {
            DriverManager.instance = new DriverManager();                        
        }        
        return DriverManager.instance;
    }
}


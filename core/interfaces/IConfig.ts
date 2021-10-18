export interface IConfig {
    username: string,
    password: string,
    browser: string,
    base_api_url: string,
    url: string,
    playwrightInputs: IPlaywrightData
}

export interface IPlaywrightData {
    headless: boolean,
    slowMo: number
}

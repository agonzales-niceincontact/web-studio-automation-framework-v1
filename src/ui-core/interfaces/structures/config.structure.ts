export interface Config {
    username: string,
    password: string,
    browser: string,
    baseApiUrl: string,
    url: string,
    playwrightInputs: PlaywrightData
}

export interface PlaywrightData {
    headless: boolean,
    slowMo: number
}

export interface IConfig {
    username: string,
    password: string,
    browser: string,
    url: string,
    playwrightInputs: IPlaywrightData
}

export interface IPlaywrightData {
    headless: boolean,
    slowMo: number
}


// "username": "ariel.gonzales@do86.com",
//     "password": "LaLeLiLoLu.001",
//     "browser": "Chrome",
//     "url": "https://www.wikipedia.org/",
//     "playwrightInputs" : {
//         "headless": false,
//         "slowMo": 200
//     }
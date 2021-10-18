import { Axios } from "axios";
import { IConfig } from "../../core/interfaces/IConfig";
import { RequestManager } from "../core/RequestManager";
import { UtilsHandler } from "../utils/utils.handler";

let config: IConfig = require('../../playwright.config.json');

export class EnvironmentConfig {
    
    async initApiConfig() {   
        console.log("START API CONFIG");
        const jsonBody = await UtilsHandler.getJsonBody("post.getToken.json");
        jsonBody.username = config.username;
        jsonBody.password = config.password;
        const response = await RequestManager.Post("/InContactAuthorizationServer/Token",jsonBody);
        const bodyResponse = await JSON.parse(JSON.stringify(response.data));   
        RequestManager.setAxiosToken(bodyResponse.access_token);
    }

    async cleanToken(){
        RequestManager.cleanAxiosToken("basic aW50ZXJuYWxAaW5Db250YWN0IEluYy46UVVFNVFrTkdSRE0zUWpFME5FUkRSamczUlVORFJVTkRRakU0TlRrek5UYz0=");
    }
}

import axios, { AxiosResponse } from "axios";
import { Config } from "../../ui-core/interfaces/structures/config.structure";

let config: Config = require('../../../playwright.config.json');

axios.defaults.baseURL = `https://${config.baseApiUrl}`;
axios.defaults.headers.common['Authorization'] = "basic aW50ZXJuYWxAaW5Db250YWN0IEluYy46UVVFNVFrTkdSRE0zUWpFME5FUkRSamczUlVORFJVTkRRakU0TlRrek5UYz0=";

export class RequestManager {

    static setAxiosToken(token: string){        
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;   
    }

    static cleanAxiosToken(defaultToken: string) {
        axios.defaults.headers.common['Authorization'] = defaultToken; 
    }

    static async Get(url_input: string, parameters = {}): Promise<AxiosResponse>{
        const apiResponse = await axios.get(
            `${url_input}`, 
            {
                params: parameters
            });

        console.log(apiResponse.status);

        return apiResponse;
    }

    static async Post(url_input: string, bodyRequest: string): Promise<AxiosResponse>{
        const apiResponse = await axios.post(
            `${url_input}`, bodyRequest);
        
        console.log(apiResponse.status);

        return apiResponse;
    }

    static Put() {
    }

    static Delete() {
    }
}

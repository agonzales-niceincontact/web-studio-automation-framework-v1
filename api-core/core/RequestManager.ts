import axios, { AxiosResponse } from "axios";
import { IConfig } from "../../core/interfaces/IConfig";

let config: IConfig = require('../../playwright.config.json');
axios.defaults.baseURL = `https://${config.base_api_url}`;

export class RequestManager {

    static setAxiosToken(token: string){        
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;   
    }

    static cleanAxiosToken(defaultToken: string) {
        axios.defaults.headers.common['Authorization'] = defaultToken; 
    }

    static async Get(url_input: string): Promise<AxiosResponse>{
        const apiResponse = await axios.get(
            `${url_input}`);

        console.log(apiResponse.status);

        return apiResponse;
    }

    static async Post(url_input: string, bodyRequest: string): Promise<AxiosResponse>{
        const apiResponse = await axios.post(
            `${url_input}`, bodyRequest);
        
        console.log(apiResponse.status);

        return apiResponse;
    }

    static Put(){
    }

    static Delete(){

    }
}

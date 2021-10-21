export class UtilsHandler{

    static getJsonBody(jsonBody: string) {
        const fs = require('fs');    

        const jsonsPath = __dirname.replace("utils", "body-requests");
        console.log("-------------------------------------------");        
        console.log(jsonsPath);        

        const files = fs.readdirSync(jsonsPath);
        
        let jsonData: string = "";
        for (const file of files) {

            if(file === jsonBody){                
                jsonData = require(`${jsonsPath}/${file}`);
                break;
            }

            console.log(file);           
        }

        return JSON.parse(JSON.stringify(jsonData));
    }

    static isApiFieldExists(response: any ,tableInputs: any ,apiField: string): Boolean {
        const bodyResponse = JSON.parse(JSON.stringify(response.data));
        let isFounded = false;
        const fieldsList = bodyResponse[apiField];
    
        for (const input of tableInputs) {
            for (const field of fieldsList) {                
                if (field.hasOwnProperty(input[0]) && (field[input[0]] === input[1])) {                    
                    isFounded = true;
                    break;
                }
                isFounded = false;            
            }

            if(!isFounded) {
                console.log(`Field ${input[0]}: ${input[1]} was not found`);
                break;
            }
        }        
        return isFounded;
    }
}
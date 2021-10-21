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

    static ValidateApiFieldContentinResponse(response: any ,tableInputs: any ,apiField: string): Boolean {
        const bodyResponse = JSON.parse(JSON.stringify(response.data));
        let isFound = false;
        const fieldsList = bodyResponse[apiField];
    
        for (const row of tableInputs) {
            for (const field of fieldsList) {                
                if (field.hasOwnProperty(row[0]) && (field[row[0]] === row[1])) {                    
                    isFound = true;
                    break;
                }
                isFound = false;            
            }

            if(!isFound) {
                console.log(`Field ${row[0]}: ${row[1]} was not found`);
                break;
            }
        }        
        return isFound;
    }
}
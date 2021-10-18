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
}
// import { RequestManager } from "@api-requests/core/request-manager";
// import { Table } from "@uielement/elements/table.element";
import { Then } from "@cucumber/cucumber";
import { assert } from "chai";

import { RequestManager } from "../../../src/api-core/core/request-manager";
import { Table } from "../../../src/ui-core/elements/table.element";

Then('I should see in WebStudio the following values displayed', async function (data) {    
    const rows =  await data.hashes();    
    const table = new Table("WebStudioTable");
    const expectedValue = await table.validateCells(rows); 
    
    assert.isTrue(expectedValue);
  });

  Then('I compare the items displayed based by GET Script-Folders API with the following params', async function (dataTable) {
    const params = dataTable.rowsHash();

    //GET API Script-Folders
    const response = await RequestManager.Get("/InContactAPI/services/v21.0/script-folders", params);

    // Create a List of the Script information from API response
    const bodyResponse = JSON.parse(JSON.stringify(response.data));    
    const scripts = bodyResponse["scriptList"];

    let apiScripts = [];

    for (const script of scripts) {
        apiScripts.push({ 
            TYPE: (script["isFolder"]) ? "folder": script["mediaTypeName"],
            NAME: script["scriptName"].replace(/(?:(?:.+)\\)/g, "")
        });
    }

    //Validate items from API in UI
    const table = new Table("WebStudioTable");
    const expectedValue = await table.validateCells(apiScripts); 
    assert.isTrue(expectedValue);
  });
  
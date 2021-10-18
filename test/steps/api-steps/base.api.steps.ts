import { EnvironmentConfig } from "../../../api-core/config/EnvironmentConfig";

import { After, Before } from '@cucumber/cucumber';

const apiClient = new EnvironmentConfig();

Before({tags: '@ApiClient'}, async function () {
    console.log("Launch API");
    
    await apiClient.initApiConfig();    
});

After({tags: '@ApiClient'}, async function () {
  console.log("Reset API Token");  
  await apiClient.cleanToken();
});
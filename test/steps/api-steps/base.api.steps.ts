import { After, Before } from '@cucumber/cucumber';
import { EnvironmentConfig } from '../../../src/api-core/config/environment-config';
import 'module-alias/register';

const apiClient = new EnvironmentConfig();

Before({tags: '@ApiClient'}, async function () {
    console.log("Launch API");
    
    await apiClient.initApiConfig();    
});

After({tags: '@ApiClient'}, async function () {
  console.log("Reset API Token");  
  await apiClient.cleanToken();
});
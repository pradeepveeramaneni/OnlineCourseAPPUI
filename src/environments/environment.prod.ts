// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { EnvironmentConfiguration } from "../app/models/environment-configuration";


const serverUrl='https://smartcodingbypradeep-api-a7cugzc0f3bgaxhb.canadacentral-01.azurewebsites.net/api';


// The list of file replacements can be found in `angular.json`.
export const environment: EnvironmentConfiguration = {
  env_name: 'prod',
  production: true,
  apiUrl: serverUrl,
  apiEndpoints: {
    userProfile:'user-profiles'
  },
  adb2cConfig: {
    chatHubUrl: 'https://-api.azurewebsites.net/chathub', // Correct URL
    clientId: '777d393c-afd1-4ea7-b517-1c45cfd0a6db',
    readScopeUrl: 'https://smartcodingbypradeep.onmicrosoft.com/smartcodingbypradeep/prod/api/User.Read',
    writeScopeUrl: 'https://smartcodingbypradeep.onmicrosoft.com/smartcodingbypradeep/prod/api/User.Write',
    scopeUrls:[
      'https://smartcodingbypradeep.onmicrosoft.com/smartcodingbypradeep/prod/api/User.Write',
      'https://smartcodingbypradeep.onmicrosoft.com/smartcodingbypradeep/prod/api/User.Write'
    ],
    apiEndpointUrl: 'https://smartcodingbypradeep-api-a7cugzc0f3bgaxhb.canadacentral-01.azurewebsites.net/'
  },
  cacheTimeInMinutes: 30,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
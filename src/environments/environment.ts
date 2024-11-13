// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { EnvironmentConfiguration } from "../app/models/environment-configuration";


const serverUrl='http://localhost:5262/api';


// The list of file replacements can be found in `angular.json`.
export const environment: EnvironmentConfiguration = {
  env_name: 'dev',
  production: false,
  apiUrl: serverUrl,
  apiEndpoints: {
    userProfile:'user-profiles'
  },
  adb2cConfig: {
    chatHubUrl: 'http://localhost:5262/chathub', // Correct URL
    clientId: 'e3cd21c0-8225-4713-8909-9b8ba4124851',
    readScopeUrl: 'https://smartcodingbypradeep.onmicrosoft.com/smartcodingbypradeep/dev/api/User.Read',
    writeScopeUrl: 'https://smartcodingbypradeep.onmicrosoft.com/smartcodingbypradeep/dev/api/User.Write',
    scopeUrls:[
      'https://smartcodingbypradeep.onmicrosoft.com/smartcodingbypradeep/dev/api/User.Read',
      'https://smartcodingbypradeep.onmicrosoft.com/smartcodingbypradeep/dev/api/User.Write',
    ],
    apiEndpointUrl: 'http://localhost:5262/api',
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
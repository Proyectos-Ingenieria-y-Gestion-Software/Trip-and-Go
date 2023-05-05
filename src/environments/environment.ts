// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app"

export const environment = {
  firebaseConfig: {
    apiKey: "AIzaSyDZfdV310zlZ5uLJzEoZmQg21Se6qW8Vac",
    authDomain: "tripandgo-8fee3.firebaseapp.com",
    projectId: "tripandgo-8fee3",
    storageBucket: "tripandgo-8fee3.appspot.com",
    messagingSenderId: "49272995284",
    appId: "1:49272995284:web:479254baf184f193f12a41",
    measurementId: "G-FNN8HQ2509"
  },
  production: false
};

export const app = initializeApp(environment.firebaseConfig);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

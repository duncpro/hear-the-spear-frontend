// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAz7IGMWiAxJtQJu8XMU_llaxtTLkA16I4',
    authDomain: 'hear-the-spear-2-dev.firebaseapp.com',
    databaseURL: 'https://hear-the-spear-2-dev.firebaseio.com',
    projectId: 'hear-the-spear-2-dev',
    storageBucket: 'hear-the-spear-2-dev.appspot.com',
    messagingSenderId: '179026366542',
    appId: '1:179026366542:web:f80d7f306b5a804efc731f',
    measurementId: 'G-178D600RGZ'
  },
  spotify: {
    clientId: '9ddace80166c4531a3724ed47ecdfb15',
    playlists: {
      short_term: '2lgQ9zFbTaVIMjDAQwQoLI',
      medium_term: '05dK6mLGcg5rlnBeaHl9y8',
      long_term: '2v5lhKnVmmbI8FOg6Q2mkY'
    }
  },
  spotifyCredentialsReceiverUrl: 'https://us-central1-hear-the-spear-2-dev.cloudfunctions.net/spotifyTemporaryCredentialsReceiver'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

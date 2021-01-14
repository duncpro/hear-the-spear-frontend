export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyBySTBS2fhinwNiuQ1xVIxoLZhww9JvuhI',
    authDomain: 'hearthespear-172d0.firebaseapp.com',
    databaseURL: 'https://hearthespear-172d0.firebaseio.com',
    projectId: 'hearthespear-172d0',
    storageBucket: 'hearthespear-172d0.appspot.com',
    messagingSenderId: '819353713074',
    appId: '1:819353713074:web:9ee1e74cddf85d9fbe4cab',
    measurementId: 'G-DR02X3E0MJ'
  },
  spotify: {
    clientId: 'c245177cf29a45eeb01b3cd79f66c682',
    playlists: {
      short_term: '6azxF1Y3xXZFbpYSK1qZsL',
      medium_term: '1YoRtUTyyWipYMnH95sSUz',
      long_term: '1Rz2ATnTFGmPCB8YMOVrKf'
    }
  },
  spotifyCredentialsReceiverUrl: 'https://us-central1-hearthespear-172d0.cloudfunctions.net/spotifyTemporaryCredentialsReceiver'
};

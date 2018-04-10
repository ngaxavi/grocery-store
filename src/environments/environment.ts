// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBnTjC4EmYIZqwr0KXMiK73FQ1OMaMGZlQ',
    authDomain: 'grocery-store-fb4a8.firebaseapp.com',
    databaseURL: 'https://grocery-store-fb4a8.firebaseio.com',
    projectId: 'grocery-store-fb4a8',
    storageBucket: '',
    messagingSenderId: '750459237491'
  }
};

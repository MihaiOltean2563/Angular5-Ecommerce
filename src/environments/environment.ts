// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAckFgJNaiZd0E7I61JAfl_95SzMhh6vSk",
    authDomain: "angular4-ecommerce.firebaseapp.com",
    databaseURL: "https://angular4-ecommerce.firebaseio.com",
    projectId: "angular4-ecommerce",
    storageBucket: "",
    messagingSenderId: "520803999003"
  }
};

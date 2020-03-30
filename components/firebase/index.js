// Firebase App (the core Firebase SDK) is always required and must be listed first
var firebase = require('firebase');
// Add the Firebase products that you want to use
require('firebase/storage');

var firebaseConfig = {
  apiKey: "AIzaSyBcqgpvOmVLBrpQnCSPqXYk_1NHug31rN0",
    authDomain: "moneble-test.firebaseapp.com",
    databaseURL: "https://moneble-test.firebaseio.com",
    projectId: "moneble-test",
    storageBucket: "moneble-test.appspot.com",
    messagingSenderId: "892027982570",
    appId: "1:892027982570:web:9fb1f613949489ac9e3d93",
    measurementId: "G-L5BKFCKH7B"
};
console.log(firebase.apps.length);
console.log(firebase.apps);

if (!firebase.apps.length) {
  console.log('firebase initialized');
  console.log(firebaseConfig);
    firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase
console.log('setting storage');
var storage = firebase.storage();
console.log(storage);
export{
  storage, firebase as default
}

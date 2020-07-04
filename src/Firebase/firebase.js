import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

//how firebase identify we are using wallet tracker app

var firebaseConfig = {
    apiKey: "AIzaSyDUPnEeb72n45Wz_m9z5IbfH6r2nFJIAUA",
    authDomain: "wallet-tracker-466fd.firebaseapp.com",
    databaseURL: "https://wallet-tracker-466fd.firebaseio.com",
    projectId: "wallet-tracker-466fd",
    storageBucket: "wallet-tracker-466fd.appspot.com",
    messagingSenderId: "789075542651",
    appId: "1:789075542651:web:6faa0cd24d40c9a60798de"
  };
  firebase.initializeApp(firebaseConfig)

export var auth = firebase.auth();
export var firestore = firebase.firestore();
export var googleAuthProvider =new firebase.auth.GoogleAuthProvider();
//get server time on the spot.
export var serverTimestamp = ()=> firebase.firestore.FieldValue.serverTimestamp()
export default firebase;



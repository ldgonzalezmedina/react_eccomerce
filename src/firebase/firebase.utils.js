import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyDZuP3CoAj6jgqiUTCPwNTOopCN1Z1CVJE",
    authDomain: "crownclothing-f0502.firebaseapp.com",
    databaseURL: "https://crownclothing-f0502.firebaseio.com",
    projectId: "crownclothing-f0502",
    storageBucket: "crownclothing-f0502.appspot.com",
    messagingSenderId: "31098238918",
    appId: "1:31098238918:web:0e07a697a821725c9d24c7",
    measurementId: "G-PXYNL0DLYQ"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
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

export const createUserProfileDocument = async(userAuth, addiotionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if(!snapshot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addiotionalData
      })
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
}
export default firebase;
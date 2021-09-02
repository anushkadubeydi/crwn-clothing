import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

 const config ={
  apiKey: "AIzaSyD4rSNPsDy_BTQBiAEwOmFq2K-U3DLAQlA",
  authDomain: "crwn-db-693e0.firebaseapp.com",
  projectId: "crwn-db-693e0",
  storageBucket: "crwn-db-693e0.appspot.com",
  messagingSenderId: "348613405602",
  appId: "1:348613405602:web:a38ba2383c731824fb60fb",
  measurementId: "G-XMCX42NGQP"
};

 

  firebase.initializeApp(config);

  export const auth= firebase.auth();
  export const firestore= firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
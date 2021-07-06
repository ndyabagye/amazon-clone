// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD7f9miVhuUwH3NRYPcx5Nr0TJKcf_ZT6E",
    authDomain: "clone-66c2d.firebaseapp.com",
    projectId: "clone-66c2d",
    storageBucket: "clone-66c2d.appspot.com",
    messagingSenderId: "960685067820",
    appId: "1:960685067820:web:6a7db67fc9a969a0d5cb89",
    measurementId: "G-PST76091JC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
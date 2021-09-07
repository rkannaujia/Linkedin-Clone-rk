import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD5OKaeQZ8QQPD8B-Ivmu1BrRyNqce3WVk",
    authDomain: "linkedin-clone-rk-2df05.firebaseapp.com",
    projectId: "linkedin-clone-rk-2df05",
    storageBucket: "linkedin-clone-rk-2df05.appspot.com",
    messagingSenderId: "755881546806",
    appId: "1:755881546806:web:510287706cfc2ddb9bb497"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db , auth };
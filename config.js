import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyD4cPQIERBwG25E1NdnVRBnT3ljrtNq9vA",
    authDomain: "suiiiiiiiiiiiiiiiiiii.firebaseapp.com",
    projectId: "suiiiiiiiiiiiiiiiiiii",
    storageBucket: "suiiiiiiiiiiiiiiiiiii.appspot.com",
    messagingSenderId: "402956494288",
    appId: "1:402956494288:web:c96f4c1c231fff602e05d5"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();



import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBAtleCa7ARofFuEQkr3fZ6yOTnnapvv_U",
    authDomain: "apifirebase-79a08.firebaseapp.com",
    databaseURL: "https://apifirebase-79a08.firebaseio.com",
    projectId: "apifirebase-79a08",
    storageBucket: "apifirebase-79a08.appspot.com",
    messagingSenderId: "828824027463",
    appId: "1:828824027463:web:d71fe37de0f4ebda0dcc62",
    measurementId: "G-2TB1ENR3KL"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
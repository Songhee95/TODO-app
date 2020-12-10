import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBKu-0BPw2mqxTfwfUHxljlcl108M_Zti8",
    authDomain: "todo-app-29b3f.firebaseapp.com",
    projectId: "todo-app-29b3f",
    storageBucket: "todo-app-29b3f.appspot.com",
    messagingSenderId: "568180541303",
    appId: "1:568180541303:web:ff93e4ef19d2fbb2a7c372",
    measurementId: "G-MEXTRPE47D"
});
const db =firebaseApp.firestore();

export default db;
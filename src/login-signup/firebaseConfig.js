// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'; 
import 'firebase/compat/database'


const firebaseConfig = {
  apiKey: "AIzaSyBiGggAEQ4MXk54dHPKxNW_ihMH9uPHjI0",
  authDomain: "reactproject-28e62.firebaseapp.com",
  projectId: "reactproject-28e62",
  storageBucket: "reactproject-28e62.appspot.com",
  messagingSenderId: "228654618265",
  appId: "1:228654618265:web:045b0f4a57f6cb480d0a08"
};



const app = firebase.initializeApp(firebaseConfig);
export default app 
const database = app.database();

export { database };
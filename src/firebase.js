// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRBMtI81ZfzSTMm358e-HTW3Qdv4H-n24",
  authDomain: "covid-19-tracker-9633f.firebaseapp.com",
  projectId: "covid-19-tracker-9633f",
  storageBucket: "covid-19-tracker-9633f.appspot.com",
  messagingSenderId: "987698567378",
  appId: "1:987698567378:web:1a78d9121e4e1a8db2f50b",
  measurementId: "G-742WTP8NHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
const analytics = getAnalytics(app);
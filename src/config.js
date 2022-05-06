import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCADAyPTxOGE2bes-JOLtefz3RTaEPpTiY",
  authDomain: "sme-social-4d6db.firebaseapp.com",
  databaseURL: "https://sme-social-4d6db-default-rtdb.firebaseio.com",
  projectId: "sme-social-4d6db",
  storageBucket: "sme-social-4d6db.appspot.com",
  messagingSenderId: "460400359785",
  appId: "1:460400359785:web:e791e0495348bb029225f8",
  measurementId: "G-8LF80DLKLR"
});

export default firebaseConfig;
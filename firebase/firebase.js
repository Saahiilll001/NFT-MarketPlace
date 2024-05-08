// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBXMGnZL8HmY5tvrtx7_smfXrBCvSlgTAE",
  authDomain: "sample-afcfe.firebaseapp.com",
  projectId: "sample-afcfe",
  storageBucket: "sample-afcfe.appspot.com",
  messagingSenderId: "788149469555",
  appId: "1:788149469555:web:556d4fa465301519610506",
  measurementId: "G-GXDYVERN5M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};
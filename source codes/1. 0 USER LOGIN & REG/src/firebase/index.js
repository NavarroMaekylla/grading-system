// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtYKlnpsShyxmByKEP5Q6amfaNo0qgfAE",
  authDomain: "grading-system-reactjs.firebaseapp.com",
  projectId: "grading-system-reactjs",
  storageBucket: "grading-system-reactjs.appspot.com",
  messagingSenderId: "962518326815",
  appId: "1:962518326815:web:313595745dd07b0a20bf2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

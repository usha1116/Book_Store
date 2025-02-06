// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgDGHSApowEjPhZeQDCahDocMUCwp6lU4",
  authDomain: "mean-auth-cb617.firebaseapp.com",
  databaseURL: "https://mean-auth-cb617-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mean-auth-cb617",
  storageBucket: "mean-auth-cb617.appspot.com",
  messagingSenderId: "12461046933",
  appId: "1:12461046933:web:9823beea10fd5141d5af9c",
  measurementId: "G-XKTMSN53WV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);

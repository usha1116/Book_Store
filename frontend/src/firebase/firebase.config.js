// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB5Ku7KnDeGfv1UQFepIeQ00V4r7_mbXQ",
  authDomain: "book-store-7d02b.firebaseapp.com",
  projectId: "book-store-7d02b",
  storageBucket: "book-store-7d02b.firebasestorage.app",
  messagingSenderId: "267141259449",
  appId: "1:267141259449:web:8cdb1a0158334c8c2f7b68",
  measurementId: "G-BZKGWMLXK2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);

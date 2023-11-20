// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3iYZoZfjAmdydpvJdJ8ZIVXmSuW27GrA",
  authDomain: "fir-auth-games.firebaseapp.com",
  projectId: "fir-auth-games",
  storageBucket: "fir-auth-games.appspot.com",
  messagingSenderId: "596059416275",
  appId: "1:596059416275:web:fa0f8dce8a4139a61b5626"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


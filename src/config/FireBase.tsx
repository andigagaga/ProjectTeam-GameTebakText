// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACv5tsET7FkuG3dvIIM1vbuSK6yXoD8j8",
  authDomain: "my-game-f3276.firebaseapp.com",
  projectId: "my-game-f3276",
  storageBucket: "my-game-f3276.appspot.com",
  messagingSenderId: "1027751690229",
  appId: "1:1027751690229:web:27768aba32de6eadd0eabc",
  measurementId: "G-PZV6VHS2Z1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Contoh penggunaan modul Authentication
const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("User signed in:", user);
  } catch (error) {
    console.error("Google Sign-In Error:", error);
  }
};
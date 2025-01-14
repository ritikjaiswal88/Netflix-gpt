// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW_FGUfXRQGsWjFWSIyHspn5jSWVhfJeY",
  authDomain: "netflixgpt-62b6e.firebaseapp.com",
  projectId: "netflixgpt-62b6e",
  storageBucket: "netflixgpt-62b6e.firebasestorage.app",
  messagingSenderId: "1060813476321",
  appId: "1:1060813476321:web:f650c7f4ebc032a43e02a0",
  measurementId: "G-SQ5ZVDKDMZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATddI4ZGbt5MMzPImgVygumJGuTxHtO8c",
  authDomain: "netflix-gpt-814f2.firebaseapp.com",
  projectId: "netflix-gpt-814f2",
  storageBucket: "netflix-gpt-814f2.firebasestorage.app",
  messagingSenderId: "902987351785",
  appId: "1:902987351785:web:d4169e825cae1c1ede9278",
  measurementId: "G-NPZT5C4CBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
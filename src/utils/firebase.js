// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "test-app-e115e.firebaseapp.com",
  projectId: "test-app-e115e",
  storageBucket: "test-app-e115e.appspot.com",
  messagingSenderId: "248990040558",
  appId: "1:248990040558:web:91a5a733d680bcaf6d4eff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW7b7bUXKJEAJy0BuaOykQaxkI0Wcy3hU",
  authDomain: "gb-react-app-fe1b9.firebaseapp.com",
  projectId: "gb-react-app-fe1b9",
  storageBucket: "gb-react-app-fe1b9.appspot.com",
  messagingSenderId: "787357388716",
  appId: "1:787357388716:web:694c37f3cf582837acf409"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
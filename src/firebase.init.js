// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2egzzESrIR0oERfynmb8HpyfYdQC4U94",
  authDomain: "nature-f838c.firebaseapp.com",
  projectId: "nature-f838c",
  storageBucket: "nature-f838c.appspot.com",
  messagingSenderId: "787799034010",
  appId: "1:787799034010:web:31cc15a202234d58587723"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)

export default auth; 

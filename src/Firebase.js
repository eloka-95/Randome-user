// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaj_BJB4JiKsYcu36a1MC9GKXNUkUVlbA",
  authDomain: "random-user-9be67.firebaseapp.com",
  projectId: "random-user-9be67",
  storageBucket: "random-user-9be67.appspot.com",
  messagingSenderId: "630903220522",
  appId: "1:630903220522:web:49f26b153d76a846ab1653",
  measurementId: "G-5KQSTZEJPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn5ijgMW_s3itx_7NbiiE4ILru4xCj7Os",
  authDomain: "random-user-app-bfc1d.firebaseapp.com",
  projectId: "random-user-app-bfc1d",
  storageBucket: "random-user-app-bfc1d.appspot.com",
  messagingSenderId: "853685437623",
  appId: "1:853685437623:web:3f21163d052a1e67a53932"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqV4RDIDNXEOUWbRhIKRxIsi3LmOZOj6Q",
  authDomain: "react-coder-aab75.firebaseapp.com",
  projectId: "react-coder-aab75",
  storageBucket: "react-coder-aab75.appspot.com",
  messagingSenderId: "843424624106",
  appId: "1:843424624106:web:14fb46aed56f60261c9693",
  measurementId: "G-BK6C77JT05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
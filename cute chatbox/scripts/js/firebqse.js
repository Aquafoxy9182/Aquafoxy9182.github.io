// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKNV1Z0RvuQvYBIMGwOZ4mA4kKmgPPHbE",
  authDomain: "chatboxy-f1203.firebaseapp.com",
  projectId: "chatboxy-f1203",
  storageBucket: "chatboxy-f1203.firebasestorage.app",
  messagingSenderId: "986782225039",
  appId: "1:986782225039:web:4fac27a300f241d397d6fa",
  measurementId: "G-WV78Y2BBBP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
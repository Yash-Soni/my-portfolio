// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwYAEiVSfB2wtlpTn6CMm-HuQ9bGxU1uw",
  authDomain: "contacted-users-3c61b.firebaseapp.com",
  projectId: "contacted-users-3c61b",
  storageBucket: "contacted-users-3c61b.firebasestorage.app",
  messagingSenderId: "293706408653",
  appId: "1:293706408653:web:f5926742422b096432bf84",
  measurementId: "G-S1RBFHPMM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);

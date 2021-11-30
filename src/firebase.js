// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHcK-AyagzkdBvcG89eB6a1vMZBFEQC50",
  authDomain: "linked-in-clone-8ccf3.firebaseapp.com",
  projectId: "linked-in-clone-8ccf3",
  storageBucket: "linked-in-clone-8ccf3.appspot.com",
  messagingSenderId: "311958908913",
  appId: "1:311958908913:web:22b53b35d12f827ceb9e50",
  measurementId: "G-LPRZ66SC27",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };

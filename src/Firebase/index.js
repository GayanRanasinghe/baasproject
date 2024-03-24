// src/firebase/index.js
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getDatabase } from "firebase/database"; // Import the getDatabase function
import { LocalStorage } from 'quasar'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoPw1-wMAEP4mYYwJTfj3dIK5um14v5JQ",
  authDomain: "bassproject1-421c8.firebaseapp.com",
  projectId: "bassproject1-421c8",
  storageBucket: "bassproject1-421c8.appspot.com",
  messagingSenderId: "576538986740",
  appId: "1:576538986740:web:d9abdde05c9f5f7b41b6a1",
  measurementId: "G-GV1JBQEMYW"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();
export const rtdb = getDatabase(app); // Initialize the Realtime Database

onAuthStateChanged(auth, (user) => {
 if (user) {
  LocalStorage.set('user', user)
 } else {
  LocalStorage.remove('user')
 }
});
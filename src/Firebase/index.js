// src/firebase/index.js

import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getDatabase } from "firebase/database"; // Import the getDatabase function
import { LocalStorage } from 'quasar'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPtZZ5FLTO5NKUOcJKgr42WXnbdd2ntzM",
  authDomain: "testproject1-b4c4f.firebaseapp.com",
  projectId: "testproject1-b4c4f",
  storageBucket: "testproject1-b4c4f.appspot.com",
  messagingSenderId: "283783568329",
  appId: "1:283783568329:web:02bb9834d4f14dd81ae618",
  measurementId: "G-02PB0JQQK1"
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
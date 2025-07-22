// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhmci0PlwxSX3oqm_e9EaryYrtIi1j3Gs",
  authDomain: "aranyakatestimonials.firebaseapp.com",
  projectId: "aranyakatestimonials",
  storageBucket: "aranyakatestimonials.firebasestorage.app",
  messagingSenderId: "268723326656",
  appId: "1:268723326656:web:e5711ed7dc8a2e0c09a725",
  measurementId: "G-LYQM3B80PY",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export Firestore utils
export {
  db,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
};

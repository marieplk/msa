import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore' //Подключение хранилища

const firebaseConfig = {
  apiKey: "AIzaSyCZbbh8t3YCWcCpKL7rU2C7uMxa9GIOxqc",
  authDomain: "msa-msa-9b85a.firebaseapp.com",
  projectId: "msa-msa-9b85a",
  storageBucket: "msa-msa-9b85a.appspot.com",
  messagingSenderId: "827617978666",
  appId: "1:827617978666:web:6bf09e527dffbc4bba1653"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize FireStore
export const db = getFirestore(app);
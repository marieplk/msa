import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore' //Подключение хранилища

const firebaseConfig = {
  apiKey: "AIzaSyDPqMVl1YTkJZGI0IGrv9peMe93gRYcDlQ",
  authDomain: "plaksina-doc.firebaseapp.com",
  projectId: "plaksina-doc",
  storageBucket: "plaksina-doc.appspot.com",
  messagingSenderId: "23491871370",
  appId: "1:23491871370:web:c0dbd9f3d202d40a742373"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize FireStore
export const db = getFirestore(app);
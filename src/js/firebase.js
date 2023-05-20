// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxY8SrzMVoth1FCJS4TfqknU98Mkds9EI",
  authDomain: "viviendas-bd.firebaseapp.com",
  projectId: "viviendas-bd",
  storageBucket: "viviendas-bd.appspot.com",
  messagingSenderId: "241632038478",
  appId: "1:241632038478:web:13aa7db17eb677f6547d1f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
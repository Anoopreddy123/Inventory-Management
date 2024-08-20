// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuEEIGIgZhcSz7IXiRpQZEe_ymj3AaMGY",
  authDomain: "inventory-management-dd64d.firebaseapp.com",
  projectId: "inventory-management-dd64d",
  storageBucket: "inventory-management-dd64d.appspot.com",
  messagingSenderId: "970389016994",
  appId: "1:970389016994:web:832102253db48d374fa2fb",
  measurementId: "G-604PKBRSM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export {firestore};

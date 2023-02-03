
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: 'AIzaSyD0XfzG7hrXu4wVJ8pSYEmEsE87vMnZ1SY',
  authDomain: "studentinfo-f4d90.firebaseapp.com",
  projectId: "studentinfo-f4d90",
  storageBucket: "studentinfo-f4d90.appspot.com",
  messagingSenderId: "1016243674783",
  appId: "1:1016243674783:web:069768137946488f458caa"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth()
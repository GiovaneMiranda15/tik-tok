import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAt9naLVcFfFhOh6SgweR_SAXLYzDaaUYI",
  authDomain: "tiktok---jornada-5be69.firebaseapp.com",
  projectId: "tiktok---jornada-5be69",
  storageBucket: "tiktok---jornada-5be69.appspot.com",
  messagingSenderId: "49981628301",
  appId: "1:49981628301:web:188f0f396e1763e498a7c4",
  measurementId: "G-JYRXEK4YPH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
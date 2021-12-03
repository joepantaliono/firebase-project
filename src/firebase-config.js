import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBZfq-tExVWjTaAWTm0fWXw2lKufGyU13k",
    authDomain: "fir-project-c1ed4.firebaseapp.com",
    projectId: "fir-project-c1ed4",
    storageBucket: "fir-project-c1ed4.appspot.com",
    messagingSenderId: "426893867028",
    appId: "1:426893867028:web:e16b4058f457d457ce0f01",
    measurementId: "G-EWLQW1DQBC"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
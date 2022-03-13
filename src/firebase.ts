// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBalLJcOmzclkPpBLGGvBb91XY3p11QG_4",
  authDomain: "ts-basic-blog.firebaseapp.com",
  projectId: "ts-basic-blog",
  storageBucket: "ts-basic-blog.appspot.com",
  messagingSenderId: "104720650170",
  appId: "1:104720650170:web:64bcc79c4356c39b981783",
  measurementId: "G-QRK33S495V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };

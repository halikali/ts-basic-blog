// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };

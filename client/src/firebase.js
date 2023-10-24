// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-pff.firebaseapp.com",
  projectId: "mern-pff",
  storageBucket: "mern-pff.appspot.com",
  messagingSenderId: "912013624589",
  appId: "1:912013624589:web:75a4c951901228d8cddc44"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
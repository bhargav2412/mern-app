// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-b7c53.firebaseapp.com",
    projectId: "mern-blog-b7c53",
    storageBucket: "mern-blog-b7c53.appspot.com",
    messagingSenderId: "115969596325",
    appId: "1:115969596325:web:11615d0c73f53b3249664c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

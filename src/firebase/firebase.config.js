// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0HZH982PbkZaSxrasObIoN864U1SITiw",
    authDomain: "car-doc-prac-client.firebaseapp.com",
    projectId: "car-doc-prac-client",
    storageBucket: "car-doc-prac-client.appspot.com",
    messagingSenderId: "104874414777",
    appId: "1:104874414777:web:ca7bb23f1c8da69ae58168"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
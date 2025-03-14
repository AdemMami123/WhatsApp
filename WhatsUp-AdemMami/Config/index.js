// Import the functions you need from the SDKs you need
import app  from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZl4wVzPlccdbrslvoQcpsg08a1FYBrxI",
  authDomain: "whatsapp-2e41b.firebaseapp.com",
  projectId: "whatsapp-2e41b",
  storageBucket: "whatsapp-2e41b.firebasestorage.app",
  messagingSenderId: "46746549518",
  appId: "1:46746549518:web:fd7f0e1a49abd732686b5f",
  measurementId: "G-FK3HPG93FY"
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
export default firebase;
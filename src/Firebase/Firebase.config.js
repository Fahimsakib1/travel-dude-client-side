// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3ZDwuE4NSsWwZtRSDvF28F9uV2mMvQhk",
    authDomain: "hotel-dude.firebaseapp.com",
    projectId: "hotel-dude",
    storageBucket: "hotel-dude.appspot.com",
    messagingSenderId: "1011171916361",
    appId: "1:1011171916361:web:17569feb4460d7954d5d98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
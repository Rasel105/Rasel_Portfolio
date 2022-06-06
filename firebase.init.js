import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBEJ2TIeZWH3sIUmxwoVxA3SsufdmIv_Yg",
    authDomain: "azadul-islam-rasel.firebaseapp.com",
    projectId: "azadul-islam-rasel",
    storageBucket: "azadul-islam-rasel.appspot.com",
    messagingSenderId: "611490685315",
    appId: "1:611490685315:web:aeb186548f411a325316b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
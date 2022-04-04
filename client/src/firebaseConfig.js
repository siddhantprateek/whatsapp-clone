import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyCNtd_EcN63JlgZh0CXQKfvP9vgG5JzEyo",
    authDomain: "whatsapp-a976a.firebaseapp.com",
    projectId: "whatsapp-a976a",
    storageBucket: "whatsapp-a976a.appspot.com",
    messagingSenderId: "63422503796",
    appId: "1:63422503796:web:244c582ba02eb2d62e6a21",
    measurementId: "G-7QNYVQ7YBY"
};


const app = initializeApp(firebaseConfig);

export const { auth } = getAuth(app);
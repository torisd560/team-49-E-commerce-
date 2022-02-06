import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const initializeFirebaseAuth = () => {
    initializeApp(firebaseConfig);
}

export default initializeFirebaseAuth;
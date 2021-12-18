import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeFirebseAuth = () =>{
    initializeApp(firebaseConfig)
}

export default initializeFirebseAuth;
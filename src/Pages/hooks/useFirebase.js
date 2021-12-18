import { useState } from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import initializeFirebaseAuth from '../Login/Firebase/firebase.intit'

initializeFirebaseAuth()
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({})
  const [error, setError] = useState('')
  const auth = getAuth();


  const googleSign = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        console.log('result.user')

      }).catch((error) => {
        setError(error.message)
      });
  }

  return {
    googleSign,
    user,
    error
  }
};

export default useFirebase;
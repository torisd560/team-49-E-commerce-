import { useState } from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import initializeFirebaseAuth from '../Login/Firebase/firebase.intit'

initializeFirebaseAuth()


const useFirebase = () => {
  const [user, setUser] = useState({})
  const [error, setError] = useState('')

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();


  const googleSign = () => {
   
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        console.log(result)

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
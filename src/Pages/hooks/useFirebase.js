import { useEffect, useState } from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import initializeFirebaseAuth from '../Login/Firebase/firebase.intit'

initializeFirebaseAuth()


const useFirebase = () => {
  const [user, setUser] = useState({})
  const [error, setError] = useState('')

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  // google sign in functionality

  const googleSign = () => {

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        console.log(result)

      }).catch((error) => {
        setError(error.message)
      });
  }
  // user observer functionality

  useEffect(() => {
    const unsubcribed = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
      }
      else {
        setUser({})
      }
    })
    return () => unsubcribed;
  }, [auth])

  // Logout functionality

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({})
    })
      .catch((error) => {
        setError(error.message)
      });
  }


  return {
    googleSign,
    logOut,
    user,
    error
  }
};

export default useFirebase;
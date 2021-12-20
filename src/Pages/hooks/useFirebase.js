import { useEffect, useState } from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import initializeFirebaseAuth from '../Login/Firebase/firebase.intit'

initializeFirebaseAuth()


const useFirebase = () => {
  const [user, setUser] = useState({})
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  //================= google sign in functionality======================

  const googleSign = (navigate, location) => {
    setIsLoading(true)
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        navigate(location?.state?.from || "/")
        setError("")


      }).catch((error) => {
        setError(error.message)
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  // ====================user observer state functionality==================

  useEffect(() => {
    const unsubcribed = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
      }
      else {
        setUser({})
      }
      setIsLoading(false);
    })
    return () => unsubcribed;
  }, [auth])

  //============= Logout functionality=================

  const logOut = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {
        setUser({})
        setError("")
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => {
        setIsLoading(false);
      });
  }


  return {
    googleSign,
    logOut,
    user,
    error,
    isLoading
  }
};

export default useFirebase;
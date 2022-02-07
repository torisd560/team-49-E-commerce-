import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeFirebaseAuth from '../Firebase/firebase.init'


initializeFirebaseAuth()


const useFirebase = () => {

    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    
    const auth = getAuth();

    // ============ set user =================
    const setUserName = (name) => {
        console.log(name)
        updateProfile(auth.currentUser, { displayName: name })
    }

    // =========google sign in =================
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = (navigate) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                setUser(result.user);
                navigate('/attachment')
                setError("")

            }).catch((error) => {
                setError(error.message);

            }).finally(() => {
                setIsLoading(false);
            });

    }

    //==========Login with email pass=================
    const registerEmailPassword = (email, password, navigate) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                setUser(userCredential.user);
                navigate("/attachment")
                setError("")
            })
            .catch((error) => {
                setError(error.message);

            }).finally(() => {
                setIsLoading(false);
            });

        if (password.length < 6) {
            setError('Password must have at least 6 character')
            return;
        }

    }

    //=============login============

    const loginEmailPassword = (email, password, navigate) => {

        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                setUser(userCredential.user);
                navigate("/attachment")

            })
            .catch((error) => {

                setError(error.message);

            }).finally(() => {
                setIsLoading(false);
            });
    }

    //=========user observer ============
    useEffect(() => {
        setIsLoading(true)
        const unsubcribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });

        return () => unsubcribed;

    }, [auth])
    //============== Logout ============
    const logOut = () => {
        signOut(auth).then(() => {
            setUser('')
        }).catch((error) => {
            setError(error.message)
        });
    }

    return {
        user,
        error,
        isLoading,
        setUserName,
        googleSignIn,
        registerEmailPassword,
        loginEmailPassword,
        logOut
    }
};

export default useFirebase;
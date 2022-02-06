import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeFirebaseAuth from '../Firebase/firebase.init'


initializeFirebaseAuth()


const useFirebase = () => {
    
    const [user, setUser] = useState({})
    const [error, setError] = useState('')

    const auth = getAuth();


    // ============ set user =================
    const setUserName = (name) => {
        console.log(name)
        updateProfile(auth.currentUser, { displayName: name })
    }

    // =========google sign in =================
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                setUser(result.user);

            }).catch((error) => {
                setError(error.message);
            });

    }

    //==========Login with email pass=================
    const registerEmailPassword = (email, password) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                setUser(userCredential.user);

            })
            .catch((error) => setError(error.message));
        if (password.length < 6) {
            setError('Password must have at least 6 character')
            return;
        }

    }


    //=============login============

    const loginEmailPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                setUser(userCredential.user);

            })
            .catch((error) => {

                setError(error.message);
            });
    }

    //=========user observer ============
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {

            }
        });

    }, [])
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
        setUserName,
        googleSignIn,
        registerEmailPassword,
        loginEmailPassword,
        logOut


    }
};

export default useFirebase;
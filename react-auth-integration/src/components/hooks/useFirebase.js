import { useEffect, useState } from "react";
import initializeAuthentication from "../../firebase/firebase.Initialize";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(user);
            setUser(result.user);
        }).catch(error => {
            setError(error.message);
        })
    }

    const signOutGoogle = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })
    }

    useEffect( () => {
        onAuthStateChanged(auth, user => {
            if(user){
                console.log('Inside State', user);
                setUser(user);
            }
        })
    }, [])

    return {
        user,
        error,
        signInWithGoogle, 
        signOutGoogle
    }
}

export default useFirebase;
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth"
import app from "../Firebase/firabase.config";


const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);


    }

    const logInWithGitHub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser);
            setLoading(false);

        })

        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logInWithGoogle,
        logOut,
        logInWithGitHub
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
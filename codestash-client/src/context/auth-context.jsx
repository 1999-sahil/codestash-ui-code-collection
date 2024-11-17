import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

export const useAuth = () => {
    return useContext(AuthContext);
};

// AUTH-PROVIDER
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // register a new user
    const registerUser = async (email, password) => {
        return await createUserWithEmailAndPassword(auth, email, password);
    };

    // sign-in existing user
    const loginUser = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password);
    };

    // sign-in with google provider
    const signInWithGoogle = async () => {
        return await signInWithPopup(auth, googleProvider);
    };

    // log-out user
    const logout = () => {
        return signOut(auth);
    };

    // manage user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);

            if (user) {
                const { email, displayName, photoURL } = user;

                const userData = {
                    email,
                    username: displayName,
                    photo: photoURL
                };
            }
        });

        return () => unsubscribe();
    }, []);

    const value = {
        currentUser,
        loading,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
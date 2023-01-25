import { createContext, useContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import auth from '../firebase';


const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Google Sign In
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider);
    }


    // Logout
    const logOut = () => {
        signOut(auth);
    }


    useEffect(() => {

        // onAuthStateChanged listener is asynchronous and will trigger an initial state once a connection with Firebase 
        // has been established. Therefore it is important to setup an "initializing" state which blocks render of our main 
        // application whilst the connection is established
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            // onAuthStateChanged which allows you to subscribe to the users current authentication state, and receive an 
            // event whenever that state changes.
            // If the user returned within the handler is null the user is currently signed-out. If the user is signedin
            // user will contain all the data about the user like email adderess, user name, photo in the gmail account.
            setUser(currentUser);
        })


        // The onAuthStateChanged method also returns an unsubscriber function which allows us to stop listening 
        // for events whenever the hook is no longer in use.
        return () => {
            unsubscribe(); // // unsubscribe on unmount
        };

    }, [])

    return (
        <AuthContext.Provider value={{ googleSignIn, user, logOut, open, handleOpen, handleClose }}>
            {children}
        </AuthContext.Provider>
    )
}


export const UserAuth = () => {
    // With the hekp of useContext only we all the components can access the elements passed in the value of the 
    // AuthContext.provider.
    return useContext(AuthContext);
}


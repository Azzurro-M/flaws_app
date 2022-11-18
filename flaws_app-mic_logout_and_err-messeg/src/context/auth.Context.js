import {  createContext, useContext, useState, useEffect } from "react";
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "../firebase";

const AuthContext = createContext();

const useAuth = () => {
    return useContext (AuthContext);
}

const AuthProvider = ({ children }) => {

const [user, setUser] = useState({});

useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
        unsubscribe();
    };
   }, []);

const register = async ( {registerEmail, registerPassword}) => {
     await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
   }; 
  const login = async ( {loginEmail, loginPassword}) => {
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
   };
  const logout = async () => {
    await signOut(auth);
  };

    const exports = {
        user,
        register,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={exports}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
export {useAuth};



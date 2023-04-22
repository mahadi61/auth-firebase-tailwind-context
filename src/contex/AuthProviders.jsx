import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [currentUer, setCurrentUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // observe on auth state changed
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("auth state change", user);

      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const logOut = () => {
    signOut(auth);
  };

  const authInfo = {
    currentUer,
    createUser,
    singIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;

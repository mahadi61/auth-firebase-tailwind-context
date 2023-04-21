import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { createContext } from "react";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authInfo = {
    createUser,
    singIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;

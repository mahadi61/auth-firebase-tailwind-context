import {
  GoogleAuthProvider,
  getAuth,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import app from "../firebase/firebase.config";

const Login = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSingIn = (event) => {
    event.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        emailVerification(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const emailVerification = (user) => {
    sendEmailVerification(user)
      .then((result) => {
        console.log("Email send");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link to={""} className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <Link to={"/register"} className="label-text-alt link link-hover">
              New to Login Master? Please Register
            </Link>
            <div className="form-control mt-3">
              <button
                onClick={handleGoogleSingIn}
                className="btn btn-outline hover:btn-primary"
              >
                <img
                  className="w-5 mx-2"
                  alt="Google login"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svog.png"
                />
                Login with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

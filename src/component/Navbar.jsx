import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contex/AuthProviders";
import { space } from "postcss/lib/list";

const Navbar = () => {
  const { currentUer, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
  return (
    <div className="navbar bg-blue-700">
      <div className="navbar-start">
        <Link
          to="/home-page"
          className="btn btn-outline  normal-case text-white text-2xl"
        >
          Login Master
        </Link>
      </div>

      <div className="navbar-end">
        <Link to="/order" className="btn mx-2">
          Orders
        </Link>
        <Link to="/login" className="btn mx-2">
          Login
        </Link>
        <Link to={"/register"} className="btn">
          Register
        </Link>
        <h3 className="mx-2">
          {currentUer ? (
            <>
              <span className="text-2xl text-white">{currentUer.email}</span>
              <button onClick={handleLogOut} className="btn mx-2">
                Sing Out
              </button>
            </>
          ) : (
            <span className="text-2xl text-yellow-400">No User Sing in</span>
          )}
        </h3>
      </div>
    </div>
  );
};

export default Navbar;

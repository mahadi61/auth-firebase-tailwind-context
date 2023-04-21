import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
        <Link to="/login" className="btn mx-2">
          Login
        </Link>
        <Link to={"/register"} className="btn">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

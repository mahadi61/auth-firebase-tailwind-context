import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { AuthContext } from "../contex/AuthProviders";

const Home = () => {
  const user = useContext(AuthContext);
  return (
    <div>
      {/* {user && user.displayName} */}
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;

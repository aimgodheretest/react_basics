import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="bg-teal-700 text-2xl px-6 p-7 flex justify-between text-white">
        <div>
          <h2>My Logo</h2>
        </div>
        <div className="flex gap-5 ">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </>
  );
};

export default Nav;

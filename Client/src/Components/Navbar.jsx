import React from "react";
import { NavLink } from "react-router-dom";
import '../Components/Navbar.css'

const Navbar = () => {
  return (
    <div className="navcontainer">
      <div className="logos">
        <h3><NavLink to="/">BookReview</NavLink></h3>
      </div>
      <ul className="naav">
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/Login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/Register">Register</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

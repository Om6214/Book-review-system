import React from "react";
import { NavLink } from "react-router-dom";
import "../Components/Navbar.css";
import { useAuth } from "../storage/auth";

const Navbar = () => {
  const { isLoggedin } = useAuth();
  return (
    <div className="navcontainer">
      <div className="logos">
        <h3>
          <NavLink to="/">BookReview</NavLink>
        </h3>
      </div>
      <ul className="naav">
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/collection">collection</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/review">Write a review</NavLink>
        </li>
      </ul>
      <div className="btn">
        {isLoggedin ? (
          <>
            <NavLink to="/logout">Logout</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/Login">Sign in</NavLink>
            <NavLink to="/Register">Sign up</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
